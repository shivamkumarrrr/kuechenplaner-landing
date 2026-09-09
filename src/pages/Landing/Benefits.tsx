import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { benefits, benefitsHeading, sectionEyebrows } from './content';
import { benefitIcons } from './icons';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Asymmetric on purpose. Six identical bordered rectangles is the default any
 * generator reaches for and it flattens the offer — every fact shouts equally
 * loudly. Here the pay claim, the one that actually decides whether somebody
 * reads on, takes a full dark panel, and the rest are an editorial rule-separated
 * list with no boxes at all.
 */
export function Benefits() {
  const [lead, ...rest] = benefits;

  return (
    <section className="bg-[color-mix(in_srgb,var(--accent)_4%,white)] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-shell">
        <SectionHeading eyebrow={sectionEyebrows.benefits} title={benefitsHeading} />

        <motion.div
          className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
        >
          {/* Lead claim */}
          <motion.div
            className="relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-primary p-7 text-white md:p-9"
            variants={itemVariants}
          >
            {/* Brand glow anchored to the corner it bleeds off, so it reads as
                lighting rather than a smudge inside the panel. */}
            <span
              aria-hidden="true"
              className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_45%,transparent),transparent_68%)]"
            />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent">
                {benefitIcons[lead.icon]}
              </span>
              <p className="mt-6 font-display text-[1.6rem] font-bold leading-[1.15] tracking-[-0.02em] md:text-[1.9rem]">
                {lead.title}
              </p>
              <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-white/75">
                {lead.body}
              </p>
            </div>
            {/* Fills the panel's lower half rather than leaving it empty. */}
            <p
              aria-hidden="true"
              className="relative mt-10 font-display text-[5.5rem] font-bold leading-none tracking-[-0.04em] text-white/[0.07] md:text-[7rem]"
            >
              01
            </p>
          </motion.div>

          {/* The remaining facts as a ruled list — hairlines, not boxes. */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="group relative flex items-start gap-5 border-t border-border py-5 transition-colors duration-200 first:border-t-0 sm:first:border-t-0 sm:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(2)]:border-t"
                variants={itemVariants}
              >
                <span className="w-7 shrink-0 pt-0.5 font-display text-[13px] font-bold tabular-nums text-accent-deep">
                  0{i + 2}
                </span>
                <div className="min-w-0">
                  <dt className="font-display text-[17px] font-bold leading-snug tracking-[-0.01em] text-primary">
                    {benefit.title}
                  </dt>
                  <dd className="mt-1.5 max-w-[46ch] text-[14.5px] leading-relaxed text-text/75">
                    {benefit.body}
                  </dd>
                </div>
                <span className="ml-auto hidden shrink-0 self-center text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
                  {benefitIcons[benefit.icon]}
                </span>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
