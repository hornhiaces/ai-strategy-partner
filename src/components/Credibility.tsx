import { ChevronRight } from "lucide-react";

const values = [
  { title: "Clarity", description: "Clear thinking and honest assessment over hype" },
  { title: "Integrity", description: "Recommendations that serve your interests, not mine" },
  { title: "Results", description: "Focus on working systems, not impressive slides" },
];

const Credibility = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column - Story */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
              Background
            </p>
            <h2 className="text-display-sm text-strong mb-6">
              Built on experience,{" "}
              <span className="text-primary">not theory</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I've spent years at the intersection of AI technology and business reality—working with 
                organizations to move from ambitious AI strategies to systems that actually work.
              </p>
              <p>
                My experience spans enterprise ML platforms, Generative AI applications, 
                and governance frameworks in regulated industries. I've seen what separates 
                successful AI initiatives from expensive experiments.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years in tech leadership</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">AI projects delivered</div>
              </div>
            </div>
          </div>

          {/* Right column - Values */}
          <div className="bg-section-alt rounded-2xl p-8 md:p-10">
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
              Our Values
            </p>
            <h3 className="text-2xl font-semibold text-strong mb-8">
              Principles that guide every engagement
            </h3>
            
            <div className="space-y-4">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="group flex items-start gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-strong mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
