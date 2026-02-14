"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const apps = [
  { name: "Google Drive", logo: "/logos/gdrive.png", fallback: "📁" },
  { name: "Apple Notes", logo: null, fallback: "📝" },
  { name: "Notion", logo: "/logos/notion.png", fallback: "📓" },
  { name: "Salesforce", logo: "/logos/salesforce.png", fallback: "☁️" },
  { name: "Google Calendar", logo: "/logos/calendar.png", fallback: "📅" },
  { name: "HubSpot", logo: "/logos/hubspot.png", fallback: "🟠" },
  { name: "Obsidian", logo: null, fallback: "💎" },
  { name: "Gmail", logo: "/logos/gmail.png", fallback: "✉️" },
  { name: "Asana", logo: null, fallback: "🎯" },
  { name: "Monday", logo: null, fallback: "📊" },
  { name: "ClickUp", logo: null, fallback: "✅" },
  { name: "PostHog", logo: null, fallback: "🦔" },
  { name: "Slack", logo: "/logos/slack.png", fallback: "💬" },
  { name: "Google Sheets", logo: "/logos/sheets.png", fallback: "📗" },
  { name: "Twilio", logo: "/logos/twilio.png", fallback: "📞" },
  { name: "LinkedIn", logo: null, fallback: "💼" },
];

// Duplicate for seamless marquee
const row1 = [...apps.slice(0, 8), ...apps.slice(0, 8)];
const row2 = [...apps.slice(8), ...apps.slice(8)];

function AppLogo({ name, logo, fallback }: { name: string; logo: string | null; fallback: string }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0 mx-4 sm:mx-6 group cursor-default">
      <div className="w-8 h-8 rounded-lg bg-white border border-stone-200/60 shadow-sm flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
        {logo ? (
          <Image src={logo} alt={name} width={20} height={20} className="object-contain" />
        ) : (
          <span className="text-base">{fallback}</span>
        )}
      </div>
      <span className="text-sm text-stone-500 group-hover:text-stone-700 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function ImportSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Import
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-2xl sm:text-3xl text-stone-900 italic mb-3">
            Bring your data from anywhere
          </h2>
          <p className="text-stone-500 text-base max-w-md mx-auto">
            Import contacts, notes, and documents from the tools you already use.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        {/* Row 1 — left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee">
            {row1.map((app, i) => (
              <AppLogo key={`r1-${i}`} {...app} />
            ))}
          </div>
        </div>

        {/* Row 2 — right (reversed) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee-reverse">
            {row2.map((app, i) => (
              <AppLogo key={`r2-${i}`} {...app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
