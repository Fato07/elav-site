"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { analyticsData } from "./demo-data";

/* ─── Smooth Area Chart ─── */
function AreaChart({
  data,
  animate,
}: {
  data: typeof analyticsData.weeklyOutreach;
  animate: boolean;
}) {
  const width = 360;
  const height = 200;
  const pad = { top: 16, right: 16, bottom: 32, left: 36 };

  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const maxVal = Math.max(...data.flatMap((d) => [d.linkedin, d.email]));

  const pts = (key: "linkedin" | "email") =>
    data.map((d, i) => ({
      x: pad.left + (i / (data.length - 1)) * chartW,
      y: pad.top + chartH - (d[key] / maxVal) * chartH,
    }));

  const smooth = (points: { x: number; y: number }[]) => {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const area = (points: { x: number; y: number }[]) => {
    const line = smooth(points);
    const base = pad.top + chartH;
    return `${line} L ${points[points.length - 1].x} ${base} L ${points[0].x} ${base} Z`;
  };

  const linkedinPts = pts("linkedin");
  const emailPts = pts("email");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <defs>
        <linearGradient id="lgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="emGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75].map((pct) => (
        <line
          key={pct}
          x1={pad.left}
          y1={pad.top + chartH * (1 - pct)}
          x2={width - pad.right}
          y2={pad.top + chartH * (1 - pct)}
          stroke="#e7e5e4"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}
      <line
        x1={pad.left}
        y1={pad.top + chartH}
        x2={width - pad.right}
        y2={pad.top + chartH}
        stroke="#d6d3d1"
        strokeWidth="1"
      />

      <motion.path d={area(linkedinPts)} fill="url(#lgGrad)" initial={{ opacity: 0 }} animate={animate ? { opacity: 1 } : {}} transition={{ duration: 1 }} />
      <motion.path d={area(emailPts)} fill="url(#emGrad)" initial={{ opacity: 0 }} animate={animate ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.15 }} />

      <motion.path d={smooth(linkedinPts)} fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0, opacity: 0 }} animate={animate ? { pathLength: 1, opacity: 1 } : {}} transition={{ duration: 1.4, ease: "easeOut" }} />
      <motion.path d={smooth(emailPts)} fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0, opacity: 0 }} animate={animate ? { pathLength: 1, opacity: 1 } : {}} transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }} />

      {linkedinPts.map((pt, i) => (
        <motion.circle key={`l-${i}`} cx={pt.x} cy={pt.y} r="3" fill="#3b82f6" stroke="white" strokeWidth="1.5" initial={{ opacity: 0, scale: 0 }} animate={animate ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.9 + i * 0.08 }} />
      ))}
      {emailPts.map((pt, i) => (
        <motion.circle key={`e-${i}`} cx={pt.x} cy={pt.y} r="3" fill="#a78bfa" stroke="white" strokeWidth="1.5" initial={{ opacity: 0, scale: 0 }} animate={animate ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 1 + i * 0.08 }} />
      ))}

      {data.map((d, i) => (
        <text key={d.week} x={pad.left + (i / (data.length - 1)) * chartW} y={height - 8} textAnchor="middle" className="fill-stone-400" fontSize="9" fontFamily="var(--font-mono)">
          {d.week}
        </text>
      ))}

      {[0, 0.5, 1].map((pct) => (
        <text key={pct} x={pad.left - 6} y={pad.top + chartH * (1 - pct) + 3} textAnchor="end" className="fill-stone-400" fontSize="8" fontFamily="var(--font-mono)">
          {Math.round(maxVal * pct)}
        </text>
      ))}
    </svg>
  );
}

/* ─── Donut Chart ─── */
function DonutChart({
  data,
  animate,
}: {
  data: typeof analyticsData.statusBreakdown;
  animate: boolean;
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;
  const size = 130;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gap = 3;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative shrink-0">
        <svg width={size} height={size}>
          {data.map((d, i) => {
            const segmentRatio = d.value / total;
            const gapAngle = gap / radius;
            const dashArray = segmentRatio * circumference - gapAngle * radius;
            const dashOffset = -(cumulative / total) * circumference;
            cumulative += d.value;
            return (
              <motion.circle
                key={d.name}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={d.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${Math.max(0, dashArray)} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={animate ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="text-xl font-bold text-stone-800" initial={{ opacity: 0, scale: 0.5 }} animate={animate ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}>
            {total}
          </motion.span>
          <span className="text-[9px] text-stone-400 font-medium">total</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
        {data.map((d, i) => (
          <motion.div key={d.name} initial={{ opacity: 0 }} animate={animate ? { opacity: 1 } : {}} transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
            <span className="text-[10px] text-stone-600">{d.name}</span>
            <span className="text-[10px] text-stone-400 font-mono">{d.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Conversion Funnel ─── */
function ConversionFunnel({
  data,
  animate,
}: {
  data: typeof analyticsData.statusBreakdown;
  animate: boolean;
}) {
  const maxVal = data[0].value;

  return (
    <div className="space-y-2.5">
      {data.map((d, i) => {
        const widthPct = (d.value / maxVal) * 100;
        const conversionRate = i === 0 ? null : Math.round((d.value / data[i - 1].value) * 100);
        return (
          <div key={d.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-medium text-stone-700">{d.name}</span>
                {conversionRate !== null && (
                  <span className="text-[8px] text-stone-400 bg-stone-100 px-1 py-0.5 rounded-full font-mono">{conversionRate}%</span>
                )}
              </div>
              <span className="text-[11px] font-bold text-stone-800 font-mono tabular-nums">{d.value}</span>
            </div>
            <div className="h-6 bg-stone-50 rounded-md overflow-hidden">
              <motion.div
                className="h-full rounded-md relative overflow-hidden"
                style={{ background: d.color }}
                initial={{ width: 0 }}
                animate={animate ? { width: `${widthPct}%` } : {}}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4))" }} />
              </motion.div>
            </div>
          </div>
        );
      })}

      <motion.div initial={{ opacity: 0 }} animate={animate ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }} className="flex items-center justify-between pt-2 border-t border-stone-100">
        <span className="text-[10px] text-stone-500">Overall conversion</span>
        <span className="text-xs font-bold text-green-600 font-mono">{Math.round((data[data.length - 1].value / data[0].value) * 100)}%</span>
      </motion.div>
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">Analytics</p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">See everything at a glance</h2>
          <p className="text-stone-500 text-lg max-w-xl">Ask &ldquo;show me pipeline analytics&rdquo; and get interactive charts generated from your live data.</p>
        </motion.div>

        {/* All three charts in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Outreach Activity */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-stone-800">Outreach Activity</h3>
              <span className="text-[10px] text-stone-400 font-mono bg-stone-50 px-2 py-0.5 rounded">Live</span>
            </div>
            <div className="flex items-center gap-3 mb-3 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" />LinkedIn</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-400" />Email</span>
            </div>
            <div className="h-[190px]">
              <AreaChart data={analyticsData.weeklyOutreach} animate={animate} />
            </div>
          </motion.div>

          {/* Pipeline Breakdown */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-800">Pipeline Breakdown</h3>
              <span className="text-[10px] text-stone-400 font-mono bg-stone-50 px-2 py-0.5 rounded">200 leads</span>
            </div>
            <DonutChart data={analyticsData.statusBreakdown} animate={animate} />
          </motion.div>

          {/* Conversion Funnel */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-800">Conversion Funnel</h3>
              <span className="text-[10px] text-stone-400 font-mono bg-stone-50 px-2 py-0.5 rounded">All time</span>
            </div>
            <ConversionFunnel data={analyticsData.statusBreakdown} animate={animate} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
