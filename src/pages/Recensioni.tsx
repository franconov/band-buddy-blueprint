import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
  const featured = reviews.find((r) => r.featured) ?? reviews[0];
  const rest = reviews.filter((r) => r !== featured);
  const secondary = rest[0];
  const others = rest.slice(1);

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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
            {/* Recensione in evidenza */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 flex flex-col justify-center border-l-2 border-primary pl-8"
            >
              {featured.rating && (
                <div className="mb-6">
                  <Rating value={featured.rating} />
                </div>
              )}
              <blockquote className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-foreground">
                “{featured.quote}”
              </blockquote>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <cite className="not-italic">
                  <span className="block font-heading text-2xl tracking-wider uppercase text-primary">
                    {featured.source}
                  </span>
                  {featured.author && (
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                      {featured.author}
                    </span>
                  )}
                </cite>
              </div>
            </motion.div>

            {/* Recensione secondaria */}
            {secondary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 flex flex-col justify-end"
              >
                {secondary.rating && (
                  <div className="mb-4">
                    <Rating value={secondary.rating} />
                  </div>
                )}
                <blockquote className="text-xl font-medium text-muted-foreground italic mb-6 leading-relaxed">
                  “{secondary.quote}”
                </blockquote>
                <cite className="not-italic font-heading text-xl tracking-widest uppercase text-foreground">
                  {secondary.source}
                </cite>
              </motion.div>
            )}

            {/* Altre recensioni */}
            {others.map((review, i) => (
              <motion.div
                key={review.source}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="md:col-span-4 border-t border-border pt-8"
              >
                {review.rating && (
                  <div className="mb-4">
                    <Rating value={review.rating} />
                  </div>
                )}
                <blockquote className="text-lg text-muted-foreground mb-6">
                  “{review.quote}”
                </blockquote>
                <cite className="not-italic font-heading text-xl tracking-widest uppercase text-primary">
                  {review.source}
                </cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recensioni;
