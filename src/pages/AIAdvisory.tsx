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
        heading: "AI Due Diligence for High-Stakes Decisions",
        content:
          "Whether you're evaluating an AI startup for acquisition, selecting an enterprise AI vendor, or assessing your internal AI team's capabilities, our technical due diligence provides the expert assessment you need. We evaluate model quality, data pipeline maturity, scalability, technical debt, team capability, and organizational readiness with deep domain expertise.",
      },
      {
        heading: "Advisory for Regulated Industry AI Decisions",
        content:
          "AI decisions in healthcare, financial services, and government carry additional weight due to compliance requirements, patient safety, financial risk, and public trust. Our advisory services account for regulatory frameworks (HIPAA, SOX, FedRAMP), industry-specific risk factors, and the unique governance requirements of regulated environments.",
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
  />
);

export default AIAdvisory;
