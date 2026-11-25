
import { z } from "zod";

const indianPhoneRegex = /^[6-9]\d{9}$/;

export const residentRegistrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),

  phone: z
    .string()
    .trim()
    .regex(indianPhoneRegex, "Enter a valid 10-digit Indian mobile number"),

  email: z
    .union([
      z.string().trim().email("Enter a valid email address"),
      z.literal(""),
    ])
    .optional()
    .transform((value) => value || null),

  roomNumber: z
    .string()
    .trim()
    .regex(/^[1-5]0[1-8]$/, "Enter a valid room number"),

  bedNumber: z
    .number()
    .int("Bed number must be a whole number")
    .min(1, "Bed number must be at least 1")
    .max(3, "Bed number cannot exceed 3"),

  checkInDate: z
    .string()
    .datetime({ offset: true })
    .optional()
    .transform((value) => value ? new Date(value) : new Date()),
}).strict();
