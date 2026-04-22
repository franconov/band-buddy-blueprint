import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
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
        className="relative z-10 flex flex-col items-center gap-8 px-4"
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
          <iframe
            src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
            title={`${band.name} — ${featuredVideo.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>

    {/* Live */}
    {liveEvents.length > 0 && (
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-foreground mb-2"
          >
            Prossimi Live
          </motion.h2>
          <div className="w-16 h-1 bg-primary mb-10" />

          <div className="space-y-4">
            {liveEvents.map((event, i) => (
              <motion.div
                key={`${event.date}-${event.venue}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded border border-border bg-card hover:border-primary/50 transition-colors flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              >
                <div className="flex items-center gap-3 text-primary font-heading tracking-wider">
                  <Calendar size={20} />
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin size={18} className="text-muted-foreground" />
                  <span className="font-heading">{event.venue}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{event.city}</span>
                </div>
                {event.ticketUrl && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:ml-auto px-4 py-2 bg-primary text-primary-foreground font-heading text-sm tracking-wider rounded hover:bg-primary/90 transition-colors inline-block w-fit"
                  >
                    Biglietti
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

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
