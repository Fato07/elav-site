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
    <section
      id="install"
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
            className="bg-stone-900 border border-stone-800 rounded-[10px] px-[18px] py-2.5 font-[family-name:var(--font-mono)] text-sm text-stone-50 flex items-center justify-between gap-3.5 cursor-pointer transition-all duration-300 hover:border-stone-700 hover:-translate-y-px hover:shadow-[0_4px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.05)_inset] text-lg sm:text-xl mx-auto max-w-md w-full group"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {[
            { step: "1", label: "npm i -g ironclaw" },
            { step: "2", label: "ironclaw onboard" },
            { step: "3", label: "ironclaw gateway start" },
          ].map((item, i) => (
            <div key={item.step} className="flex items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-stone-500">
                <span className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-xs text-stone-600 font-bold">
                  {item.step}
                </span>
                {item.label}
              </span>
              {i < 2 && (
                <ArrowRight className="w-4 h-4 text-stone-300 hidden sm:block" />
              )}
            </div>
          ))}
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 hover:shadow-lg transition-all"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href="https://github.com/DenchHQ/ironclaw#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-stone-200 text-stone-700 text-sm font-medium rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all"
          >
            Read the Docs
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
