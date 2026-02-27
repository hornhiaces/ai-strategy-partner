import { ArrowRight, Linkedin, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex items-center px-6 pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 animate-hero-load animate-hero-load-delay-1">
            AI Strategy &amp; Execution
          </p>

          <h1 className="text-4xl md:text-display text-strong mb-5 leading-tight animate-hero-load animate-hero-load-delay-2">
            Enterprise-Level AI Strategy. <span className="text-primary">Practical Execution.</span> Any Size.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed animate-hero-load animate-hero-load-delay-3">
            I help organizations adopt AI responsibly — from boardroom strategy to hands-on product builds.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-hero-load animate-hero-load-delay-4">
            <Button size="lg" className="group px-6 py-5 text-base font-semibold rounded-lg shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300" asChild>
              <a href="mailto:salinasaiconsulting@outlook.com">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button variant="outline" size="lg" className="px-6 py-5 text-base font-medium rounded-lg border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300" asChild>
              <Link to="/hands-on-ai-product-coaching">
                <Rocket className="mr-2 h-4 w-4" />
                Explore Coaching
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="px-6 py-5 text-base font-medium rounded-lg border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300" asChild>
              <a href="/out?to=linkedin" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
