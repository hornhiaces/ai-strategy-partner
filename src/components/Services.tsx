import { Target, Compass, Shield, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Compass,
    title: "AI Strategy",
    description:
      "Figure out where AI actually helps your business—and where it doesn't. You get a clear plan, not a buzzword-filled deck.",
  },
  {
    icon: Target,
    title: "Pilot to Production",
    description:
      "Move past the demo stage. I help you ship AI that works in the real world, with the governance and ops to keep it running.",
  },
  {
    icon: Shield,
    title: "Regulated Industries",
    description:
      "Finance, healthcare, government—I know what it takes to deploy AI when compliance and trust aren't negotiable.",
  },
  {
    icon: Zap,
    title: "Technical Due Diligence",
    description:
      "Hiring AI talent or evaluating a vendor? Get an honest, expert read before you commit.",
  },
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-12 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            Services
          </p>
          <h2 className="text-display-sm text-strong mb-4">
            What I do
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Focused on outcomes: working systems, clear decisions, and teams ready to own it.
            <span className="block mt-2 text-primary font-medium">First conversation is always free.</span>
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-on-scroll stagger-${index + 1} ${cardsVisible ? 'is-visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-strong mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
