import {
  Compass,
  Target,
  BarChart3,
  FileCheck,
  Building2,
  TrendingUp,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const EnterpriseAIStrategy = () => (
  <ServicePageLayout
    slug="enterprise-ai-strategy"
    title="Enterprise AI Strategy"
    metaTitle="Enterprise AI Strategy Consulting | Salinas AI Consulting"
    metaDescription="Strategic AI planning for enterprise organizations. Build a clear implementation roadmap aligned with business goals. Expertise in healthcare, finance & government."
    heroTagline="Enterprise AI Strategy"
    heroHeading="AI Strategy That Connects Technology to Business Outcomes"
    heroDescription="Stop investing in AI without a plan. We help enterprise leaders build actionable AI strategies that align with business objectives, regulatory requirements, and organizational readiness."
    features={[
      {
        icon: Compass,
        title: "Strategic AI Roadmap",
        description:
          "A prioritized, phased plan that maps AI initiatives to business outcomes with clear milestones, resource requirements, and success metrics.",
      },
      {
        icon: Target,
        title: "Opportunity Assessment",
        description:
          "Systematic evaluation of where AI creates measurable value in your organization — and where it doesn't. No buzzwords, just honest analysis.",
      },
      {
        icon: BarChart3,
        title: "ROI Modeling",
        description:
          "Data-driven business cases for AI investments that executives and boards can trust, with realistic timelines and risk factors built in.",
      },
      {
        icon: FileCheck,
        title: "Governance Framework",
        description:
          "AI governance structures that satisfy regulatory requirements while enabling innovation — built for your specific industry and risk profile.",
      },
      {
        icon: Building2,
        title: "Organizational Readiness",
        description:
          "Assess and develop the people, processes, and culture needed to make AI initiatives successful at enterprise scale.",
      },
      {
        icon: TrendingUp,
        title: "Competitive Analysis",
        description:
          "Understand how AI is reshaping your industry and where strategic AI adoption creates competitive advantage.",
      },
    ]}
    detailSections={[
      {
        heading: "Strategy Without Implementation Is Just a Slide Deck",
        content:
          "Many consulting firms deliver AI strategies that sit on a shelf. Our strategies are built for execution — with clear technical requirements, vendor-neutral technology recommendations, governance frameworks, and team enablement plans. Every recommendation comes with a practical path to implementation because strategy without action is worthless.",
      },
      {
        heading: "Enterprise AI Strategy for Regulated Industries",
        content:
          "AI strategy in healthcare, financial services, and government requires balancing innovation with compliance. We build strategies that account for HIPAA, SOX, FedRAMP, and industry-specific regulations from the start — not as an afterthought. This prevents costly rework and regulatory delays that derail AI initiatives in regulated environments.",
      },
      {
        heading: "From C-Suite Vision to Technical Execution",
        content:
          "Enterprise AI strategy must bridge the gap between executive vision and technical reality. We translate business objectives into technical requirements, create governance structures that satisfy both legal teams and engineering teams, and build organizational change management into every strategic recommendation. The result: AI strategies that actually get implemented.",
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
        label: "AI Integration",
        href: "/ai-integration",
        description:
          "Seamlessly integrate AI into your existing enterprise technology stack.",
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

export default EnterpriseAIStrategy;
