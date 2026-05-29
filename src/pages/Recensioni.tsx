import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { reviews } from "@/data/band";

const Rating = ({ value }: { value: number }) => (
  <div className="flex gap-1 text-primary" aria-label={`${value} su 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < value ? "fill-primary text-primary" : "text-muted-foreground/40"}
      />
    ))}
  </div>
);

const Recensioni = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 border-b border-primary pb-8"
          >
            <h1 className="text-6xl md:text-8xl font-heading tracking-tight leading-none text-foreground">
              Recensioni
            </h1>
            <p className="mt-4 text-primary uppercase tracking-[0.2em] font-bold text-sm">
              Dicono di noi / Press &amp; Media
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-16">
            {reviews.map((review, i) => (
              <motion.div
                key={review.source}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col justify-center border-l-2 border-primary pl-8"
              >
                {review.rating && (
                  <div className="mb-6">
                    <Rating value={review.rating} />
                  </div>
                )}

                {review.url ? (
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <blockquote className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-foreground group-hover:text-primary transition-colors cursor-pointer">
                      "{review.quote}"
                    </blockquote>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground uppercase tracking-widest mb-6 group-hover:text-primary transition-colors">
                      <ExternalLink size={12} />
                      Leggi la recensione completa
                    </span>
                  </a>
                ) : (
                  <blockquote className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-foreground">
                    "{review.quote}"
                  </blockquote>
                )}

                {review.album && (
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-bold">
                    Album: {review.album}
                  </p>
                )}

                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-primary" />
                  <cite className="not-italic">
                    <span className="block font-heading text-2xl tracking-wider uppercase text-primary">
                      {review.source}
                    </span>
                    {review.author && (
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                        {review.author}
                      </span>
                    )}
                  </cite>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recensioni;
