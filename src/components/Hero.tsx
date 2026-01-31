import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex items-center px-6 pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            AI Consulting
          </p>
          
          <h1 className="text-4xl md:text-display text-strong mb-5 leading-tight">
            Moving AI from idea to{" "}
            <span className="text-primary">production</span>
            —responsibly
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            I help enterprise leaders, founders, and organizations navigate the practical realities of 
            AI and Generative AI—from strategic clarity to working systems, especially in regulated environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              size="lg" 
              className="group px-6 py-5 text-base font-semibold rounded-lg shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 py-5 text-base font-medium rounded-lg border-2"
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
