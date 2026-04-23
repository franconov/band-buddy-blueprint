import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import Layout from "@/components/Layout";
import { useConsent } from "@/context/ConsentContext";
import { band } from "@/data/band";

const lastUpdated = "23 aprile 2026";

const CookiePolicy = () => {
  const { openModal } = useConsent();

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-heading text-foreground mb-4"
          >
            Cookie Policy
          </motion.h1>
          <div className="w-16 h-1 bg-primary mb-6" />
          <p className="text-muted-foreground text-sm mb-8">
            Ultimo aggiornamento: {lastUpdated}
          </p>

          <button
            onClick={openModal}
            className="mb-12 px-4 py-2 border border-primary text-primary font-heading text-sm tracking-wider rounded hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
          >
            <Settings size={16} />
            Gestisci le tue preferenze
          </button>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-heading text-foreground mb-3">Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati inviano al
                terminale dell'utente, dove vengono memorizzati, per poi essere
                ritrasmessi agli stessi siti alla visita successiva. Sono utilizzati per
                eseguire autenticazioni informatiche, monitoraggio di sessioni, e per
                memorizzare informazioni sulle attività degli utenti.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-foreground mb-3">
                Tipologie di cookie utilizzati
              </h2>

              <div className="space-y-4 mt-4">
                <div className="border border-border rounded p-4 bg-card">
                  <h3 className="font-heading text-lg text-foreground">Cookie Necessari</h3>
                  <p className="text-primary text-xs font-heading tracking-wider mb-2">
                    SEMPRE ATTIVI
                  </p>
                  <p className="text-sm">
                    Cookie tecnici indispensabili al corretto funzionamento del sito. Non
                    richiedono consenso ai sensi dell'art. 122 del Codice Privacy.
                    Comprendono la memorizzazione delle tue preferenze di consenso cookie
                    stesse e il funzionamento del form di contatto.
                  </p>
                  <div className="mt-3 text-xs space-y-1">
                    <p>
                      <strong>Fornitore:</strong> ildubbiodidavide.it
                    </p>
                    <p>
                      <strong>Durata:</strong> fino a 6 mesi
                    </p>
                  </div>
                </div>

                <div className="border border-border rounded p-4 bg-card">
                  <h3 className="font-heading text-lg text-foreground">Cookie Statistici</h3>
                  <p className="text-muted-foreground text-xs font-heading tracking-wider mb-2">
                    RICHIEDONO CONSENSO
                  </p>
                  <p className="text-sm">
                    Ci aiutano a capire come i visitatori interagiscono con il sito,
                    raccogliendo e trasmettendo informazioni in forma aggregata e anonima.
                  </p>
                  <div className="mt-3 text-xs space-y-1">
                    <p>
                      <strong>Fornitore:</strong> Google LLC (Google Analytics 4)
                    </p>
                    <p>
                      <strong>Cookie:</strong> _ga, _ga_*, _gid
                    </p>
                    <p>
                      <strong>Durata:</strong> fino a 24 mesi
                    </p>
                    <p>
                      <strong>Privacy policy:</strong>{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        policies.google.com/privacy
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border border-border rounded p-4 bg-card">
                  <h3 className="font-heading text-lg text-foreground">Cookie Marketing</h3>
                  <p className="text-muted-foreground text-xs font-heading tracking-wider mb-2">
                    RICHIEDONO CONSENSO
                  </p>
                  <p className="text-sm">
                    Utilizzati per mostrare annunci pertinenti, misurare l'efficacia delle
                    campagne pubblicitarie e attivare gli embed di video YouTube. Senza
                    consenso, i video YouTube non vengono caricati.
                  </p>
                  <div className="mt-3 text-xs space-y-1">
                    <p>
                      <strong>Fornitori:</strong> Meta Platforms Ireland Ltd (Meta Pixel),
                      Google LLC (YouTube)
                    </p>
                    <p>
                      <strong>Cookie:</strong> _fbp, fr (Meta), VISITOR_INFO1_LIVE, YSC
                      (YouTube)
                    </p>
                    <p>
                      <strong>Durata:</strong> fino a 24 mesi
                    </p>
                    <p>
                      <strong>Privacy policy:</strong>{" "}
                      <a
                        href="https://www.facebook.com/privacy/policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Meta
                      </a>
                      {" · "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        YouTube
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border border-border rounded p-4 bg-card">
                  <h3 className="font-heading text-lg text-foreground">
                    Cookie di Preferenza
                  </h3>
                  <p className="text-muted-foreground text-xs font-heading tracking-wider mb-2">
                    RICHIEDONO CONSENSO
                  </p>
                  <p className="text-sm">
                    Consentono al sito di ricordare informazioni che modificano il
                    comportamento o l'aspetto del sito, come lingua preferita o regione.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-foreground mb-3">
                Come gestire il consenso
              </h2>
              <p>
                Puoi modificare le tue preferenze sui cookie in qualsiasi momento
                cliccando il pulsante <strong>"Gestisci le tue preferenze"</strong> in
                cima a questa pagina, oppure il link{" "}
                <strong>"Gestisci cookie"</strong> presente nel footer del sito.
              </p>
              <p className="mt-2">
                In alternativa puoi disabilitare i cookie direttamente dalle impostazioni
                del tuo browser. La maggior parte dei browser permette di eliminare i
                cookie esistenti o di bloccare l'installazione di nuovi cookie. La
                disabilitazione dei cookie potrebbe compromettere alcune funzionalità del
                sito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-foreground mb-3">
                Trasferimento di dati extra-UE
              </h2>
              <p>
                Google LLC (USA) e Meta Platforms, Inc. (USA) sono i destinatari di alcuni
                dei dati raccolti tramite cookie di terze parti. Entrambe le società
                aderiscono al quadro <strong>EU-U.S. Data Privacy Framework (DPF)</strong>,
                che garantisce un livello di protezione adeguato ai sensi dell'art. 45
                GDPR.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm">
                Per ulteriori informazioni sul trattamento dei dati personali consulta la{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                o scrivi a{" "}
                <a
                  href={`mailto:${band.email}`}
                  className="text-primary hover:underline"
                >
                  {band.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
