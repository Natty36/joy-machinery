"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";
import Hero3D from "../3d/Hero3D";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[115vh] overflow-hidden">
      <Image
        src="/herobg.png"
        alt="Gold mining equipment"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 150% at -10% 50%, rgba(20,19,19,0.98) 0%, rgba(20,19,19,0.85) 30%, rgba(20,19,19,0.5) 55%, transparent 80%)",
        }}
      />

      <div
        className="relative z-10 flex min-h-screen items-center px-6 md:px-12 lg:px-20"
        style={{
          paddingTop: "var(--spacing-section)",
          paddingBottom: "var(--spacing-section)",
        }}
      >
        <div className="mx-auto grid w-full max-w-9xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
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
              reliably, backed by expert geologists, educated engineers, and
              full warranty coverage.
            </p>

            <Button
              href="tel:+251936962486"
              className="mt-10 px-10 py-5 text-lg"
            >
              Call +251 936 962 486
            </Button>
          </motion.div>

          {/* 3D Nugget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[350px] w-full md:h-[450px] lg:h-[550px]"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>
      {/* S-shaped bottom cut */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-16 w-full md:h-24 lg:h-32"
          style={{ fill: "var(--color-light)" }}
        >
          <path d="M0,20 C480,140 960,-20 1440,100 V120 H0 Z" />
        </svg>
      </div>
    </section>
  );
}
