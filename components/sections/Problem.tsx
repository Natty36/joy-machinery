"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const problems = [
  {
    title: "Skipping professional ground sampling.",
    image: "/problem-sampling.jpg",
    alt: "Ground sampling and geological testing",
  },
  {
    title: "Installing uncalibrated equipment.",
    image: "/problem-calibration.jpg",
    alt: "Uncalibrated machinery on site",
  },
  {
    title: "Running pumps that overheat or waste fuel.",
    image: "/problem-pumps.jpg",
    alt: "Overheating industrial pump equipment",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const, // Fixes TypeScript error
    },
  },
};

export default function Problem() {
  return (
    <section
      id="problem"
      className="bg-section-light overflow-hidden pt-16 md:pt-24"
      style={{ paddingBottom: "var(--spacing-section)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl"
        >
          <div className="inline-block border border-[var(--color-dark)]/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-dark)]">
            Critical Pitfalls
          </div>

          <h2
            className="text-h1 headline mt-4 text-3xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--color-dark)" }}
          >
            Most losses happen before extraction starts
          </h2>

          <p
            className="text-body mt-4 text-lg md:text-xl"
            style={{ color: "var(--color-logo)" }}
          >
            Gold mining operations regularly cap their own output. Poor
            preparation is the reason.
          </p>
        </motion.div>

        {/* Feature Cards with Images */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {problems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--color-dark)]/10 bg-white/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {/* Card Image Wrapper - Taller and Centered */}
              <div className="relative h-64 w-full overflow-hidden bg-neutral-900 md:h-72">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <p
                  className="text-base font-semibold leading-snug md:text-lg"
                  style={{ color: "var(--color-dark)" }}
                >
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-16 max-w-3xl"
        >
          {/* Shorter, broken up paragraph lines */}
          <div
            className="space-y-4 text-base leading-relaxed md:text-lg"
            style={{ color: "var(--color-logo)" }}
          >
            <p>
              These are not small inefficiencies. Gold mining is a cash-flow
              intensive business where standard delays carry massive financial
              weight.
            </p>
            <p>
              If a machine stops working for even a few hours, it costs hundreds
              of thousands of birr. Cheap equipment is the most expensive
              mistake you can make—the initial savings are quickly burned
              through constant breakdowns and lost production time.
            </p>
          </div>

          {/* Minimal Editorial Callout (No Side Tab) */}
          <div className="relative mt-10 pt-6">
            <p
              className="text-xl italic font-serif leading-snug md:text-2xl"
              style={{ color: "var(--color-dark)" }}
            >
              &ldquo;When you start without the right study and custom-built
              machinery, you aren&apos;t operating at capacity. You are burning
              capital.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
