"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

interface TerminalLine {
  type: "prompt" | "command" | "comment" | "output" | "success" | "accent" | "blank";
  text: string;
  delay?: number;
}

const terminalLines: TerminalLine[] = [
  { type: "comment", text: "# Check agent fleet status" },
  { type: "prompt", text: "$ " },
  { type: "command", text: "elav fleet status", delay: 40 },
  { type: "blank", text: "" },
  { type: "success", text: "Fleet Status — 7 agents online" },
  { type: "accent", text: "  ● radar-hayden      ACTIVE   researching aerospace targets" },
  { type: "accent", text: "  ● scout-nova         ACTIVE   enriching 142 leads" },
  { type: "accent", text: "  ● outreach-kai       IDLE     last run: 12m ago — 28 emails sent" },
  { type: "accent", text: "  ● analyst-reya       ACTIVE   generating weekly revenue report" },
  { type: "accent", text: "  ● ops-atlas          ACTIVE   monitoring 3 pipelines" },
  { type: "accent", text: "  ● comms-echo         IDLE     last run: 8m ago — Slack synced" },
  { type: "accent", text: "  ● scheduler-vex      ACTIVE   optimizing calendar for next week" },
  { type: "blank", text: "" },
  { type: "output", text: "  Entities: 1,247 tracked  ·  Tools: 117 loaded  ·  Uptime: 99.8%" },
  { type: "blank", text: "" },
  { type: "comment", text: "# Run a targeted research task" },
  { type: "prompt", text: "$ " },
  { type: "command", text: "elav agent:radar-hayden research --target aerospace --depth deep", delay: 25 },
  { type: "blank", text: "" },
  { type: "accent", text: "  ◆ Scanning 12 data sources..." },
  { type: "accent", text: "  ◆ Cross-referencing with existing pipeline..." },
  { type: "accent", text: "  ◆ Enriching company profiles..." },
  { type: "blank", text: "" },
  { type: "success", text: "  Research complete" },
  { type: "output", text: "  Found 34 new companies matching criteria" },
  { type: "output", text: "  18 decision-makers identified" },
  { type: "output", text: "  3 high-priority opportunities flagged" },
  { type: "output", text: "  Results synced to pipeline → /dashboard/radar" },
];

export default function TerminalDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState<
    { type: string; text: string; typingText?: string; isTyping?: boolean }[]
  >([]);
  const [hasStarted, setHasStarted] = useState(false);

  const runAnimation = useCallback(async () => {
    const lines: typeof visibleLines = [];

    for (const line of terminalLines) {
      if (line.type === "command" && line.delay) {
        const promptLine = lines[lines.length - 1];
        const baseText = promptLine?.text || "";

        for (let i = 0; i <= line.text.length; i++) {
          const partial = line.text.slice(0, i);
          lines[lines.length - 1] = {
            type: "prompt",
            text: baseText,
            typingText: partial,
            isTyping: i < line.text.length,
          };
          setVisibleLines([...lines]);
          await new Promise((r) => setTimeout(r, line.delay));
        }
        lines[lines.length - 1] = {
          type: "prompt",
          text: baseText + line.text,
          isTyping: false,
        };
        setVisibleLines([...lines]);
        await new Promise((r) => setTimeout(r, 300));
      } else if (line.type === "prompt") {
        lines.push({ type: line.type, text: line.text, isTyping: true });
        setVisibleLines([...lines]);
        await new Promise((r) => setTimeout(r, 200));
      } else {
        lines.push({ type: line.type, text: line.text });
        setVisibleLines([...lines]);
        await new Promise((r) => setTimeout(r, line.type === "blank" ? 100 : 60));
      }
    }
  }, []);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      runAnimation();
    }
  }, [isInView, hasStarted, runAnimation]);

  return (
    <section id="demo" className="relative py-24 sm:py-32 bg-stone-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Your agent fleet, always on
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto">
            Seven specialized agents working autonomously — researching, enriching, outreaching, and reporting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: "#FF5F56" }} />
              <div className="terminal-dot" style={{ background: "#FFBD2E" }} />
              <div className="terminal-dot" style={{ background: "#27CA40" }} />
              <span className="ml-4 text-xs text-stone-500 font-[family-name:var(--font-mono)]">
                elav — fleet dashboard
              </span>
            </div>
            <div className="terminal-body min-h-[420px] sm:min-h-[480px] overflow-hidden">
              {visibleLines.map((line, i) => (
                <div key={i} className="leading-relaxed">
                  {line.type === "blank" && <br />}
                  {line.type === "comment" && (
                    <span className="terminal-comment">{line.text}</span>
                  )}
                  {line.type === "prompt" && (
                    <span>
                      <span className="terminal-prompt">{line.text}</span>
                      {line.typingText !== undefined && (
                        <span className="terminal-command">{line.typingText}</span>
                      )}
                      {line.isTyping && <span className="terminal-cursor" />}
                    </span>
                  )}
                  {line.type === "output" && (
                    <span className="text-stone-300">{line.text}</span>
                  )}
                  {line.type === "success" && (
                    <span className="terminal-success">{line.text}</span>
                  )}
                  {line.type === "accent" && (
                    <span className="terminal-accent">{line.text}</span>
                  )}
                </div>
              ))}
              {visibleLines.length === 0 && isInView && (
                <span className="terminal-prompt">
                  $ <span className="terminal-cursor" />
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
