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
        heading: "Who This Is For",
        content:
          "AI product coaching is designed for non-technical founders, solo operators, and small teams (under 50 employees) who want to leverage AI without hiring a full engineering team or spending six figures on consulting.",
        bullets: [
          "Founders building an AI-powered SaaS product and need architecture guidance",
          "Small business owners automating operations with custom GPTs and AI workflows",
          "Solo consultants creating AI-enhanced service offerings for their clients",
          "Early-stage teams validating an AI product idea before raising capital",
        ],
      },
      {
        heading: "What You Walk Away With",
        content:
          "Every coaching engagement produces something tangible — a working product, a validated prototype, or a clear build plan you can execute.",
        bullets: [
          "A working AI-powered application or prototype you can demo to customers or investors",
          "Custom GPT(s) deployed and configured for your specific business use case",
          "Technical architecture document you can hand to a developer to scale",
          "AI tool stack recommendation based on your budget, skills, and growth plans",
          "Product roadmap with prioritized features and build-vs-buy decisions",
        ],
      },
      {
        heading: "How Coaching Engagements Work",
        content:
          "Coaching is structured in focused sprints — we work together weekly until you've shipped what you set out to build. Most engagements run 4–8 weeks.",
        bullets: [
          "Week 1: Kickoff — define the product scope, select tools, set up development environment",
          "Weeks 2–3: Build — hands-on pair-building sessions, architecture decisions in real-time",
          "Weeks 4–5: Iterate — user testing, refine based on feedback, add AI fine-tuning",
          "Weeks 6–8: Ship — production deployment, monitoring setup, launch support",
        ],
      },
      {
        heading: "Flat-Fee, No Surprises",
        content:
          "Coaching engagements are structured with flat-fee options so you know exactly what you're investing. No hourly billing anxiety. No scope creep. Clear deliverables, practical timelines, and real outcomes you can measure.",
      },
    ]}
    relatedServices={[
      {
        label: "Enterprise AI Strategy",
        href: "/enterprise-ai-strategy",
        description:
          "Strategic AI planning for organizations with complex requirements and multiple business units.",
      },
      {
        label: "AI Consulting",
        href: "/ai-consulting",
        description:
          "End-to-end enterprise consulting from assessment through production deployment.",
      },
      {
        label: "AI Integration",
        href: "/ai-integration",
        description:
          "Seamlessly integrate AI into your existing technology stack.",
      },
    ]}
    faqs={[
      {
        question: "Do I need to know how to code?",
        answer:
          "No. Many of our coaching clients are non-technical founders. We use no-code and low-code AI tools (custom GPTs, Lovable, Cursor, Zapier AI) where possible, and guide you through code-required steps when needed. The goal is to build something real at your current skill level, not to teach you to become a developer.",
      },
      {
        question: "What's the difference between coaching and consulting?",
        answer:
          "Consulting is 'we do it for you.' Coaching is 'we do it together.' In coaching engagements, you're in the driver's seat — making decisions, building the product, learning the tools. I provide the AI expertise, architecture guidance, and hands-on support to make sure you ship successfully.",
      },
      {
        question: "How much does AI product coaching cost?",
        answer:
          "Coaching engagements are flat-fee based on scope and duration. A focused 4-week sprint is our most popular format. We discuss scope and pricing in the free initial consultation — no hourly billing, no surprise invoices.",
      },
      {
        question: "Can you help me build a custom GPT for my business?",
        answer:
          "Yes, and it's one of our most requested coaching outcomes. We help you design, build, test, and deploy custom GPTs for customer support, internal operations, content generation, and domain-specific assistants. Most clients have a working custom GPT within 1–2 weeks.",
      },
      {
        question: "What if my AI product idea isn't viable?",
        answer:
          "We'll tell you — honestly and early. The first coaching session includes an AI opportunity assessment where we evaluate technical feasibility, market fit, and build complexity. If your idea needs pivoting, we help you find a viable path. If AI isn't the right solution, we'll say so and save you months of wasted effort.",
      },
      {
        question: "Is this only for software products?",
        answer:
          "No. Many clients use coaching to build AI-powered internal tools, workflows, and automations — not consumer or SaaS products. If you want to automate parts of your service business, create AI-enhanced deliverables for clients, or streamline operations, coaching is a great fit.",
      },
    ]}
  />
);

export default HandsOnAIProductCoaching;
