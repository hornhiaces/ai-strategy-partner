import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

describe("Header", () => {
  it("renders navigation links", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />, { wrapper: TestWrapper });

    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Philosophy")).toBeInTheDocument();
    expect(screen.getByText("Approach")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the logo as a link to home", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />, { wrapper: TestWrapper });

    expect(screen.getByText("Salinas")).toBeInTheDocument();
    expect(screen.getByText("AI Consulting")).toBeInTheDocument();
  });

  it("renders Get in touch button", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />, { wrapper: TestWrapper });

    const buttons = screen.getAllByText("Get in touch");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("has proper aria labels for mobile toggle", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />, { wrapper: TestWrapper });

    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
  });
});

describe("Hero", () => {
  it("renders the main heading", async () => {
    const { default: Hero } = await import("@/components/Hero");
    render(<Hero />, { wrapper: TestWrapper });

    expect(screen.getByText(/Enterprise-Level AI Strategy/)).toBeInTheDocument();
    expect(screen.getByText(/Practical Execution/)).toBeInTheDocument();
  });

  it("renders CTA buttons", async () => {
    const { default: Hero } = await import("@/components/Hero");
    render(<Hero />, { wrapper: TestWrapper });

    expect(screen.getByText("Book a Strategy Call")).toBeInTheDocument();
    expect(screen.getByText("Explore Coaching")).toBeInTheDocument();
    expect(screen.getByText("Connect on LinkedIn")).toBeInTheDocument();
  });

  it("has click handler for strategy call email", async () => {
    const { default: Hero } = await import("@/components/Hero");
    render(<Hero />, { wrapper: TestWrapper });

    const button = screen.getByText("Book a Strategy Call").closest("button");
    expect(button).toBeTruthy();
  });

  it("LinkedIn link opens redirect in a new tab", async () => {
    const { default: Hero } = await import("@/components/Hero");
    render(<Hero />, { wrapper: TestWrapper });

    const linkedinLink = screen.getByText("Connect on LinkedIn").closest("a");
    expect(linkedinLink).toHaveAttribute("href", "/out?to=linkedin");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });
});

describe("Services", () => {
  it("renders both service tracks", async () => {
    const { default: Services } = await import("@/components/Services");
    render(<Services />, { wrapper: TestWrapper });

    expect(screen.getByText("Enterprise AI Strategy")).toBeInTheDocument();
    expect(screen.getByText("Hands-On AI Product Coaching")).toBeInTheDocument();
  });

  it("renders all enterprise services", async () => {
    const { default: Services } = await import("@/components/Services");
    render(<Services />, { wrapper: TestWrapper });

    expect(screen.getByText("AI Adoption Roadmap")).toBeInTheDocument();
    expect(screen.getByText("Governance & Risk Alignment")).toBeInTheDocument();
    expect(screen.getByText("Architecture Translation")).toBeInTheDocument();
    expect(screen.getByText("Lean Engagement Model")).toBeInTheDocument();
  });

  it("renders all coaching services", async () => {
    const { default: Services } = await import("@/components/Services");
    render(<Services />, { wrapper: TestWrapper });

    expect(screen.getByText("Build Your First AI App")).toBeInTheDocument();
    expect(screen.getByText("Custom GPTs for Business")).toBeInTheDocument();
    expect(screen.getByText("AI Workflow Design")).toBeInTheDocument();
    expect(screen.getByText("Prototype to Production")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders all service links", async () => {
    const { default: Footer } = await import("@/components/Footer");
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText("Enterprise AI Strategy")).toBeInTheDocument();
    expect(screen.getByText("AI Product Coaching")).toBeInTheDocument();
    // "AI Consulting" appears in both logo and service links, so use getAllByText
    expect(screen.getAllByText("AI Consulting").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("AI Automation")).toBeInTheDocument();
    expect(screen.getByText("AI Integration")).toBeInTheDocument();
    expect(screen.getByText("AI Advisory")).toBeInTheDocument();
  });

  it("renders contact info", async () => {
    const { default: Footer } = await import("@/components/Footer");
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText("salinasaiconsulting [at] outlook.com")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn Profile")).toBeInTheDocument();
  });

  it("has accessible navigation labels", async () => {
    const { default: Footer } = await import("@/components/Footer");
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByLabelText("Service pages")).toBeInTheDocument();
    expect(screen.getByLabelText("Page sections")).toBeInTheDocument();
  });

  it("renders copyright with current year", async () => {
    const { default: Footer } = await import("@/components/Footer");
    render(<Footer />, { wrapper: TestWrapper });

    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});

describe("ErrorBoundary", () => {
  it("renders children when no error", async () => {
    const { default: ErrorBoundary } = await import("@/components/ErrorBoundary");
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders error UI when child throws", async () => {
    const { default: ErrorBoundary } = await import("@/components/ErrorBoundary");

    const ThrowError = () => {
      throw new Error("Test error");
    };

    // Suppress console.error for this test
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Refresh Page")).toBeInTheDocument();

    spy.mockRestore();
  });
});

describe("NotFound", () => {
  it("renders 404 page", async () => {
    const { default: NotFound } = await import("@/pages/NotFound");
    render(<NotFound />, { wrapper: TestWrapper });

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    expect(screen.getByText("Return to Home")).toBeInTheDocument();
  });
});

describe("Philosophy", () => {
  it("renders all philosophy tenets", async () => {
    const { default: Philosophy } = await import("@/components/Philosophy");
    render(<Philosophy />, { wrapper: TestWrapper });

    expect(screen.getByText("Strategy without execution fails.")).toBeInTheDocument();
    expect(screen.getByText("Experience comes from shipping.")).toBeInTheDocument();
  });
});

describe("Credibility", () => {
  it("renders stats", async () => {
    const { default: Credibility } = await import("@/components/Credibility");
    render(<Credibility />, { wrapper: TestWrapper });

    expect(screen.getByText("15+")).toBeInTheDocument();
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("renders trust badges", async () => {
    const { default: Credibility } = await import("@/components/Credibility");
    render(<Credibility />, { wrapper: TestWrapper });

    expect(screen.getByText("Independent & Vendor-Neutral")).toBeInTheDocument();
    expect(screen.getByText("MBA Qualified")).toBeInTheDocument();
  });
});

describe("FinalCTA", () => {
  it("renders consultation CTA", async () => {
    const { default: FinalCTA } = await import("@/components/FinalCTA");
    render(<FinalCTA />, { wrapper: TestWrapper });

    expect(screen.getByText(/Ready to Move AI Forward/)).toBeInTheDocument();
    expect(screen.getByText("Start a conversation")).toBeInTheDocument();
  });
});

describe("ComingSoon", () => {
  it("renders mobile advisory teaser", async () => {
    const { default: ComingSoon } = await import("@/components/ComingSoon");
    render(<ComingSoon />, { wrapper: TestWrapper });

    expect(screen.getByText("Mobile AI Product Advisory")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });
});
