import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { band, members } from "@/data/band";

const Biografia = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-heading text-foreground mb-4"
        >
          Biografia
        </motion.h1>
        <div className="w-16 h-1 bg-primary mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-20"
        >
          {band.bioLong.map((paragraph, i) => (
            <p key={i}>
              {i === 0 ? (
                <>
                  <span className="text-foreground font-semibold">{band.name}</span>
                  {" "}
                  {paragraph.replace(band.name + " ", "")}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </motion.div>

        <h2 className="text-4xl font-heading text-foreground mb-8">I Membri</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <h3 className="font-heading text-2xl text-foreground">{m.name}</h3>
              <p className="text-primary text-sm font-heading tracking-wider mb-2">{m.role}</p>
              <p className="text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Biografia;
