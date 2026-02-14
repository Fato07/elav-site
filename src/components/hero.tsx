"use client";

import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
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
          fontFamily:
            '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Courier New", monospace',
          whiteSpace: "pre",
          lineHeight: 1.0,
          fontSize: "clamp(0.6rem, 1.3vw, 1.3rem)",
          color: "rgba(214, 211, 209, 0.35)",
        }}
      >
        {CLAW_ASCII.join("\n")}
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
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
          The AI agent that lives
          <br />
          in your terminal.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 text-center text-stone-500 text-base sm:text-lg max-w-xl"
        >
          Personal AI assistant & CRM toolkit that runs on your devices.
          <br className="hidden sm:inline" />
          Multi-channel inbox. DuckDB workspace. Built on{" "}
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-stone-700 transition-colors"
          >
            OpenClaw
          </a>
          .
        </motion.p>

        {/* Install Command */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <button onClick={handleCopy} className="install-command group">
            <span>
              <span className="text-stone-500">$</span>{" "}
              <span className="text-stone-100">npm i -g ironclaw</span>
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

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-6 flex items-center gap-6"
        >
          <a
            href="#install"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-[family-name:var(--font-mono)]"
          >
            get started →
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
