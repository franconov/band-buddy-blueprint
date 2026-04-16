import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import logo from "@/assets/logo.jpg";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_85%_50%/0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        <div className="glow-red rounded-full">
          <img
            src={logo}
            alt="Il Dubbio Di Davide Band Logo"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary/30"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading text-foreground text-glow-red text-center"
        >
          Il Dubbio Di Davide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-md text-center font-body"
        >
          La musica è una domanda. Noi siamo la risposta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4"
        >
          <Link
            to="/discografia"
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

    {/* Teaser section */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "La Band", desc: "Scopri chi siamo e la nostra storia", link: "/biografia", cta: "Biografia" },
          { title: "La Musica", desc: "Esplora i nostri album e singoli", link: "/discografia", cta: "Discografia" },
          { title: "Live", desc: "Resta in contatto per i prossimi eventi", link: "/contatti", cta: "Contatti" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded border border-border bg-background hover:border-primary/50 transition-colors group"
          >
            <h2 className="text-3xl font-heading text-foreground group-hover:text-primary transition-colors mb-3">
              {item.title}
            </h2>
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
