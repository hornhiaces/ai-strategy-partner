import {
  Rocket,
  Bot,
  Wrench,
  Map,
  Code,
  Lightbulb,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const HandsOnAIProductCoaching = () => (
  <ServicePageLayout
    slug="hands-on-ai-product-coaching"
    title="Hands-On AI Product Coaching"
    metaTitle="AI Product Coaching for Founders & Small Business | Salinas AI Consulting"
    metaDescription="Hands-on AI product coaching for founders and small businesses. Build AI-powered apps, custom GPTs, and AI workflows. Flat-fee, practical, no fluff."
    heroTagline="Hands-On AI Product Coaching"
    heroHeading="Build Real AI Products — With Expert Guidance"
    heroDescription="Practical, hands-on coaching to help founders and small businesses build AI-powered products. No theory decks. No certifications to sell. Just real-world execution."
    features={[
      {
        icon: Rocket,
        title: "Build Your First AI App",
        description:
          "Step-by-step guidance building a real AI-powered web application — from concept through launch. You ship something real.",
      },
      {
        icon: Bot,
        title: "Custom GPTs for Your Business",
        description:
          "Create custom GPTs tailored to your operations, customer support, or internal workflows. Practical AI that saves time today.",
      },
      {
        icon: Wrench,
        title: "AI Workflow Design",
        description:
          "Design AI workflows using modern tools and platforms. Automate real tasks without over-engineering or vendor lock-in.",
      },
      {
        icon: Map,
        title: "Prototype to Production Roadmap",
        description:
          "A clear path from rapid prototype to production-ready product. Know exactly what to build, in what order, and why.",
      },
      {
        icon: Code,
        title: "Implementation Coaching",
        description:
          "Hands-on sessions working alongside you on architecture decisions, tool selection, and integration challenges.",
      },
      {
        icon: Lightbulb,
        title: "AI Opportunity Assessment",
        description:
          "Identify where AI creates real value in your business. Honest assessment — including where AI isn't the right answer.",
      },
    ]}
    detailSections={[
      {
        heading: "Built for Founders Who Ship",
        content:
          "This isn't a course. It's not a certification program. It's direct, hands-on coaching for founders and small business owners who want to build AI-powered products. You bring the business knowledge, I bring the AI implementation expertise. Together we ship something real — fast.",
      },
      {
        heading: "Flat-Fee, No Surprises",
        content:
          "Coaching engagements are structured with flat-fee options so you know exactly what you're investing. No hourly billing anxiety. No scope creep. Clear deliverables, practical timelines, and real outcomes you can measure.",
      },
      {
        heading: "Enterprise Thinking, Startup Speed",
        content:
          "My enterprise background means you get architecture decisions that scale, security practices that protect your users, and AI governance that builds trust — delivered at startup speed. You get the benefit of enterprise-level thinking without enterprise-level overhead.",
      },
    ]}
    relatedServices={[
      {
        label: "Enterprise AI Strategy",
        href: "/enterprise-ai-strategy",
        description:
          "Strategic AI planning for enterprise organizations with complex requirements.",
      },
      {
        label: "AI Consulting",
        href: "/ai-consulting",
        description:
          "End-to-end consulting from assessment through production deployment.",
      },
      {
        label: "AI Integration",
        href: "/ai-integration",
        description:
          "Seamlessly integrate AI into your existing technology stack.",
      },
    ]}
  />
);

export default HandsOnAIProductCoaching;
