"use client";

import { motion } from "framer-motion";

const commands = [
  {
    cmd: "denchclaw gateway start",
    desc: "Start the WebSocket gateway and web UI",
  },
  {
    cmd: 'denchclaw agent --message "..."',
    desc: "Talk to the agent from your terminal",
  },
  {
    cmd: "denchclaw message send --to ...",
    desc: "Send messages to any connected channel",
  },
  {
    cmd: "denchclaw channels login",
    desc: "Link WhatsApp, Telegram, and more",
  },
  {
    cmd: "denchclaw agent --thinking high",
    desc: "Enable extended reasoning and chain-of-thought",
  },
  {
    cmd: "denchclaw doctor",
    desc: "Diagnose configuration and security issues",
  },
];

const chatCommands = [
  { cmd: "/status", desc: "Session status & token usage" },
  { cmd: "/new", desc: "Reset the conversation" },
  { cmd: "/compact", desc: "Compact session context" },
  { cmd: "/think <level>", desc: "Set thinking depth" },
];

export default function Commands() {
  return (
    <section className="relative py-24 sm:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            CLI
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Power at your fingertips
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto">
            A rich command-line interface plus in-chat commands for when
            you&apos;re on the go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CLI Commands */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-[family-name:var(--font-mono)] text-stone-400 uppercase tracking-widest mb-4">
              Terminal Commands
            </h3>
            <div className="space-y-3">
              {commands.map((item) => (
                <div
                  key={item.cmd}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/60 transition-colors"
                >
                  <code className="text-xs sm:text-sm font-[family-name:var(--font-mono)] text-stone-800 bg-stone-100 px-2 py-1 rounded shrink-0">
                    {item.cmd}
                  </code>
                  <p className="text-sm text-stone-500 pt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chat Commands */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-[family-name:var(--font-mono)] text-stone-400 uppercase tracking-widest mb-4">
              Chat Commands
            </h3>
            <p className="text-sm text-stone-500 mb-4">
              Send these in any connected channel to control your agent:
            </p>
            <div className="space-y-3">
              {chatCommands.map((item) => (
                <div
                  key={item.cmd}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/60 transition-colors"
                >
                  <code className="text-sm font-[family-name:var(--font-mono)] text-stone-800 bg-stone-100 px-2 py-1 rounded shrink-0">
                    {item.cmd}
                  </code>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl border border-stone-200 bg-white">
              <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 mb-2">
                Thinking levels
              </p>
              <div className="flex flex-wrap gap-2">
                {["off", "minimal", "low", "medium", "high", "xhigh"].map(
                  (level) => (
                    <span
                      key={level}
                      className="text-xs font-[family-name:var(--font-mono)] px-2 py-1 rounded-md bg-stone-50 text-stone-600 border border-stone-100"
                    >
                      {level}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
