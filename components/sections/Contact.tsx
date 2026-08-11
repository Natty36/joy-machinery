"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, CheckCircle2, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="bg-section-dark text-[var(--color-light)] py-[var(--spacing-section)] relative overflow-hidden mb-10">
      <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
        
        {/* Centered Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-2xl mx-auto lg:mb-16"
        >
          <div className="inline-block border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-light)] rounded-md">
            Direct Contact
          </div>
          <h2 className="text-h1 headline mt-4 text-white font-bold">
            Have questions about your mining setup?
          </h2>
          <p className="text-body mt-4 text-white/70 text-base md:text-lg">
            Call our engineering team directly or send us a message below.
          </p>
        </motion.div>

        {/* Vertical Stack Layout */}
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          
          {/* PRIMARY OPTION: Call Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8 md:p-10 shadow-lg"
          >
            <h3 className="text-2xl text-white font-semibold text-center">
              Call Us
            </h3>
            <p className="text-sm text-white/70 mt-2 text-center">
              Discuss site dimensions, gold washing targets, or equipment availability with a supervisor.
            </p>

            {/* Direct Call Button */}
            <a
              href="tel:+251936962486"
              className="group mt-6 flex flex-col gap-1 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] p-5 transition-all duration-300 shadow-md cursor-pointer text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Click to Call Direct
                </span>
                <PhoneCall className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-headline text-2xl md:text-3xl tracking-tight text-white font-bold mt-1">
                +251 936 962 486
              </span>
            </a>
          </motion.div>

          {/* SECONDARY OPTION: Written Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-8 md:p-10 shadow-lg"
          >
            <h3 className="text-2xl text-white font-semibold">
              Prefer a written quote?
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Fill out your details below.
            </p>

            {formSubmitted ? (
              <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-[var(--color-accent)] mx-auto mb-3" />
                <h4 className="text-xl text-white font-semibold">Message Received</h4>
                <p className="text-sm text-white/70 mt-2">
                  Thank you. A specialist will review your request and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-lg bg-neutral-800/80 border border-neutral-700 px-4 py-3 text-white placeholder-white/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+251 900 000 000"
                      className="w-full rounded-lg bg-neutral-800/80 border border-neutral-700 px-4 py-3 text-white placeholder-white/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Service Required
                  </label>
                  <select
                    className="w-full rounded-lg bg-neutral-800/80 border border-neutral-700 px-4 py-3 text-white focus:border-[var(--color-accent)] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="sampling">Ground Sampling &amp; Assessment</option>
                    <option value="excavator">Excavator Rentals</option>
                    <option value="pumps">High-Performance Water Pumps</option>
                    <option value="cleaning">Gold Cleaning Machines</option>
                    <option value="accessories">Accessories &amp; Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Project Details or Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your site location, required capacity, or equipment questions..."
                    className="w-full rounded-lg bg-neutral-800/80 border border-neutral-700 px-4 py-3 text-white placeholder-white/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full rounded-lg py-3.5 flex items-center justify-center gap-2 group text-base font-bold cursor-pointer transition-transform active:scale-[0.99]"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}