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
        heading: "Who Needs an AI Strategy Engagement?",
        content:
          "This service is built for C-suite executives, board members, and senior technology leaders who need to answer a fundamental question: where should we invest in AI, and how do we get there without wasting capital or creating compliance exposure?",
        bullets: [
          "Organizations spending on AI without a coordinated enterprise-wide plan",
          "Boards requesting an AI roadmap tied to measurable business outcomes",
          "Companies facing competitive pressure from AI-native market entrants",
          "Regulated enterprises that need a governance-first approach to AI adoption",
        ],
      },
      {
        heading: "What You Receive",
        content:
          "Our strategy engagements are deliverable-heavy. You walk away with documents your team can act on immediately.",
        bullets: [
          "12-month AI roadmap with prioritized initiatives, dependencies, and resource plans",
          "Business case models for top 3–5 AI opportunities with NPV and payback estimates",
          "AI governance charter covering ethics policy, model risk management, and oversight roles",
          "Organizational readiness assessment with talent gap analysis and hiring recommendations",
          "Technology landscape evaluation comparing build vs. buy vs. partner options",
          "Board-ready executive summary with risk-adjusted investment recommendations",
        ],
      },
      {
        heading: "How an AI Strategy Engagement Works",
        content:
          "Our strategy process is structured around four phases over 6–8 weeks. Each phase builds on the last and involves close collaboration with your leadership team.",
        bullets: [
          "Weeks 1–2: Landscape — executive interviews, data estate review, competitive scan",
          "Weeks 3–4: Analysis — opportunity scoring, feasibility modeling, compliance mapping",
          "Weeks 5–6: Design — roadmap construction, governance drafting, organizational recommendations",
          "Weeks 7–8: Delivery — executive presentation, stakeholder alignment, implementation kickoff plan",
        ],
      },
      {
        heading: "Enterprise AI Strategy for Regulated Industries",
        content:
          "AI strategy in healthcare, financial services, and government requires balancing innovation with compliance. We build strategies that account for HIPAA, SOX, FedRAMP, and industry-specific regulations from the start — not as an afterthought. This prevents costly rework and regulatory delays that derail AI initiatives in regulated environments.",
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
          "Independent evaluation of AI vendors, talent, and investment decisions.",
      },
    ]}
    faqs={[
      {
        question: "How long does an AI strategy engagement take?",
        answer:
          "Most strategy engagements run 6–8 weeks. Shorter engagements (3–4 weeks) are possible for focused assessments. The timeline depends on the number of business units involved, data complexity, and stakeholder availability.",
      },
      {
        question: "Do we need to have AI experience before starting a strategy engagement?",
        answer:
          "No. Many clients come to us precisely because they're at the beginning. We assess your current state — data maturity, infrastructure, team skills — and build a strategy that matches your organization's actual readiness, not an idealized version.",
      },
      {
        question: "What's the difference between AI strategy and a technology roadmap?",
        answer:
          "A technology roadmap lists tools and timelines. An AI strategy connects AI capabilities to specific business outcomes, addresses organizational change, governance, compliance, and talent — and provides the 'why' behind every technology decision. Strategy drives the roadmap, not the other way around.",
      },
      {
        question: "Can you present the strategy to our board?",
        answer:
          "Yes. Every strategy engagement includes a board-ready executive summary, and we regularly present findings directly to executive committees and boards. We translate technical AI concepts into business language that resonates with non-technical decision-makers.",
      },
      {
        question: "What happens after the strategy is delivered?",
        answer:
          "You own the strategy and all deliverables outright. Many clients then engage us for implementation support through our AI Consulting or AI Integration services. Others execute internally using the roadmap and governance framework we provided. Either path is fully supported.",
      },
      {
        question: "How do you ensure the strategy doesn't just sit on a shelf?",
        answer:
          "We build implementation DNA into every strategy: named owners for each initiative, specific quarterly milestones, resource requirements, and a governance structure with built-in review cadences. We also offer optional quarterly check-ins to help maintain momentum post-engagement.",
      },
    ]}
  />
);

export default EnterpriseAIStrategy;
