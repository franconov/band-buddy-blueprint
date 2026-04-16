import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import Layout from "@/components/Layout";

const Contatti = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-heading text-foreground mb-4"
        >
          Contatti
        </motion.h1>
        <div className="w-16 h-1 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Scrivici</h2>
              <p className="text-muted-foreground mb-6">
                Per booking, collaborazioni o semplicemente per salutarci.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:info@dquestion.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" />
                info@dquestion.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                Italia
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg text-foreground mb-3">Seguici</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm text-muted-foreground mb-1 font-heading tracking-wider">Nome</label>
              <input
                type="text"
                className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1 font-heading tracking-wider">Email</label>
              <input
                type="email"
                className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="La tua email"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1 font-heading tracking-wider">Messaggio</label>
              <textarea
                rows={5}
                className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Scrivi il tuo messaggio..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-heading text-lg tracking-wider rounded hover:bg-primary/90 transition-colors"
            >
              Invia Messaggio
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contatti;
