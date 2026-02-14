"use client";

import { motion } from "framer-motion";

const providers = [
  { name: "Anthropic", models: "Claude 4, Opus, Sonnet, Haiku" },
  { name: "OpenAI", models: "GPT-4o, o1, o3" },
  { name: "Google", models: "Gemini 2.x, 1.5 Pro" },
  { name: "OpenRouter", models: "100+ models" },
  { name: "Groq", models: "Llama, Mixtral" },
  { name: "Mistral", models: "Mistral Large, Medium" },
  { name: "xAI", models: "Grok" },
  { name: "Azure", models: "Azure OpenAI" },
];

export default function Providers() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Models
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Bring your own model
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto">
            Powered by Vercel AI SDK v6. Connect any supported provider with a
            single environment variable.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {providers.map((provider, i) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center p-4 rounded-xl border border-stone-100 hover:border-stone-200 transition-colors"
            >
              <p className="font-semibold text-stone-900 text-sm mb-1">
                {provider.name}
              </p>
              <p className="text-xs text-stone-400">{provider.models}</p>
            </motion.div>
          ))}
        </div>

        {/* Config snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="rounded-xl bg-stone-900 p-5 font-[family-name:var(--font-mono)] text-sm">
            <p className="text-stone-500 mb-2">
              {"//"} ~/.openclaw/openclaw.json
            </p>
            <p className="text-stone-300">{"{"}</p>
            <p className="text-stone-300 ml-4">
              <span className="text-blue-400">&quot;agent&quot;</span>
              {": {"}
            </p>
            <p className="text-stone-300 ml-8">
              <span className="text-blue-400">&quot;model&quot;</span>
              {": "}
              <span className="text-green-400">
                &quot;anthropic/claude-opus-4-6&quot;
              </span>
            </p>
            <p className="text-stone-300 ml-4">{"}"}</p>
            <p className="text-stone-300">{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
