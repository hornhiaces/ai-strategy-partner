import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface InquiryRequest {
  type: "question" | "consultation";
  name: string;
  email: string;
  message: string;
  context?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { type, name, email, message, context }: InquiryRequest = await req.json();

    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, and message are required");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email address");
    }

    const subjectPrefix = type === "consultation" ? "Consultation Request" : "Question";
    const subject = `${subjectPrefix} from ${name}`;

    const htmlContent = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
          ${type === "consultation" ? "📅 New Consultation Request" : "💬 New Question"}
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 8px 0;"><strong>From:</strong> ${name}</p>
          <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 0;"><strong>Type:</strong> ${type === "consultation" ? "Consultation Request" : "General Question"}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #374151; margin-bottom: 12px;">Message:</h3>
          <div style="background: #fff; border: 1px solid #e5e7eb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
${message}
          </div>
        </div>
        
        ${context ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #374151; margin-bottom: 12px;">Chat Context:</h3>
          <div style="background: #fefce8; border: 1px solid #fde047; padding: 16px; border-radius: 8px; font-size: 14px; white-space: pre-wrap;">
${context}
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
        to: ["larrysalinas@mac.com"],
        subject: subject,
        html: htmlContent,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error("Failed to send email");
    }

    const result = await emailResponse.json();
    console.log("Inquiry email sent successfully:", result);

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-inquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
