"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

const workflows = [
  {
    id: "sales",
    label: "Sales Outreach",
    prompt: "Find all Series A startups in SF from Crunchbase, enrich their founders' profiles, add them to my CRM, then send personalised LinkedIn connection requests and follow-up emails. Update their pipeline status when they reply.",
    steps: [
      { label: "Scrape leads", detail: "Pulls founder data from Crunchbase" },
      { label: "Enrich profiles", detail: "LinkedIn, email, company info" },
      { label: "Build CRM", detail: "Creates DuckDB tables with 18 fields" },
      { label: "Run outreach", detail: "LinkedIn + email sequences" },
    ],
  },
  {
    id: "recruiting",
    label: "Recruiting Pipeline",
    prompt: "Search LinkedIn for senior React engineers in NYC with 5+ years experience. Create a candidate pipeline, draft personalised outreach messages referencing their recent projects, and schedule interviews with my Google Calendar.",
    steps: [
      { label: "Search candidates", detail: "Filters by role, location, experience" },
      { label: "Score & rank", detail: "Matches skills to job requirements" },
      { label: "Personalised outreach", detail: "References their GitHub & projects" },
      { label: "Schedule interviews", detail: "Syncs with Google Calendar" },
    ],
  },
  {
    id: "marketing",
    label: "Content & Marketing",
    prompt: "Analyse our competitors' blog posts and social media for the past month. Create a content calendar with 20 post ideas, draft the first 5 blog posts, and schedule social media promotion across Twitter, LinkedIn, and our Slack channel.",
    steps: [
      { label: "Competitive analysis", detail: "Scrapes blogs, Twitter, LinkedIn" },
      { label: "Generate ideas", detail: "20 post topics ranked by potential" },
      { label: "Draft content", detail: "Writes 5 full blog posts with SEO" },
      { label: "Schedule & share", detail: "Posts to Twitter, LinkedIn, Slack" },
    ],
  },
  {
    id: "support",
    label: "Customer Support",
    prompt: "Connect to our Zendesk inbox, categorise all unresolved tickets by priority and topic, draft responses for the top 20 urgent tickets, and update the customer database with interaction notes and sentiment analysis.",
    steps: [
      { label: "Ingest tickets", detail: "Pulls from Zendesk & email" },
      { label: "Categorise & triage", detail: "Priority scoring + topic tags" },
      { label: "Draft responses", detail: "Personalised replies for top 20" },
      { label: "Update CRM", detail: "Adds notes + sentiment scores" },
    ],
  },
  {
    id: "research",
    label: "Deep Research",
    prompt: "Research the AI infrastructure market — find the top 50 companies, their funding rounds, team sizes, and key products. Create a comprehensive report with charts comparing revenue estimates and market positioning.",
    steps: [
      { label: "Web research", detail: "Crawls Crunchbase, news, reports" },
      { label: "Build dataset", detail: "50 companies with 12+ fields each" },
      { label: "Analyse & chart", detail: "Generates comparison reports" },
      { label: "Export report", detail: "Interactive charts + markdown doc" },
    ],
  },
  {
    id: "ops",
    label: "Operations",
    prompt: "Check all our GitHub repos for outdated dependencies, create issues for critical security vulnerabilities, draft PRs for minor version bumps, and send a weekly summary to the #engineering Slack channel.",
    steps: [
      { label: "Audit repos", detail: "Scans dependencies across repos" },
      { label: "Flag vulnerabilities", detail: "Creates prioritised GitHub issues" },
      { label: "Auto-update", detail: "Drafts PRs for safe bumps" },
      { label: "Weekly digest", detail: "Summary to Slack + email" },
    ],
  },
];

export default function PromptShowcase() {
  const [active, setActive] = useState(0);
  const current = workflows[active];

  return (
    <section className="relative py-20 sm:py-28 bg-stone-900 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-700 text-stone-400 text-xs font-[family-name:var(--font-mono)] mb-6">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            Workflow Automation
          </div>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl lg:text-5xl text-white italic leading-tight">
            Describe the outcome.
            <br />
            Ironclaw handles the rest.
          </h2>
          <p className="mt-4 text-stone-400 text-lg max-w-xl mx-auto">
            From sales pipelines to deep research — one prompt triggers a full multi-step workflow.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {workflows.map((w, i) => (
            <button
              key={w.id}
              onClick={() => setActive(i)}
              className={`text-xs font-[family-name:var(--font-mono)] px-3 py-1.5 rounded-full transition-all ${
                i === active
                  ? "bg-white text-stone-900"
                  : "text-stone-400 border border-stone-700 hover:border-stone-500 hover:text-stone-300"
              }`}
            >
              {w.label}
            </button>
          ))}
        </motion.div>

        {/* Prompt + steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Prompt card */}
            <div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6 sm:p-8 mb-6">
              <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-[family-name:var(--font-instrument)] italic">
                &ldquo;{current.prompt}&rdquo;
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {current.steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="bg-stone-800/40 border border-stone-700/40 rounded-xl p-4 text-center"
                >
                  <div className="w-6 h-6 rounded-full bg-stone-700 flex items-center justify-center text-[10px] font-bold text-stone-200 mx-auto mb-2">
                    {i + 1}
                  </div>
                  <p className="text-sm font-semibold text-stone-200 mb-1">{step.label}</p>
                  <p className="text-[11px] text-stone-500">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
