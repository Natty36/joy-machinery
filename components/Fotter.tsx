"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import JoyLogoWithText from "./JoyLogoWithText";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white text-neutral-900 pt-16 pb-8 px-6 md:px-12 lg:px-16 border-t border-neutral-100">
      {/* Define accent & hover state variables locally (or inherit from globals.css) */}
      <style jsx>{`
        footer {
          --color-accent: #113a72;
          --color-accent-hover: #1e56a0;
        }
      `}</style>

      {/* S-Pattern SVG Divider Curve */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[99%]">
        <svg
          className="relative block w-full h-10 md:h-16 lg:h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C300,90 600,10 900,70 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* 3-COLUMN MAIN LAYOUT */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center border-b border-neutral-200 pb-12">
        {/* LEFT COLUMN: About & Direct Contact Info */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-headline text-lg font-bold tracking-wider text-neutral-900">
            JOY MACHINERY SOLUTIONS
          </div>
          <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-sm">
            Professional ground sampling, site assessment, calibrated machinery
            rentals, and high-performance gold washing equipment engineered
            specifically for active mining sites.
          </p>
          <div className="pt-2 space-y-2 text-xs font-medium text-neutral-700">
            <a
              href="tel:+0000000000"
              className="flex items-center gap-2.5 transition-colors"
              style={{ color: "var(--color-neutral-700, inherit)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Phone
                className="h-4 w-4 shrink-0"
                style={{ color: "var(--color-accent)" }}
              />
              <span>+000 000 0000</span>
            </a>
            <div className="flex items-center gap-2.5">
              <Mail
                className="h-4 w-4 shrink-0"
                style={{ color: "var(--color-accent)" }}
              />
              <span>info@joymachinery.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin
                className="h-4 w-4 shrink-0"
                style={{ color: "var(--color-accent)" }}
              />
              <span>Mining Operations Desk</span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Scaled Up Logo Container */}
        <div className="lg:col-span-4 flex justify-center items-center py-4 lg:py-0">
          <JoyLogoWithText
            className="h-36 md:h-48 lg:h-56 w-full max-w-sm md:max-w-md -translate-x-1"
            gearSize="w-[35%] h-[78%]"
            priority
          />
        </div>

        {/* RIGHT COLUMN: Equipment Services & Company Links */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-6 lg:pl-4">
          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600">
              <li>
                <Link
                  href="#sampling"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Ground Sampling
                </Link>
              </li>
              <li>
                <Link
                  href="#excavators"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Excavators
                </Link>
              </li>
              <li>
                <Link
                  href="#pumps"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Water Pumps
                </Link>
              </li>
              <li>
                <Link
                  href="#cleaning"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Gold Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600">
              <li>
                <Link
                  href="#about"
                  className="hover:text-neutral-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Fleet Specs
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Field Desk
                </Link>
              </li>
              <li>
                <a
                  href="tel:+0000000000"
                  className="inline-flex items-center gap-1 font-semibold hover:underline transition-colors"
                  style={{ color: "var(--color-accent)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-accent-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-accent)")
                  }
                >
                  <span>Call Tech</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="mx-auto max-w-7xl pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
        <div>
          © {new Date().getFullYear()} Joy Machinery Solutions. All rights
          reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="#privacy"
            className="hover:text-neutral-900 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#terms"
            className="hover:text-neutral-900 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="#cookies"
            className="hover:text-neutral-900 transition-colors"
          >
            Cookie Preferences
          </Link>
        </div>
      </div>
    </footer>
  );
}
