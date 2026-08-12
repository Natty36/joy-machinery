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

/* --- Desktop Concave Wings --- */
function ConcaveLeft() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 20 20"
      fill="none"
      className="hidden text-[var(--color-light)] md:block -mr-[1px] pointer-events-none shrink-0"
    >
      <path d="M0 0 H20 V20 C20 9 11 0 0 0 Z" fill="currentColor" />
    </svg>
  );
}

function ConcaveRight() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 20 20"
      fill="none"
      className="hidden text-[var(--color-light)] md:block -ml-[1px] pointer-events-none shrink-0"
    >
      <path d="M20 0 H0 V20 C0 9 9 0 20 0 Z" fill="currentColor" />
    </svg>
  );
}

/* --- Mobile Concave Wings --- */
function ConcaveLeftMobile() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      className="block text-[var(--color-light)] md:hidden -mr-[1px] pointer-events-none shrink-0"
    >
      <path d="M0 0 H20 V20 C20 9 11 0 0 0 Z" fill="currentColor" />
    </svg>
  );
}

function ConcaveRightMobile() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      className="block text-[var(--color-light)] md:hidden -ml-[1px] pointer-events-none shrink-0"
    >
      <path d="M20 0 H0 V20 C0 9 9 0 20 0 Z" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-2 left-1/2 z-50 flex w-[calc(100%-5rem)] max-w-[280px] -translate-x-1/2 items-start justify-center transition-all duration-300 md:w-auto md:max-w-none ${
        scrolled ? "top-4" : "top-0"
      }`}
    >
      {/* 1. Show Concave SVG wings ONLY when at the top */}
      {!scrolled && (
        <>
          <ConcaveLeftMobile />
          <ConcaveLeft />
        </>
      )}

      {/* 2. Main Navbar Container */}
      <div
        className={`w-full px-3 py-1.5 transition-all duration-300 md:w-auto ${
          scrolled
            ? "rounded-full border border-[var(--color-dark)]/10 bg-[var(--color-light)]/80 shadow-xl backdrop-blur-xl"
            : "rounded-b-4xl md:rounded-b-3xl bg-[var(--color-light)] shadow-none backdrop-blur-none pt-4 md:pt-8"
        }`}
      >
        <div className="flex items-center justify-between gap-2 md:gap-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center whitespace-nowrap"
            aria-label="Joy Machinery Solutions"
          >
            <Image
              src="/Logo.png"
              alt="Joy Machinery Solutions"
              width={96}
              height={72}
              className="h-10 w-auto origin-left scale-[2.5] object-contain"
              priority
            />
          </a>

          <div className="hidden items-center gap-4 md:flex md:gap-9">
            <div className="flex items-center gap-6 md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-[var(--color-logo)] transition-colors hover:text-[var(--color-dark)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#services");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-sm font-semibold text-[var(--color-light)] transition-all hover:scale-[1.02] active:scale-95"
            >
              <PhoneCall className="h-4 w-4" />
              Call us
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-dark)]/10 bg-[var(--color-accent)] text-white transition-colors hover:bg-[var(--color-dark)]/10 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* 3. Show Concave SVG wings ONLY when at the top */}
      {!scrolled && (
        <>
          <ConcaveRightMobile />
          <ConcaveRight />
        </>
      )}

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 right-0 mt-3 overflow-hidden rounded-3xl border border-[var(--color-dark)]/10 bg-[var(--color-light)]/95 shadow-2xl backdrop-blur-xl transition-[max-height,opacity,transform] duration-300 md:hidden ${
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
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-logo)] transition-colors hover:bg-[var(--color-dark)]/5 hover:text-[var(--color-dark)]"
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
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#113a72] px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-95"
          >
            <PhoneCall className="h-4 w-4 text-white" />
            Call us
          </a>
        </div>
      </div>
    </nav>
  );
}