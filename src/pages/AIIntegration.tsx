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
          "The biggest risk in AI integration isn't the AI — it's the impact on existing systems. Poorly planned integrations break data flows, create security vulnerabilities, and disrupt operations. We take an architecture-first approach, mapping integration points, data flows, and failure modes before writing a single line of code. This prevents the costly rework that plagues most enterprise AI deployments.",
      },
      {
        heading: "Vendor-Neutral Integration Guidance",
        content:
          "As an independent consultant, we have no technology partnerships or vendor commissions. We recommend the best integration approach for your specific situation — whether that means cloud-native AI services, open-source frameworks, or specialized platforms. Your architecture decisions should be driven by your requirements, not our revenue model.",
      },
      {
        heading: "Integration for Regulated Environments",
        content:
          "Integrating AI into healthcare, financial services, and government environments requires careful attention to data sovereignty, audit trails, access controls, and regulatory compliance. We design integration architectures that satisfy both technical requirements and compliance mandates, ensuring your AI systems are production-ready from a regulatory perspective.",
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
  />
);

export default AIIntegration;
