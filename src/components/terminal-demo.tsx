"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

interface TerminalLine {
  type: "prompt" | "command" | "comment" | "output" | "success" | "accent" | "blank";
  text: string;
  delay?: number;
}

const terminalLines: TerminalLine[] = [
  { type: "comment", text: "# Bootstrap DenchClaw (onboard + gateway + web UI)" },
  { type: "prompt", text: "$ " },
  { type: "command", text: "npx denchclaw", delay: 40 },
  { type: "blank", text: "" },
  { type: "accent", text: "  ◆ Ensuring OpenClaw CLI is available..." },
  { type: "accent", text: "  ◆ Running onboard --install-daemon (profile: dench)" },
  { type: "accent", text: "  ◆ Seeding workspace...          ~/.openclaw-dench/workspace/workspace.duckdb" },
  { type: "accent", text: "  ◆ Verifying gateway health...   ws://127.0.0.1:18789" },
  { type: "accent", text: "  ◆ Preparing web UI...           http://localhost:3100" },
  { type: "blank", text: "" },
  { type: "success", text: "Bootstrap checklist" },
  { type: "success", text: "  [ok] OpenClaw CLI detected" },
  { type: "success", text: "  [ok] Profile pinned: dench" },
  { type: "success", text: "  [ok] Gateway reachable at ws://127.0.0.1:18789" },
  { type: "success", text: "  [ok] Web UI reachable on port 3100" },
  { type: "blank", text: "" },
  { type: "success", text: "DenchClaw ready" },
  { type: "output", text: "Profile: dench" },
  { type: "output", text: "Gateway: reachable" },
  { type: "output", text: "Web UI: http://localhost:3100" },
  { type: "blank", text: "" },
  { type: "comment", text: "# Talk to your agent" },
  { type: "prompt", text: "$ " },
  { type: "command", text: 'denchclaw agent --message "Summarize my inbox"', delay: 25 },
  { type: "blank", text: "" },
  { type: "output", text: '  You have 3 unread messages across WhatsApp and Slack.' },
  { type: "output", text: '  1. Sarah (WhatsApp): "Meeting moved to 3pm"' },
  { type: "output", text: '  2. #eng (Slack): Deploy v2.4.1 completed' },
  { type: "output", text: '  3. Alex (Slack): "PR review needed on auth-flow"' },
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
        // Type out command character by character
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
    <section className="relative py-24 sm:py-32 bg-stone-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Up and running in seconds
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto">
            One command bootstraps install, onboarding, gateway health, and the web UI.
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
                denchclaw — terminal
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
