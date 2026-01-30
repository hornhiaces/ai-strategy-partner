import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Deep dive into your context, constraints, and what success actually looks like for your organization.",
    outcomes: ["Stakeholder alignment", "Clear problem definition", "Success criteria"],
  },
  {
    number: "02",
    title: "Assess",
    description: "Honest evaluation of technical feasibility, data readiness, and organizational capacity.",
    outcomes: ["Feasibility analysis", "Risk assessment", "Resource mapping"],
  },
  {
    number: "03",
    title: "Design",
    description: "Architecture and governance frameworks built for your specific regulatory and operational environment.",
    outcomes: ["Technical architecture", "Governance model", "Implementation roadmap"],
  },
  {
    number: "04",
    title: "Build",
    description: "Disciplined execution with continuous stakeholder alignment and course correction.",
    outcomes: ["Working system", "Documentation", "Team enablement"],
  },
  {
    number: "05",
    title: "Sustain",
    description: "Handoff that sticks—your team owns it, understands it, and can evolve it.",
    outcomes: ["Knowledge transfer", "Operational playbooks", "Ongoing advisory"],
  },
];

const DeliveryFramework = () => {
  return (
    <section className="py-20 md:py-30 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-subtle text-sm font-medium tracking-wide uppercase mb-4">
            Delivery Approach
          </p>
          <h2 className="text-display-sm text-strong mb-6">
            A disciplined path from strategy to production
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Every engagement follows a structured approach, adapted to your pace and circumstances.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-[60px] top-8 bottom-8 w-px bg-border" />
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative flex flex-col md:flex-row gap-6 md:gap-10"
              >
                {/* Step number */}
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-[120px] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm z-10">
                      {step.number}
                    </div>
                    <span className="text-lg font-semibold text-strong md:hidden">
                      {step.title}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-card rounded-lg p-6 md:p-8 border border-border/50">
                  <h3 className="hidden md:block text-xl font-semibold text-strong mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {step.outcomes.map((outcome) => (
                      <span 
                        key={outcome}
                        className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground bg-secondary px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFramework;
