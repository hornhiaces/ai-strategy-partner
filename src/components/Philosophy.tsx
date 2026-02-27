import { Crosshair, Layers, RefreshCw, Hammer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tenets = [
  {
    icon: Crosshair,
    title: "Strategy without execution fails.",
    description: "A roadmap that sits on a shelf is worthless. Every recommendation must have a clear path to implementation.",
  },
  {
    icon: Layers,
    title: "Execution without business clarity wastes resources.",
    description: "Building AI for its own sake burns budget and credibility. Start with the business outcome, then work backward.",
  },
  {
    icon: RefreshCw,
    title: "Modern AI consulting bridges both.",
    description: "The best AI advisors understand both boardroom priorities and production architecture. That's the bar.",
  },
  {
    icon: Hammer,
    title: "Experience comes from shipping.",
    description: "Real expertise is built by delivering working systems — not just presenting recommendations.",
  },
];

const Philosophy = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="philosophy" className="py-12 md:py-16 px-6 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            Philosophy
          </p>
          <h2 className="text-display-sm text-strong mb-4">
            AI Consulting Should Be Practical
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Modern AI consulting requires execution literacy. If you advise on AI, you must understand real implementation constraints, tooling, workflows, and architecture decisions.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {tenets.map((tenet, index) => (
            <div
              key={tenet.title}
              className={`group p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-on-scroll stagger-${index + 1} ${cardsVisible ? "is-visible" : ""}`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <tenet.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-strong mb-2">{tenet.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {tenet.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
