"use client";

import { motion } from "framer-motion";

const channels = [
  { name: "WhatsApp", emoji: "💬" },
  { name: "Telegram", emoji: "✈️" },
  { name: "Slack", emoji: "⚡" },
  { name: "Discord", emoji: "🎮" },
  { name: "iMessage", emoji: "🍎" },
  { name: "Signal", emoji: "🔒" },
  { name: "Microsoft Teams", emoji: "🏢" },
  { name: "Google Chat", emoji: "💌" },
  { name: "Matrix", emoji: "🌐" },
  { name: "WebChat", emoji: "🖥️" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Channels() {
  return (
    <section id="channels" className="relative py-24 sm:py-32 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Channels
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            One agent, every channel
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto">
            Connect any messaging platform. Your AI agent responds everywhere,
            managed from a single terminal.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {channels.map((channel) => (
            <motion.div
              key={channel.name}
              variants={pillVariants}
              className="channel-pill"
            >
              <span className="text-lg">{channel.emoji}</span>
              <span className="font-medium">{channel.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="terminal-window max-w-2xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: "#FF5F56" }} />
              <div className="terminal-dot" style={{ background: "#FFBD2E" }} />
              <div className="terminal-dot" style={{ background: "#27CA40" }} />
              <span className="ml-4 text-xs text-stone-500 font-[family-name:var(--font-mono)]">
                architecture
              </span>
            </div>
            <div
              className="terminal-body text-xs sm:text-sm"
              style={{ lineHeight: 1.6 }}
            >
              <pre className="text-stone-400">
{`  WhatsApp · Telegram · Slack · Discord
  Signal · iMessage · Teams · WebChat
               │
               ▼
  ┌────────────────────────────┐
  │     Elav.AI Gateway      │
  │   ws://127.0.0.1:18789    │
  └─────────────┬──────────────┘
                │
    ┌───────────┼───────────┐
    │           │           │
    ▼           ▼           ▼
  AI SDK     Web UI       CLI
  Engine     (Elav)    (elav)
`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
