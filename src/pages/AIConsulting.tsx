import {
  Compass,
  Target,
  Shield,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const AIConsulting = () => (
  <ServicePageLayout
    slug="ai-consulting"
    title="AI Consulting"
    metaTitle="AI Consulting Services for Enterprises | Salinas AI Consulting"
    metaDescription="End-to-end enterprise AI consulting for healthcare, finance & government. From strategy through production deployment. 15+ years experience. Free consultation."
    heroTagline="AI Consulting Services"
    heroHeading="Enterprise AI Consulting That Drives Measurable Results"
    heroDescription="From AI readiness assessments to production-ready deployments, we provide hands-on consulting for enterprises navigating artificial intelligence in regulated industries."
    features={[
      {
        icon: Compass,
        title: "AI Readiness Assessment",
        description:
          "Evaluate your organization's data maturity, technical infrastructure, and team capabilities to build a realistic AI adoption roadmap.",
      },
      {
        icon: Target,
        title: "Use Case Identification",
        description:
          "Pinpoint the AI opportunities that deliver the highest ROI for your specific industry, constraints, and business objectives.",
      },
      {
        icon: Shield,
        title: "Compliance-First AI",
        description:
          "Build AI systems that meet regulatory requirements from day one — HIPAA, SOX, FedRAMP, and industry-specific frameworks.",
      },
      {
        icon: Zap,
        title: "Production Deployment",
        description:
          "Move AI from proof-of-concept to production with governance, monitoring, and operational readiness built in.",
      },
      {
        icon: BarChart3,
        title: "Performance Measurement",
        description:
          "Define and track AI KPIs that connect to business outcomes, not just model accuracy metrics.",
      },
      {
        icon: Users,
        title: "Team Enablement",
        description:
          "Build internal AI capability so your team can own, operate, and evolve AI systems independently after engagement.",
      },
    ]}
    detailSections={[
      {
        heading: "Why Choose an Independent AI Consultant?",
        content:
          "Most AI consulting firms are tied to specific vendors or cloud platforms. Salinas AI Consulting is 100% independent and vendor-neutral. We recommend the best solution for your organization — not the one that earns us a commission. With 15+ years of enterprise technology experience and 50+ projects delivered, we bring practical, real-world expertise to every engagement.",
      },
      {
        heading: "Our Approach to Enterprise AI Consulting",
        content:
          "We follow a five-step framework: Understand your context and constraints, Assess technical feasibility and organizational readiness, Design architecture and governance tailored to your environment, Build with disciplined execution and stakeholder alignment, and Sustain through complete handoff so your team owns the outcome. This approach has been proven across healthcare, financial services, and government organizations.",
      },
      {
        heading: "AI Consulting for Regulated Industries",
        content:
          "Deploying AI in healthcare, financial services, or government requires deep understanding of compliance frameworks and risk management. We specialize in these sectors, ensuring every AI initiative meets regulatory requirements while delivering business value. Our expertise covers HIPAA, SOX, FINRA, PCI-DSS, FedRAMP, and FISMA compliance in AI deployments.",
      },
    ]}
    relatedServices={[
      {
        label: "Enterprise AI Strategy",
        href: "/enterprise-ai-strategy",
        description:
          "Develop a comprehensive AI strategy aligned with your business objectives and industry constraints.",
      },
      {
        label: "AI Automation",
        href: "/ai-automation",
        description:
          "Transform manual processes with intelligent automation that scales across your enterprise.",
      },
      {
        label: "AI Advisory",
        href: "/ai-advisory",
        description:
          "Expert guidance on AI talent, vendors, and technology investments.",
      },
    ]}
  />
);

export default AIConsulting;
