import { motion } from "framer-motion";
import { Music, ExternalLink, Play } from "lucide-react";
import Layout from "@/components/Layout";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { releases, featuredVideo, social, getTrackInfo } from "@/data/band";

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

        {/* Video in evidenza */}
        <motion.div
          id="ascolta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-heading text-foreground mb-4 flex items-center gap-3">
            <Play className="text-primary" size={24} />
            In evidenza — {featuredVideo.title}
          </h2>
          <div className="aspect-video rounded overflow-hidden border border-border bg-card">
            <YouTubeEmbed
              videoId={featuredVideo.youtubeId}
              title={`Il Dubbio di Davide — ${featuredVideo.title}`}
            />
          </div>
        </motion.div>

        {/* Piattaforme streaming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 p-6 rounded border border-border bg-card"
        >
          <h2 className="text-xl font-heading text-foreground mb-4">Ascolta sulle piattaforme</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-[#1DB954] text-white font-heading text-sm tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Spotify <ExternalLink size={14} />
            </a>
            <a
              href={social.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-secondary text-foreground font-heading text-sm tracking-wider hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              Apple Music <ExternalLink size={14} />
            </a>
            <a
              href={social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-[#FF0000] text-white font-heading text-sm tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              YouTube <ExternalLink size={14} />
            </a>
            <a
              href={social.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-secondary text-foreground font-heading text-sm tracking-wider hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              SoundCloud <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        <h2 className="text-3xl font-heading text-foreground mb-6">Album</h2>
        <div className="space-y-8">
          {releases.map((album, i) => (
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
                    <h3 className="font-heading text-3xl text-foreground">{album.title}</h3>
                    {album.year && (
                      <p className="text-primary font-heading tracking-wider">{album.year}</p>
                    )}
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                      {album.type} · {album.tracks.length} tracce
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center shrink-0">
                    <Music className="text-primary" size={20} />
                  </div>
                </div>
                <ul className="space-y-2">
                  {album.tracks.map((track, j) => {
                    const info = getTrackInfo(track);
                    return (
                      <li
                        key={info.title}
                        className="py-1 border-b border-border/50 last:border-0"
                      >
                        <a
                          href={info.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                          aria-label={`Ascolta ${info.title} su Spotify`}
                        >
                          <span className="text-primary text-xs font-heading w-6">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1">{info.title}</span>
                          <ExternalLink
                            size={14}
                            className="opacity-0 group-hover:opacity-60 transition-opacity shrink-0"
                          />
                        </a>
                      </li>
                    );
                  })}
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
