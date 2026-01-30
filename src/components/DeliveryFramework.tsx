const steps = [
  {
    year: "01",
    title: "Understand",
    description: "Deep dive into your context, constraints, and what success actually looks like.",
  },
  {
    year: "02",
    title: "Assess",
    description: "Honest evaluation of technical feasibility, data readiness, and organizational capacity.",
  },
  {
    year: "03",
    title: "Design",
    description: "Architecture and governance frameworks built for your specific environment.",
  },
  {
    year: "04",
    title: "Build",
    description: "Disciplined execution with continuous stakeholder alignment and course correction.",
  },
  {
    year: "05",
    title: "Sustain",
    description: "Handoff that sticks—your team owns it, understands it, and can evolve it.",
  },
];

const DeliveryFramework = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            Our Approach
          </p>
          <h2 className="text-display-sm text-strong">
            A disciplined path to production
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.year} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10 shadow-lg shadow-primary/20">
                    {step.year}
                  </div>
                </div>
                
                {/* Mobile number */}
                <div className="md:hidden flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.year}
                  </div>
                  <h3 className="text-lg font-semibold text-strong">{step.title}</h3>
                </div>
                
                {/* Content */}
                <div className="md:text-center">
                  <h3 className="hidden md:block text-lg font-semibold text-strong mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed md:pl-0 pl-13">
                    {step.description}
                  </p>
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
