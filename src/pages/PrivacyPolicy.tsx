import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { band } from "@/data/band";

const lastUpdated = "23 aprile 2026";

const PrivacyPolicy = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-heading text-foreground mb-4"
        >
          Privacy Policy
        </motion.h1>
        <div className="w-16 h-1 bg-primary mb-6" />
        <p className="text-muted-foreground text-sm mb-12">
          Ultimo aggiornamento: {lastUpdated}
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-foreground">
            La presente informativa descrive le modalità con cui vengono trattati i dati
            personali degli utenti che visitano il sito <strong>{band.siteUrl}</strong>,
            in conformità al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come
            modificato dal D.Lgs. 101/2018.
          </p>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              1. Titolare del trattamento
            </h2>
            <p>
              Il Titolare del trattamento è <strong>Franco De Gruttola</strong>, in
              qualità di rappresentante della band <strong>Il Dubbio di Davide</strong>.
            </p>
            <p className="mt-2">
              Per qualsiasi richiesta relativa al trattamento dei dati personali è
              possibile scrivere a:{" "}
              <a
                href={`mailto:${band.email}`}
                className="text-primary hover:underline"
              >
                {band.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              2. Tipologie di dati raccolti
            </h2>
            <p>Il sito raccoglie le seguenti tipologie di dati:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Dati forniti volontariamente dall'utente</strong> tramite il form
                di contatto (nome, indirizzo email, contenuto del messaggio).
              </li>
              <li>
                <strong>Dati di navigazione</strong> raccolti automaticamente tramite
                cookie e tecnologie similari (indirizzo IP in forma anonimizzata, tipo di
                browser, pagine visitate, tempo di permanenza).
              </li>
              <li>
                <strong>Dati raccolti tramite strumenti di analisi di terze parti</strong>{" "}
                (Google Analytics 4, eventualmente Meta Pixel), previo consenso
                dell'utente.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              3. Finalità e basi giuridiche del trattamento
            </h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Riscontro a richieste di contatto</strong> inviate tramite form —
                base giuridica: esecuzione di misure precontrattuali su richiesta
                dell'interessato (art. 6.1.b GDPR).
              </li>
              <li>
                <strong>Analisi statistica anonima</strong> della navigazione sul sito e
                registrazione delle sessioni utente (heatmap, click, scroll, movimento
                mouse) tramite Microsoft Clarity — base giuridica: consenso
                dell'interessato (art. 6.1.a GDPR). È possibile rifiutare il session
                recording rifiutando i cookie statistici.
              </li>
              <li>
                <strong>Marketing e profilazione</strong> tramite strumenti di tracciamento
                di terze parti — base giuridica: consenso dell'interessato (art. 6.1.a
                GDPR).
              </li>
              <li>
                <strong>Pubblicazione di foto e video dei concerti</strong> della band su
                sito e canali social, nei quali i partecipanti al pubblico possono essere
                incidentalmente ripresi — base giuridica: legittimo interesse alla
                documentazione dell'attività artistica (art. 6.1.f GDPR). Chi desidera la
                rimozione di una specifica immagine in cui risulta riconoscibile può farne
                richiesta all'email sopra indicata.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              4. Cookie e tecnologie di tracciamento
            </h2>
            <p>
              Il sito utilizza cookie tecnici (sempre attivi) e, previo consenso, cookie
              di statistica (incluso Microsoft Clarity per il session recording), marketing
              e preferenze. Per il dettaglio completo dei cookie utilizzati, della loro
              durata e dei terzi coinvolti consulta la{" "}
              <Link to="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
            <p className="mt-2">
              <strong>Trasferimento dati extra-UE</strong>: l'uso di Google Analytics 4,
              Microsoft Clarity e Meta Pixel può comportare trasferimento di dati verso
              gli Stati Uniti. Google LLC, Microsoft Corporation e Meta Platforms Ireland
              aderiscono al quadro EU-U.S. Data Privacy Framework (DPF), che garantisce
              un livello di protezione adeguato ai sensi dell'art. 45 GDPR.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              5. Modalità e durata della conservazione
            </h2>
            <p>
              I dati raccolti tramite form di contatto sono conservati per il tempo
              strettamente necessario a gestire la richiesta, e comunque non oltre
              24 mesi dall'ultima interazione.
            </p>
            <p className="mt-2">
              I dati raccolti tramite cookie analitici sono conservati secondo le
              impostazioni del servizio utilizzato (Google Analytics 4: fino a 14 mesi).
            </p>
            <p className="mt-2">
              I dati vengono trattati con strumenti elettronici e con misure di sicurezza
              adeguate a prevenirne la perdita, l'uso illecito o non corretto e gli
              accessi non autorizzati.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              6. Destinatari dei dati
            </h2>
            <p>
              I dati personali raccolti non sono diffusi né ceduti a terzi per finalità
              di marketing autonomo. Possono essere comunicati a:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fornitori di servizi tecnici (hosting Netlify, servizi email).</li>
              <li>
                Fornitori di strumenti di analisi statistica: Google LLC per GA4,
                Microsoft Corporation per Clarity (session recording e heatmap),
                previo consenso.
              </li>
              <li>
                Fornitori di strumenti di marketing (Meta Platforms Ireland Ltd per il
                Pixel), previo consenso.
              </li>
              <li>
                Autorità pubbliche, in caso di obblighi di legge o richieste legittime.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              7. Diritti dell'interessato
            </h2>
            <p>
              In conformità agli articoli 15-22 del GDPR, l'utente ha il diritto di:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accedere ai propri dati personali.</li>
              <li>Chiedere la rettifica di dati inesatti.</li>
              <li>Chiedere la cancellazione dei dati ("diritto all'oblio").</li>
              <li>Chiedere la limitazione del trattamento.</li>
              <li>Opporsi al trattamento.</li>
              <li>Ottenere la portabilità dei dati.</li>
              <li>
                Revocare in qualsiasi momento il consenso prestato, senza pregiudicare la
                liceità del trattamento basata sul consenso prima della revoca.
              </li>
              <li>
                Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali
                (<a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  garanteprivacy.it
                </a>
                ).
              </li>
            </ul>
            <p className="mt-2">
              Per esercitare i propri diritti è sufficiente scrivere a{" "}
              <a
                href={`mailto:${band.email}`}
                className="text-primary hover:underline"
              >
                {band.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              8. Minori
            </h2>
            <p>
              Il sito non è destinato in maniera specifica a minori di 14 anni. Non sono
              raccolti consapevolmente dati personali di minori. Se un genitore o tutore
              riscontrasse la raccolta di dati di un minore senza il proprio consenso, è
              pregato di contattare immediatamente il Titolare per la rimozione.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading text-foreground mb-3">
              9. Modifiche alla presente informativa
            </h2>
            <p>
              Il Titolare si riserva il diritto di modificare la presente informativa in
              qualsiasi momento, dandone comunicazione agli utenti attraverso la
              pubblicazione della versione aggiornata su questa pagina, con indicazione
              della data di ultimo aggiornamento.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm">
              Per domande relative al trattamento dei dati personali contattaci all'email{" "}
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

export default PrivacyPolicy;
