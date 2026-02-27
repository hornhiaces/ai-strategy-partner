import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const FinalCTA = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="contact" className="py-16 md:py-20 px-6 bg-primary text-primary-foreground">
      <div ref={ref} className={`max-w-3xl mx-auto text-center animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
          Ready to Move AI Forward? — Free Consultation
        </h2>
        
        <p className="text-lg text-primary-foreground/85 mb-4 leading-relaxed max-w-2xl mx-auto">
          Whether you're leading AI adoption at an enterprise or building your first AI product as a founder — 
          the first conversation is always <span className="font-semibold text-primary-foreground">free and no-obligation</span>.
        </p>
        
        <p className="text-primary-foreground/60 text-sm mb-10">
          No pitch deck, no sales pressure—just an honest conversation about whether I can help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" variant="secondary" className="group px-8 py-6 text-base font-semibold rounded-lg bg-white text-primary hover:bg-white/95 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <a href="mailto:salinasaiconsulting@outlook.com">
              <Mail className="mr-2 h-4 w-4" />
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          <Button size="lg" variant="ghost" className="px-8 py-6 text-base font-medium rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300" asChild>
            <a href="https://linkedin.com/in/larry-salinas-mba-56394934" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>

        <div className="pt-8 border-t border-primary-foreground/15">
          <p className="text-sm text-primary-foreground/50">Based in Chicago · Working with clients globally</p>
        </div>
      </div>
    </section>;
};
export default FinalCTA;