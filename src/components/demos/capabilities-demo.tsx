"use client";

import { motion } from "framer-motion";
import {
  Chrome,
  GitCompare,
  Brain,
  Database,
} from "lucide-react";

const capabilities = [
  {
    icon: Chrome,
    iconColor: "#3b82f6",
    iconBg: "bg-blue-50",
    title: "Uses Your Chrome Profile",
    description:
      "Unlike other AI tools, Elav uses your existing Chrome profile — all your auth sessions, cookies, and history. It logs into LinkedIn, scrapes meetup attendees, and sends messages as you.",
    demo: (
      <div className="bg-stone-900 rounded-xl p-4 text-[11px] font-mono text-stone-300 space-y-1.5 shadow-inner">
        <p className="text-stone-500">{"// Elav detects your active Chrome profile"}</p>
        <p><span className="text-green-400">✓</span> Found Chrome profile: <span className="text-blue-400">Default</span></p>
        <p><span className="text-green-400">✓</span> Auth sessions: <span className="text-stone-200">LinkedIn, Gmail, GitHub, Twitter</span></p>
        <p><span className="text-green-400">✓</span> Cookies synced — no login needed</p>
        <p className="text-stone-500 pt-1">{"// Browsing as you..."}</p>
        <p><span className="text-yellow-400">→</span> Opening linkedin.com/in/hhaldre</p>
        <p><span className="text-yellow-400">→</span> Sending connection request + message</p>
        <p><span className="text-green-400">✓</span> Connection request sent to <span className="text-stone-200">Heikki Haldre</span></p>
      </div>
    ),
  },
  {
    icon: Database,
    iconColor: "#8b5cf6",
    iconBg: "bg-violet-50",
    title: "Chat with Your Database",
    description:
      "Ask questions in plain English — Elav translates to SQL, queries your DuckDB, and returns structured results. Like having a data analyst on speed dial.",
    demo: (
      <div className="space-y-2.5">
        <div className="bg-blue-600 text-white text-[11px] px-3.5 py-2 rounded-2xl rounded-tr-sm inline-block shadow-sm">
          How many attendees have we contacted from the meetup?
        </div>
        <div className="bg-stone-900 rounded-xl p-3 text-[10px] font-mono text-stone-300 shadow-inner">
          <p className="text-stone-500">SELECT &quot;Status&quot;, COUNT(*) as count</p>
          <p className="text-stone-500">FROM v_attendees GROUP BY &quot;Status&quot;;</p>
        </div>
        <div className="text-[12px] text-stone-700 bg-stone-50 rounded-xl p-3 border border-stone-100">
          You&apos;ve contacted <span className="font-semibold text-blue-600">25</span> of <span className="font-semibold">89</span> attendees. 12 are qualified, 7 converted.
          Reply rate is <span className="font-semibold text-green-600">48%</span>.
        </div>
      </div>
    ),
  },
  {
    icon: GitCompare,
    iconColor: "#10b981",
    iconBg: "bg-emerald-50",
    title: "Coding Agent with Diffs",
    description:
      "Elav doesn't just talk — it writes code. Review changes in a rich diff viewer before applying. Like Cursor, but for your whole system.",
    demo: (
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden text-[11px] font-mono shadow-sm">
        <div className="px-3 py-2 bg-stone-50 border-b border-stone-200 flex items-center gap-2">
          <span className="text-stone-500">src/config/channels.ts</span>
          <span className="ml-auto text-green-600 font-semibold">+3</span>
          <span className="text-red-500 font-semibold">-1</span>
        </div>
        <div className="divide-y divide-stone-100">
          <div className="px-3 py-1 text-stone-400 flex gap-3">
            <span className="w-6 text-right text-stone-300">14</span>
            <span>{"  channels: {"}</span>
          </div>
          <div className="px-3 py-1 bg-red-50/70 text-red-700 flex gap-3">
            <span className="w-6 text-right text-red-300">15</span>
            <span>{"−   whatsapp: { enabled: false },"}</span>
          </div>
          <div className="px-3 py-1 bg-green-50/70 text-green-700 flex gap-3">
            <span className="w-6 text-right text-green-400">15</span>
            <span>{"+ whatsapp: { enabled: true },"}</span>
          </div>
          <div className="px-3 py-1 bg-green-50/70 text-green-700 flex gap-3">
            <span className="w-6 text-right text-green-400">16</span>
            <span>{"+ telegram: { enabled: true },"}</span>
          </div>
          <div className="px-3 py-1 bg-green-50/70 text-green-700 flex gap-3">
            <span className="w-6 text-right text-green-400">17</span>
            <span>{"+ slack: { enabled: true },"}</span>
          </div>
          <div className="px-3 py-1 text-stone-400 flex gap-3">
            <span className="w-6 text-right text-stone-300">18</span>
            <span>{"  },"}</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Brain,
    iconColor: "#f59e0b",
    iconBg: "bg-amber-50",
    title: "Your Second Brain",
    description:
      "Elav has full access to your Mac — files, apps, documents. It remembers context across sessions, learns your preferences, and proactively handles tasks.",
    demo: (
      <div className="bg-stone-50 rounded-xl p-4 space-y-2.5 text-[11px] border border-stone-100">
        <div className="flex items-center gap-2 text-stone-500">
          <Brain className="w-3.5 h-3.5" />
          <span className="font-semibold text-[10px] uppercase tracking-wider">Memory</span>
        </div>
        <div className="space-y-2 text-stone-600">
          <p className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-green-500 mt-1 shrink-0" />
            Kumar prefers Anthropic Claude for complex tasks, GPT-4o for quick responses
          </p>
          <p className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0" />
            OpenClaw Meetup outreach: 89 attendees, 25 contacted, focus on tech entrepreneurs
          </p>
          <p className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-purple-500 mt-1 shrink-0" />
            Follow-up sequence: LinkedIn → Email → 2nd email (3 day intervals)
          </p>
          <p className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-orange-500 mt-1 shrink-0" />
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
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #78716c 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
            Elav doesn&apos;t just answer questions. It takes action — browsing the web,
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
              className="group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-stone-300 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl ${cap.iconBg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                >
                  <cap.icon
                    className="w-5 h-5"
                    style={{ color: cap.iconColor }}
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
              {cap.demo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
