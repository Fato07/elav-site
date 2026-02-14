"use client";

import { useState, useEffect } from "react";
import { Github } from "lucide-react";

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
          ? "bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-mono)] text-sm font-semibold tracking-wider text-stone-900"
        >
          IRONCLAW
        </a>

        <a
          href="https://github.com/DenchHQ/ironclaw"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </nav>
    </header>
  );
}
