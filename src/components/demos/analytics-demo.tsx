"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { analyticsData } from "./demo-data";

/* ─── Bar Chart ─── */
function BarChart({ data, animate }: { data: typeof analyticsData.weeklyOutreach; animate: boolean }) {
  const maxVal = Math.max(...data.flatMap((d) => [d.linkedin, d.email]));
  return (
    <div className="flex items-end gap-3 h-[140px] px-2">
      {data.map((d, i) => (
        <div key={d.week} className="flex-1 flex flex-col items-center gap-1">
          <div className="flex gap-1 items-end w-full justify-center h-[120px]">
            <motion.div
              className="w-3 rounded-t bg-blue-500"
              initial={{ height: 0 }}
              animate={animate ? { height: `${(d.linkedin / maxVal) * 100}%` } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            />
            <motion.div
              className="w-3 rounded-t bg-stone-300"
              initial={{ height: 0 }}
              animate={animate ? { height: `${(d.email / maxVal) * 100}%` } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 + 0.05 }}
            />
          </div>
          <span className="text-[10px] text-stone-400">{d.week}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Donut Chart ─── */
function DonutChart({ data, animate }: { data: typeof analyticsData.statusBreakdown; animate: boolean }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;
  const size = 120;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center gap-6">
      <svg width={size} height={size} className="shrink-0">
        {data.map((d, i) => {
          const offset = cumulative;
          cumulative += d.value;
          const dashArray = (d.value / total) * circumference;
          const dashOffset = -(offset / total) * circumference;
          return (
            <motion.circle
              key={d.name}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashArray} ${circumference - dashArray}`}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={animate ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          );
        })}
        <text
          x={size / 2}
          y={size / 2 - 4}
          textAnchor="middle"
          className="fill-stone-800 text-lg font-bold"
        >
          {total}
        </text>
        <text
          x={size / 2}
          y={size / 2 + 12}
          textAnchor="middle"
          className="fill-stone-400 text-[10px]"
        >
          total
        </text>
      </svg>
      <div className="space-y-2">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-2 text-[12px]">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
            <span className="text-stone-600">{d.name}</span>
            <span className="text-stone-400 ml-auto font-mono">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Progress Bars ─── */
function EnrichmentBars({ data, animate }: { data: typeof analyticsData.enrichmentCoverage; animate: boolean }) {
  return (
    <div className="space-y-3">
      {data.map((d, i) => (
        <div key={d.field} className="space-y-1">
          <div className="flex justify-between text-[11px]">
            <span className="text-stone-600">{d.field}</span>
            <span className="text-stone-400 font-mono">{d.pct}%</span>
          </div>
          <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: d.pct === 100 ? "#10b981" : d.pct > 85 ? "#3b82f6" : "#f59e0b" }}
              initial={{ width: 0 }}
              animate={animate ? { width: `${d.pct}%` } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Component ─── */
export default function AnalyticsDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Analytics
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            See everything at a glance
          </h2>
          <p className="text-stone-500 text-lg max-w-xl">
            Ask &ldquo;show me pipeline analytics&rdquo; and get interactive charts generated from your live data.
          </p>
        </motion.div>

        {/* Report cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Funnel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-800">Pipeline Breakdown</h3>
              <span className="text-[10px] text-stone-400 font-mono bg-stone-50 px-2 py-0.5 rounded">Live</span>
            </div>
            <DonutChart data={analyticsData.statusBreakdown} animate={animate} />
          </motion.div>

          {/* Outreach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-800">Weekly Outreach</h3>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> LinkedIn</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-stone-300" /> Email</span>
              </div>
            </div>
            <BarChart data={analyticsData.weeklyOutreach} animate={animate} />
          </motion.div>

          {/* Enrichment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-800">Enrichment Coverage</h3>
              <span className="text-[10px] text-stone-400 font-mono bg-stone-50 px-2 py-0.5 rounded">200 entries</span>
            </div>
            <EnrichmentBars data={analyticsData.enrichmentCoverage} animate={animate} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
