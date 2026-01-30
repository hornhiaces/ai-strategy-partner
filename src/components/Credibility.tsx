const Credibility = () => {
  return (
    <section className="py-20 md:py-30 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-subtle text-sm font-medium tracking-wide uppercase mb-4">
            Background
          </p>
          <h2 className="text-display-sm text-strong mb-6">
            Built on experience, not theory
          </h2>
        </div>

        <div className="bg-surface-elevated rounded-lg p-8 md:p-12 border border-border/50">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I've spent years at the intersection of AI technology and business reality—working with 
              organizations to move from ambitious AI strategies to systems that actually work in production.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              My experience spans <span className="text-strong font-medium">enterprise machine learning 
              platforms</span>, <span className="text-strong font-medium">Generative AI applications</span>, 
              and the governance frameworks that make AI sustainable in regulated industries. I've seen 
              what separates successful AI initiatives from expensive experiments.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              I work with organizations that are serious about AI—not as a marketing exercise, but as a 
              tool for genuine competitive advantage. If you're looking for hype, I'm not the right fit. 
              If you're looking for honest, practical guidance, let's talk.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-strong mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years in tech leadership</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-strong mb-1">50+</div>
              <div className="text-sm text-muted-foreground">AI projects delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-strong mb-1">F500</div>
              <div className="text-sm text-muted-foreground">Enterprise experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-strong mb-1">Series A+</div>
              <div className="text-sm text-muted-foreground">Startup advisory</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
