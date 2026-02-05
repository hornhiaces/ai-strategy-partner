import { Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-lg font-semibold tracking-tight text-strong">
                Salinas
              </span>
              <span className="w-px h-5 bg-primary/40" />
              <span className="text-lg font-medium tracking-tight text-primary">
                AI Consulting
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise AI advisory helping organizations navigate strategy, implementation, and governance in regulated industries.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold text-strong mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-strong mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:salinasaiconsulting@outlook.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                salinasaiconsulting@outlook.com
              </a>
              <a
                href="https://linkedin.com/in/larry-salinas-mba-56394934"
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
              © {new Date().getFullYear()} Salinas AI Consulting. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Independent AI advisory services · Chicago, IL · Serving clients globally
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
