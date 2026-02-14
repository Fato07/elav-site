"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Channels", href: "#channels" },
  { label: "Get Started", href: "#install" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-mono)] text-sm font-semibold tracking-wider text-stone-900"
        >
          IRONCLAW
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/DenchHQ/ironclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50/95 backdrop-blur-xl border-b border-stone-200/60 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-stone-600 hover:text-stone-900 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/DenchHQ/ironclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 py-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
