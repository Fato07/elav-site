"use client";

import { motion } from "framer-motion";

export default function YCBacked() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm sm:text-base text-stone-500 font-light">Backed by</span>
            {/* YC Logo - SVG inline */}
            <svg width="140" height="32" viewBox="0 0 560 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-800">
              <rect width="128" height="128" rx="20" fill="#F26522"/>
              <text x="64" y="86" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="68">Y</text>
              <text x="168" y="86" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="54">Y Combinator</text>
            </svg>
          </div>

          <h2 className="font-[family-name:var(--font-instrument)] text-2xl sm:text-3xl lg:text-4xl text-stone-900 italic font-light max-w-2xl">
            Agentic workflows that let you focus on what matters
          </h2>

          {/* Integration logos marquee */}
          <div className="relative w-full overflow-hidden mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee">
              {[
                "Salesforce", "HubSpot", "Gmail", "Slack", "LinkedIn",
                "Google Sheets", "Notion", "Zendesk", "Twilio", "Calendar",
                "WhatsApp", "Telegram", "Discord", "GitHub", "Stripe",
                "Salesforce", "HubSpot", "Gmail", "Slack", "LinkedIn",
                "Google Sheets", "Notion", "Zendesk", "Twilio", "Calendar",
                "WhatsApp", "Telegram", "Discord", "GitHub", "Stripe",
              ].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 mx-5 text-sm text-stone-400/60 font-medium whitespace-nowrap hover:text-stone-600 transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
