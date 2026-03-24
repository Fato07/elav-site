"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    setup: "",
    monthly: "From €500",
    description: "One AI-powered workflow for your team",
    features: [
      "1 automated workflow",
      "Up to 500 tasks/month",
      "CRM or lead gen or reporting",
      "Weekly performance reports",
      "Email support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    setup: "",
    monthly: "Custom",
    description: "Full AI operations across your business",
    features: [
      "Multiple workflows",
      "Unlimited tasks",
      "Lead gen + CRM + outreach + reporting",
      "Real-time dashboards",
      "Priority support",
      "Custom integrations",
    ],
    highlighted: true,
    cta: "Book a Demo",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(120,113,108,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-stone-900 text-white text-sm font-[family-name:var(--font-mono)]">
            Free trial · No credit card · Cancel anytime
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl lg:text-5xl text-stone-900 italic mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-stone-500 text-lg max-w-md mx-auto">
            Start small or go all-in. No setup fees. No lock-in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.highlighted
                  ? "border-stone-900 bg-stone-900 text-white shadow-2xl shadow-stone-900/20 scale-[1.02]"
                  : "border-stone-200 bg-stone-50"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-stone-900 text-xs font-[family-name:var(--font-mono)] font-semibold rounded-full">
                  Most Popular
                </span>
              )}

              <h3
                className={`text-lg font-semibold font-[family-name:var(--font-mono)] tracking-wide mb-2 ${
                  tier.highlighted ? "text-white" : "text-stone-900"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  tier.highlighted ? "text-stone-400" : "text-stone-500"
                }`}
              >
                {tier.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl font-semibold ${
                      tier.highlighted ? "text-white" : "text-stone-900"
                    }`}
                  >
                    {tier.monthly}
                  </span>
                  {tier.monthly !== "Custom" && (
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-stone-400" : "text-stone-500"
                      }`}
                    >
                      /mo
                    </span>
                  )}
                </div>
                {tier.setup !== "Custom" && (
                  <p
                    className={`text-xs mt-1 ${
                      tier.highlighted ? "text-stone-500" : "text-stone-400"
                    }`}
                  >
                    + {tier.setup} one-time setup
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? "text-green-400" : "text-stone-400"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-stone-300" : "text-stone-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-all ${
                  tier.highlighted
                    ? "bg-white text-stone-900 hover:bg-stone-100 hover:shadow-lg"
                    : "bg-stone-900 text-white hover:bg-stone-800 hover:shadow-lg"
                }`}
              >
                {tier.cta || "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
