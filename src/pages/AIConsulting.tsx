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
        heading: "Who This Service Is For",
        content:
          "Our AI consulting practice is designed for CIOs, CTOs, and VP-level technology leaders in organizations with 500+ employees operating in regulated verticals. If your organization has attempted AI pilots that stalled, inherited AI systems without documentation, or needs to build a compliant AI capability from scratch, this is the right starting point.",
        bullets: [
          "Healthcare systems evaluating clinical AI or operational automation",
          "Financial institutions modernizing underwriting, fraud detection, or compliance workflows",
          "Government agencies pursuing FedRAMP-authorized AI solutions",
          "Enterprises with stalled AI pilots that need expert rescue and course correction",
        ],
      },
      {
        heading: "Key Deliverables",
        content:
          "Every consulting engagement produces tangible artifacts your team can execute against long after our engagement ends.",
        bullets: [
          "AI readiness scorecard with gap analysis across data, infrastructure, and talent",
          "Prioritized use-case portfolio ranked by ROI, feasibility, and compliance risk",
          "Technical architecture document with vendor-neutral technology recommendations",
          "Governance framework covering model lifecycle, bias monitoring, and audit readiness",
          "Implementation roadmap with quarterly milestones and resource requirements",
          "Executive briefing deck translating technical findings into business language",
        ],
      },
      {
        heading: "Typical Engagement Timeline",
        content:
          "Most consulting engagements follow a 10–14 week arc from discovery through handoff. The pace is calibrated to minimize disruption while maintaining momentum.",
        bullets: [
          "Weeks 1–2: Discovery — stakeholder interviews, data audit, infrastructure review",
          "Weeks 3–4: Assessment — feasibility scoring, compliance mapping, risk profiling",
          "Weeks 5–8: Design — architecture, governance framework, vendor evaluation",
          "Weeks 9–12: Build — proof-of-concept, monitoring setup, team training",
          "Weeks 13–14: Handoff — documentation, runbooks, executive presentation",
        ],
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
    faqs={[
      {
        question: "How is Salinas AI Consulting different from Big Four AI practices?",
        answer:
          "We are 100% independent — no vendor partnerships, no reseller agreements, no technology commissions. Our recommendations are driven by what works for your organization. We also specialize in regulated industries, so compliance is built into every deliverable rather than bolted on at the end.",
      },
      {
        question: "What does the initial free consultation cover?",
        answer:
          "The free consultation is a 30-minute call where we assess whether your AI challenge is a good fit for our expertise. We'll discuss your current state, key goals, regulatory constraints, and provide an honest assessment of next steps — including whether you actually need a consultant.",
      },
      {
        question: "Can you rescue a stalled AI pilot?",
        answer:
          "Yes. A significant portion of our work involves diagnosing why AI pilots failed to reach production and charting a path forward. Common issues include data quality gaps, missing governance, misaligned KPIs, and lack of executive sponsorship. We assess the root cause and recommend whether to build on, rebuild, or retire.",
      },
      {
        question: "Do you build the AI systems or just advise?",
        answer:
          "Both. We provide strategic advisory and hands-on technical implementation depending on your needs. Many engagements start with assessment and strategy, then move into architecture design and proof-of-concept builds with your engineering team.",
      },
      {
        question: "What size organization do you work with?",
        answer:
          "Our enterprise consulting practice serves organizations with 500+ employees, typically in healthcare, financial services, and government. For startups and small businesses, we offer our Hands-On AI Product Coaching service, which is structured for smaller teams and budgets.",
      },
      {
        question: "How do you handle data privacy during assessments?",
        answer:
          "We operate under strict NDAs and never require access to production patient, customer, or citizen data. Assessments are conducted using metadata, data dictionaries, architecture diagrams, and controlled sample sets. We can also work within your VPN or secure environment if required.",
      },
    ]}
  />
);

export default AIConsulting;
