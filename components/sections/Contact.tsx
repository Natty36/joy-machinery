"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Clock, CheckCircle2, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="bg-section-dark text-[var(--color-light)] py-[var(--spacing-section)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl lg:mb-16"
        >
          <div className="inline-block border border-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-light)]">
            Direct Contact
          </div>
          <h2 className="text-h1 headline mt-4 text-white">
            Speak with our engineering team today
          </h2>
          <p className="text-body mt-4 text-white/70">
            Skip the back-and-forth email delays. Get immediate advice on machine calibration, site assessments, or equipment availability.
          </p>
        </motion.div>

        {/* Dual Layout: Phone First + Secondary Form */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* PRIMARY OPTION: High-Contrast Direct Call Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-neutral-900 border border-white/10 p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle Accent Glow */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[var(--color-accent)]/20 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--color-accent)] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                </span>
                Fastest Response
              </div>

              <h3 className="text-h3 text-white mt-3 font-semibold">
                Need answers right now?
              </h3>
              
              <p className="text-body-sm text-white/70 mt-3">
                Call our technical supervisor directly to discuss your site dimensions, gold washing targets, or pump power requirements.
              </p>

              {/* Large Phone Box */}
              <a
                href="tel:+0000000000"
                className="group mt-8 flex flex-col gap-2 rounded-2xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] p-6 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    Click to Call Direct
                  </span>
                  <PhoneCall className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-headline text-2xl md:text-3xl tracking-tight text-white font-bold">
                  +000 000 0000
                </span>
              </a>

              {/* Value Points */}
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                  <span>Direct connection to qualified site geologists</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                  <span>Instant equipment availability check</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-8 flex items-center gap-2 text-xs text-white/50 border-t border-white/5 pt-4">
              <Clock className="h-3.5 w-3.5" />
              <span>Lines open Monday – Saturday: 7:00 AM – 6:00 PM</span>
            </div>
          </motion.div>

          {/* SECONDARY OPTION: Minimal Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl bg-neutral-900/50 border border-white/10 p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-h3 text-white font-semibold">
                Prefer a written quote?
              </h3>
              <p className="text-body-sm text-white/60 mt-2">
                Fill out your details below. Our field desk reviews submissions twice daily and will follow up with complete specifications.
              </p>

              {formSubmitted ? (
                <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-[var(--color-accent)] mx-auto mb-4" />
                  <h4 className="text-h4 text-white">Message Received</h4>
                  <p className="text-body-sm text-white/70 mt-2">
                    Thank you. A specialist will review your request and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-neutral-800 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+000 000 0000"
                        className="w-full rounded-xl bg-neutral-800 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Service Required
                    </label>
                    <select
                      className="w-full rounded-xl bg-neutral-800 border border-white/10 px-4 py-3 text-white focus:border-[var(--color-accent)] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl bg-neutral-800 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full rounded-xl py-4 flex items-center justify-center gap-2 group text-base font-bold"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}