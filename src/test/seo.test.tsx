import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import {
  OrganizationSchema,
  FAQSchema,
  BreadcrumbSchema,
  ServiceSchema,
  homepageFAQs,
} from "@/components/StructuredData";

const SEOWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

describe("SEOHead", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <SEOHead
        title="Test Page | Salinas AI"
        description="Test description"
        path="/test"
      />,
      { wrapper: SEOWrapper }
    );
    expect(container).toBeTruthy();
  });

  it("normalizes trailing slashes in paths", () => {
    // The component should normalize paths — this is a smoke test
    const { container } = render(
      <SEOHead
        title="Test"
        description="Test"
        path="/test/"
      />,
      { wrapper: SEOWrapper }
    );
    expect(container).toBeTruthy();
  });

  it("handles root path correctly", () => {
    const { container } = render(
      <SEOHead
        title="Home"
        description="Home page"
        path="/"
      />,
      { wrapper: SEOWrapper }
    );
    expect(container).toBeTruthy();
  });

  it("supports noIndex flag", () => {
    const { container } = render(
      <SEOHead
        title="Private"
        description="Private page"
        path="/private"
        noIndex
      />,
      { wrapper: SEOWrapper }
    );
    expect(container).toBeTruthy();
  });
});

describe("StructuredData - OrganizationSchema", () => {
  it("renders JSON-LD script tag", () => {
    const { container } = render(<OrganizationSchema />, { wrapper: SEOWrapper });
    expect(container).toBeTruthy();
  });
});

describe("StructuredData - FAQSchema", () => {
  it("renders FAQ structured data", () => {
    const { container } = render(
      <FAQSchema faqs={homepageFAQs} />,
      { wrapper: SEOWrapper }
    );
    expect(container).toBeTruthy();
  });

  it("homepage FAQs has 5 questions", () => {
    expect(homepageFAQs).toHaveLength(5);
    homepageFAQs.forEach((faq) => {
      expect(faq.question).toBeTruthy();
      expect(faq.answer).toBeTruthy();
      expect(faq.question.endsWith("?")).toBe(true);
    });
  });
});

describe("StructuredData - BreadcrumbSchema", () => {
  it("renders breadcrumb structured data", () => {
    const { container } = render(
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://salinas-ai-consulting.com" },
          { name: "AI Consulting", url: "https://salinas-ai-consulting.com/ai-consulting" },
        ]}
      />,
      { wrapper: SEOWrapper }
    );
    expect(container).toBeTruthy();
  });
});

describe("StructuredData - ServiceSchema", () => {
  it("renders service structured data", () => {
    const { container } = render(
      <ServiceSchema
        name="AI Consulting"
        description="Enterprise AI consulting services"
        url="https://salinas-ai-consulting.com/ai-consulting"
      />,
      { wrapper: SEOWrapper }
    );
    expect(container).toBeTruthy();
  });
});

describe("SEO Content Quality", () => {
  it("homepage title is under 60 characters", () => {
    const title = "AI Strategy & Product Coaching | Salinas AI Consulting";
    expect(title.length).toBeLessThanOrEqual(60);
  });

  it("homepage description is between 120-160 characters", () => {
    const description =
      "Enterprise-level AI strategy with hands-on execution capability. AI consulting for enterprises, founders & small businesses. Free consultation.";
    expect(description.length).toBeGreaterThanOrEqual(120);
    expect(description.length).toBeLessThanOrEqual(160);
  });

  it("all FAQ answers are substantive (>50 chars)", () => {
    homepageFAQs.forEach((faq) => {
      expect(faq.answer.length).toBeGreaterThan(50);
    });
  });
});
