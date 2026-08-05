"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/ui/Button";
import { cn } from "../../lib/utils";

const services = [
  {
    id: "sampling",
    title: "Ground Sampling & Geological Site Assessment",
    description:
      "Every successful mining operation starts before the first machine arrives. Our geologists conduct professional ground sampling and geological site assessments to evaluate your land and identify its mining potential. By understanding the site before you invest, you reduce unnecessary risk and avoid entering the business without the knowledge needed to maximize your operation.",
  },
  {
    id: "excavator",
    title: "Excavator Rentals",
    description:
      "Excavation is one of the largest investments in a mining project. We provide reliable excavator rentals with flexible scheduling and prepayment options to match your operation. Whether you're planning a thousand or more working hours, our service helps keep your project moving without the delays and uncertainty of sourcing equipment from multiple providers.",
  },
  {
    id: "pumps",
    title: "High-Performance Water Pumps",
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
    description: `Gold recovery depends on precision. Even a small error in a cleaning machine's slope can significantly reduce recovery efficiency and lead to costly production losses.

Our gold cleaning machines are engineered by qualified professionals and carefully calibrated to ensure optimal performance. Depending on the model, each machine combines a precision-built washing system and properly engineered slope with an integrated spring vibration system, working alongside water pressure to separate gold from soil more effectively.

For customers looking to start with a compact solution, our JA02 Gold Cleaning Machine processes 500 kilograms per hour, includes its own pump and accessories, uses a spring-assisted separation system, and features built-in wheels for easier transportation between job sites.`,
  },
  {
    id: "accessories",
    title: "Mining Accessories & Complete Project Support",
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
      className="bg-section-light overflow-hidden"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
      }}
    >
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl lg:mb-20"
        >
          <h2
            className="text-h1 headline"
            style={{ color: "var(--color-dark)" }}
          >
            Our services fix the problems before they cost you
          </h2>
          <p
            className="text-body mt-6"
            style={{ color: "var(--color-logo)" }}
          >
            We study your ground, select
            the right machines for your site, calibrate them to specification,
            and back every delivery with warranty and ongoing support.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Tabs */}
          <div className="flex flex-col gap-2 lg:col-span-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex w-full items-center rounded-xl px-5 py-4 text-left font-headline font-semibold transition-all duration-200 lg:px-6 lg:py-5",
                  activeIndex === index
                    ? "bg-[var(--color-dark)] text-[var(--color-light)]"
                    : "bg-[var(--color-dark)]/[0.03] text-[var(--color-logo)]/80 hover:bg-[var(--color-dark)]/[0.06]",
                )}
              >
                <span
                  className={cn(
                    "mr-3 h-2 w-2 flex-shrink-0 rounded-full transition-colors",
                    activeIndex === index
                      ? "bg-[var(--color-accent)]"
                      : "bg-transparent",
                  )}
                />
                <span className="text-sm leading-snug lg:text-base">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image Placeholder */}
                <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent) 0%, var(--color-dark) 100%)",
                      opacity: 0.12,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="mx-auto mb-3 h-14 w-14 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--color-accent) 0%, var(--color-dark) 100%)",
                          opacity: 0.25,
                        }}
                      />
                      <p
                        className="text-caption font-headline font-medium"
                        style={{ color: "var(--color-logo)" }}
                      >
                        {activeService.title}
                      </p>
                      <p
                        className="text-small mt-1"
                        style={{ color: "var(--color-logo)", opacity: 0.5 }}
                      >
                        Image placeholder
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="max-w-2xl">
                  {parseDescription(activeService.description).map(
                    (block, i) =>
                      block.type === "p" ? (
                        <p
                          key={i}
                          className="text-body mb-5"
                          style={{ color: "var(--color-logo)" }}
                        >
                          {block.content}
                        </p>
                      ) : (
                        <ul
                          key={i}
                          className="mb-5 list-disc space-y-2 pl-6 text-body"
                          style={{ color: "var(--color-logo)" }}
                        >
                          {block.content.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      ),
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <div className="mt-10 lg:mt-12">
              <Button href="tel:+0000000000">
                <span className="flex items-center gap-3">
                  <span>📞</span>
                  <span>Call Joy Machinery Solutions</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}