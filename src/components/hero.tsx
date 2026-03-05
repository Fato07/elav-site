"use client";

import { motion } from "framer-motion";
import { Copy, Check, ArrowDown } from "lucide-react";
import { useState } from "react";

const DENCHCLAW_ASCII = [
  "██████╗ ███████╗███╗   ██╗ ██████╗██╗  ██╗ ██████╗██╗      █████╗ ██╗    ██╗",
  "██╔══██╗██╔════╝████╗  ██║██╔════╝██║  ██║██╔════╝██║     ██╔══██╗██║    ██║",
  "██║  ██║█████╗  ██╔██╗ ██║██║     ███████║██║     ██║     ███████║██║ █╗ ██║",
  "██║  ██║██╔══╝  ██║╚██╗██║██║     ██╔══██║██║     ██║     ██╔══██║██║███╗██║",
  "██████╔╝███████╗██║ ╚████║╚██████╗██║  ██║╚██████╗███████╗██║  ██║╚███╔███╔╝",
  "╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ",
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npx denchclaw");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-12 flex flex-col items-center overflow-hidden bg-stone-50">
      {/* Soft background texture */}
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
          <div className="ascii-banner select-none" aria-label="DenchClaw">
            {DENCHCLAW_ASCII.join("\n")}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 text-center font-[family-name:var(--font-instrument)] text-xl sm:text-2xl lg:text-3xl text-stone-600 italic"
        >
          AI CRM, hosted locally on your Mac.
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-2 text-center text-sm text-stone-400 max-w-lg"
        >
          Chat with your database. Automate outreach. Enrich leads. All from a single prompt. Powered by OpenClaw.
        </motion.p>

        {/* Install */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-7"
        >
          <button onClick={handleCopy} className="install-command group">
            <span>
              <span className="text-stone-500">$</span>{" "}
              <span className="text-stone-100">npx denchclaw</span>
            </span>
            <span className="text-stone-500 group-hover:text-stone-300 transition-colors">
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </span>
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-2.5 text-[11px] text-stone-400 font-[family-name:var(--font-mono)]"
        >
          opens at <span className="text-stone-500">localhost:3100</span>
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-stone-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
