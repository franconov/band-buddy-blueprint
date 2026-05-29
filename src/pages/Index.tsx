import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import Layout from "@/components/Layout";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import logo from "@/assets/logo.jpg";
import { band, featuredVideo, liveEvents } from "@/data/band";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" });
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_85%_50%/0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-8 px-4 w-full max-w-xl"
      >
        <div className="glow-red rounded-full">
          <img
            src={logo}
            alt={`Logo ${band.name}`}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary/30"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading text-foreground text-glow-red text-center"
        >
          {band.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-md text-center font-body"
        >
          {band.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Link
            to="/discografia#ascolta"
            className="px-6 py-3 bg-primary text-primary-foreground font-heading text-lg tracking-wider rounded hover:bg-primary/90 transition-colors"
          >
            Ascolta
          </Link>
          <Link
            to="/contatti"
            className="px-6 py-3 border border-border text-foreground font-heading text-lg tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
          >
            Contattaci
          </Link>
        </motion.div>

        {/* Live card sotto i bottoni */}
        {liveEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="w-full"
          >
            <p className="text-primary text-xs font-heading tracking-widest uppercase mb-3 text-center">
              Prossimo Live
            </p>
            {liveEvents.map((event) => (
              <div
                key={`${event.date}-${event.venue}`}
                className="p-5 rounded border border-primary/50 bg-card/70 backdrop-blur flex flex-col gap-3"
              >
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <span className="flex items-center gap-2 text-primary font-heading tracking-wider">
                    <Calendar size={16} />
                    {formatDate(event.date)}
                  </span>
                  {event.time && (
                    <span className="flex items-center gap-2 text-muted-foreground font-heading">
                      <Clock size={15} />
                      ore {event.time}
                    </span>
                  )}
                  {event.price && (
                    <span className="flex items-center gap-2 text-muted-foreground font-heading">
                      <Ticket size={15} />
                      {event.price}
                    </span>
                  )}
                </div>
                <div className="flex items-start gap-2 text-foreground text-sm">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    {event.mapsUrl ? (
                      <a
                        href={event.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading hover:text-primary transition-colors underline underline-offset-2"
                      >
                        {event.venue}
                      </a>
                    ) : (
                      <span className="font-heading">{event.venue}</span>
                    )}
                    {event.address && (
                      <span className="text-muted-foreground ml-1">
                        — {event.address}, {event.city}
                      </span>
                    )}
                  </div>
                </div>
                {event.organizer && (
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Organizzato da {event.organizer}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>

    {/* Video in evidenza */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-primary text-sm font-heading tracking-widest uppercase mb-2">
            Ultima uscita
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground">
            {featuredVideo.title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="aspect-video rounded overflow-hidden border border-border"
        >
          <YouTubeEmbed
            videoId={featuredVideo.youtubeId}
            title={`${band.name} — ${featuredVideo.title}`}
          />
        </motion.div>
      </div>
    </section>

    {/* Teaser section */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "La Band", desc: "Scopri chi siamo e la nostra storia", link: "/biografia", cta: "Biografia" },
          { title: "La Musica", desc: "Esplora i nostri album e singoli", link: "/discografia", cta: "Discografia" },
          { title: "Contatti", desc: "Scrivici per booking o collaborazioni", link: "/contatti", cta: "Contatti" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded border border-border bg-background hover:border-primary/50 transition-colors group"
          >
            <h3 className="text-3xl font-heading text-foreground group-hover:text-primary transition-colors mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground mb-6">{item.desc}</p>
            <Link
              to={item.link}
              className="text-primary font-heading tracking-wider text-sm uppercase hover:text-glow-red transition-all"
            >
              {item.cta} →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Index;
