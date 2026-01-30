import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-20 md:py-30">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <p className="text-subtle text-sm font-medium tracking-wide uppercase mb-6">
          Independent AI Consultant
        </p>
        
        <h1 className="text-display-sm md:text-display text-strong mb-8">
          Moving AI from idea to production—responsibly
        </h1>
        
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          I help enterprise leaders, founders, and organizations navigate the practical realities of 
          AI and Generative AI—from strategic clarity to working systems, especially in regulated environments 
          where getting it right matters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group px-8 py-6 text-base font-medium"
          >
            Start a conversation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-base font-medium"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
