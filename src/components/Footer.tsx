import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-1.5">
            <span className="text-base font-semibold tracking-tight text-strong">
              Salinas
            </span>
            <span className="w-px h-4 bg-primary/40" />
            <span className="text-base font-medium tracking-tight text-primary">
              AI Consulting
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="https://linkedin.com/in/larry-salinas-mba-56394934"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Salinas AI Consulting · Independent advisory services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
