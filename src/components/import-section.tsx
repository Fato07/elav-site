"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const apps = [
  { name: "Google Drive", logo: "/logos/apps/google-drive.svg" },
  { name: "Notion", logo: "/logos/apps/notion.svg" },
  { name: "Salesforce", logo: "/logos/apps/salesforce.svg" },
  { name: "HubSpot", logo: "/logos/apps/hubspot.svg" },
  { name: "Gmail", logo: "/logos/apps/gmail.svg" },
  { name: "Calendar", logo: "/logos/apps/google-calendar.svg" },
  { name: "Obsidian", logo: "/logos/apps/obsidian.svg" },
  { name: "Slack", logo: "/logos/apps/slack.svg" },
  { name: "LinkedIn", logo: "/logos/apps/linkedin.svg" },
  { name: "Asana", logo: "/logos/apps/asana.svg" },
  { name: "Monday", logo: "/logos/apps/monday.svg" },
  { name: "ClickUp", logo: "/logos/apps/clickup.svg" },
  { name: "PostHog", logo: "/logos/apps/posthog.svg" },
  { name: "Sheets", logo: "/logos/apps/google-sheets.svg" },
  { name: "Apple Notes", logo: "/logos/apps/apple.svg" },
  { name: "GitHub", logo: "/logos/apps/github.svg" },
];

const row1 = [...apps.slice(0, 8), ...apps.slice(0, 8)];
const row2 = [...apps.slice(8), ...apps.slice(8)];

function AppCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-3 shrink-0 mx-3 px-4 py-3 bg-white border border-stone-200/70 rounded-xl shadow-sm hover:shadow-md hover:border-stone-300 transition-all cursor-default group">
      <div className="w-7 h-7 flex items-center justify-center shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
        <Image src={logo} alt={name} width={24} height={24} className="object-contain" />
      </div>
      <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function ImportSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-instrument)] text-2xl sm:text-3xl text-stone-900 italic mb-3">
            Import your data from anywhere
          </h2>
          <p className="text-stone-500 text-base">
            Contacts, notes, documents, CRM records — bring everything into one workspace.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-3">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-stone-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-stone-50 to-transparent z-10" />
          <div className="flex animate-marquee">
            {row1.map((app, i) => (
              <AppCard key={`r1-${i}`} {...app} />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-stone-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-stone-50 to-transparent z-10" />
          <div className="flex animate-marquee-reverse">
            {row2.map((app, i) => (
              <AppCard key={`r2-${i}`} {...app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
