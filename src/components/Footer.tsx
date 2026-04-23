import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";
import { band, social } from "@/data/band";
import { useConsent } from "@/context/ConsentContext";

const Footer = () => {
  const { openModal } = useConsent();

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto px-4 flex flex-col gap-6">
        {/* Prima riga: copyright + social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {band.name} — Tutti i diritti riservati
          </p>
          <div className="flex items-center gap-5">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href={social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href={social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <Music2 size={20} />
            </a>
          </div>
        </div>

        {/* Seconda riga: link legali */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 text-xs text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden md:inline">·</span>
          <Link to="/cookie-policy" className="hover:text-primary transition-colors">
            Cookie Policy
          </Link>
          <span className="hidden md:inline">·</span>
          <button
            onClick={openModal}
            className="hover:text-primary transition-colors"
          >
            Gestisci cookie
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
