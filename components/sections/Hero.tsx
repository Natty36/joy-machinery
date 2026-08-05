"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-section-light overflow-hidden">
      <div
        className="mx-auto max-w-7xl px-6 md:px-12"
        style={{ paddingTop: "var(--spacing-section)", paddingBottom: "var(--spacing-section)" }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="font-headline text-small uppercase tracking-widest"
              style={{ color: "var(--color-accent)" }}
            >
              Joy Machinery Solutions
            </p>

            <h1
              className="text-hero headline mt-4 max-w-3xl"
              style={{ color: "var(--color-dark)" }}
            >
              Gold Mining Equipment & Geological Services
            </h1>

            <p
              className="text-body mt-6 max-w-xl"
              style={{ color: "var(--color-logo)" }}
            >
              Complete equipment and services to help gold mining operations run
              reliably, backed by expert geologists, educated engineers, and full
              warranty coverage.
            </p>

            <motion.a
              href="tel:+0000000000"
              className="btn-primary mt-10 inline-flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>📞</span>
              <span>Call Us</span>
            </motion.a>

            <p
              className="text-caption mt-4"
              style={{ color: "var(--color-logo)", opacity: 0.6 }}
            >
              Phone number coming soon
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-square"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent) 0%, var(--color-dark) 100%)",
                opacity: 0.15,
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ color: "var(--color-logo)" }}
            >
              <div className="text-center">
                <div
                  className="mx-auto mb-4 h-16 w-16 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-accent) 0%, var(--color-dark) 100%)",
                    opacity: 0.3,
                  }}
                />
                <p className="text-caption font-headline font-medium">
                  Equipment Photo
                </p>
                <p className="text-small mt-1" style={{ opacity: 0.5 }}>
                  Placeholder
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}