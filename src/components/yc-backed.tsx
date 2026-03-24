"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "7", label: "Specialized Agents" },
  { value: "117", label: "Tools" },
  { value: "30+", label: "Skills" },
  { value: "24/7", label: "Autonomous" },
];

export default function TrustSection() {
  return (
    <section className="py-20 sm:py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase">
            Trusted by forward-thinking teams
          </p>

          <h2 className="font-[family-name:var(--font-instrument)] text-2xl sm:text-3xl lg:text-4xl text-stone-900 italic font-light max-w-2xl leading-snug">
            Agentic workflows that let you focus on what matters
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-4 w-full max-w-xl">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-2xl sm:text-3xl font-semibold text-stone-900 font-[family-name:var(--font-mono)]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-stone-500">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
