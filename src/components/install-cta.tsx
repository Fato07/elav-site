"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-40 bg-white overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(120,113,108,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-4xl sm:text-5xl text-stone-900 italic mb-6">
            Ready to automate?
          </h2>
          <p className="text-stone-500 text-lg mb-10 max-w-md mx-auto">
            Let us show you how Elav can transform your operations
            with autonomous agents working around the clock.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12"
        >
          {[
            "7 Specialized Agents",
            "117 Tools",
            "24/7 Autonomous",
          ].map((label) => (
            <span
              key={label}
              className="px-3.5 py-1.5 rounded-full border border-stone-200 bg-stone-50 text-xs sm:text-sm font-[family-name:var(--font-mono)] text-stone-600"
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="mailto:atlas@codesdevs.io?subject=Elav Demo Request"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 hover:shadow-lg transition-all"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm text-stone-400">
            Or email us at{" "}
            <a
              href="mailto:atlas@codesdevs.io"
              className="text-stone-600 underline underline-offset-2 hover:text-stone-900 transition-colors"
            >
              atlas@codesdevs.io
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
