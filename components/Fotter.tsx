"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-section-dark text-[var(--color-light)] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* Top / Typical Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-16 border-b border-white/10">
          
          {/* Company Brief */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-headline text-2xl font-bold tracking-wider text-white">
              JOY MACHINERY SOLUTIONS
            </div>
            <p className="text-body-sm text-white/60 max-w-sm">
              Professional ground sampling, site assessment, calibrated machinery rentals, and gold washing equipment for mining operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">
              Services
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#sampling" className="hover:text-white transition-colors">Ground Sampling</Link></li>
              <li><Link href="#excavators" className="hover:text-white transition-colors">Excavator Rentals</Link></li>
              <li><Link href="#pumps" className="hover:text-white transition-colors">Water Pumps</Link></li>
              <li><Link href="#cleaning" className="hover:text-white transition-colors">Gold Cleaning Machines</Link></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">
              Field Desk
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <a href="tel:+0000000000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                <span>+000 000 0000</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                <span>info@joymachinery.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                <span>Mining Operations Desk</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright Left + Giant Animated JOY Right */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          
          {/* Copyright & Legal */}
          <div className="text-xs text-white/40 space-y-2">
            <p>© {new Date().getFullYear()} Joy Machinery Solutions. All rights reserved.</p>
            <p>Equipment engineered and site calibrated for optimal output.</p>
          </div>

          {/* Giant "JOY" Branding with Animated Rotating Gear "O" */}
          <div className="flex items-center justify-end self-end select-none">
            
            {/* Letter J */}
            <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 w-auto aspect-[0.7/1]">
              <Image
                src="/logo-j.png"
                alt="J"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Letter O (Rotating Gear) */}
            <motion.div
              animate={{ rotate: [-45, 45, -45] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="relative h-24 sm:h-32 md:h-40 lg:h-48 w-auto aspect-square mx-[-0.05em]"
            >
              <Image
                src="/logo-o-gear.png"
                alt="O Gear"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Letter Y */}
            <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 w-auto aspect-[0.9/1]">
              <Image
                src="/logo-y.png"
                alt="Y"
                fill
                className="object-contain"
                priority
              />
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}