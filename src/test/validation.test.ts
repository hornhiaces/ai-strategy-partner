import { describe, it, expect } from "vitest";
import {
  chatMessageSchema,
  contactFormSchema,
  checkRateLimit,
  sanitizeForDisplay,
} from "@/lib/validation";

describe("chatMessageSchema", () => {
  it("accepts valid messages", () => {
    const result = chatMessageSchema.safeParse({ content: "Hello, I need AI help" });
    expect(result.success).toBe(true);
  });

  it("rejects empty messages", () => {
    const result = chatMessageSchema.safeParse({ content: "" });
    expect(result.success).toBe(false);
  });

  it("rejects messages over 2000 chars", () => {
    const result = chatMessageSchema.safeParse({ content: "a".repeat(2001) });
    expect(result.success).toBe(false);
  });

  it("rejects script tags (XSS)", () => {
    const result = chatMessageSchema.safeParse({ content: '<script>alert("xss")</script>' });
    expect(result.success).toBe(false);
  });

  it("rejects javascript: protocol (XSS)", () => {
    const result = chatMessageSchema.safeParse({ content: 'javascript:alert(1)' });
    expect(result.success).toBe(false);
  });

  it("rejects event handler injection (XSS)", () => {
    const result = chatMessageSchema.safeParse({ content: '<img onerror=alert(1)>' });
    expect(result.success).toBe(false);
  });

  it("rejects iframe injection (XSS)", () => {
    const result = chatMessageSchema.safeParse({ content: '<iframe src="evil.com">' });
    expect(result.success).toBe(false);
  });

  it("rejects svg onload (XSS)", () => {
    const result = chatMessageSchema.safeParse({ content: '<svg onload=alert(1)>' });
    expect(result.success).toBe(false);
  });

  it("rejects data:text/html (XSS)", () => {
    const result = chatMessageSchema.safeParse({ content: 'data: text/html,<script>alert(1)</script>' });
    expect(result.success).toBe(false);
  });

  it("trims whitespace", () => {
    const result = chatMessageSchema.safeParse({ content: "  hello  " });
    expect(result.success).toBe(true);
  });
});

describe("contactFormSchema", () => {
  const validForm = {
    name: "John Doe",
    email: "john@example.com",
    message: "I need AI consulting",
  };

  it("accepts valid form data", () => {
    const result = contactFormSchema.safeParse(validForm);
    expect(result.success).toBe(true);
  });

  it("rejects missing name", () => {
    const result = contactFormSchema.safeParse({ ...validForm, name: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({ ...validForm, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects XSS in name", () => {
    const result = contactFormSchema.safeParse({
      ...validForm,
      name: '<script>alert("xss")</script>',
    });
    expect(result.success).toBe(false);
  });

  it("rejects XSS in message", () => {
    const result = contactFormSchema.safeParse({
      ...validForm,
      message: '<iframe src="evil.com"></iframe>',
    });
    expect(result.success).toBe(false);
  });

  it("rejects name over 100 chars", () => {
    const result = contactFormSchema.safeParse({ ...validForm, name: "a".repeat(101) });
    expect(result.success).toBe(false);
  });

  it("rejects email over 255 chars", () => {
    const result = contactFormSchema.safeParse({
      ...validForm,
      email: "a".repeat(250) + "@b.com",
    });
    expect(result.success).toBe(false);
  });
});

describe("checkRateLimit", () => {
  it("allows requests within limit", () => {
    const result = checkRateLimit("test-key-1", 5, 60000);
    expect(result.allowed).toBe(true);
  });

  it("blocks requests exceeding limit", () => {
    const key = "test-key-block";
    for (let i = 0; i < 3; i++) {
      checkRateLimit(key, 3, 60000);
    }
    const result = checkRateLimit(key, 3, 60000);
    expect(result.allowed).toBe(false);
    expect(result.retryAfter).toBeDefined();
    expect(result.retryAfter).toBeGreaterThan(0);
  });

  it("tracks count correctly within window", () => {
    const key = "test-key-count";
    const r1 = checkRateLimit(key, 5, 60000);
    expect(r1.allowed).toBe(true);
    const r2 = checkRateLimit(key, 5, 60000);
    expect(r2.allowed).toBe(true);
    const r3 = checkRateLimit(key, 5, 60000);
    expect(r3.allowed).toBe(true);
  });
});

describe("sanitizeForDisplay", () => {
  it("escapes HTML entities", () => {
    expect(sanitizeForDisplay("<script>")).toBe("&lt;script&gt;");
  });

  it("escapes ampersands", () => {
    expect(sanitizeForDisplay("A & B")).toBe("A &amp; B");
  });

  it("escapes quotes", () => {
    expect(sanitizeForDisplay('"hello"')).toBe("&quot;hello&quot;");
  });

  it("escapes single quotes", () => {
    expect(sanitizeForDisplay("it's")).toBe("it&#039;s");
  });

  it("handles complex XSS payloads", () => {
    const payload = '<img src=x onerror="alert(1)">';
    const sanitized = sanitizeForDisplay(payload);
    expect(sanitized).not.toContain("<");
    expect(sanitized).not.toContain(">");
    expect(sanitized).toContain("&lt;");
    expect(sanitized).toContain("&gt;");
  });
});
