import { motion } from 'framer-motion';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { SectionHeading } from './SectionHeading';
import { sectionEyebrows, workplace } from './content';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Two photos, deliberately unequal: the building establishes where the job is,
 * the close-up shows what the day actually looks like. Equal tiles would read as
 * a gallery; this reads as a spread.
 */
export function Workplace() {
  const [wide, close] = workplace.photos;

  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-24">
      <motion.div
        className="mx-auto max-w-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerVariants}
      >
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-end md:gap-12">
          <SectionHeading eyebrow={sectionEyebrows.team} title={workplace.heading} />
          <motion.p
            className="max-w-[52ch] text-[15.5px] leading-relaxed text-text/75"
            variants={itemVariants}
          >
            {workplace.body}
          </motion.p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          {[wide, close].map((photo) => (
            <motion.figure
              key={photo.src}
              className="flex min-w-0 flex-col"
              variants={itemVariants}
            >
              <div className="flex-1 overflow-hidden rounded-[18px] bg-primary shadow-[0_18px_50px_-28px_rgba(0,0,0,0.55)]">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  fallbackLabel="MÖBEL MARTIN"
                  loading="lazy"
                  className="block aspect-[16/9] h-full w-full object-cover md:aspect-auto md:min-h-[340px]"
                  fallbackClassName="aspect-[16/9] md:aspect-auto md:min-h-[340px]"
                />
              </div>
              <figcaption className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-text/55">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
