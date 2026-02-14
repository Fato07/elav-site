"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

export default function OpenSource() {
  return (
    <section className="relative py-24 sm:py-32 bg-stone-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
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
            Ironclaw is fully open source, built on the OpenClaw framework.
            Fork it, extend it, make it yours.
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
            href="https://github.com/DenchHQ/ironclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 text-sm font-medium rounded-full hover:bg-stone-100 transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href="https://github.com/DenchHQ/ironclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-stone-700 text-stone-300 text-sm font-medium rounded-full hover:border-stone-500 hover:text-white transition-colors"
          >
            <Star className="w-4 h-4" />
            Star the Repo
          </a>
        </motion.div>

        {/* Project structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <div className="rounded-xl border border-stone-700/50 bg-stone-800/50 p-5 font-[family-name:var(--font-mono)] text-sm text-left">
            <p className="text-stone-500 mb-3">Project structure</p>
            <div className="space-y-1 text-stone-400">
              <p>
                <span className="text-stone-300">src/</span>
                {"            "}
                <span className="text-stone-600"># Core CLI & gateway</span>
              </p>
              <p>
                <span className="text-stone-300">apps/web/</span>
                {"       "}
                <span className="text-stone-600"># Next.js web UI</span>
              </p>
              <p>
                <span className="text-stone-300">apps/ios/</span>
                {"       "}
                <span className="text-stone-600"># iOS companion</span>
              </p>
              <p>
                <span className="text-stone-300">apps/android/</span>
                {"   "}
                <span className="text-stone-600"># Android companion</span>
              </p>
              <p>
                <span className="text-stone-300">apps/macos/</span>
                {"     "}
                <span className="text-stone-600"># Menu bar app</span>
              </p>
              <p>
                <span className="text-stone-300">extensions/</span>
                {"     "}
                <span className="text-stone-600"># Channel plugins</span>
              </p>
              <p>
                <span className="text-stone-300">skills/</span>
                {"         "}
                <span className="text-stone-600"># Workspace skills</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Built on OpenClaw */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 text-stone-500 text-sm flex items-center justify-center gap-2"
        >
          Built on{" "}
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
