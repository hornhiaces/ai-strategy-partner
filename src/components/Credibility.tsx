import { Building2, Shield, Users, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const credentials = [
  {
    icon: Building2,
    title: "Enterprise Scale",
    description: "Led AI initiatives at organizations with complex stakeholder landscapes and high stakes"
  },
  {
    icon: Shield,
    title: "Regulated Industries",
    description: "Finance, healthcare, government—where compliance and trust aren't optional"
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    description: "Bridged the gap between technical teams, executives, and business stakeholders"
  }
];

const trustIndicators = [
  "Independent & Vendor-Neutral",
  "MBA Qualified",
  "Enterprise Vetted",
  "NDA Protected"
];

const Credibility = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            About
          </p>
          <h2 className="text-display-sm text-strong mb-4">
            Why Choose Salinas AI Consulting
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Years at the intersection of AI technology and business reality—helping organizations 
            move from ambitious strategies to systems that actually work.
          </p>
        </div>

        {/* Stats row */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {[
            { value: "15+", label: "Years in tech" },
            { value: "50+", label: "AI/Tech projects" },
            { value: "3", label: "Regulated sectors" },
            { value: "100%", label: "Independent" },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center p-5 md:p-6 bg-section-alt rounded-xl border border-transparent hover:border-primary/20 transition-colors duration-300 animate-on-scroll stagger-${index + 1} ${statsVisible ? 'is-visible' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {credentials.map((cred, index) => (
            <div
              key={cred.title}
              className={`group p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-on-scroll stagger-${index + 1} ${cardsVisible ? 'is-visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                <cred.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-strong mb-2">{cred.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-3 pt-8 border-t border-border/50">
          {trustIndicators.map((indicator) => (
            <div
              key={indicator}
              className="trust-badge"
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{indicator}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;
