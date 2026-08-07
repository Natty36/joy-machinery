"use client";

import { motion } from "framer-motion";

const cards = [
  "Skipping professional ground sampling.",
  "Installing uncalibrated equipment.",
  "Running pumps that overheat or waste fuel.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Problem() {
  return (
    <section
      id="problem"
      className="bg-section-light overflow-hidden pt-10"
      style={{ paddingBottom: "var(--spacing-section)" }}
    >
      <div className="mx-auto max-w-8xl px-6 md:px-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-h1 headline max-w-3xl"
            style={{ color: "var(--color-dark)" }}
          >
            Most losses happen before extraction starts
          </h2>

          <p
            className="text-body mt-6 max-w-2xl"
            style={{ color: "var(--color-logo)" }}
          >
            Gold mining operations regularly cap their own output. Poor
            preparation is the reason.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((text, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative p-6 md:p-8"
              style={{
                backgroundColor: "rgba(20, 19, 19, 0.03)",
                borderLeft: "2px solid var(--color-accent)",
              }}
            >
              <p
                className="text-body-sm font-headline font-medium"
                style={{ color: "var(--color-dark)", lineHeight: 1.6 }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 max-w-3xl"
        >
          <p className="text-body" style={{ color: "var(--color-logo)" }}>
            These are not small inefficiencies. Gold mining is a cash-flow
            intensive business. If a machine stops working for even a few hours,
            it costs you hundreds of thousands of birr. If it stays down for
            days, it can lead to bankruptcy. Cheap equipment is the most
            expensive mistake you can make. The money you save at purchase gets
            burned through breakdowns and downtime.
          </p>

          <p
            className="text-h4 font-headline mt-8"
            style={{ color: "var(--color-dark)" }}
          >
            When you start without the right study and without equipment built
            to specification, you are not running at capacity. You are burning
            capital.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
