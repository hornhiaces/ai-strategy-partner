import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 py-20 md:py-30 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            AI Consulting
          </p>
          
          <h1 className="text-display-sm md:text-display text-strong mb-6 leading-tight">
            Moving AI from idea to{" "}
            <span className="text-primary">production</span>
            —responsibly
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I help enterprise leaders, founders, and organizations navigate the practical realities of 
            AI and Generative AI—from strategic clarity to working systems, especially in regulated environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base font-medium rounded-lg border-2"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
