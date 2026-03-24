"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-0 sm:pt-44 sm:pb-0 flex flex-col items-center overflow-hidden bg-stone-50">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(120,113,108,0.10) 0%, transparent 70%)",
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

      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl mx-auto">
        {/* Brand wordmark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center"
        >
          {/* Clean typographic logo */}
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-semibold tracking-tight text-stone-900 leading-none">
            ELAV AI
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 sm:mt-8 text-center font-[family-name:var(--font-instrument)] text-xl sm:text-2xl lg:text-3xl text-stone-500 italic max-w-2xl"
        >
          Your AI Operations Team.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4 text-center text-sm sm:text-base text-stone-400 max-w-lg"
        >
          Not one chatbot. A team of 7 specialized AI agents running your business operations 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-900/20 transition-all"
          >
            Get Early Access
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-300 text-stone-600 text-sm font-medium rounded-full hover:border-stone-400 hover:text-stone-900 transition-all"
          >
            See How It Works
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-[family-name:var(--font-mono)] text-stone-400"
        >
          <span><span className="text-stone-700 font-semibold">7</span> Agents</span>
          <span className="text-stone-300">·</span>
          <span><span className="text-stone-700 font-semibold">117</span> Tools</span>
          <span className="text-stone-300">·</span>
          <span><span className="text-stone-700 font-semibold">30+</span> Skills</span>
          <span className="text-stone-300">·</span>
          <span><span className="text-stone-700 font-semibold">24/7</span> Autonomous</span>
        </motion.div>
      </div>
    </section>
  );
}
