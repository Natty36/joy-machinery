"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/ui/Button";
import { cn } from "../../lib/utils";
import { PhoneCall } from "lucide-react";

const services = [
  {
    id: "sampling",
    title: "Ground Sampling & Geological Site Assessment",
    image: "/service-sampling.jpg",
    description:
      "Every successful mining operation starts before the first machine arrives. Our geologists conduct professional ground sampling and geological site assessments to evaluate your land and identify its mining potential. By understanding the site before you invest, you reduce unnecessary risk and avoid entering the business without the knowledge needed to maximize your operation.",
  },
  {
    id: "excavator",
    title: "Excavator Rentals",
    image: "/service-excavator.jpg",
    description:
      "Excavation is one of the largest investments in a mining project. We provide reliable excavator rentals with flexible scheduling and prepayment options to match your operation. Whether you're planning a thousand or more working hours, our service helps keep your project moving without the delays and uncertainty of sourcing equipment from multiple providers.",
  },
  {
    id: "pumps",
    title: "High-Performance Water Pumps",
    image: "/service-pumps.jpg",
    description: `Fuel costs directly affect your profits, which is why choosing the right water pump matters. Our mining pumps start from 90kW and are selected for their powerful water pressure, fuel efficiency, and dependable performance.

Each pump is designed to:
- Deliver the pressure needed for effective soil and gold separation.
- Operate continuously throughout the workday without overheating or shutting down.
- Reduce fuel consumption through efficient engine performance and turbocharged technology.
- Lower emissions while maintaining reliable output.

The result is lower operating costs and fewer interruptions.`,
  },
  {
    id: "cleaning",
    title: "Gold Cleaning Machines",
    image: "/service-cleaning.jpg",
    description: `Gold recovery depends on precision. Even a small error in a cleaning machine's slope can significantly reduce recovery efficiency and lead to costly production losses.

Our gold cleaning machines are engineered by qualified professionals and carefully calibrated to ensure optimal performance. Depending on the model, each machine combines a precision-built washing system and properly engineered slope with an integrated spring vibration system, working alongside water pressure to separate gold from soil more effectively.

For customers looking to start with a compact solution, our JA02 Gold Cleaning Machine processes 500 kilograms per hour, includes its own pump and accessories, uses a spring-assisted separation system, and features built-in wheels for easier transportation between job sites.`,
  },
  {
    id: "accessories",
    title: "Mining Accessories & Complete Project Support",
    image: "/service-accessories.jpg",
    description: `From pumps and fittings to essential mining accessories, we supply the equipment needed to keep your operation running efficiently. Instead of coordinating with multiple suppliers, you can source your mining equipment, geological services, excavator rentals, water pumps, gold washing machines, and supporting accessories from one trusted partner.

When your equipment is built correctly and your site is studied properly, you stop leaving output in the ground.`,
  },
];

type ContentBlock = { type: "p"; content: string } | { type: "ul"; content: string[] };

function parseDescription(text: string): ContentBlock[] {
  const lines = text.split("\n").filter((l) => l.trim());
  const blocks: ContentBlock[] = [];
  let currentList: string[] = [];

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("•") || trimmed.startsWith("-")) {
      currentList.push(trimmed.replace(/^[•\-]\s*/, ""));
    } else {
      if (currentList.length > 0) {
        blocks.push({ type: "ul", content: currentList });
        currentList = [];
      }
      blocks.push({ type: "p", content: trimmed });
    }
  });

  if (currentList.length > 0) {
    blocks.push({ type: "ul", content: currentList });
  }

  return blocks;
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section
    id="services"
      className="bg-section-light overflow-hidden"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-12 max-w-3xl lg:mb-16"
        >
          {/* Option 7 Style Minimal Tag */}
          <div className="inline-block border border-[var(--color-dark)]/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-dark)]">
            Services &amp; Solutions
          </div>

          <h2
            className="text-h1 headline mt-4 text-3xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--color-dark)" }}
          >
            Our services fix the problems before they cost you
          </h2>
          <p
            className="text-body mt-4 text-lg md:text-xl"
            style={{ color: "var(--color-logo)" }}
          >
            We study your ground, select the right machines for your site, calibrate them to specification, and back every delivery with ongoing support.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Tabs */}
          <div className="flex flex-col gap-2 lg:col-span-5 justify-start">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group relative flex w-full items-center justify-between rounded-2xl p-4 text-left transition-all duration-300 md:p-5",
                    isActive
                      ? "bg-white shadow-md border border-[var(--color-dark)]/10"
                      : "border border-transparent hover:bg-white/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold transition-colors",
                        isActive
                          ? "text-[var(--color-dark)]"
                          : "text-[var(--color-logo)]/40 group-hover:text-[var(--color-dark)]"
                      )}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={cn(
                        "text-sm font-semibold transition-colors md:text-base",
                        isActive
                          ? "text-[var(--color-dark)]"
                          : "text-[var(--color-logo)] group-hover:text-[var(--color-dark)]"
                      )}
                    >
                      {service.title}
                    </span>
                  </div>

                  {/* Minimal Subtle Arrow Indicator */}
                  <span
                    className={cn(
                      "text-xs transition-transform duration-300",
                      isActive
                        ? "translate-x-1 opacity-100 text-[var(--color-dark)]"
                        : "opacity-0 group-hover:opacity-40"
                    )}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="flex flex-col justify-start"
              >
                <div>
                  {/* Compact, Centered Transparent Image Wrapper */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-48 md:w-56">
                      <Image
                        src={activeService.image}
                        alt={activeService.title}
                        width={522}
                        height={478}
                        className="h-auto w-full object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* Description Blocks */}
                  <div className="space-y-4 max-w-xl">
                    {parseDescription(activeService.description).map((block, i) =>
                      block.type === "p" ? (
                        <p
                          key={i}
                          className="text-base leading-relaxed md:text-lg"
                          style={{ color: "var(--color-logo)" }}
                        >
                          {block.content}
                        </p>
                      ) : (
                        <ul
                          key={i}
                          className="list-disc space-y-2 pl-5 text-base md:text-lg"
                          style={{ color: "var(--color-logo)" }}
                        >
                          {block.content.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-10 pt-6 md:mt-12 md:pt-8 border-t border-[var(--color-dark)]/5">
                  <Button href="tel:+0000000000">
                    <span className="flex items-center gap-2">
                      <PhoneCall className="h-4 w-4" />
                      <span>Call Joy Machinery Solutions</span>
                    </span>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}