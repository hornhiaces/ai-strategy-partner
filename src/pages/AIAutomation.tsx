import {
  Zap,
  Workflow,
  Shield,
  BarChart3,
  Cpu,
  RefreshCw,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const AIAutomation = () => (
  <ServicePageLayout
    slug="ai-automation"
    title="AI Automation"
    metaTitle="AI Automation Consulting for Enterprises | Salinas AI"
    metaDescription="Transform enterprise operations with intelligent AI automation. From pilot to production-ready systems with compliance built in. Healthcare, finance & government."
    heroTagline="AI Automation Services"
    heroHeading="Enterprise AI Automation That Actually Ships to Production"
    heroDescription="Move beyond proof-of-concept demos. We help enterprises deploy AI-powered automation that works in production, with the governance and operational rigor regulated industries demand."
    features={[
      {
        icon: Zap,
        title: "Intelligent Process Automation",
        description:
          "Identify and automate high-value business processes using AI — document processing, decision support, workflow optimization, and more.",
      },
      {
        icon: Workflow,
        title: "Pilot to Production",
        description:
          "Bridge the gap between AI demo and production system. We build the infrastructure, monitoring, and governance to keep automation running reliably.",
      },
      {
        icon: Shield,
        title: "Compliance-Ready Automation",
        description:
          "AI automation in regulated industries requires audit trails, explainability, and compliance controls. We build them in from the start.",
      },
      {
        icon: BarChart3,
        title: "ROI-Driven Prioritization",
        description:
          "Not every process should be automated. We identify the automation opportunities with the highest business impact and lowest risk.",
      },
      {
        icon: Cpu,
        title: "Generative AI Integration",
        description:
          "Leverage large language models and generative AI for document generation, summarization, analysis, and intelligent customer interactions.",
      },
      {
        icon: RefreshCw,
        title: "Continuous Improvement",
        description:
          "Establish feedback loops, monitoring, and model retraining pipelines to keep AI automation systems performing at their best.",
      },
    ]}
    detailSections={[
      {
        heading: "Why Most AI Automation Projects Fail",
        content:
          "80% of enterprise AI projects never reach production. The gap between a working demo and a production system is massive — requiring governance frameworks, data pipelines, monitoring, error handling, and organizational change management. Salinas AI Consulting specializes in closing this gap, with a proven track record of moving AI from pilot to production in regulated enterprises.",
      },
      {
        heading: "AI Automation in Regulated Industries",
        content:
          "Automating processes in healthcare, financial services, and government adds layers of complexity: audit requirements, explainability mandates, data privacy regulations, and risk management frameworks. We build compliance into every automation initiative from day one, ensuring your AI systems meet HIPAA, SOX, FedRAMP, and industry-specific regulatory requirements.",
      },
      {
        heading: "Building Automation That Your Team Can Own",
        content:
          "We don't create automation black boxes that only we can maintain. Every engagement includes comprehensive team enablement — documentation, training, runbooks, and knowledge transfer so your team can operate, troubleshoot, and evolve AI automation systems independently after our engagement ends.",
      },
    ]}
    relatedServices={[
      {
        label: "AI Consulting",
        href: "/ai-consulting",
        description:
          "End-to-end consulting from assessment through production deployment.",
      },
      {
        label: "Enterprise AI Strategy",
        href: "/enterprise-ai-strategy",
        description:
          "Build a comprehensive AI strategy before automating.",
      },
      {
        label: "AI Integration",
        href: "/ai-integration",
        description:
          "Integrate AI automation into your existing technology stack.",
      },
    ]}
  />
);

export default AIAutomation;
