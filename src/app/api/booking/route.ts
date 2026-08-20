import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { bookingPayloadSchema } from "@/lib/booking";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function POST(request: Request) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const to = process.env.BOOKING_TO || user;

  if (!host || !user || !pass || !from || !to) {
    return NextResponse.json(
      { error: "Booking email is not configured yet." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = bookingPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Please check the form and try again." },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const minDate = yesterday.toISOString().slice(0, 10);
  if (data.eventDate < minDate) {
    return NextResponse.json(
      { error: "Please choose a date in the future." },
      { status: 400 }
    );
  }

  const eventDate = formatDate(data.eventDate);
  const booth = data.package?.trim() || "No preference";
  const notes = data.message?.trim() || "—";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const rows = [
    ["Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Event date", eventDate],
    ["Event type", data.eventType],
    ["Booth", booth],
    ["Notes", notes],
  ]
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 0;color:#7a7168;width:140px;vertical-align:top;">${label}</td>
          <td style="padding:10px 0;color:#14110d;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  try {
    await transporter.sendMail({
      from: `"The Photo Booth Company" <${from}>`,
      to,
      replyTo: data.email,
      subject: `New booking request — ${data.fullName} (${data.eventType})`,
      text: [
        "New booking request",
        "",
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Event date: ${eventDate}`,
        `Event type: ${data.eventType}`,
        `Booth: ${booth}`,
        `Notes: ${notes}`,
      ].join("\n"),
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#fbf9f4;color:#14110d;">
          <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8a7550;">Booking request</p>
          <h1 style="margin:0 0 20px;font-size:22px;font-weight:500;">${escapeHtml(data.fullName)} is checking availability</h1>
          <table style="width:100%;border-collapse:collapse;font-size:15px;">${rows}</table>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"The Photo Booth Company" <${from}>`,
      to: data.email,
      replyTo: to,
      subject: "We received your booking request",
      text: `Hi ${data.fullName},\n\nThanks for requesting a booth for ${eventDate}. We'll confirm availability within 24 hours.\n\nThe Photo Booth Company`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#fbf9f4;color:#14110d;">
          <p style="margin:0 0 16px;">Hi ${escapeHtml(data.fullName)},</p>
          <p style="margin:0 0 16px;line-height:1.6;">Thanks for requesting a booth for <strong>${escapeHtml(eventDate)}</strong>. We'll confirm availability within 24 hours.</p>
          <p style="margin:0;color:#7a7168;">The Photo Booth Company</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Booking email failed:", error);
    return NextResponse.json(
      { error: "We couldn't send your request. Please call or WhatsApp us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
