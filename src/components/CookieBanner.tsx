import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";

const CookieBanner = () => {
  const { isBannerOpen, acceptAll, rejectAll, openModal, closeBanner } = useConsent();

  return (
    <AnimatePresence>
      {isBannerOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h2
                    id="cookie-banner-title"
                    className="font-heading text-lg text-foreground mb-1"
                  >
                    Cookie e privacy
                  </h2>
                  <p
                    id="cookie-banner-description"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    Utilizziamo cookie tecnici necessari e, con il tuo consenso, cookie di
                    statistica e marketing per migliorare la tua esperienza. Puoi accettare,
                    rifiutare o personalizzare la tua scelta. Per saperne di più consulta la{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-primary hover:underline"
                      onClick={closeBanner}
                    >
                      Privacy Policy
                    </Link>{" "}
                    e la{" "}
                    <Link
                      to="/cookie-policy"
                      className="text-primary hover:underline"
                      onClick={closeBanner}
                    >
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 border border-border text-foreground font-heading text-sm tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
                >
                  Rifiuta
                </button>
                <button
                  onClick={openModal}
                  className="px-4 py-2 border border-border text-foreground font-heading text-sm tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
                >
                  Preferenze
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-primary text-primary-foreground font-heading text-sm tracking-wider rounded hover:bg-primary/90 transition-colors"
                >
                  Accetta tutto
                </button>
              </div>

              <button
                onClick={closeBanner}
                aria-label="Chiudi banner (equivale a rifiuto implicito)"
                className="hidden md:block absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
