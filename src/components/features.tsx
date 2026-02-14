"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Database,
  Globe,
  Cpu,
  Brain,
  Smartphone,
  Layers,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Multi-Channel Inbox",
    description:
      "WhatsApp, Telegram, Slack, Discord, iMessage, Signal, Teams — all in one unified conversation stream.",
  },
  {
    icon: Database,
    title: "DuckDB Workspace",
    description:
      "Structured data objects, full-text search, custom fields, and bulk operations powered by a local DuckDB store.",
  },
  {
    icon: Globe,
    title: "Web UI",
    description:
      "Modern chat interface with chain-of-thought reasoning, interactive report cards, and a full database explorer.",
  },
  {
    icon: Cpu,
    title: "Agent Gateway",
    description:
      "Local-first WebSocket control plane for sessions, channels, tools, and events with lane-based concurrency.",
  },
  {
    icon: Brain,
    title: "Vercel AI SDK v6",
    description:
      "Supports Anthropic, OpenAI, Google, Groq, Mistral, xAI, OpenRouter, and Azure. Full extended thinking support.",
  },
  {
    icon: Smartphone,
    title: "Companion Apps",
    description:
      "macOS menu bar app, iOS and Android nodes with voice, camera, screen capture, and canvas capabilities.",
  },
  {
    icon: Layers,
    title: "Skills Platform",
    description:
      "Bundled, managed, and workspace-scoped skills. Install community skills or write your own to extend capabilities.",
  },
  {
    icon: Shield,
    title: "Local-First & Secure",
    description:
      "Everything runs on your machine. DM pairing, sandbox isolation, and full control over your data and API keys.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            A complete AI toolkit that runs locally. Connect your channels,
            manage your data, and let the agent handle the rest.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card group"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-stone-900 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold text-stone-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
