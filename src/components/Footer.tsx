import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Il Dubbio Di Davide — Tutti i diritti riservati
      </p>
      <div className="flex items-center gap-5">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
          <Youtube size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
