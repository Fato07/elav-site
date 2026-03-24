"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ELAV_ASCII = [
  "███████╗██╗      █████╗ ██╗   ██╗   █████╗ ██╗",
  "██╔════╝██║     ██╔══██╗██║   ██║  ██╔══██╗██║",
  "█████╗  ██║     ███████║██║   ██║  ███████║██║",
  "██╔══╝  ██║     ██╔══██║╚██╗ ██╔╝  ██╔══██║██║",
  "███████╗███████╗██║  ██║ ╚████╔╝██╗██║  ██║██║",
  "╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝ ╚═╝╚═╝  ╚═╝╚═╝",
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-0 sm:pt-32 sm:pb-0 flex flex-col items-center overflow-hidden bg-stone-50">
      {/* Claw marks background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(120,113,108,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* ASCII Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="ascii-banner select-none" aria-label="Elav AI">
            {ELAV_ASCII.join("\n")}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 text-center font-[family-name:var(--font-instrument)] text-xl sm:text-2xl lg:text-3xl text-stone-600 italic"
        >
          Your AI Operations Team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-7 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 hover:shadow-lg transition-all ring-2 ring-stone-200 ring-offset-4 ring-offset-stone-50"
          >
            Get Early Access
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-stone-300 text-stone-600 text-sm font-medium rounded-full hover:border-stone-400 hover:text-stone-900 transition-all"
          >
            See How It Works
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
