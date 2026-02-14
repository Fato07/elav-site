"use client";

import { motion } from "framer-motion";
import { Copy, Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const CLAW_ASCII = [
  "                                                                                          ░░░░",
  "                                                                                        ░░░░░░",
  "                                         ░░░░                                          ░░░░░░░",
  "                                       ░░░░░░                            ░░░░         ░░░▓▓░░░",
  "                          ░░░░        ░░░░░░░                          ░░░░░░        ░░▓▓▓▓░░░",
  "                        ░░░░░░       ░░░▓▓░░░              ░░░░       ░░░░░░░       ░░▓▓▓▓▓░░ ",
  "                       ░░░░░░░      ░░▓▓▓▓░░░            ░░░░░░      ░░░▓▓░░░     ░░▓▓▓▓▓░░  ",
  "                      ░░░▓▓░░░     ░░▓▓▓▓▓░░            ░░░░░░░     ░░▓▓▓▓░░░    ░▓▓▓▓▓▓░░   ",
  "                     ░░▓▓▓▓░░░    ░░▓▓▓▓▓░░            ░░░▓▓░░░    ░░▓▓▓▓▓░░    ░▓▓▓▓▓▓░░    ",
  "                    ░░▓▓▓▓▓░░    ░▓▓▓▓▓▓░░            ░░▓▓▓▓░░░   ░░▓▓▓▓▓░░    ▓▓▓▓▓▓░░     ",
  "                   ░░▓▓▓▓▓░░    ░▓▓▓▓▓▓░░            ░░▓▓▓▓▓░░   ░▓▓▓▓▓▓░░    ▓▓▓▓▓▓░░      ",
  "                  ░░▓▓▓▓▓░░    ▓▓▓▓▓▓░░             ░░▓▓▓▓▓░░    ░▓▓▓▓▓░░    ▓▓▓▓▓░░░       ",
  "                 ░▓▓▓▓▓▓░░    ▓▓▓▓▓▓░░             ░░▓▓▓▓▓░░    ▓▓▓▓▓▓░░    ▓▓▓▓▓░░         ",
  "                ░▓▓▓▓▓▓░░    ▓▓▓▓▓░░░             ░▓▓▓▓▓▓░░    ▓▓▓▓▓▓░░    ▓▓▓▓▓░░          ",
  "               ░▓▓▓▓▓▓░░   ▓▓▓▓▓░░              ░▓▓▓▓▓▓░░    ▓▓▓▓▓░░░   ▓▓▓▓▓░░            ",
  "              ░▓▓▓▓▓░░░   ▓▓▓▓▓░░              ░▓▓▓▓▓▓░░    ▓▓▓▓▓░░    ▓▓▓▓▓░░             ",
  "             ░▓▓▓▓▓░░    ▓▓▓▓░░░              ░▓▓▓▓▓░░░    ▓▓▓▓▓░░    ▓▓▓▓░░░              ",
  "            ░▓▓▓▓▓░░    ▓▓▓▓░░              ░░▓▓▓▓▓░░     ▓▓▓▓░░░   ▓▓▓▓░░                ",
  "           ░▓▓▓▓░░░   ▓▓▓▓░░              ░░▓▓▓▓▓░░      ▓▓▓▓░░    ▓▓▓▓░░                 ",
  "          ░▓▓▓▓░░    ▓▓▓░░░              ░▓▓▓▓▓░░░      ▓▓▓▓░░    ▓▓▓░░░                  ",
  "         ░▓▓▓▓░░    ▓▓▓░░              ░░▓▓▓▓░░        ▓▓▓░░░   ▓▓▓░░                    ",
  "        ░▓▓▓░░░    ▓▓░░░              ░▓▓▓▓░░░        ▓▓▓░░    ▓▓▓░░                     ",
  "       ░▓▓▓░░     ▓▓░░              ░░▓▓▓░░          ▓▓░░░    ▓▓░░░                      ",
  "      ░▓▓░░░    ░▓░░              ░░▓▓▓░░           ▓▓░░     ▓▓░░                        ",
  "     ░▓▓░░     ░▓░░              ░▓▓▓░░░          ░▓░░░    ░▓░░                          ",
  "    ░▓░░░     ░░░               ░▓▓░░            ░▓░░     ░▓░░                           ",
  "   ░▓░░      ░░               ░░▓░░░           ░░░░     ░░░░                             ",
  "  ░░░░      ░                ░░▓░░             ░░░      ░░░                              ",
  "  ░░░                       ░░░░░              ░░       ░░                               ",
  " ░░                         ░░░               ░                                          ",
  " ░                          ░░                                                           ",
];

const IRONCLAW_ASCII = [
  " ██╗██████╗  ██████╗ ███╗   ██╗ ██████╗██╗      █████╗ ██╗    ██╗",
  " ██║██╔══██╗██╔═══██╗████╗  ██║██╔════╝██║     ██╔══██╗██║    ██║",
  " ██║██████╔╝██║   ██║██╔██╗ ██║██║     ██║     ███████║██║ █╗ ██║",
  " ██║██╔══██╗██║   ██║██║╚██╗██║██║     ██║     ██╔══██║██║███╗██║",
  " ██║██║  ██║╚██████╔╝██║ ╚████║╚██████╗███████╗██║  ██║╚███╔███╔╝",
  " ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ",
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm i -g ironclaw");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-50">
      {/* Claw marks background */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          fontFamily: '"SF Mono", "Fira Code", monospace',
          whiteSpace: "pre",
          lineHeight: 1.0,
          fontSize: "clamp(0.6rem, 1.3vw, 1.3rem)",
          color: "rgba(214, 211, 209, 0.35)",
        }}
      >
        {CLAW_ASCII.join("\n")}
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* ASCII Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="ascii-banner select-none" aria-label="IRONCLAW">
            {IRONCLAW_ASCII.join("\n")}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center font-[family-name:var(--font-instrument)] text-2xl sm:text-3xl lg:text-4xl text-stone-700 italic max-w-2xl leading-snug"
        >
          AI-Powered CRM &
          <br />
          Workflow Automation
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 text-center text-stone-500 text-base sm:text-lg max-w-xl"
        >
          Chat with your database. Enrich leads automatically.
          Automate outreach across every channel. Runs locally on{" "}
          <code className="text-stone-700 bg-stone-100 px-1.5 py-0.5 rounded text-sm font-[family-name:var(--font-mono)]">
            localhost:3100
          </code>
          .
        </motion.p>

        {/* Install Command */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <button onClick={handleCopy} className="install-command group">
            <span>
              <span className="text-stone-500">$</span>{" "}
              <span className="text-stone-100">npm i -g ironclaw</span>
            </span>
            <span className="text-stone-500 group-hover:text-stone-300 transition-colors">
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </span>
          </button>
          <p className="text-[11px] text-stone-400 font-[family-name:var(--font-mono)]">
            then run <span className="text-stone-500">ironclaw onboard --install-daemon</span> → opens at <span className="text-stone-500">localhost:3100</span>
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {["CRM & Database", "Lead Enrichment", "Workflow Automation", "Multi-Channel Outreach", "Browser Automation", "Analytics & Reports"].map((pill) => (
            <span
              key={pill}
              className="text-xs text-stone-500 bg-white/80 border border-stone-200/60 px-3 py-1.5 rounded-full"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 flex items-center gap-6"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-1.5 text-sm text-stone-900 bg-stone-200/60 hover:bg-stone-200 px-4 py-2 rounded-full transition-colors font-medium"
          >
            See it in action
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/DenchHQ/ironclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-[family-name:var(--font-mono)]"
          >
            view source →
          </a>
        </motion.div>

        {/* Built on OpenClaw */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-4 text-xs text-stone-400"
        >
          Built on{" "}
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-stone-600 transition-colors"
          >
            OpenClaw
          </a>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-stone-300 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-stone-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
