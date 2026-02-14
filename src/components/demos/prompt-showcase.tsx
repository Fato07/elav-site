"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, Globe, Send, Check, ChevronRight, Search, UserPlus, Mail, BarChart3 } from "lucide-react";

/* Steps of the animation sequence */
const steps = [
  { id: "prompt", label: "You type a prompt", duration: 2000 },
  { id: "browse", label: "Agent opens Chrome", duration: 2500 },
  { id: "scrape", label: "Scrapes lead data", duration: 2000 },
  { id: "enrich", label: "Enriches profiles", duration: 2000 },
  { id: "outreach", label: "Sends outreach", duration: 2000 },
  { id: "crm", label: "Updates CRM", duration: 1500 },
];

export default function PromptShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isInView || hasStarted) return;
    setHasStarted(true);

    let stepIndex = 0;
    const advance = () => {
      setActiveStep(stepIndex);
      stepIndex++;
      if (stepIndex < steps.length) {
        setTimeout(advance, steps[stepIndex - 1].duration);
      }
    };
    setTimeout(advance, 800);
  }, [isInView, hasStarted]);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-stone-900 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-700 text-stone-400 text-xs font-[family-name:var(--font-mono)] mb-5">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            Watch it work
          </div>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl lg:text-5xl text-white italic">
            One prompt. Full pipeline.
          </h2>
        </motion.div>

        {/* Interactive demo area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Main stage — browser / terminal view */}
          <div className="bg-stone-800/50 border border-stone-700/50 rounded-2xl overflow-hidden min-h-[400px]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-700/50 bg-stone-800/80">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
              </div>
              <div className="flex-1 flex items-center gap-2 ml-3">
                <div className="flex items-center gap-1.5 bg-stone-700/60 rounded-lg px-3 py-1 text-[11px] text-stone-400 flex-1 max-w-sm">
                  <Globe className="w-3 h-3" />
                  <AnimatePresence mode="wait">
                    {activeStep >= 1 ? (
                      <motion.span
                        key="url"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {activeStep === 1 && "linkedin.com/search/results/people..."}
                        {activeStep === 2 && "crunchbase.com/lists/series-a-sf"}
                        {activeStep === 3 && "linkedin.com/in/sarah-chen-42a..."}
                        {activeStep >= 4 && "linkedin.com/messaging/compose"}
                        {activeStep >= 5 && "localhost:3100/workspace/founders"}
                      </motion.span>
                    ) : (
                      <motion.span key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        localhost:3100
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Stage content */}
            <div className="p-6 min-h-[340px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {/* Step 0: Prompt */}
                {activeStep === 0 && (
                  <motion.div
                    key="prompt"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="w-full max-w-lg"
                  >
                    <div className="bg-stone-700/40 rounded-xl p-4 border border-stone-600/30">
                      <p className="text-stone-300 text-sm font-[family-name:var(--font-instrument)] italic leading-relaxed">
                        &ldquo;Find Series A startups in SF, enrich their founders, add them to my CRM, send LinkedIn messages and follow-up emails. Track everything in the pipeline.&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center justify-end mt-3 gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex items-center gap-1.5 bg-white text-stone-900 px-3 py-1.5 rounded-lg text-xs font-medium"
                      >
                        <Send className="w-3 h-3" />
                        Send
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 1: Browser opens */}
                {activeStep === 1 && (
                  <motion.div
                    key="browse"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="w-full space-y-3"
                  >
                    <div className="flex items-center gap-2 text-stone-400 text-[11px] mb-2">
                      <Globe className="w-3 h-3 text-blue-400" />
                      <span>Opening Chrome with your profile — all sessions active</span>
                    </div>
                    {/* Fake LinkedIn search results */}
                    {["Sarah Chen · VP Engineering · Tesla", "Marcus Johnson · Director of Product · Microsoft", "Emily Zhang · Head of AI · Meta", "Alex Johnson · Senior PM · Google"].map((name, i) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.3 }}
                        className="flex items-center gap-3 bg-stone-700/30 rounded-lg px-3 py-2 border border-stone-600/20"
                      >
                        <div className="w-7 h-7 rounded-full bg-stone-600 shrink-0" />
                        <span className="text-stone-300 text-xs flex-1">{name}</span>
                        <UserPlus className="w-3 h-3 text-blue-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Step 2: Scraping */}
                {activeStep === 2 && (
                  <motion.div
                    key="scrape"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full"
                  >
                    <div className="flex items-center gap-2 text-stone-400 text-[11px] mb-4">
                      <Search className="w-3 h-3 text-yellow-400" />
                      <span>Scraping Crunchbase — 127 companies found</span>
                    </div>
                    <div className="bg-stone-700/30 rounded-lg border border-stone-600/20 overflow-hidden">
                      <div className="grid grid-cols-4 gap-px text-[10px] font-[family-name:var(--font-mono)] text-stone-500 px-3 py-1.5 bg-stone-700/40">
                        <span>Company</span><span>Stage</span><span>Funding</span><span>Location</span>
                      </div>
                      {[
                        ["Nexus AI", "Series A", "$12M", "SF, CA"],
                        ["Quantum Labs", "Series A", "$8.5M", "SF, CA"],
                        ["DataForge", "Series A", "$15M", "SF, CA"],
                        ["CloudPeak", "Series A", "$11M", "SF, CA"],
                        ["Synthetics.io", "Series A", "$9.2M", "SF, CA"],
                      ].map((row, i) => (
                        <motion.div
                          key={row[0]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.25 }}
                          className="grid grid-cols-4 gap-px text-[11px] text-stone-300 px-3 py-2 border-t border-stone-700/30"
                        >
                          {row.map((cell, j) => (
                            <span key={j} className={j === 0 ? "font-medium" : "text-stone-400"}>{cell}</span>
                          ))}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Enriching */}
                {activeStep === 3 && (
                  <motion.div
                    key="enrich"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full space-y-3"
                  >
                    <div className="flex items-center gap-2 text-stone-400 text-[11px]">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      <span>Enriching profiles — LinkedIn, email, education</span>
                    </div>
                    {[
                      { name: "Sarah Chen", pct: 100 },
                      { name: "Marcus Johnson", pct: 100 },
                      { name: "Emily Zhang", pct: 87 },
                      { name: "Alex Johnson", pct: 72 },
                      { name: "James Park", pct: 45 },
                    ].map((p, i) => (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-xs text-stone-300 w-32 truncate">{p.name}</span>
                        <div className="flex-1 h-1.5 bg-stone-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${p.pct}%` }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                          />
                        </div>
                        <span className="text-[10px] text-stone-500 font-mono w-8">{p.pct}%</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Step 4: Sending outreach */}
                {activeStep === 4 && (
                  <motion.div
                    key="outreach"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full space-y-3"
                  >
                    <div className="flex items-center gap-2 text-stone-400 text-[11px] mb-2">
                      <Mail className="w-3 h-3 text-green-400" />
                      <span>Sending personalised LinkedIn messages & emails</span>
                    </div>
                    {[
                      { name: "Sarah Chen", status: "Message sent", icon: "✓" },
                      { name: "Marcus Johnson", status: "Connection sent", icon: "✓" },
                      { name: "Emily Zhang", status: "Email drafted", icon: "✓" },
                      { name: "Alex Johnson", status: "Sending...", icon: "…" },
                    ].map((m, i) => (
                      <motion.div
                        key={m.name}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.35 }}
                        className="flex items-center gap-3 bg-stone-700/30 rounded-lg px-3 py-2 border border-stone-600/20"
                      >
                        <div className="w-6 h-6 rounded-full bg-stone-600 shrink-0 flex items-center justify-center text-[10px]">
                          {m.icon === "✓" ? <Check className="w-3 h-3 text-green-400" /> : <span className="text-stone-400">…</span>}
                        </div>
                        <span className="text-stone-300 text-xs flex-1">{m.name}</span>
                        <span className="text-[10px] text-stone-500">{m.status}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Step 5: CRM updated */}
                {activeStep >= 5 && (
                  <motion.div
                    key="crm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full text-center space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto"
                    >
                      <Check className="w-7 h-7 text-green-400" />
                    </motion.div>
                    <div>
                      <p className="text-white text-lg font-semibold">Pipeline complete</p>
                      <p className="text-stone-400 text-sm mt-1">127 leads scraped · 98% enriched · 42 messages sent</p>
                    </div>
                    <div className="flex items-center justify-center gap-6 text-[11px] text-stone-500 pt-2">
                      <span className="flex items-center gap-1"><BarChart3 className="w-3 h-3" /> CRM updated</span>
                      <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> Follow-ups scheduled</span>
                    </div>
                  </motion.div>
                )}

                {/* Before animation starts */}
                {activeStep < 0 && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-stone-500 text-sm"
                  >
                    Scroll to see the demo →
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Steps timeline */}
          <div className="flex flex-col justify-center gap-1">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              const isDone = i < activeStep;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-white/10 border border-white/10"
                      : isDone
                      ? "opacity-60"
                      : "opacity-30"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      isDone
                        ? "bg-green-500/20 text-green-400"
                        : isActive
                        ? "bg-white text-stone-900"
                        : "bg-stone-700 text-stone-500"
                    }`}
                  >
                    {isDone ? <Check className="w-3 h-3" /> : i + 1}
                  </div>
                  <span
                    className={`text-sm ${
                      isActive ? "text-white font-medium" : isDone ? "text-stone-400" : "text-stone-600"
                    }`}
                  >
                    {step.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
