import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const ALLOWED_ORIGINS = [
  "https://salinas-ai-consulting.com",
  "https://www.salinas-ai-consulting.com",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

interface InquiryRequest {
  type: "question" | "consultation";
  name: string;
  email: string;
  message: string;
  context?: string;
}

// Server-side rate limiting (simple in-memory - resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = { maxRequests: 5, windowMs: 300000 }; // 5 requests per 5 minutes

// Periodic cleanup to prevent memory leak from stale rate limit entries
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 120000);

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return { allowed: true };
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    return { allowed: false, retryAfter: Math.ceil((record.resetTime - now) / 1000) };
  }

  record.count++;
  return { allowed: true };
}

// Input validation
function validateInput(data: unknown): { valid: boolean; error?: string; data?: InquiryRequest } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const { type, name, email, message, context } = data as Record<string, unknown>;

  // Validate type
  if (type !== "question" && type !== "consultation") {
    return { valid: false, error: "Invalid inquiry type" };
  }

  // Validate name
  if (typeof name !== "string" || name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }
  if (name.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }

  // Validate email
  if (typeof email !== "string") {
    return { valid: false, error: "Email is required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Invalid email address" };
  }
  if (email.length > 255) {
    return { valid: false, error: "Email must be less than 255 characters" };
  }

  // Validate message
  if (typeof message !== "string" || message.trim().length === 0) {
    return { valid: false, error: "Message is required" };
  }
  if (message.length > 2000) {
    return { valid: false, error: "Message must be less than 2000 characters" };
  }

  // Validate context (optional)
  if (context !== undefined && typeof context !== "string") {
    return { valid: false, error: "Invalid context format" };
  }
  if (typeof context === "string" && context.length > 10000) {
    return { valid: false, error: "Context too long" };
  }

  // Check for potential injection patterns
  const dangerousPatterns = /<script|javascript:|on\w+=/i;
  if (dangerousPatterns.test(name) || dangerousPatterns.test(message)) {
    return { valid: false, error: "Invalid characters detected" };
  }

  return {
    valid: true,
    data: {
      type: type as "question" | "consultation",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      context: context ? String(context).slice(0, 10000) : undefined,
    },
  };
}

// Escape HTML for email content
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    // Rate limiting based on client IP
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
                     req.headers.get("x-real-ip") || "unknown";
    const rateCheck = checkRateLimit(clientIP);
    if (!rateCheck.allowed) {
      return new Response(
        JSON.stringify({ error: `Too many requests. Try again in ${rateCheck.retryAfter} seconds.` }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders, "Retry-After": String(rateCheck.retryAfter) } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("Email service not configured");
    }

    // Enforce request body size limit (20KB)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 20480) {
      return new Response(
        JSON.stringify({ error: "Request body too large" }),
        { status: 413, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Parse and validate input
    let rawData: unknown;
    try {
      rawData = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const validation = validateInput(rawData);
    if (!validation.valid || !validation.data) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { type, name, email, message, context } = validation.data;

    const subjectPrefix = type === "consultation" ? "Consultation Request" : "Question";
    const subject = `${subjectPrefix} from ${escapeHtml(name)}`;

    const htmlContent = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
          ${type === "consultation" ? "New Consultation Request" : "New Question"}
        </h2>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 8px 0;"><strong>From:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p style="margin: 0;"><strong>Type:</strong> ${type === "consultation" ? "Consultation Request" : "General Question"}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #374151; margin-bottom: 12px;">Message:</h3>
          <div style="background: #fff; border: 1px solid #e5e7eb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
${escapeHtml(message)}
          </div>
        </div>

        ${context ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #374151; margin-bottom: 12px;">Chat Context:</h3>
          <div style="background: #fefce8; border: 1px solid #fde047; padding: 16px; border-radius: 8px; font-size: 14px; white-space: pre-wrap;">
${escapeHtml(context)}
          </div>
        </div>
        ` : ''}

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
        <p style="color: #6b7280; font-size: 12px;">
          This message was sent via the AI chatbot on your website.
        </p>
      </div>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AI Advisor Chatbot <onboarding@resend.dev>",
        to: ["salinasaiconsulting@outlook.com"],
        subject: subject,
        html: htmlContent,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      console.error("Resend API error:", emailResponse.status);
      throw new Error("Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An error occurred";
    console.error("Error in send-inquiry function:", message);
    return new Response(
      JSON.stringify({ error: "Unable to process your request. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
