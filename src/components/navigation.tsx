"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-13 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-wide text-stone-900 leading-none">
          ELAV
        </a>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="#demo"
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
