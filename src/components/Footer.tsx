import { Linkedin, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sectionLinks = [
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Enterprise AI Strategy", href: "/enterprise-ai-strategy" },
  { label: "AI Product Coaching", href: "/hands-on-ai-product-coaching" },
  { label: "AI Consulting", href: "/ai-consulting" },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "AI Integration", href: "/ai-integration" },
  { label: "AI Advisory", href: "/ai-advisory" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/" + href);
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-1.5 mb-4">
              <span className="text-lg font-semibold tracking-tight text-strong">
                Salinas
              </span>
              <span className="w-px h-5 bg-primary/40" />
              <span className="text-lg font-medium tracking-tight text-primary">
                AI Consulting
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise-level AI strategy with hands-on execution capability. Serving organizations of any size.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-strong mb-4">Services</h3>
            <nav aria-label="Service pages" className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold text-strong mb-4">Quick Links</h3>
            <nav aria-label="Page sections" className="flex flex-col gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-strong mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:${"salinasaiconsulting"}@${"outlook.com"}`;
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                salinasaiconsulting [at] outlook.com
              </a>
              <a
                href="/out?to=linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Salinas AI Consulting. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Independent AI advisory services &middot; Chicago, IL &middot; Serving clients globally
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
