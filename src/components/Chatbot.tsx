import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, User, Bot, Mail, ArrowLeft, ShieldAlert, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { chatMessageSchema, contactFormSchema, checkRateLimit } from "@/lib/validation";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
const INQUIRY_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-inquiry`;

// Rate limit: 20 messages per minute for chat, 5 form submissions per 5 minutes
const CHAT_RATE_LIMIT = { max: 20, window: 60000 };
const FORM_RATE_LIMIT = { max: 5, window: 300000 };

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Larry's AI assistant. I can answer questions about AI advisory services or help you schedule a free consultation. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const streamChat = async (userMessage: string) => {
    // Validate input
    const validation = chatMessageSchema.safeParse({ content: userMessage });
    if (!validation.success) {
      setInputError(validation.error.errors[0]?.message || "Invalid input");
      return;
    }

    // Check rate limit
    const rateCheck = checkRateLimit("chat", CHAT_RATE_LIMIT.max, CHAT_RATE_LIMIT.window);
    if (!rateCheck.allowed) {
      toast({
        title: "Slow down",
        description: `Please wait ${rateCheck.retryAfter} seconds before sending another message.`,
        variant: "destructive",
      });
      return;
    }

    setInputError("");
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      if (!resp.body) throw new Error("No response body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantContent = "";

      // Add empty assistant message
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: assistantContent };
                return updated;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      toast({
        title: "Connection issue",
        description: "Unable to connect. Please try again.",
        variant: "destructive",
      });
      // Remove the failed assistant message
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setInput("");
    await streamChat(trimmed);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    // Validate form data
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const errors: Partial<FormData> = {};
      validation.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        if (field) errors[field] = err.message;
      });
      setFormErrors(errors);
      return;
    }

    // Check rate limit
    const rateCheck = checkRateLimit("form", FORM_RATE_LIMIT.max, FORM_RATE_LIMIT.window);
    if (!rateCheck.allowed) {
      toast({
        title: "Too many submissions",
        description: `Please wait ${rateCheck.retryAfter} seconds before submitting again.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const chatContext = messages
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n");

      const resp = await fetch(INQUIRY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          type: "consultation",
          name: validation.data.name,
          email: validation.data.email,
          message: validation.data.message,
          context: chatContext,
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Larry will get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
      setShowForm(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thanks for reaching out! Your message has been sent to Larry. He'll get back to you shortly.",
        },
      ]);
    } catch {
      toast({
        title: "Failed to send",
        description: "Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-100px)] bg-background border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              {showForm && (
                <button
                  onClick={() => setShowForm(false)}
                  className="p-1 rounded hover:bg-primary-foreground/10 transition-colors mr-1"
                  aria-label="Back to chat"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              )}
              <Bot className="h-5 w-5" />
              <span className="font-medium">{showForm ? "Contact Form" : "AI Advisor"}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-primary-foreground/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          {showForm ? (
            <form onSubmit={handleFormSubmit} className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  disabled={isSubmitting}
                  maxLength={100}
                  aria-invalid={!!formErrors.name}
                />
                {formErrors.name && (
                  <p className="text-xs text-destructive">{formErrors.name}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  maxLength={255}
                  aria-invalid={!!formErrors.email}
                />
                {formErrors.email && (
                  <p className="text-xs text-destructive">{formErrors.email}</p>
                )}
              </div>
              <div className="space-y-1.5 flex-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                  placeholder="How can Larry help you?"
                  disabled={isSubmitting}
                  className="min-h-[80px] resize-none"
                  maxLength={2000}
                  aria-invalid={!!formErrors.message}
                />
                {formErrors.message && (
                  <p className="text-xs text-destructive">{formErrors.message}</p>
                )}
                <p className="text-xs text-muted-foreground text-right">
                  {formData.message.length}/2000
                </p>
              </div>
              
              {/* Privacy notice */}
              <div className="flex items-start gap-2 p-2 bg-muted rounded-lg">
                <ShieldAlert className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Please don't share sensitive personal information. Your message will be sent via email.
                </p>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Send className="h-4 w-4 mr-2" />
                )}
                Send Message
              </Button>
            </form>
          ) : (
            <>
              {/* Welcome Banner */}
              <div className="mx-3 mt-3 px-3.5 py-3 rounded-lg bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/15">
                <div className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground leading-tight">
                      Got questions? Ask away.
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      Get instant answers about our services, approach, and how AI consulting can help your business.
                    </p>
                  </div>
                </div>
              </div>

              <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-muted text-foreground rounded-bl-sm"
                        }`}
                      >
                        {msg.content || (isLoading && i === messages.length - 1 ? (
                          <span className="flex items-center gap-1">
                            <span className="animate-pulse">●</span>
                            <span className="animate-pulse delay-100">●</span>
                            <span className="animate-pulse delay-200">●</span>
                          </span>
                        ) : null)}
                      </div>
                      {msg.role === "user" && (
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                          <User className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input + Contact button */}
              <div className="p-3 border-t border-border space-y-2">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <div className="flex-1">
                    <Input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                        setInputError("");
                      }}
                      placeholder="Type your message..."
                      disabled={isLoading}
                      maxLength={2000}
                      aria-invalid={!!inputError}
                    />
                    {inputError && (
                      <p className="text-xs text-destructive mt-1">{inputError}</p>
                    )}
                  </div>
                  <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowForm(true)}
                  className="w-full text-xs"
                >
                  <Mail className="h-3 w-3 mr-1" />
                  Send a message directly
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
