"use client";

import { motion } from "framer-motion";
import { Github, Star, ExternalLink } from "lucide-react";

export default function OpenSource() {
  return (
    <section className="relative py-24 sm:py-32 bg-stone-900 text-white overflow-hidden">
      {/* Background gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.06) 0%, transparent 50%)
          `,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-700 text-stone-400 text-xs font-[family-name:var(--font-mono)] mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            MIT Licensed · Open Source
          </div>

          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl lg:text-5xl text-white italic mb-6">
            Built in the open
          </h2>
          <p className="text-stone-400 text-lg max-w-lg mx-auto mb-10">
            Elav AI is your AI operations team built on the OpenClaw framework. The right way to use OpenClaw.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://github.com/Fato07/elav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 text-sm font-medium rounded-full hover:bg-stone-100 transition-all hover:shadow-lg hover:shadow-white/10"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href="https://github.com/Fato07/elav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-stone-700 text-stone-300 text-sm font-medium rounded-full hover:border-stone-500 hover:text-white hover:bg-white/5 transition-all"
          >
            <Star className="w-4 h-4" />
            Star the Repo
          </a>
        </motion.div>

        {/* OpenClaw snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <div className="rounded-2xl border border-stone-700/50 bg-stone-800/50 backdrop-blur-sm p-6 font-[family-name:var(--font-mono)] text-sm text-left shadow-2xl shadow-black/20">
            <p className="text-stone-500 mb-4 text-xs uppercase tracking-wider font-medium">
              OpenClaw
            </p>
            <div className="space-y-1.5 text-stone-400">
              {[
                { label: "Runtime", value: "Local-first agents + gateway" },
                { label: "Skills", value: "Composable automations and tools" },
                { label: "Interfaces", value: "Web UI, channels, and APIs" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 py-0.5 group">
                  <span className="text-stone-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="flex-1 border-b border-stone-700/30 border-dotted" />
                  <span className="text-stone-600 text-xs">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Powered by OpenClaw */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 text-stone-500 text-sm flex items-center justify-center gap-2"
        >
          Powered by{" "}
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors underline underline-offset-2"
          >
            OpenClaw
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.p>
      </div>
    </section>
  );
}
