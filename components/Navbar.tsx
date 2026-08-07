"use client";

import { useState } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Button from "./ui/Button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(20,19,19,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto flex items-center justify-between px-4 md:px-8 lg:px-11 py-0">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="relative h-14 w-48 md:h-18 md:w-40 "
          >
            <Image
              src="/Logo.png"
              alt="Joy Machinery Solutions"
              width={135}
              height={100}
              className="object-contain object-left -mt-7 ml-5"
              priority
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-6 lg:gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="font-headline text-base font-medium transition-opacity hover:opacity-70 lg:text-lg"
                style={{ color: "var(--color-light)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="tel:+251936962486" className="px-6 py-3 text-base">
              Call us
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex flex-col items-end gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span
              className="block h-0.5 w-7"
              style={{ backgroundColor: "var(--color-light)" }}
            />
            <span
              className="block h-0.5 w-7"
              style={{ backgroundColor: "var(--color-light)" }}
            />
            <span
              className="block h-0.5 w-4"
              style={{ backgroundColor: "var(--color-light)" }}
            />
          </button>
        </div>
      </nav>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        onLinkClick={scrollToSection}
      />
    </>
  );
}