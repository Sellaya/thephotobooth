import { z } from "zod";

export const bookingPayloadSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 7, {
      message: "Please enter a valid phone number.",
    }),
  eventDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please select an event date."),
  eventType: z.string().trim().min(1, "Please select an event type."),
  package: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

export type BookingPayload = z.infer<typeof bookingPayloadSchema>;
