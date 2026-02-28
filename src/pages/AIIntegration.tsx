import {
  Puzzle,
  Database,
  Shield,
  Server,
  GitBranch,
  Layers,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const AIIntegration = () => (
  <ServicePageLayout
    slug="ai-integration"
    title="AI Integration"
    metaTitle="AI Integration Services for Enterprises | Salinas AI"
    metaDescription="Seamlessly integrate AI into enterprise systems and workflows. Expert integration consulting for healthcare, finance & government. Vendor-neutral guidance."
    heroTagline="AI Integration Services"
    heroHeading="Integrate AI Into Your Enterprise — Without Breaking What Works"
    heroDescription="AI doesn't exist in a vacuum. We help enterprises integrate AI systems into existing infrastructure, workflows, and technology stacks with minimal disruption and maximum compliance."
    features={[
      {
        icon: Puzzle,
        title: "Systems Integration",
        description:
          "Connect AI capabilities to your existing ERP, CRM, data warehouses, and business applications through well-architected integration patterns.",
      },
      {
        icon: Database,
        title: "Data Pipeline Architecture",
        description:
          "Design and implement data pipelines that feed AI systems with clean, compliant, and timely data from across your enterprise.",
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        description:
          "Ensure AI integrations meet enterprise security standards, data privacy regulations, and industry-specific compliance requirements.",
      },
      {
        icon: Server,
        title: "Infrastructure Planning",
        description:
          "Right-size AI infrastructure — cloud, on-premise, or hybrid — based on your performance requirements, security needs, and budget.",
      },
      {
        icon: GitBranch,
        title: "API & Workflow Design",
        description:
          "Design APIs and workflow integrations that make AI capabilities accessible to the teams and systems that need them.",
      },
      {
        icon: Layers,
        title: "Legacy System Modernization",
        description:
          "Bridge the gap between legacy enterprise systems and modern AI capabilities without full platform replacements.",
      },
    ]}
    detailSections={[
      {
        heading: "Enterprise AI Integration Done Right",
        content:
          "The biggest risk in AI integration isn't the AI — it's the impact on existing systems. Poorly planned integrations break data flows, create security vulnerabilities, and disrupt operations. We take an architecture-first approach, mapping integration points, data flows, and failure modes before writing a single line of code.",
      },
      {
        heading: "Who This Service Is For",
        content:
          "AI integration consulting is built for enterprise architects, platform engineering teams, and technology leaders responsible for connecting AI capabilities to existing systems without creating technical debt or compliance gaps.",
        bullets: [
          "Enterprises connecting LLM APIs or ML models to production ERP, CRM, or EHR systems",
          "Organizations building internal AI platforms that serve multiple business units",
          "Teams migrating from on-premise to cloud-based AI infrastructure",
          "Companies integrating third-party AI vendor solutions with existing data pipelines",
        ],
      },
      {
        heading: "Integration Deliverables",
        content:
          "We produce architecture artifacts and working integrations — not theoretical diagrams that your team has to figure out how to implement.",
        bullets: [
          "Integration architecture document with data flow diagrams and API specifications",
          "Security assessment covering authentication, encryption, data residency, and access controls",
          "Data pipeline implementation connecting source systems to AI services",
          "API gateway configuration with rate limiting, monitoring, and failover",
          "Performance benchmarks and capacity planning models",
          "Integration test suite and deployment runbooks for ongoing operations",
        ],
      },
      {
        heading: "How an Integration Engagement Works",
        content:
          "Integration engagements are scoped based on the number of systems involved and the complexity of data flows. A typical single-system integration follows this arc.",
        bullets: [
          "Weeks 1–2: Architecture review — map existing systems, data flows, security boundaries",
          "Weeks 3–4: Design — integration patterns, API contracts, failure handling, compliance controls",
          "Weeks 5–8: Implementation — data pipelines, API development, security hardening, testing",
          "Weeks 9–10: Validation — load testing, compliance verification, monitoring setup",
          "Weeks 11–12: Handoff — documentation, team training, production deployment support",
        ],
      },
      {
        heading: "Vendor-Neutral Integration Guidance",
        content:
          "As an independent consultant, we have no technology partnerships or vendor commissions. We recommend the best integration approach for your specific situation — whether that means cloud-native AI services, open-source frameworks, or specialized platforms. Your architecture decisions should be driven by your requirements, not our revenue model.",
      },
    ]}
    relatedServices={[
      {
        label: "AI Automation",
        href: "/ai-automation",
        description:
          "Automate enterprise processes with AI once integration is established.",
      },
      {
        label: "Enterprise AI Strategy",
        href: "/enterprise-ai-strategy",
        description:
          "Build the strategic foundation before integration begins.",
      },
      {
        label: "AI Advisory",
        href: "/ai-advisory",
        description:
          "Expert evaluation of AI vendors and technology decisions.",
      },
    ]}
    faqs={[
      {
        question: "Can you integrate AI with our legacy systems?",
        answer:
          "Yes. Many of our clients run core systems that are 10–20 years old. We specialize in bridging legacy systems with modern AI through API layers, data extraction pipelines, and middleware — without requiring a full platform replacement. The goal is to add AI capabilities alongside existing systems, not replace them.",
      },
      {
        question: "How do you handle data security during integration?",
        answer:
          "Security is foundational to every integration we design. We enforce encryption in transit and at rest, implement least-privilege access controls, maintain data residency compliance, and build audit logging into every data flow. For healthcare clients, we ensure PHI never leaves authorized boundaries. For financial services, we comply with SOX and PCI-DSS data handling requirements.",
      },
      {
        question: "What cloud platforms do you work with?",
        answer:
          "We're vendor-neutral and work across AWS, Azure, GCP, and hybrid/on-premise environments. We recommend the platform that best fits your existing infrastructure, compliance requirements, and team capabilities — not the one we have a partnership with.",
      },
      {
        question: "How long does a typical AI integration take?",
        answer:
          "A single-system integration typically takes 8–12 weeks from architecture review through production deployment. Multi-system integrations or enterprise AI platform builds can take 3–6 months depending on complexity, number of data sources, and compliance requirements.",
      },
      {
        question: "What if the integration fails or performance degrades?",
        answer:
          "We design for failure from the start. Every integration includes circuit breakers, graceful degradation paths, retry logic, and monitoring with alerting. If the AI component fails, the integration falls back to a defined safe state rather than breaking downstream systems.",
      },
      {
        question: "Do you replace our existing integration middleware?",
        answer:
          "Typically no. We work with your existing integration middleware (MuleSoft, Dell Boomi, Apache Kafka, etc.) and extend it to support AI workloads. We only recommend infrastructure changes when your current setup can't meet performance, security, or compliance requirements for AI integration.",
      },
    ]}
  />
);

export default AIIntegration;
