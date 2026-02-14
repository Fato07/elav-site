"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function PromptShowcase() {
  return (
    <section className="relative py-20 sm:py-28 bg-stone-900 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-700 text-stone-400 text-xs font-[family-name:var(--font-mono)] mb-6">
            <Zap className="w-3 h-3 text-yellow-400" />
            One Prompt. Full Pipeline.
          </div>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl lg:text-5xl text-white italic leading-tight">
            Describe the outcome.
            <br />
            Ironclaw handles the rest.
          </h2>
        </motion.div>

        {/* The prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10"
        >
          <div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6 sm:p-8">
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-[family-name:var(--font-instrument)] italic">
              &ldquo;Look into all the YC companies from W26 batch, create a full list
              of them and their founders, enrich all their profiles, and put it
              all into a CRM. Then use LinkedIn to send a personalised message to
              each of them and connect with them all. Also write a follow-up
              email, and make sure to update their statuses in the CRM database
              if they reply or wherever they are in the pipeline.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* What happens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { step: "1", label: "Scrapes YC", detail: "Finds 200 founders from W26 batch page" },
              { step: "2", label: "Enriches profiles", detail: "LinkedIn, email, education, company info" },
              { step: "3", label: "Builds CRM", detail: "Creates DuckDB tables with 18 fields" },
              { step: "4", label: "Runs outreach", detail: "LinkedIn messages + follow-up emails" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="bg-stone-800/40 border border-stone-700/40 rounded-xl p-4 text-center"
              >
                <div className="w-7 h-7 rounded-full bg-stone-700 flex items-center justify-center text-xs font-bold text-stone-200 mx-auto mb-2">
                  {item.step}
                </div>
                <p className="text-sm font-semibold text-stone-200 mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-stone-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
