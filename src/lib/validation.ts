import { z } from "zod";

// Comprehensive XSS pattern detection
const XSS_PATTERN = /<script|<\/script|javascript:|on\w+\s*=|<iframe|<object|<embed|<form|<img\s[^>]*onerror|<svg\s[^>]*onload|data:\s*text\/html|vbscript:|expression\s*\(/i;

const noXSS = (fieldName: string) =>
  z.string().refine(
    (val) => !XSS_PATTERN.test(val),
    `Invalid characters detected in ${fieldName}`
  );

// Chatbot message validation
export const chatMessageSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Message cannot be empty")
    .max(2000, "Message must be less than 2000 characters")
    .pipe(noXSS("message")),
});

// Contact form validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .pipe(noXSS("name")),
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
    .pipe(noXSS("message")),
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
