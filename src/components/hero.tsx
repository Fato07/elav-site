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
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-stone-50">
      {/* Claw marks background */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          fontFamily: '"SF Mono", "Fira Code", monospace',
          whiteSpace: "pre",
          lineHeight: 1.0,
          fontSize: "clamp(0.6rem, 1.3vw, 1.3rem)",
          color: "rgba(214, 211, 209, 0.3)",
        }}
      >
        {CLAW_ASCII.join("\n")}
      </div>

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

        {/* Tagline — clean and minimal */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center font-[family-name:var(--font-instrument)] text-xl sm:text-2xl lg:text-3xl text-stone-600 italic"
        >
          AI-Powered CRM & Workflow Automation
        </motion.p>

        {/* Install */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-3 text-xs text-stone-400 font-[family-name:var(--font-mono)]"
        >
          opens at{" "}
          <span className="text-stone-500">localhost:3100</span>
          {" · "}
          <a
            href="https://github.com/DenchHQ/ironclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-700 transition-colors underline underline-offset-2"
          >
            GitHub
          </a>
          {" · built on "}
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-700 transition-colors underline underline-offset-2"
          >
            OpenClaw
          </a>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-stone-300 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-stone-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
