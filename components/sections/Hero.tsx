"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full background image placeholder */}

      <Image
        src="/herobg.png"
        alt="Gold mining equipment"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Crescent moon mask — thick dark on left, curves away to transparent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 150% at -10% 50%, rgba(20,19,19,0.98) 0%, rgba(20,19,19,0.85) 30%, rgba(20,19,19,0.5) 55%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex min-h-[85vh] items-center px-6 md:px-12 lg:px-20"
        style={{
          paddingTop: "var(--spacing-section)",
          paddingBottom: "var(--spacing-section)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p
            className="font-headline text-small uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            Joy Machinery Solutions
          </p>

          <h1
            className="text-hero font-headline mt-4"
            style={{ color: "var(--color-light)" }}
          >
            Reliable mining equipment supplier
          </h1>

          <p
            className="text-body mt-6 max-w-2xl"
            style={{ color: "var(--color-light)", opacity: 0.85 }}
          >
            Complete equipment and services to help gold mining operations run
            reliably, backed by expert geologists, educated engineers, and full
            warranty coverage.
          </p>

          <Button href="tel:+0000000000" className="mt-10 gap-3">
            <span>📞</span>
            <span>Call us</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
