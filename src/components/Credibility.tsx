import { Building2, Shield, Users } from "lucide-react";

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
  },
];

const Credibility = () => {
  return (
    <section id="about" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            About
          </p>
          <h2 className="text-display-sm text-strong mb-4">
            Built on experience, not theory
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Years at the intersection of AI technology and business reality—helping organizations 
            move from ambitious strategies to systems that actually work.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-section-alt rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Years in tech</div>
          </div>
          <div className="text-center p-6 bg-section-alt rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">AI projects</div>
          </div>
          <div className="text-center p-6 bg-section-alt rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">3</div>
            <div className="text-sm text-muted-foreground">Regulated sectors</div>
          </div>
          <div className="text-center p-6 bg-section-alt rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Independent</div>
          </div>
        </div>

        {/* Credentials */}
        <div className="grid md:grid-cols-3 gap-6">
          {credentials.map((cred) => (
            <div 
              key={cred.title}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <cred.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-strong mb-2">{cred.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;
