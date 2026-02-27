import { Smartphone, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ComingSoon = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-16 px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center animate-on-scroll ${isVisible ? "is-visible" : ""}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
          <Smartphone className="h-3.5 w-3.5" />
          Coming Soon
        </div>
        <h2 className="text-display-sm text-strong mb-4">
          Mobile AI Product Advisory
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed mb-6">
          Expanding into mobile AI-enabled applications — helping organizations design, build, and ship AI-powered mobile experiences with the same practical execution approach.
        </p>
        <a
          href="mailto:salinasaiconsulting@outlook.com"
          className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
        >
          Get notified when it launches
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
};

export default ComingSoon;
