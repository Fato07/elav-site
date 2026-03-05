"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Clock, BarChart3 } from "lucide-react";

/* ─── Improved Bar Chart ─── */
function MiniBarChart({ animate }: { animate: boolean }) {
  const bars = [
    { label: "Discovery", value: 42, color: "#94a3b8" },
    { label: "Proposal", value: 28, color: "#3b82f6" },
    { label: "Negotiation", value: 15, color: "#f59e0b" },
    { label: "Closed Won", value: 8, color: "#10b981" },
    { label: "Closed Lost", value: 7, color: "#ef4444" },
  ];
  const max = Math.max(...bars.map((b) => b.value));

  return (
    <div className="flex items-end gap-3 h-[100px] px-1">
      {bars.map((b, i) => (
        <div key={b.label} className="flex-1 flex flex-col items-center gap-1.5">
          <motion.span
            className="text-[9px] text-stone-500 font-mono font-medium"
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          >
            {b.value}
          </motion.span>
          <motion.div
            className="w-full rounded-t-md relative overflow-hidden"
            style={{ background: b.color }}
            initial={{ height: 0 }}
            animate={animate ? { height: `${(b.value / max) * 70}px` } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.5), transparent)",
              }}
            />
          </motion.div>
          <span className="text-[8px] text-stone-400 truncate w-full text-center leading-tight">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Cron Job Row ─── */
function CronRow({
  name,
  schedule,
  lastRun,
  nextIn,
  status,
}: {
  name: string;
  schedule: string;
  lastRun: string;
  nextIn: string;
  status: "idle" | "running" | "done";
}) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5 hover:bg-stone-50 transition-colors text-[11px] group">
      <div
        className={`w-2 h-2 rounded-full shrink-0 ${
          status === "running"
            ? "bg-blue-500 animate-pulse"
            : status === "done"
            ? "bg-green-500"
            : "bg-stone-300"
        }`}
      />
      <span className="font-medium text-stone-800 w-36 truncate group-hover:text-stone-900">
        {name}
      </span>
      <span className="text-stone-400 font-mono w-24">{schedule}</span>
      <span className="text-stone-400 w-20">{lastRun}</span>
      <span className="text-stone-500 font-mono ml-auto">{nextIn}</span>
    </div>
  );
}

export default function DocumentDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Knowledge & Automation
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Documents, Reports & Cron Jobs
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Rich markdown documents with embedded live charts. Scheduled
            automations that run in the background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Document + Report */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-stone-200/70 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-3 bg-stone-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27CA40]" />
              </div>
              <span className="text-[10px] text-stone-400 font-mono flex items-center gap-1">
                <FileText className="w-3 h-3" />
                weekly-report.md
              </span>
            </div>
            <div className="p-5 space-y-4 max-h-[420px] overflow-y-auto">
              <div className="space-y-3 text-[13px] text-stone-700 leading-relaxed">
                <h2 className="text-lg font-bold text-stone-900 font-[family-name:var(--font-instrument)]">
                  Weekly Pipeline Report
                </h2>
                <p className="text-stone-500 text-[11px]">
                  Auto-generated every Monday at 9:00 AM
                </p>

                <p>
                  This week we added{" "}
                  <strong>23 new leads</strong> to the pipeline.
                  Outreach response rate improved to{" "}
                  <strong className="text-green-600">34%</strong>, up from
                  28% last week.
                </p>

                {/* Embedded chart */}
                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  <div className="px-3 py-2 bg-stone-50 border-b border-stone-200/60 flex items-center gap-2">
                    <BarChart3 className="w-3 h-3 text-stone-500" />
                    <span className="text-[10px] text-stone-500 font-mono">
                      report-json — Deal Pipeline
                    </span>
                    <span className="text-[9px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full ml-auto font-medium">
                      Live
                    </span>
                  </div>
                  <div className="p-3">
                    <MiniBarChart animate={isInView} />
                  </div>
                </div>

                <p>
                  Top performers this week:{" "}
                  <strong>Sarah Chen</strong> closed 3 deals worth $42K
                  total.
                  <strong> Marcus Johnson</strong> generated 15 qualified
                  leads from LinkedIn outreach.
                </p>

                <h3 className="text-sm font-bold text-stone-800 pt-2">
                  Action Items
                </h3>
                <ul className="list-disc list-inside text-stone-600 space-y-1.5 text-[12px]">
                  <li>
                    Follow up with 8 prospects in &ldquo;Negotiation&rdquo;
                    stage
                  </li>
                  <li>
                    Schedule demos for 5 newly qualified leads
                  </li>
                  <li>
                    Review and update email templates for cold outreach
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Cron Jobs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-stone-200/70 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-3 bg-stone-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27CA40]" />
              </div>
              <span className="text-[10px] text-stone-400 font-mono flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Cron Jobs
              </span>
              <span className="text-[9px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full font-mono ml-auto">
                6 active
              </span>
            </div>

            <div className="divide-y divide-stone-100">
              {/* Header */}
              <div className="flex items-center gap-3 px-3 py-2 text-[10px] text-stone-400 uppercase tracking-wider font-medium bg-stone-50/30">
                <span className="w-2" />
                <span className="w-36">Name</span>
                <span className="w-24">Schedule</span>
                <span className="w-20">Last Run</span>
                <span className="ml-auto">Next In</span>
              </div>

              <CronRow
                name="Weekly pipeline report"
                schedule="0 9 * * MON"
                lastRun="3d ago"
                nextIn="4d 2h"
                status="done"
              />
              <CronRow
                name="Lead enrichment sync"
                schedule="every 6h"
                lastRun="2h ago"
                nextIn="3h 48m"
                status="done"
              />
              <CronRow
                name="Email follow-up check"
                schedule="every 30m"
                lastRun="12m ago"
                nextIn="18m"
                status="idle"
              />
              <CronRow
                name="Inbox digest"
                schedule="0 8,18 * * *"
                lastRun="5h ago"
                nextIn="1h 12m"
                status="idle"
              />
              <CronRow
                name="Competitor monitoring"
                schedule="0 6 * * *"
                lastRun="18h ago"
                nextIn="5h 48m"
                status="done"
              />
              <CronRow
                name="CRM backup to S3"
                schedule="0 2 * * *"
                lastRun="22h ago"
                nextIn="1h 52m"
                status="idle"
              />
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-stone-100 bg-stone-50/50">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-stone-400">
                  Cron jobs run automatically on schedule
                </span>
                <code className="text-stone-500 font-mono bg-white px-2 py-1 rounded-lg border border-stone-200/60 text-[10px]">
                  denchclaw cron list
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
