"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="min-h-[50vh] flex flex-col justify-between w-full overflow-hidden">
      
      {/* TOP SECTION: Extended Content (Black Background) */}
      <div className="bg-neutral-950 text-white pt-20 pb-24 px-6 md:px-12 lg:px-16 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Company Brief & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <div className="font-headline text-2xl font-bold tracking-wider text-white">
              JOY MACHINERY SOLUTIONS
            </div>
            <p className="text-body text-neutral-400 max-w-md leading-relaxed">
              Professional ground sampling, site assessment, calibrated machinery rentals, and high-performance gold washing equipment engineered specifically for active mining sites.
            </p>
            <div className="pt-2">
              <a 
                href="tel:+0000000000" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:underline"
              >
                <span>Speak with a field technician</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Equipment &amp; Services
            </div>
            <ul className="space-y-3 text-body-sm text-neutral-300">
              <li><Link href="#sampling" className="hover:text-white transition-colors">Ground Sampling</Link></li>
              <li><Link href="#excavators" className="hover:text-white transition-colors">Excavator Rentals</Link></li>
              <li><Link href="#pumps" className="hover:text-white transition-colors">High-Pressure Water Pumps</Link></li>
              <li><Link href="#cleaning" className="hover:text-white transition-colors">Gold Cleaning Machines</Link></li>
            </ul>
          </div>

          {/* Direct Contact Info Column 2 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Field Desk
            </div>
            <div className="space-y-3 text-body-sm text-neutral-300">
              <a href="tel:+0000000000" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                <span>+000 000 0000</span>
              </a>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                <span>info@joymachinery.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                <span>Mining Operations Desk</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: Compact Stage with Offset Logo (White Background) */}
      <div className="bg-white py-8 px-6 flex flex-col items-center justify-center relative">
        
        {/* Logo Container: Shifted slightly to the left for optical balance */}
        <div className="relative w-full max-w-4xl flex justify-center items-center -translate-x-3 sm:-translate-x-6 md:-translate-x-10">
          {/* PASTE SVG COMPONENT HERE */}
          <div className="text-neutral-400 text-xs py-6">
            [Paste raw SVG code here or send it in the chat]
          </div>
        </div>

        {/* Copyright notice at bottom */}
        <div className="mt-4 text-center text-xs text-neutral-400 font-medium">
          © {new Date().getFullYear()} Joy Machinery Solutions. All rights reserved.
        </div>
      </div>

    </footer>
  );
}