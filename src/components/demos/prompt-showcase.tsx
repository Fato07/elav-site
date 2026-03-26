"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search,
  Sparkles,
  Send,
  BarChart3,
  Clock,
  Check,
  UserPlus,
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react";

/* ─── Use case definitions ─── */
const useCases = [
  {
    id: "prospect",
    icon: Search,
    label: "Find Leads",
    prompt: "Find OpenClaw Meetup attendees with email addresses",
    color: "#3b82f6",
    bg: "bg-blue-50",
  },
  {
    id: "enrich",
    icon: Sparkles,
    label: "Enrich Data",
    prompt: "Enrich all contacts with LinkedIn and email",
    color: "#8b5cf6",
    bg: "bg-violet-50",
  },
  {
    id: "outreach",
    icon: Send,
    label: "Send Outreach",
    prompt: "Send personalized messages to qualified leads",
    color: "#10b981",
    bg: "bg-emerald-50",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analyze",
    prompt: "Show me pipeline stats for this quarter",
    color: "#f59e0b",
    bg: "bg-amber-50",
  },
  {
    id: "automate",
    icon: Clock,
    label: "Automate",
    prompt: "Set up weekly follow-up sequences for all leads",
    color: "#ef4444",
    bg: "bg-red-50",
  },
];

/* ─── Demo content for each use case ─── */

function ProspectDemo() {
  const leads = [
    { name: "Heikki Haldre", company: "Miros", role: "Co-founder & CEO", match: "98%" },
    { name: "Teemu Arina", company: "HOLOLIFE Center", role: "Founder", match: "95%" },
    { name: "Chris Kacher", company: "TriQuantum Technologies", role: "Co-founder", match: "93%" },
    { name: "Timur Hassanov", company: "Bob W.", role: "CTO", match: "91%" },
    { name: "Jurgen Ukkivi", company: "North Coast Code", role: "Co-Founder & CTO", match: "88%" },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-3">
        <Globe className="w-3 h-3 text-blue-500" />
        <span>Scraping meetup attendee list and LinkedIn — <span className="text-stone-600 font-medium">24 matches</span></span>
      </div>
      {leads.map((lead, i) => (
        <motion.div
          key={lead.name}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.15 }}
          className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-stone-100 hover:border-stone-200 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">
            {lead.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-semibold text-stone-800 truncate">{lead.name}</p>
            <p className="text-[10px] text-stone-400 truncate">{lead.role} · {lead.company}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[9px] font-mono text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">{lead.match}</span>
            <UserPlus className="w-3.5 h-3.5 text-blue-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function EnrichDemo() {
  const fields = [
    { name: "Heikki Haldre", linkedin: "linkedin.com/in/hhaldre", email: "heikki.haldre@miros.ai", education: "Entrepreneur" },
    { name: "Teemu Arina", linkedin: "linkedin.com/in/teemuarina", email: "teemu@hololifecenter.com", education: "Entrepreneur" },
    { name: "Chris Kacher", linkedin: "linkedin.com/in/chriskacher", email: "chris@triquantumtech.com", education: "Finance/Investment" },
    { name: "Timur Hassanov", linkedin: "linkedin.com/in/timurhassanov", email: "timur@bobw.co", education: "Estonian Business School" },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-3">
        <Sparkles className="w-3 h-3 text-violet-500" />
        <span>Enriching 89 attendees — <span className="text-stone-600 font-medium">27% coverage</span></span>
      </div>
      <div className="border border-stone-100 rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1fr] text-[9px] font-mono text-stone-400 uppercase tracking-wider px-3 py-2 bg-stone-50/80 border-b border-stone-100">
          <span>Name</span><span>LinkedIn</span><span>Email</span><span>Education</span>
        </div>
        {fields.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
            className="grid grid-cols-[1fr_1.2fr_1.2fr_1fr] text-[11px] px-3 py-2 border-b border-stone-50 last:border-0 items-center"
          >
            <span className="font-medium text-stone-800 truncate">{f.name}</span>
            <motion.span
              className="text-blue-500 truncate"
              initial={{ opacity: 0, color: "#8b5cf6" }}
              animate={{ opacity: 1, color: "#3b82f6" }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
            >
              {f.linkedin}
            </motion.span>
            <motion.span
              className="text-stone-500 truncate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.2 + 0.5 }}
            >
              {f.email}
            </motion.span>
            <motion.span
              className="text-stone-500 truncate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.2 + 0.7 }}
            >
              {f.education}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function OutreachDemo() {
  const messages = [
    { name: "Heikki Haldre", preview: "Hi Heikki, loved your work with Fits.me and now Miros — visual AI is the future! We're building...", status: "Sent", done: true },
    { name: "Teemu Arina", preview: "Teemu, your biohacking expertise at HOLOLIFE Center is impressive. We'd love to...", status: "Sent", done: true },
    { name: "Chris Kacher", preview: "Chris, TriQuantum Technologies caught my eye — the AI/Web3 intersection is heating up. I'd...", status: "Sending", done: false },
    { name: "Franck Nouyrigat", preview: "Franck, your work with Startup Weekend is legendary. We're building stealth AI too and...", status: "Queued", done: false },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-3">
        <Mail className="w-3 h-3 text-emerald-500" />
        <span>Sending personalized LinkedIn messages — <span className="text-stone-600 font-medium">18 of 25</span></span>
      </div>
      {messages.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
          className="p-3 bg-white rounded-xl border border-stone-100"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[12px] font-semibold text-stone-800">{m.name}</span>
            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${m.done ? "bg-green-50 text-green-600" : m.status === "Sending" ? "bg-blue-50 text-blue-600" : "bg-stone-50 text-stone-400"}`}>
              {m.done && <Check className="w-2.5 h-2.5 inline mr-0.5" />}
              {m.status}
            </span>
          </div>
          <p className="text-[10.5px] text-stone-500 leading-relaxed truncate">{m.preview}</p>
        </motion.div>
      ))}
    </div>
  );
}

function AnalyticsDemo() {
  const stats = [
    { label: "Response Rate", value: "48%", change: "+15%", positive: true },
    { label: "Avg Reply Time", value: "1.8d", change: "-0.6d", positive: true },
    { label: "Pipeline Value", value: "$420K", change: "+$120K", positive: true },
    { label: "Conversion", value: "7.9%", change: "+1.4%", positive: true },
  ];

  const bars = [
    { label: "New", value: 45, color: "#94a3b8" },
    { label: "Contacted", value: 25, color: "#3b82f6" },
    { label: "Qualified", value: 12, color: "#10b981" },
    { label: "Converted", value: 7, color: "#8b5cf6" },
  ];
  const maxBar = bars[0].value;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-white rounded-xl border border-stone-100 p-2.5 text-center"
          >
            <p className="text-lg font-bold text-stone-800">{s.value}</p>
            <p className="text-[9px] text-stone-400 mt-0.5">{s.label}</p>
            <p className="text-[9px] font-mono text-green-600 mt-1">{s.change}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-white rounded-xl border border-stone-100 p-3"
      >
        <p className="text-[10px] text-stone-400 font-medium mb-3">Pipeline by Stage</p>
        <div className="space-y-2">
          {bars.map((b, i) => (
            <div key={b.label} className="flex items-center gap-2">
              <span className="text-[10px] text-stone-500 w-16 shrink-0">{b.label}</span>
              <div className="flex-1 h-5 bg-stone-50 rounded overflow-hidden">
                <motion.div
                  className="h-full rounded"
                  style={{ background: b.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(b.value / maxBar) * 100}%` }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                />
              </div>
              <span className="text-[10px] font-mono text-stone-600 w-6 text-right">{b.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function AutomateDemo() {
  const automations = [
    { name: "Follow-up if no reply after 3 days", trigger: "No reply · 3d", status: "Active", icon: "🔄" },
    { name: "Move to Qualified when they reply", trigger: "Reply detected", status: "Active", icon: "📥" },
    { name: "Weekly pipeline report every Monday", trigger: "Cron · MON 9AM", status: "Active", icon: "📊" },
    { name: "Enrich new leads from LinkedIn", trigger: "New lead added", status: "Active", icon: "✨" },
    { name: "Alert me on high-intent replies", trigger: "Sentiment > 0.8", status: "Active", icon: "🔔" },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-3">
        <Clock className="w-3 h-3 text-red-500" />
        <span>Created 5 automation rules — <span className="text-stone-600 font-medium">all active</span></span>
      </div>
      {automations.map((a, i) => (
        <motion.div
          key={a.name}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.12 }}
          className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-stone-100"
        >
          <span className="text-sm shrink-0">{a.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-stone-800 truncate">{a.name}</p>
            <p className="text-[9px] text-stone-400 font-mono">{a.trigger}</p>
          </div>
          <span className="text-[9px] font-mono text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            {a.status}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

const demoComponents: Record<string, React.ComponentType> = {
  prospect: ProspectDemo,
  enrich: EnrichDemo,
  outreach: OutreachDemo,
  analytics: AnalyticsDemo,
  automate: AutomateDemo,
};

/* ─── Main Component ─── */
export default function PromptShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState("prospect");
  const [animKey, setAnimKey] = useState(0);

  const activeCase = useCases.find((u) => u.id === activeId)!;
  const DemoComponent = demoComponents[activeId];

  const handleSelect = (id: string) => {
    setActiveId(id);
    setAnimKey((k) => k + 1);
  };

  // Auto-cycle when not interacted
  const [autoCycle, setAutoCycle] = useState(true);
  const interacted = useRef(false);

  useEffect(() => {
    if (!isInView || !autoCycle) return;
    const interval = setInterval(() => {
      if (interacted.current) return;
      setActiveId((prev) => {
        const idx = useCases.findIndex((u) => u.id === prev);
        const nextIdx = (idx + 1) % useCases.length;
        return useCases[nextIdx].id;
      });
      setAnimKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, autoCycle]);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-stone-50 overflow-hidden">
      {/* Subtle radial bg */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(120,113,108,0.04) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Use Cases
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            One prompt for anything
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto">
            Type what you need in plain English. Elav handles the rest.
          </p>
        </motion.div>

        {/* Use case pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {useCases.map((uc) => {
            const isActive = uc.id === activeId;
            return (
              <button
                key={uc.id}
                onClick={() => {
                  interacted.current = true;
                  setAutoCycle(false);
                  handleSelect(uc.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white shadow-md border border-stone-200 text-stone-900"
                    : "bg-transparent border border-transparent text-stone-500 hover:text-stone-700 hover:bg-white/60"
                }`}
              >
                <uc.icon
                  className="w-4 h-4"
                  style={{ color: isActive ? uc.color : undefined }}
                />
                {uc.label}
              </button>
            );
          })}
        </div>

        {/* Demo area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white border border-stone-200/70 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Prompt bar */}
            <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${activeCase.color}12` }}>
                <activeCase.icon className="w-3.5 h-3.5" style={{ color: activeCase.color }} />
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeCase.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-stone-700 font-[family-name:var(--font-instrument)] italic flex-1"
                >
                  &ldquo;{activeCase.prompt}&rdquo;
                </motion.p>
              </AnimatePresence>
              <div className="flex items-center gap-1 text-[10px] text-stone-400 font-mono shrink-0">
                <ArrowRight className="w-3 h-3" />
                Running
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </div>
            </div>

            {/* Demo content */}
            <div className="p-5 min-h-[340px] bg-stone-50/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeId}-${animKey}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <DemoComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
