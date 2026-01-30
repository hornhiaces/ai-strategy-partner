import { Target, Compass, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategic Clarity",
    description:
      "Cut through the noise. I help leadership teams identify where AI can genuinely move the needle—and where it can't. No hype, just honest assessment of opportunities and risks.",
  },
  {
    icon: Target,
    title: "From Pilot to Production",
    description:
      "Most AI projects stall between proof-of-concept and real deployment. I help organizations bridge that gap with practical roadmaps, governance frameworks, and execution discipline.",
  },
  {
    icon: Shield,
    title: "Responsible AI in Regulated Environments",
    description:
      "Financial services, healthcare, government—I've worked in sectors where compliance isn't optional. I bring experience building AI systems that satisfy regulators and earn stakeholder trust.",
  },
  {
    icon: Zap,
    title: "Technical Advisory & Recruiting Support",
    description:
      "Need to evaluate AI talent or validate technical decisions? I provide objective, expert perspective to help you build the right team and make sound technology choices.",
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-30 px-6 bg-gradient-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-subtle text-sm font-medium tracking-wide uppercase mb-4">
            How I Help
          </p>
          <h2 className="text-display-sm text-strong mb-6">
            Practical AI consulting
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            I focus on outcomes that matter: working systems, informed decisions, and teams set up for success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-surface-elevated rounded-lg p-8 border border-border/50 hover:border-border transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent-teal-light flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 accent-teal" />
              </div>
              <h3 className="text-xl font-semibold text-strong mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
