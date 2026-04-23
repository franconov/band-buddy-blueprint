import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";

type Preferences = {
  statistics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const categories = [
  {
    key: "necessary" as const,
    title: "Cookie necessari",
    description:
      "Strettamente necessari al funzionamento del sito (es. gestione sessione, invio form, preferenze consenso). Sono sempre attivi e non possono essere disattivati.",
    alwaysOn: true,
  },
  {
    key: "statistics" as const,
    title: "Cookie statistici",
    description:
      "Ci aiutano a capire come i visitatori interagiscono con il sito attraverso la raccolta e la trasmissione di informazioni in forma aggregata. Usiamo Google Analytics 4.",
    alwaysOn: false,
  },
  {
    key: "marketing" as const,
    title: "Cookie marketing",
    description:
      "Utilizzati per tracciare i visitatori tra i siti web allo scopo di mostrare annunci rilevanti. Potremmo utilizzare Meta Pixel per misurare l'efficacia delle campagne.",
    alwaysOn: false,
  },
  {
    key: "preferences" as const,
    title: "Cookie di preferenza",
    description:
      "Consentono al sito di ricordare informazioni che modificano il comportamento o l'aspetto del sito, come la lingua preferita o la regione.",
    alwaysOn: false,
  },
];

const CookiePreferencesModal = () => {
  const { isModalOpen, closeModal, savePreferences, consent, acceptAll, rejectAll } =
    useConsent();

  const [prefs, setPrefs] = useState<Preferences>({
    statistics: consent?.statistics ?? false,
    marketing: consent?.marketing ?? false,
    preferences: consent?.preferences ?? false,
  });

  // Aggiorna lo stato locale quando il consenso cambia (es. riapertura del modal)
  useEffect(() => {
    if (isModalOpen) {
      setPrefs({
        statistics: consent?.statistics ?? false,
        marketing: consent?.marketing ?? false,
        preferences: consent?.preferences ?? false,
      });
    }
  }, [isModalOpen, consent]);

  const handleToggle = (key: keyof Preferences) => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  const handleSave = () => {
    savePreferences(prefs);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[60]"
            onClick={closeModal}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              role="dialog"
              aria-labelledby="cookie-modal-title"
            >
              <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
                <h2
                  id="cookie-modal-title"
                  className="font-heading text-2xl text-foreground"
                >
                  Preferenze Cookie
                </h2>
                <button
                  onClick={closeModal}
                  aria-label="Chiudi"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-6 py-4 space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scegli quali tipologie di cookie vuoi abilitare. I cookie necessari sono
                  sempre attivi perché indispensabili al funzionamento del sito.
                </p>

                {categories.map((cat) => {
                  const enabled = cat.alwaysOn ? true : prefs[cat.key as keyof Preferences];
                  return (
                    <div
                      key={cat.key}
                      className="border border-border rounded p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-heading text-lg text-foreground">{cat.title}</h3>
                        <button
                          onClick={() =>
                            !cat.alwaysOn && handleToggle(cat.key as keyof Preferences)
                          }
                          disabled={cat.alwaysOn}
                          role="switch"
                          aria-checked={enabled}
                          aria-label={`${enabled ? "Disabilita" : "Abilita"} ${cat.title}`}
                          className={`
                            relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors
                            ${enabled ? "bg-primary" : "bg-secondary"}
                            ${cat.alwaysOn ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
                          `}
                        >
                          <span
                            className={`
                              inline-block h-4 w-4 rounded-full bg-white transition-transform
                              ${enabled ? "translate-x-6" : "translate-x-1"}
                            `}
                          />
                        </button>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="sticky bottom-0 bg-card border-t border-border px-6 py-4 flex flex-col sm:flex-row gap-2 justify-end">
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 border border-border text-foreground font-heading text-sm tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
                >
                  Rifiuta tutto
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 border border-primary text-primary font-heading text-sm tracking-wider rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Salva preferenze
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-primary text-primary-foreground font-heading text-sm tracking-wider rounded hover:bg-primary/90 transition-colors"
                >
                  Accetta tutto
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferencesModal;
