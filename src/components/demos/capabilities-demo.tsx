"use client";

import { motion } from "framer-motion";
import {
  Chrome,
  GitCompare,
  Brain,
  MessageSquare,
  Database,
  Globe,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Chrome,
    title: "Uses Your Chrome Profile",
    description:
      "Unlike other AI tools, Ironclaw uses your existing Chrome profile — all your auth sessions, cookies, and history. It logs into LinkedIn, scrapes YC batches, and sends messages as you.",
    demo: (
      <div className="bg-stone-900 rounded-lg p-3 text-[11px] font-mono text-stone-300 space-y-1">
        <p className="text-stone-500">{"// Ironclaw detects your active Chrome profile"}</p>
        <p><span className="text-green-400">✓</span> Found Chrome profile: <span className="text-blue-400">Default</span></p>
        <p><span className="text-green-400">✓</span> Auth sessions: <span className="text-stone-200">LinkedIn, Gmail, GitHub, Twitter</span></p>
        <p><span className="text-green-400">✓</span> Cookies synced — no login needed</p>
        <p className="text-stone-500 pt-1">{"// Browsing as you..."}</p>
        <p><span className="text-yellow-400">→</span> Opening linkedin.com/in/veer-shah</p>
        <p><span className="text-yellow-400">→</span> Sending connection request + message</p>
        <p><span className="text-green-400">✓</span> Connection request sent to <span className="text-stone-200">Veer Shah</span></p>
      </div>
    ),
  },
  {
    icon: Database,
    title: "Chat with Your Database",
    description:
      "Ask questions in plain English — Ironclaw translates to SQL, queries your DuckDB, and returns structured results. Like having a data analyst on speed dial.",
    demo: (
      <div className="space-y-2">
        <div className="bg-blue-600 text-white text-[11px] px-3 py-1.5 rounded-2xl rounded-tr-sm inline-block">
          How many founders have we contacted from YC W26?
        </div>
        <div className="bg-stone-900 rounded-lg p-2.5 text-[10px] font-mono text-stone-300">
          <p className="text-stone-500">SELECT &quot;Status&quot;, COUNT(*) as count</p>
          <p className="text-stone-500">FROM v_founders GROUP BY &quot;Status&quot;;</p>
        </div>
        <div className="text-[12px] text-stone-700 bg-stone-50 rounded-lg p-2.5">
          You&apos;ve contacted <span className="font-semibold text-blue-600">67</span> of <span className="font-semibold">200</span> founders. 31 are qualified, 13 converted.
          Reply rate is <span className="font-semibold text-green-600">34%</span>.
        </div>
      </div>
    ),
  },
  {
    icon: GitCompare,
    title: "Coding Agent with Diffs",
    description:
      "Ironclaw doesn't just talk — it writes code. Review changes in a rich diff viewer before applying. Like Cursor, but for your whole system.",
    demo: (
      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden text-[11px] font-mono">
        <div className="px-3 py-1.5 bg-stone-50 border-b border-stone-200 flex items-center gap-2">
          <span className="text-stone-500">src/config/channels.ts</span>
          <span className="ml-auto text-green-600">+3</span>
          <span className="text-red-500">-1</span>
        </div>
        <div className="divide-y divide-stone-100">
          <div className="px-3 py-0.5 text-stone-400 flex gap-3">
            <span className="w-6 text-right text-stone-300">14</span>
            <span>{"  channels: {"}</span>
          </div>
          <div className="px-3 py-0.5 bg-red-50 text-red-700 flex gap-3">
            <span className="w-6 text-right text-red-300">15</span>
            <span>{"−   whatsapp: { enabled: false },"}</span>
          </div>
          <div className="px-3 py-0.5 bg-green-50 text-green-700 flex gap-3">
            <span className="w-6 text-right text-green-400">15</span>
            <span>{"+ whatsapp: { enabled: true },"}</span>
          </div>
          <div className="px-3 py-0.5 bg-green-50 text-green-700 flex gap-3">
            <span className="w-6 text-right text-green-400">16</span>
            <span>{"+ telegram: { enabled: true },"}</span>
          </div>
          <div className="px-3 py-0.5 bg-green-50 text-green-700 flex gap-3">
            <span className="w-6 text-right text-green-400">17</span>
            <span>{"+ slack: { enabled: true },"}</span>
          </div>
          <div className="px-3 py-0.5 text-stone-400 flex gap-3">
            <span className="w-6 text-right text-stone-300">18</span>
            <span>{"  },"}</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Brain,
    title: "Your Second Brain",
    description:
      "Ironclaw has full access to your Mac — files, apps, documents. It remembers context across sessions, learns your preferences, and proactively handles tasks.",
    demo: (
      <div className="bg-stone-50 rounded-lg p-3 space-y-2 text-[11px]">
        <div className="flex items-center gap-2 text-stone-500">
          <Brain className="w-3 h-3" />
          <span className="font-medium">Memory</span>
        </div>
        <div className="space-y-1.5 text-stone-600">
          <p className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">●</span>
            Kumar prefers Anthropic Claude for complex tasks, GPT-4o for quick responses
          </p>
          <p className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">●</span>
            YC W26 outreach campaign: 200 founders, 67 contacted, focus on AI/ML companies
          </p>
          <p className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">●</span>
            Follow-up sequence: LinkedIn → Email → 2nd email (3 day intervals)
          </p>
          <p className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">●</span>
            Prefers Instrument Serif for headings, Inter for body text
          </p>
        </div>
      </div>
    ),
  },
];

export default function CapabilitiesDemo() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Not just chat — full autonomy
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Ironclaw doesn&apos;t just answer questions. It takes action — browsing the web,
            querying databases, writing code, and managing your pipeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                  <cap.icon className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
              {/* Live demo */}
              <div className="mt-4">{cap.demo}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
