"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const apps = [
  { name: "Google Drive", logo: "/logos/apps/google-drive.svg", color: "#4285F4" },
  { name: "Notion", logo: "/logos/apps/notion.svg", color: "#000000" },
  { name: "Salesforce", logo: "/logos/apps/salesforce.svg", color: "#00A1E0" },
  { name: "HubSpot", logo: "/logos/apps/hubspot.svg", color: "#FF7A59" },
  { name: "Gmail", logo: "/logos/apps/gmail.svg", color: "#EA4335" },
  { name: "Calendar", logo: "/logos/apps/google-calendar.svg", color: "#4285F4" },
  { name: "Obsidian", logo: "/logos/apps/obsidian.svg", color: "#7C3AED" },
  { name: "Slack", logo: "/logos/apps/slack.svg", color: "#E01E5A" },
  { name: "LinkedIn", logo: "/logos/apps/linkedin.svg", color: "#0A66C2" },
  { name: "Asana", logo: "/logos/apps/asana.svg", color: "#F06A6A" },
  { name: "Monday", logo: "/logos/apps/monday.svg", color: "#FF3D57" },
  { name: "ClickUp", logo: "/logos/apps/clickup.svg", color: "#7B68EE" },
  { name: "PostHog", logo: "/logos/apps/posthog.svg", color: "#F9BD2B" },
  { name: "Sheets", logo: "/logos/apps/google-sheets.svg", color: "#0F9D58" },
  { name: "Apple Notes", logo: "/logos/apps/apple.svg", color: "#555555" },
  { name: "GitHub", logo: "/logos/apps/github.svg", color: "#24292F" },
];

function IntegrationIcon({
  name,
  logo,
  color,
  index,
}: {
  name: string;
  logo: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group flex flex-col items-center gap-2.5"
    >
      <div
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-stone-300 group-hover:-translate-y-1"
        style={{
          boxShadow: `0 0 0 0 ${color}00`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${color}18, 0 0 0 1px ${color}20`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${color}00`;
        }}
      >
        <Image
          src={logo}
          alt={name}
          width={28}
          height={28}
          className="object-contain w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-[11px] font-medium text-stone-500 group-hover:text-stone-700 transition-colors text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

export default function ImportSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-stone-50 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(120,113,108,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Integrations
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Import your data from anywhere
          </h2>
          <p className="text-stone-500 text-base sm:text-lg max-w-lg mx-auto">
            Contacts, notes, documents, CRM records — bring everything into one
            workspace.
          </p>
        </motion.div>

        {/* Icon grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 sm:gap-8 justify-items-center">
          {apps.map((app, i) => (
            <IntegrationIcon key={app.name} {...app} index={i} />
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 text-[12px] text-stone-400 font-[family-name:var(--font-mono)]"
        >
          + 50 more integrations via Skills Store
        </motion.p>
      </div>
    </section>
  );
}
