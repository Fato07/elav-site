"use client";

import { motion } from "framer-motion";
import { Copy, Check, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function InstallCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm i -g ironclaw");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="relative py-32 sm:py-40 bg-white overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
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
            Install Ironclaw
          </h2>
          <p className="text-stone-500 text-lg mb-10 max-w-md mx-auto">
            One command. Node 22+. Opens at{" "}
            <code className="text-stone-700 bg-stone-100 px-1.5 py-0.5 rounded text-sm font-[family-name:var(--font-mono)]">
              localhost:3100
            </code>{" "}
            in under a minute.
          </p>
        </motion.div>

        {/* Big install command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <button
            onClick={handleCopy}
            className="install-command text-lg sm:text-xl mx-auto max-w-md w-full group"
          >
            <span>
              <span className="text-stone-500">$</span>{" "}
              <span className="text-stone-100">npm i -g ironclaw</span>
            </span>
            <span className="text-stone-500 group-hover:text-stone-300 transition-colors">
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </span>
          </button>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-sm font-[family-name:var(--font-mono)] text-stone-500"
        >
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs text-stone-600 font-semibold">
              1
            </span>
            npm i -g ironclaw
          </span>
          <ArrowRight className="w-4 h-4 text-stone-300 hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs text-stone-600 font-semibold">
              2
            </span>
            ironclaw onboard
          </span>
          <ArrowRight className="w-4 h-4 text-stone-300 hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs text-stone-600 font-semibold">
              3
            </span>
            ironclaw gateway start
          </span>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/DenchHQ/ironclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href="https://github.com/DenchHQ/ironclaw#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-stone-200 text-stone-700 text-sm font-medium rounded-full hover:border-stone-300 hover:bg-stone-50 transition-colors"
          >
            Read the Docs
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
