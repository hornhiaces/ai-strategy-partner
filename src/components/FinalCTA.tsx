import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary-foreground/70 text-sm font-semibold tracking-wide uppercase mb-4">
          Get Started
        </p>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's have a conversation
        </h2>
        
        <p className="text-lg text-primary-foreground/80 mb-4 leading-relaxed max-w-2xl mx-auto">
          Every engagement starts with understanding your specific situation. 
          I offer a <span className="font-semibold text-primary-foreground">free initial consultation</span> to 
          explore whether I can genuinely help.
        </p>
        
        <p className="text-primary-foreground/60 mb-10">
          No pitch, no pressure. If we're not a fit, I'll tell you honestly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button 
            size="lg" 
            variant="secondary"
            className="group px-8 py-6 text-base font-semibold rounded-lg bg-white text-primary hover:bg-white/90 shadow-lg"
          >
            Start a conversation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-6 text-base font-medium rounded-lg border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            Connect on LinkedIn
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/60">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email directly
          </a>
          <span className="text-primary-foreground/30">•</span>
          <span>Based in [City] • Working globally</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
