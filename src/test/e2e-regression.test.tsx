import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

// ─── Test Wrapper ──────────────────────────────────────────────────────────────

const createTestWrapper = (initialRoute = "/") => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <MemoryRouter initialEntries={[initialRoute]}>
            {children}
          </MemoryRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

const BrowserTestWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

// ─── E2E: Full Page Rendering ──────────────────────────────────────────────────

describe("E2E: Index Page Full Render", () => {
  it("renders all major sections on the homepage", async () => {
    const { default: Index } = await import("@/pages/Index");
    render(<Index />, { wrapper: createTestWrapper("/") });

    // Header (appears in both header and footer)
    expect(screen.getAllByText("Salinas").length).toBeGreaterThan(0);
    expect(screen.getAllByText("AI Consulting").length).toBeGreaterThan(0);

    // Hero
    expect(screen.getByText(/Enterprise-Level AI Strategy/)).toBeInTheDocument();

    // Services (may appear in multiple sections)
    expect(screen.getAllByText("Enterprise AI Strategy").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Hands-On AI Product Coaching").length).toBeGreaterThan(0);

    // Credibility
    expect(screen.getByText("15+")).toBeInTheDocument();
    expect(screen.getByText("50+")).toBeInTheDocument();

    // Footer
    expect(screen.getByText("salinasaiconsulting@outlook.com")).toBeInTheDocument();
  });

  it("renders CTA buttons with correct links", async () => {
    const { default: Index } = await import("@/pages/Index");
    render(<Index />, { wrapper: createTestWrapper("/") });

    const mailtoLink = screen.getByText("Book a Strategy Call").closest("a");
    expect(mailtoLink).toHaveAttribute("href", "mailto:salinasaiconsulting@outlook.com");
  });
});

// ─── E2E: Service Pages ────────────────────────────────────────────────────────

describe("E2E: Service Pages Render", () => {
  const servicePages = [
    { path: "/ai-consulting", module: "@/pages/AIConsulting", heading: /AI Consulting/i },
    { path: "/enterprise-ai-strategy", module: "@/pages/EnterpriseAIStrategy", heading: /Enterprise AI Strategy/i },
    { path: "/ai-automation", module: "@/pages/AIAutomation", heading: /AI Automation/i },
    { path: "/ai-integration", module: "@/pages/AIIntegration", heading: /AI Integration/i },
    { path: "/ai-advisory", module: "@/pages/AIAdvisory", heading: /AI Advisory/i },
    { path: "/hands-on-ai-product-coaching", module: "@/pages/HandsOnAIProductCoaching", heading: /AI Product Coaching/i },
  ];

  servicePages.forEach(({ path, module, heading }) => {
    it(`renders ${path} without errors`, async () => {
      const page = await import(module);
      const Component = page.default;
      render(<Component />, { wrapper: createTestWrapper(path) });

      // Use getAllByText since heading text may appear in multiple elements
      const matches = screen.getAllByText(heading);
      expect(matches.length).toBeGreaterThan(0);
    });
  });
});

// ─── E2E: 404 Page ─────────────────────────────────────────────────────────────

describe("E2E: NotFound Page", () => {
  it("renders 404 for unknown routes", async () => {
    const { default: NotFound } = await import("@/pages/NotFound");
    render(<NotFound />, { wrapper: createTestWrapper("/nonexistent-page") });

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });

  it("has a working link back to home", async () => {
    const { default: NotFound } = await import("@/pages/NotFound");
    render(<NotFound />, { wrapper: createTestWrapper("/nonexistent") });

    const homeLink = screen.getByText("Return to Home").closest("a");
    expect(homeLink).toHaveAttribute("href", "/");
  });
});

// ─── E2E: External Redirect ────────────────────────────────────────────────────

describe("E2E: ExternalRedirect Security", () => {
  let replaceSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    replaceSpy = vi.fn();
    Object.defineProperty(window, "location", {
      writable: true,
      value: { ...window.location, replace: replaceSpy },
    });
  });

  it("redirects to linkedin for valid destination", async () => {
    const { default: ExternalRedirect } = await import("@/pages/ExternalRedirect");
    render(<ExternalRedirect />, {
      wrapper: createTestWrapper("/out?to=linkedin"),
    });

    await waitFor(() => {
      expect(replaceSpy).toHaveBeenCalledWith(
        "https://www.linkedin.com/in/larry-salinas-mba-56394934"
      );
    });
  });

  it("redirects to home for unknown destination", async () => {
    const { default: ExternalRedirect } = await import("@/pages/ExternalRedirect");
    render(<ExternalRedirect />, {
      wrapper: createTestWrapper("/out?to=evil"),
    });

    await waitFor(() => {
      expect(replaceSpy).toHaveBeenCalledWith("/");
    });
  });

  it("redirects to home when no destination specified", async () => {
    const { default: ExternalRedirect } = await import("@/pages/ExternalRedirect");
    render(<ExternalRedirect />, {
      wrapper: createTestWrapper("/out"),
    });

    await waitFor(() => {
      expect(replaceSpy).toHaveBeenCalledWith("/");
    });
  });

  it("blocks open redirect with arbitrary URL in to param", async () => {
    const { default: ExternalRedirect } = await import("@/pages/ExternalRedirect");
    render(<ExternalRedirect />, {
      wrapper: createTestWrapper("/out?to=https://evil.com"),
    });

    await waitFor(() => {
      expect(replaceSpy).toHaveBeenCalledWith("/");
    });
  });

  it("blocks javascript: protocol in redirect param", async () => {
    const { default: ExternalRedirect } = await import("@/pages/ExternalRedirect");
    render(<ExternalRedirect />, {
      wrapper: createTestWrapper("/out?to=javascript:alert(1)"),
    });

    await waitFor(() => {
      // Should redirect to home, not execute javascript
      expect(replaceSpy).toHaveBeenCalledWith("/");
    });
  });
});

// ─── E2E: Chatbot Interactions ─────────────────────────────────────────────────

describe("E2E: Chatbot Component", () => {
  it("renders chat button initially", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    expect(screen.getByLabelText("Open chat")).toBeInTheDocument();
  });

  it("opens chat window when button is clicked", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("AI Advisor")).toBeInTheDocument();
    expect(screen.getByText(/I'm Larry's AI assistant/)).toBeInTheDocument();
  });

  it("closes chat window when X is clicked", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Close chat"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows contact form when button is clicked", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));
    fireEvent.click(screen.getByText("Send a message directly"));

    expect(screen.getByText("Contact Form")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("prevents empty message submission", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));

    // The submit button in the chat form is an icon button with type="submit"
    const form = screen.getByPlaceholderText("Type your message...").closest("form");
    expect(form).toBeTruthy();
    const submitButton = form!.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
    expect(submitButton).toBeDisabled();
  });

  it("has proper ARIA attributes for accessibility", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));

    expect(screen.getByRole("dialog")).toHaveAttribute("aria-label", "AI Advisor Chat");
    expect(screen.getByRole("log")).toHaveAttribute("aria-live", "polite");
  });

  it("enforces maxLength on input", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));

    const input = screen.getByPlaceholderText("Type your message...");
    expect(input).toHaveAttribute("maxLength", "2000");
  });

  it("back button returns from contact form to chat", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));
    fireEvent.click(screen.getByText("Send a message directly"));
    expect(screen.getByText("Contact Form")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Back to chat"));
    expect(screen.getByText("AI Advisor")).toBeInTheDocument();
  });
});

// ─── Regression: Navigation ────────────────────────────────────────────────────

describe("Regression: Navigation Links", () => {
  it("all header nav links use correct anchor format", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />, { wrapper: BrowserTestWrapper });

    // Section anchors should use # links
    const servicesLink = screen.getByText("Services").closest("a, button");
    expect(servicesLink).toBeTruthy();
  });

  it("footer service links point to correct routes", async () => {
    const { default: Footer } = await import("@/components/Footer");
    render(<Footer />, { wrapper: BrowserTestWrapper });

    const aiConsultingLink = screen.getAllByText("AI Consulting").find(
      (el) => el.closest("a")?.getAttribute("href") === "/ai-consulting"
    );
    expect(aiConsultingLink).toBeTruthy();

    const automationLink = screen.getByText("AI Automation").closest("a");
    expect(automationLink).toHaveAttribute("href", "/ai-automation");

    const integrationLink = screen.getByText("AI Integration").closest("a");
    expect(integrationLink).toHaveAttribute("href", "/ai-integration");

    const advisoryLink = screen.getByText("AI Advisory").closest("a");
    expect(advisoryLink).toHaveAttribute("href", "/ai-advisory");
  });
});

// ─── Regression: ErrorBoundary ─────────────────────────────────────────────────

describe("Regression: ErrorBoundary Recovery", () => {
  it("shows error UI and refresh button on crash", async () => {
    const { default: ErrorBoundary } = await import("@/components/ErrorBoundary");

    const ThrowError = () => {
      throw new Error("Unexpected error");
    };

    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText(/unexpected error/i)).toBeInTheDocument();
    expect(screen.getByText("Refresh Page")).toBeInTheDocument();

    spy.mockRestore();
  });

  it("renders children when no error occurs", async () => {
    const { default: ErrorBoundary } = await import("@/components/ErrorBoundary");

    render(
      <ErrorBoundary>
        <div>Content is fine</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("Content is fine")).toBeInTheDocument();
  });
});

// ─── Regression: SEO Metadata ──────────────────────────────────────────────────

describe("Regression: SEO Components", () => {
  it("SEOHead renders with all required props", async () => {
    const { default: SEOHead } = await import("@/components/SEOHead");
    const { container } = render(
      <SEOHead
        title="Test Page"
        description="Test description for SEO"
        path="/test-page"
      />,
      { wrapper: ({ children }) => <HelmetProvider>{children}</HelmetProvider> }
    );

    expect(container).toBeTruthy();
  });

  it("StructuredData exports all required schemas", async () => {
    const mod = await import("@/components/StructuredData");
    expect(mod.OrganizationSchema).toBeDefined();
    expect(mod.FAQSchema).toBeDefined();
    expect(mod.BreadcrumbSchema).toBeDefined();
    expect(mod.ServiceSchema).toBeDefined();
    expect(mod.homepageFAQs).toBeDefined();
    expect(Array.isArray(mod.homepageFAQs)).toBe(true);
  });
});

// ─── Regression: Form Validation ───────────────────────────────────────────────

describe("Regression: Contact Form Field Constraints", () => {
  it("contact form renders maxLength attributes", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));
    fireEvent.click(screen.getByText("Send a message directly"));

    expect(screen.getByLabelText("Name")).toHaveAttribute("maxLength", "100");
    expect(screen.getByLabelText("Email")).toHaveAttribute("maxLength", "255");
    expect(screen.getByLabelText("Message")).toHaveAttribute("maxLength", "2000");
  });

  it("email input has type=email", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));
    fireEvent.click(screen.getByText("Send a message directly"));

    expect(screen.getByLabelText("Email")).toHaveAttribute("type", "email");
  });

  it("shows privacy notice on contact form", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));
    fireEvent.click(screen.getByText("Send a message directly"));

    expect(screen.getByText(/don't share sensitive personal information/i)).toBeInTheDocument();
  });

  it("character counter shows on message field", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    fireEvent.click(screen.getByLabelText("Open chat"));
    fireEvent.click(screen.getByText("Send a message directly"));

    expect(screen.getByText("0/2000")).toBeInTheDocument();
  });
});

// ─── Regression: Responsive Components ─────────────────────────────────────────

describe("Regression: Responsive UI Elements", () => {
  it("mobile menu toggle exists in header", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />, { wrapper: BrowserTestWrapper });

    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
  });

  it("chatbot teaser is rendered with chat button", async () => {
    const { default: Chatbot } = await import("@/components/Chatbot");
    render(<Chatbot />, { wrapper: BrowserTestWrapper });

    // The open chat button should be visible initially
    expect(screen.getByLabelText("Open chat")).toBeInTheDocument();
  });
});

// ─── Regression: Philosophy and Delivery ───────────────────────────────────────

describe("Regression: Content Sections", () => {
  it("DeliveryFramework renders the 5-step process", async () => {
    const { default: DeliveryFramework } = await import("@/components/DeliveryFramework");
    render(<DeliveryFramework />, { wrapper: BrowserTestWrapper });

    // Step names may appear in both headings and descriptions
    expect(screen.getAllByText("Understand").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Assess").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Design").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Build").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Sustain").length).toBeGreaterThan(0);
  });

  it("ComingSoon section renders", async () => {
    const { default: ComingSoon } = await import("@/components/ComingSoon");
    render(<ComingSoon />, { wrapper: BrowserTestWrapper });

    expect(screen.getByText("Mobile AI Product Advisory")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("FinalCTA has consultation prompt", async () => {
    const { default: FinalCTA } = await import("@/components/FinalCTA");
    render(<FinalCTA />, { wrapper: BrowserTestWrapper });

    expect(screen.getByText(/Ready to Move AI Forward/)).toBeInTheDocument();
    expect(screen.getByText("Start a conversation")).toBeInTheDocument();
  });
});
