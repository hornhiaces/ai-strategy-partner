import { z } from "zod";

// Chatbot message validation
export const chatMessageSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Message cannot be empty")
    .max(2000, "Message must be less than 2000 characters")
    .refine(
      (val) => !/<script|javascript:|on\w+=/i.test(val),
      "Invalid characters detected"
    ),
});

// Contact form validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .refine(
      (val) => !/<script|javascript:|on\w+=/i.test(val),
      "Invalid characters detected"
    ),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters")
    .refine(
      (val) => !/<script|javascript:|on\w+=/i.test(val),
      "Invalid characters detected"
    ),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;

// Simple in-memory rate limiter for client-side protection
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  key: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (record.count >= maxRequests) {
    return {
      allowed: false,
      retryAfter: Math.ceil((record.resetTime - now) / 1000),
    };
  }

  record.count++;
  return { allowed: true };
}

// Sanitize text for display (escape HTML entities)
export function sanitizeForDisplay(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
