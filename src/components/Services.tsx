import { Compass, Target, Shield, Zap, Rocket, Wrench, Bot, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const enterpriseServices = [
  {
    icon: Compass,
    title: "AI Adoption Roadmap",
    description: "A clear, phased plan that maps AI initiatives to business outcomes—not a buzzword-filled deck.",
  },
  {
    icon: Shield,
    title: "Governance & Risk Alignment",
    description: "AI governance that satisfies regulators while enabling innovation. Built for your industry.",
  },
  {
    icon: Zap,
    title: "Architecture Translation",
    description: "Bridge business and tech teams. Translate executive vision into technical requirements and vice versa.",
  },
  {
    icon: Target,
    title: "Lean Engagement Model",
    description: "No junior consultant layers. Direct access to senior expertise. Leaner and more direct than large firms.",
  },
];

const coachingServices = [
  {
    icon: Rocket,
    title: "Build Your First AI App",
    description: "Hands-on guidance building real AI-powered web applications from concept to launch.",
  },
  {
    icon: Bot,
    title: "Custom GPTs for Business",
    description: "Create custom GPTs and AI workflows tailored to your specific business operations.",
  },
  {
    icon: Wrench,
    title: "AI Workflow Design",
    description: "Design practical AI workflows using modern tools. Real implementation, not theory.",
  },
  {
    icon: Map,
    title: "Prototype to Production",
    description: "Rapid prototype to production roadmap. Ship AI products that work in the real world.",
  },
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: track1Ref, isVisible: track1Visible } = useScrollAnimation();
  const { ref: track2Ref, isVisible: track2Visible } = useScrollAnimation();

  return (
    <section id="services" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-14 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            Services
          </p>
          <h2 className="text-display-sm text-strong mb-4">
            Two Tracks. One Execution Philosophy.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Whether you're an enterprise navigating AI adoption or a founder building your first AI product — the same practical, outcome-focused approach applies.
          </p>
        </div>

        {/* Track 1: Enterprise */}
        <div
          ref={track1Ref}
          className={`mb-14 animate-on-scroll ${track1Visible ? "is-visible" : ""}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-primary text-xs font-semibold tracking-wide uppercase mb-1">Track 1</p>
              <h3 className="text-2xl font-bold text-strong">Enterprise AI Strategy</h3>
              <p className="text-muted-foreground text-sm mt-1">For mid-market to enterprise organizations</p>
            </div>
            <Link
              to="/enterprise-ai-strategy"
              className="hidden sm:inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
            >
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseServices.map((service, index) => (
              <Link
                to="/enterprise-ai-strategy"
                key={service.title}
                className={`group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 stagger-${index + 1} ${track1Visible ? "is-visible" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-strong mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
          <Link
            to="/enterprise-ai-strategy"
            className="sm:hidden inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline mt-4"
          >
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Track 2: Coaching */}
        <div
          ref={track2Ref}
          className={`animate-on-scroll ${track2Visible ? "is-visible" : ""}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-primary text-xs font-semibold tracking-wide uppercase mb-1">Track 2</p>
              <h3 className="text-2xl font-bold text-strong">Hands-On AI Product Coaching</h3>
              <p className="text-muted-foreground text-sm mt-1">For founders, entrepreneurs & small businesses</p>
            </div>
            <Link
              to="/hands-on-ai-product-coaching"
              className="hidden sm:inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
            >
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingServices.map((service, index) => (
              <Link
                to="/hands-on-ai-product-coaching"
                key={service.title}
                className={`group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 stagger-${index + 1} ${track2Visible ? "is-visible" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-strong mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
          <Link
            to="/hands-on-ai-product-coaching"
            className="sm:hidden inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline mt-4"
          >
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <p className="text-center mt-10 text-sm text-primary font-medium">
          First conversation is always free.
        </p>
      </div>
    </section>
  );
};

export default Services;
