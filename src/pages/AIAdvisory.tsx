import {
  Search,
  Users,
  FileCheck,
  Scale,
  Eye,
  Award,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const AIAdvisory = () => (
  <ServicePageLayout
    slug="ai-advisory"
    title="AI Advisory"
    metaTitle="AI Advisory & Due Diligence Services | Salinas AI"
    metaDescription="Independent AI advisory and technical due diligence for enterprise leaders. Evaluate AI talent, vendors, and investments with vendor-neutral expert guidance."
    heroTagline="AI Advisory Services"
    heroHeading="Independent AI Advisory for Enterprise Decision-Makers"
    heroDescription="Making critical AI decisions without independent expertise is expensive. We provide vendor-neutral advisory on AI talent, vendors, investments, and technology strategy for enterprise leaders."
    features={[
      {
        icon: Search,
        title: "AI Technical Due Diligence",
        description:
          "Independent evaluation of AI capabilities, model quality, data maturity, and scalability for M&A, investment, and vendor selection decisions.",
      },
      {
        icon: Users,
        title: "AI Talent Advisory",
        description:
          "Assess AI team capabilities, identify skill gaps, design hiring strategies, and evaluate AI leadership candidates with expert guidance.",
      },
      {
        icon: FileCheck,
        title: "Vendor Evaluation",
        description:
          "Objective assessment of AI vendors, platforms, and solutions against your specific requirements — without vendor bias or commissions.",
      },
      {
        icon: Scale,
        title: "AI Governance Advisory",
        description:
          "Design governance frameworks that balance AI innovation with risk management, compliance, and ethical considerations.",
      },
      {
        icon: Eye,
        title: "AI Risk Assessment",
        description:
          "Identify and evaluate risks in AI initiatives — technical, regulatory, organizational, and reputational — before they become problems.",
      },
      {
        icon: Award,
        title: "Board & Executive Briefing",
        description:
          "Translate complex AI capabilities and risks into clear, actionable guidance for executive teams and board members.",
      },
    ]}
    detailSections={[
      {
        heading: "Why Independent AI Advisory Matters",
        content:
          "Most AI advice comes with strings attached — vendor partnerships, reseller agreements, or consulting firms that profit from larger implementations. Salinas AI Consulting is 100% independent. Our advice is driven by your best interests, not our revenue model. When we recommend a technology or approach, it's because it's right for your organization.",
      },
      {
        heading: "Who Engages AI Advisory Services?",
        content:
          "Our advisory clients are senior decision-makers who face high-stakes AI choices and need an independent expert perspective before committing capital, headcount, or strategic direction.",
        bullets: [
          "PE/VC firms conducting technical due diligence on AI-enabled acquisition targets",
          "CIOs evaluating competing AI vendor proposals worth $500K+",
          "CHROs and VPs of Engineering designing AI hiring strategies and team structures",
          "Board members seeking independent validation of management's AI investment thesis",
          "General Counsel offices assessing AI risk exposure and governance readiness",
        ],
      },
      {
        heading: "Advisory Deliverables",
        content:
          "Our advisory output is designed for decision-makers — clear, actionable, and backed by deep technical analysis.",
        bullets: [
          "Technical due diligence report with risk scoring and recommendation matrix",
          "Vendor comparison scorecard with weighted criteria specific to your requirements",
          "AI talent assessment with skill gap analysis and hiring roadmap",
          "AI governance framework with policy templates, oversight structures, and compliance mapping",
          "Executive-ready risk assessment covering technical, regulatory, and organizational dimensions",
          "Board presentation materials translating complex AI topics into strategic business language",
        ],
      },
      {
        heading: "How Advisory Engagements Work",
        content:
          "Advisory engagements are scoped for speed and decisiveness. Most are completed in 2–4 weeks because the decisions they inform are often time-sensitive.",
        bullets: [
          "Week 1: Scope — define the decision being made, gather documentation, schedule interviews",
          "Week 2: Analysis — deep technical review, vendor or target assessment, risk modeling",
          "Week 3: Synthesis — findings consolidation, recommendation development, draft report",
          "Week 4: Delivery — executive presentation, Q&A, decision support documentation",
        ],
      },
      {
        heading: "AI Due Diligence for High-Stakes Decisions",
        content:
          "Whether you're evaluating an AI startup for acquisition, selecting an enterprise AI vendor, or assessing your internal AI team's capabilities, our technical due diligence provides the expert assessment you need. We evaluate model quality, data pipeline maturity, scalability, technical debt, team capability, and organizational readiness with deep domain expertise.",
      },
    ]}
    relatedServices={[
      {
        label: "AI Consulting",
        href: "/ai-consulting",
        description:
          "Full consulting engagement from assessment through deployment.",
      },
      {
        label: "Enterprise AI Strategy",
        href: "/enterprise-ai-strategy",
        description:
          "Develop a comprehensive AI strategy for your organization.",
      },
      {
        label: "AI Integration",
        href: "/ai-integration",
        description:
          "Expert integration of AI into your enterprise technology stack.",
      },
    ]}
    faqs={[
      {
        question: "What does AI technical due diligence cover?",
        answer:
          "Our due diligence evaluates: model quality and performance metrics, data pipeline maturity and data quality, infrastructure scalability and technical debt, team capabilities and organizational readiness, IP ownership and open-source license risks, and compliance posture. The result is a scored assessment with clear go/no-go recommendations.",
      },
      {
        question: "How quickly can you deliver a vendor evaluation?",
        answer:
          "A focused vendor evaluation comparing 3–5 solutions can be completed in 2–3 weeks. This includes requirements analysis, vendor interviews, technical assessment, and a scored comparison matrix. For more complex evaluations involving POC testing, allow 4–6 weeks.",
      },
      {
        question: "Do you help with AI hiring and team structure?",
        answer:
          "Yes. We assess current AI team capabilities, identify critical skill gaps, design role profiles, evaluate candidates through technical interviews, and recommend organizational structures. We also advise on build-vs-buy-vs-partner decisions for AI capabilities, which directly impacts team planning.",
      },
      {
        question: "What's the difference between advisory and consulting?",
        answer:
          "Advisory is about informing decisions — evaluating options, assessing risks, and providing expert recommendations. Consulting is about executing solutions — building architectures, deploying systems, and managing implementations. Many clients start with advisory and then engage our consulting practice for implementation.",
      },
      {
        question: "Can you present findings to our board of directors?",
        answer:
          "Yes, and we regularly do. Board presentations are a core deliverable. We translate complex AI technical concepts, risks, and opportunities into clear strategic guidance. Our materials are designed for non-technical board members while providing enough depth to withstand scrutiny from technically sophisticated directors.",
      },
      {
        question: "How do you maintain independence in vendor evaluations?",
        answer:
          "We accept no referral fees, commissions, or partnership revenue from any technology vendor. Our evaluation criteria are defined collaboratively with your team before assessment begins. All scoring is transparent and documented. We disclose if we have any prior relationship with evaluated vendors, which is rare given our independence model.",
      },
    ]}
  />
);

export default AIAdvisory;
