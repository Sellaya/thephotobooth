"use client";

import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DatePicker, toLocalIso } from "@/components/ui/DatePicker";
import {
  bookingHighlights,
  eventTypeOptions,
  packageOptions,
  siteConfig,
} from "@/lib/data";
import { bookingPayloadSchema, type BookingPayload } from "@/lib/booking";
import { cn } from "@/lib/utils";

const todayIso = toLocalIso();

const bookingSchema = bookingPayloadSchema.superRefine((data, ctx) => {
  if (data.eventDate < todayIso) {
    ctx.addIssue({
      code: "custom",
      path: ["eventDate"],
      message: "Please choose a date in the future.",
    });
  }
});

type BookingFormValues = BookingPayload;

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      package: "",
      message: "",
    },
  });

  async function onSubmit(data: BookingFormValues) {
    setSubmitError(null);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!response.ok) {
        setSubmitError(
          result.error || "Something went wrong. Please try again or call us."
        );
        return;
      }
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "We couldn't send your request. Please try again, or call or WhatsApp us."
      );
    }
  }

  return (
    <section id="booking" className="bg-paper-50 py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Reserve Your Date" title="Request a booking" />

        <Reveal className="mt-10 overflow-hidden rounded-2xl border border-ink-300/25 bg-white sm:mt-16 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-w-0 flex-col justify-center gap-5 rounded-t-2xl bg-ink-950 p-6 text-paper-50 sm:p-10 lg:rounded-l-2xl lg:rounded-tr-none lg:p-12">
            <h3 className="font-display text-2xl font-medium sm:text-3xl">
              Let&apos;s capture the night
            </h3>
            <p className="text-ink-300">
              Fill out the form and our team will confirm availability within
              24 hours.
            </p>
            <ul className="mt-2 flex flex-col gap-3">
              {bookingHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="min-w-0 text-ink-300">{highlight}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">
              Prefer to talk it through?{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold whitespace-nowrap text-paper-50 transition-colors hover:text-gold-400"
              >
                Call
              </a>{" "}
              or{" "}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold whitespace-nowrap text-paper-50 transition-colors hover:text-gold-400"
              >
                WhatsApp
              </a>{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold whitespace-nowrap text-paper-50 transition-colors hover:text-gold-400"
              >
                {siteConfig.phone}
              </a>
              , email{" "}
              <a
                href={siteConfig.emailHref}
                className="font-semibold whitespace-nowrap text-paper-50 transition-colors hover:text-gold-400"
              >
                {siteConfig.email}
              </a>
              , or message us on Instagram{" "}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold whitespace-nowrap text-paper-50 transition-colors hover:text-gold-400"
              >
                {siteConfig.instagramHandle}
              </a>
              .
            </p>
          </div>

          <div className="min-w-0 overflow-visible p-6 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 p-8 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-sage-600" />
                  <h4 className="font-display text-xl font-medium text-ink-950">
                    Thanks! Your request has been received.
                  </h4>
                  <p className="max-w-sm text-sm text-ink-700">
                    We&apos;ll confirm availability within 24 hours. Check your
                    inbox for a copy of this request.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Submit another request
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      required
                      error={errors.fullName?.message}
                    >
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        className={inputClass(!!errors.fullName)}
                        {...register("fullName")}
                      />
                    </Field>
                    <Field label="Email" required error={errors.email?.message}>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        className={inputClass(!!errors.email)}
                        {...register("email")}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone" required error={errors.phone?.message}>
                      <input
                        type="tel"
                        placeholder={siteConfig.phone}
                        className={inputClass(!!errors.phone)}
                        {...register("phone")}
                      />
                    </Field>
                    <Field
                      label="Event Date"
                      required
                      error={errors.eventDate?.message}
                    >
                      <Controller
                        name="eventDate"
                        control={control}
                        render={({ field }) => (
                          <DatePicker
                            value={field.value}
                            onChange={field.onChange}
                            min={todayIso}
                            placeholder="Select a date"
                            invalid={!!errors.eventDate}
                          />
                        )}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Event Type"
                      required
                      error={errors.eventType?.message}
                    >
                      <Controller
                        name="eventType"
                        control={control}
                        render={({ field }) => (
                          <SoftSelect
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Select one…"
                            invalid={!!errors.eventType}
                            options={eventTypeOptions.map((opt) => ({
                              value: opt,
                              label: opt,
                            }))}
                          />
                        )}
                      />
                    </Field>
                    <Field label="Product Interest">
                      <Controller
                        name="package"
                        control={control}
                        render={({ field }) => (
                          <SoftSelect
                            value={field.value ?? ""}
                            onChange={field.onChange}
                            placeholder="No preference"
                            options={[
                              { value: "", label: "No preference" },
                              ...packageOptions.map((opt) => ({
                                value: opt,
                                label: opt,
                              })),
                            ]}
                          />
                        )}
                      />
                    </Field>
                  </div>

                  <Field label="Tell Us About Your Event">
                    <textarea
                      placeholder="Guest count, venue, theme, timing…"
                      rows={4}
                      className={cn(inputClass(false), "min-h-[7.5rem] resize-y")}
                      {...register("message")}
                    />
                  </Field>

                  <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs text-ink-500">
                      We&apos;ll reply within 24 hours. No spam, ever.
                    </span>
                    <Button
                      type="submit"
                      variant="dark"
                      withArrow
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                  </div>
                  {submitError ? (
                    <p className="text-sm text-red-600" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "w-full rounded-xl border bg-paper-50 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 placeholder:text-ink-500 hover:border-ink-300 focus:border-gold-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(178,154,106,0.16)]",
    invalid ? "border-red-400 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.18)]" : "border-ink-300/40"
  );
}

function SoftSelect({
  value,
  onChange,
  options,
  placeholder,
  invalid,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          inputClass(!!invalid),
          "flex w-full cursor-pointer items-center justify-between gap-3 text-left"
        )}
      >
        <span className={cn(!selected || selected.value === "" ? "text-ink-500" : "text-ink-900")}>
          {selected?.label || placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-ink-500 transition-transform duration-300",
            open && "rotate-180 text-gold-600"
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-30 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-ink-300/25 bg-white p-1.5 shadow-soft-lg"
          >
            {options.map((opt) => {
              const isActive = opt.value === value;
              return (
                <li key={opt.label}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                      isActive
                        ? "bg-gold-500/15 text-ink-950"
                        : "text-ink-800 hover:bg-paper-100"
                    )}
                  >
                    {opt.label}
                    {isActive ? <Check className="h-3.5 w-3.5 text-gold-600" /> : null}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink-800">
        {label} {required ? <span className="text-gold-600">*</span> : null}
      </label>
      {children}
      <AnimatePresence>
        {error ? (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 text-xs text-red-500"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
