"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";

const navLinks = [
   { label: "Home", href: "#hero" },
  { label: "Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-1rem)] -translate-x-1/2 md:w-auto">
        <div className="rounded-full border border-white/10 bg-neutral-950/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3 md:gap-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/15">
                <Image
                  src="/Logo.png"
                  alt="Joy Machinery Solutions"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                  priority
                />
              </span>
              <span className="text-base font-semibold tracking-tight text-white">
                Joy Machinery
              </span>
            </a>

            <div className="hidden items-center gap-6 md:flex md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#services");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition-all hover:scale-[1.02] active:scale-95"
              >
                <PhoneCall className="h-4 w-4" />
                Call us
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`mt-3 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/95 shadow-2xl backdrop-blur-xl transition-[max-height,opacity,transform] duration-300 md:hidden ${
            mobileOpen
              ? "max-h-96 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#services");
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02] active:scale-95"
            >
              <PhoneCall className="h-4 w-4" />
              Call us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}