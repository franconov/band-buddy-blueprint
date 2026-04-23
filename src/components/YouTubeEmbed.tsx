import { Play, Youtube } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";

type Props = {
  videoId: string;
  title: string;
  className?: string;
};

// Wrapper per embed YouTube che rispetta il consenso marketing.
// Se l'utente non ha dato consenso marketing, mostra un placeholder
// che richiede un click per sbloccare (con uso di youtube-nocookie per ridurre cookie).
const YouTubeEmbed = ({ videoId, title, className = "" }: Props) => {
  const { hasConsent, openBanner } = useConsent();
  const allowed = hasConsent("marketing");

  if (allowed) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className={`w-full h-full border-0 ${className}`}
      />
    );
  }

  // Placeholder: l'utente non ha acconsentito ai cookie marketing
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center bg-card p-6 text-center gap-4 ${className}`}
    >
      <Youtube className="text-primary" size={48} />
      <div>
        <h3 className="font-heading text-lg text-foreground mb-2">
          Video YouTube bloccato
        </h3>
        <p className="text-muted-foreground text-sm max-w-md">
          Per visualizzare il video <strong>{title}</strong> devi accettare i cookie di
          marketing. Il video è ospitato su YouTube, che imposta cookie di tracciamento.
        </p>
      </div>
      <button
        onClick={openBanner}
        className="px-5 py-2 bg-primary text-primary-foreground font-heading text-sm tracking-wider rounded hover:bg-primary/90 transition-colors flex items-center gap-2"
      >
        <Play size={16} />
        Gestisci consenso
      </button>
    </div>
  );
};

export default YouTubeEmbed;
