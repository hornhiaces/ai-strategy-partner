import { ArrowRight, Linkedin, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SEOHead from "@/components/SEOHead";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";
import type { LucideIcon } from "lucide-react";

const SITE_URL = "https://salinas-ai-consulting.com";

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicePageProps {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroHeading: string;
  heroDescription: string;
  features: ServiceFeature[];
  detailSections: {
    heading: string;
    content: string;
  }[];
  relatedServices: {
    label: string;
    href: string;
    description: string;
  }[];
}

const ServicePageLayout = ({
  slug,
  title,
  metaTitle,
  metaDescription,
  heroTagline,
  heroHeading,
  heroDescription,
  features,
  detailSections,
  relatedServices,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={metaTitle} description={metaDescription} path={`/${slug}`} />
      <ServiceSchema
        name={title}
        description={metaDescription}
        url={`${SITE_URL}/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: title, url: `${SITE_URL}/${slug}` },
        ]}
      />

      <Header />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="pt-20 pb-2 px-6 bg-gradient-subtle"
      >
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-strong font-medium">{title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-8 pb-12 md:pt-12 md:pb-16 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
              {heroTagline}
            </p>
            <h1 className="text-4xl md:text-display text-strong mb-5 leading-tight">
              {heroHeading}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="group px-6 py-5 text-base font-semibold rounded-lg shadow-md shadow-primary/20"
                asChild
              >
                <a href="mailto:salinasaiconsulting@outlook.com">
                  Request a consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-5 text-base font-medium rounded-lg border-2 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a
                  href="https://linkedin.com/in/larry-salinas-mba-56394934"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-display-sm text-strong mb-8 text-center">
            What We Deliver
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-strong mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-12 md:py-16 px-6 bg-section-alt">
        <div className="max-w-4xl mx-auto space-y-10">
          {detailSections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-bold text-strong mb-4">
                {section.heading}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-display-sm text-strong mb-8 text-center">
            Explore Related Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-strong mb-2 group-hover:text-primary transition-colors">
                  {service.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-8 leading-relaxed">
            The first conversation is always free and no-obligation. Let's
            discuss how we can help your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="group px-8 py-6 text-base font-semibold rounded-lg bg-white text-primary hover:bg-white/95 shadow-lg"
              asChild
            >
              <a href="mailto:salinasaiconsulting@outlook.com">
                <Mail className="mr-2 h-4 w-4" />
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ServicePageLayout;
