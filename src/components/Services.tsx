import { Target, Compass, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategic Clarity",
    description:
      "Cut through the noise. I help leadership teams identify where AI can genuinely move the needle—and where it can't. No hype, just honest assessment.",
  },
  {
    icon: Target,
    title: "From Pilot to Production",
    description:
      "Most AI projects stall between proof-of-concept and real deployment. I help organizations bridge that gap with practical roadmaps and execution discipline.",
  },
  {
    icon: Shield,
    title: "Responsible AI in Regulated Environments",
    description:
      "Financial services, healthcare, government—I've worked in sectors where compliance isn't optional. I build AI systems that earn stakeholder trust.",
  },
  {
    icon: Zap,
    title: "Technical Advisory & Recruiting",
    description:
      "Need to evaluate AI talent or validate technical decisions? I provide objective, expert perspective to help you build the right team.",
  },
];

const Services = () => {
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
              How I Help
            </p>
            <h2 className="text-display-sm text-strong">
              Practical AI consulting
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            I focus on outcomes that matter: working systems, informed decisions, and teams set up for success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-strong mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
