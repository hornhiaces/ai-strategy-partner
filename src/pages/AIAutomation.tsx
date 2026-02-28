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
        heading: "Who Benefits from AI Automation Consulting?",
        content:
          "This service is designed for operations leaders, process owners, and technology teams in organizations where manual processes create bottlenecks, errors, or compliance risk.",
        bullets: [
          "Healthcare operations teams processing claims, prior authorizations, or clinical documentation",
          "Financial services firms automating loan processing, KYC/AML checks, or regulatory reporting",
          "Government agencies digitizing case management, benefits adjudication, or FOIA requests",
          "Any enterprise where human-in-the-loop AI can reduce error rates and processing time",
        ],
      },
      {
        heading: "Automation Deliverables",
        content:
          "We deliver working automation systems, not slide decks. Every engagement produces production-ready outputs.",
        bullets: [
          "Process automation feasibility matrix scoring 10–20 candidate workflows",
          "Production-ready automation for 1–3 priority workflows with monitoring dashboards",
          "Compliance documentation: audit trails, explainability reports, data lineage maps",
          "Runbooks and standard operating procedures for ongoing operations",
          "Model performance baselines with drift detection and alerting",
          "Team training covering troubleshooting, retraining triggers, and escalation procedures",
        ],
      },
      {
        heading: "How an Automation Engagement Works",
        content:
          "Our automation engagements are structured to deliver value incrementally — you see working automation early, not just at the end.",
        bullets: [
          "Weeks 1–2: Process mining — document current workflows, identify candidates, score by ROI",
          "Weeks 3–4: Design — architecture, data pipeline design, compliance requirements mapping",
          "Weeks 5–8: Build — iterative development with weekly demos and stakeholder feedback",
          "Weeks 9–10: Harden — production monitoring, error handling, load testing, compliance validation",
          "Weeks 11–12: Deploy & Transfer — go-live support, team training, runbook handoff",
        ],
      },
      {
        heading: "Risks Reduced Through Proper AI Automation",
        content:
          "Done right, AI automation doesn't just save time — it systematically reduces operational and compliance risk across your organization.",
        bullets: [
          "Manual processing errors reduced through consistent, auditable AI decision support",
          "Compliance gaps closed with automated audit trails and explainability logging",
          "Key-person dependencies eliminated by encoding institutional knowledge into workflows",
          "Processing time SLAs met consistently through parallel, always-on automation",
        ],
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
    faqs={[
      {
        question: "What types of processes are good candidates for AI automation?",
        answer:
          "The best candidates are high-volume, rule-based processes with structured inputs — document processing, data extraction, classification, routing, and compliance checking. We also automate semi-structured workflows using LLMs for summarization, analysis, and intelligent triage. During discovery, we score 10–20 candidate processes on volume, complexity, error rate, and compliance impact.",
      },
      {
        question: "How do you handle AI automation in regulated environments?",
        answer:
          "Compliance is built in from day one, not bolted on after deployment. We design audit trails, explainability layers, and human-in-the-loop checkpoints based on your regulatory framework — whether that's HIPAA, SOX, FINRA, or FedRAMP. Every automation includes documentation sufficient for regulatory review.",
      },
      {
        question: "What's the typical ROI timeline for AI automation?",
        answer:
          "Most clients see measurable ROI within 3–6 months of deployment. Quick-win automations like document processing or routing often pay for themselves within the first quarter. More complex automations like predictive decision support take 6–12 months for full ROI but show early indicators within weeks.",
      },
      {
        question: "Can you automate processes that involve unstructured data?",
        answer:
          "Yes. Large language models have dramatically expanded what can be automated. We build automations that handle PDFs, emails, clinical notes, contracts, and other unstructured content — with appropriate confidence thresholds and human review for edge cases.",
      },
      {
        question: "What happens when the automation makes a mistake?",
        answer:
          "Every automation we build includes confidence scoring, exception routing, and human-in-the-loop escalation. When the system encounters an edge case or low-confidence decision, it flags it for human review. We also build monitoring dashboards that track accuracy over time and alert on drift.",
      },
      {
        question: "Will our team need to maintain the automation after you leave?",
        answer:
          "Yes, and we make sure they can. Every engagement includes comprehensive handoff: runbooks, troubleshooting guides, retraining procedures, and hands-on training sessions. We design automations for maintainability, not dependency.",
      },
    ]}
  />
);

export default AIAutomation;
