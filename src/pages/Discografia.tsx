import { motion } from "framer-motion";
import { Music } from "lucide-react";
import Layout from "@/components/Layout";

const albums = [
  {
    title: "Primo Album",
    year: "2023",
    tracks: ["Traccia 1", "Traccia 2", "Traccia 3", "Traccia 4", "Traccia 5"],
  },
  {
    title: "EP - Demo",
    year: "2022",
    tracks: ["Demo 1", "Demo 2", "Demo 3"],
  },
  {
    title: "Singolo - Il Dubbio",
    year: "2024",
    tracks: ["Il Dubbio"],
  },
];

const Discografia = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-heading text-foreground mb-4"
        >
          Discografia
        </motion.h1>
        <div className="w-16 h-1 bg-primary mb-12" />

        <div className="space-y-8">
          {albums.map((album, i) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-heading text-3xl text-foreground">{album.title}</h2>
                    <p className="text-primary font-heading tracking-wider">{album.year}</p>
                  </div>
                  <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center">
                    <Music className="text-primary" size={20} />
                  </div>
                </div>
                <ul className="space-y-2">
                  {album.tracks.map((track, j) => (
                    <li
                      key={track}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors py-1 border-b border-border/50 last:border-0"
                    >
                      <span className="text-primary text-xs font-heading w-6">{String(j + 1).padStart(2, "0")}</span>
                      {track}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Discografia;
