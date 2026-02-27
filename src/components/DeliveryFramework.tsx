import { Search, BarChart3, PenTool, Hammer, RefreshCw } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Understand",
    description: "Your context, constraints, and what success actually looks like.",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Assess",
    description: "Technical feasibility, data readiness, and organizational capacity.",
  },
  {
    num: "03",
    icon: PenTool,
    title: "Design",
    description: "Architecture and governance built for your specific environment.",
  },
  {
    num: "04",
    icon: Hammer,
    title: "Build",
    description: "Disciplined execution with continuous alignment and course correction.",
  },
  {
    num: "05",
    icon: RefreshCw,
    title: "Sustain",
    description: "Handoff that sticks—your team owns it and can evolve it.",
  },
];

const DeliveryFramework = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="approach" className="py-12 md:py-16 px-6 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-12 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            The Framework
          </p>
          <h2 className="text-display-sm text-strong mb-4">
            Our Proven AI Implementation Approach
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            A disciplined, repeatable approach that gets AI out of the lab and into your business.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div 
          ref={contentRef}
          className={`hidden md:block relative animate-on-scroll ${contentVisible ? 'is-visible' : ''}`}
        >
          {/* Connecting line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.num} 
                className="relative text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-background border-2 border-primary/20 group-hover:border-primary/50 flex items-center justify-center mb-5 shadow-lg shadow-primary/5 transition-all duration-300">
                  <step.icon className="h-8 w-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                
                <h3 className="text-base font-semibold text-strong mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stack */}
        <div className={`md:hidden space-y-4 animate-on-scroll ${contentVisible ? 'is-visible' : ''}`}>
          {steps.map((step, index) => (
            <div 
              key={step.num}
              className={`flex items-start gap-4 p-4 bg-background rounded-xl border border-border stagger-${Math.min(index + 1, 5)}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-strong mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryFramework;
