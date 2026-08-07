"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero3D from "../3d/Hero3D";
import { ShimmerButton } from "../ui/shimmer-button";

const socialLinks = [
  {
    href: "https://tiktok.com",
    label: "TikTok",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/251936962486",
    label: "WhatsApp",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    href: "https://t.me",
    label: "Telegram",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    href: "tel:+251936962486",
    label: "Call Us",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[115vh] overflow-hidden">
      <Image
        src="/herobg.png"
        alt="Gold mining equipment"
        fill
        priority
        className="object-cover mt-2"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 mt-2"
        style={{
          background:
            "radial-gradient(ellipse 100% 150% at -10% 50%, rgba(20,19,19,0.98) 0%, rgba(20,19,19,0.85) 30%, rgba(20,19,19,0.5) 55%, transparent 80%)",
        }}
      />

      <div
        className="relative z-10 flex min-h-screen items-center px-6 md:px-12 lg:px-17"
        style={{
          paddingTop: "var(--spacing-section)",
          paddingBottom: "var(--spacing-section)",
        }}
      >
        <div className="mx-auto grid w-full max-w-9xl items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-6">
          {/* Left: Social Bar + Text */}
          <div className="flex items-center gap-6 lg:gap-10 lg:pl-2 xl:pl-6 mt-15">
            {/* Vertical Social Bar */}
            <div className="hidden flex-col items-center gap-9 self-center lg:-ml-9 lg:flex">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "var(--color-light)" }}
                  title={link.label}
                >
                  {link.svg}
                </a>
              ))}
            </div>

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
                className="text-body mt-6 max-w-3xl"
                style={{ color: "var(--color-light)", opacity: 0.85 }}
              >
                Complete equipment and services to help gold mining operations
                run reliably, backed by expert geologists, educated engineers,
                and full warranty coverage.
              </p>

              <ShimmerButton 
              background="#113a72"
              onClick={() => {
                  window.location.href = "tel:+251936962486";
                }}
                className="mt-10"
                shimmerDuration="3s"
              >
                Call +251 936 962 486
              </ShimmerButton>
            </motion.div>
          </div>

          {/* 3D Nugget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-87.5 w-full md:h-112.5 lg:h-118"
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
