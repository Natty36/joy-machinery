"use client";

import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  onLinkClick: (href: string) => void;
}

export default function MobileNav({
  isOpen,
  onClose,
  links,
  onLinkClick,
}: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] shadow-2xl"
            style={{ backgroundColor: "var(--color-dark)" }}
          >
            <div className="flex h-full flex-col px-8 py-6">
              {/* Close */}
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: "var(--color-light)" }}
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="mt-12 flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onLinkClick(link.href);
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.06,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-headline text-2xl font-semibold"
                    style={{ color: "var(--color-light)" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto pb-6">
                <Button
                  href="tel:+251936962486"
                  className="w-full justify-center gap-2"
                >
                  <span>📞</span>
                  <span>Call Us</span>
                </Button>
                <p
                  className="mt-4 text-center font-headline text-caption"
                  style={{ color: "var(--color-light)", opacity: 0.5 }}
                >
                  09-36-96-24-86
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}