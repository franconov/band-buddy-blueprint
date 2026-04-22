import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Facebook, Youtube, Music2 } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { band, social } from "@/data/band";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Contatti = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      if (!response.ok) throw new Error("Network error");
      toast({
        title: "Messaggio inviato",
        description: "Grazie! Ti risponderemo al più presto.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Errore nell'invio",
        description: "Riprova più tardi o scrivi direttamente a " + band.email,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
                <a
                  href={`mailto:${band.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  {band.email}
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  {band.originCity}, Italia
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg text-foreground mb-3">Seguici</h3>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    href={social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Music2 size={18} />
                  </a>
                  <a
                    href={social.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Spotify"
                    className="px-3 h-10 rounded bg-[#1DB954] text-white font-heading text-xs tracking-wider hover:opacity-90 transition-opacity flex items-center"
                  >
                    Spotify
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
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Hidden fields per Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Non compilare: <input name="bot-field" onChange={() => {}} />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-1 font-heading tracking-wider">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-1 font-heading tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="La tua email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-1 font-heading tracking-wider">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Scrivi il tuo messaggio..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-primary text-primary-foreground font-heading text-lg tracking-wider rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Invio in corso..." : "Invia Messaggio"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
