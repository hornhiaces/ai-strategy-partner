import { ArrowRight, Calendar, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-30 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-display-sm text-strong mb-6">
          Let's have a conversation
        </h2>
        
        <p className="text-body-lg text-muted-foreground mb-4 leading-relaxed">
          Every engagement starts with understanding your specific situation. 
          I offer a <span className="text-strong font-medium">free initial consultation</span> to 
          explore whether I can genuinely help—no pitch, no pressure.
        </p>
        
        <p className="text-muted-foreground mb-10">
          If we're not a fit, I'll tell you honestly and point you in a better direction.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="group px-8 py-6 text-base font-medium"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Schedule a call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-base font-medium"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send an email
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <span className="text-border">•</span>
          <span>Based in [City] • Working globally</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
