"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, Star, ExternalLink, Package, TrendingUp, Zap } from "lucide-react";

const skills: { name: string; author: string; installs: string; desc: string; tags: string[]; trending: boolean; url: string }[] = [
  { name: "crm-automation", author: "denchhq", installs: "18.2K", desc: "CRM workflow automation, lead scoring, pipeline management, and deal tracking", tags: ["crm", "sales"], trending: true, url: "https://skills.sh/denchhq/ironclaw-skills/crm-automation" },
  { name: "linkedin-outreach", author: "denchhq", installs: "14.8K", desc: "Automated LinkedIn prospecting, connection requests, and follow-up sequences", tags: ["linkedin", "sales"], trending: true, url: "https://skills.sh/denchhq/ironclaw-skills/linkedin-outreach" },
  { name: "lead-enrichment", author: "denchhq", installs: "12.1K", desc: "Enrich contacts with LinkedIn, email, company data, and social profiles", tags: ["crm", "sales"], trending: true, url: "https://skills.sh/denchhq/ironclaw-skills/lead-enrichment" },
  { name: "email-sequences", author: "denchhq", installs: "9.7K", desc: "Multi-step cold email campaigns with personalisation and A/B testing", tags: ["email", "sales"], trending: true, url: "https://skills.sh/denchhq/ironclaw-skills/email-sequences" },
  { name: "sales-pipeline", author: "denchhq", installs: "8.3K", desc: "Track deals through stages with automated status updates and forecasting", tags: ["crm", "sales"], trending: false, url: "https://skills.sh/denchhq/ironclaw-skills/sales-pipeline" },
  { name: "agent-browser", author: "vercel-labs", installs: "35.8K", desc: "Browser automation and web scraping capabilities for agents", tags: ["browser", "automation"], trending: true, url: "https://skills.sh/vercel-labs/agent-browser/agent-browser" },
  { name: "browser-use", author: "browser-use", installs: "29.7K", desc: "Control Chrome programmatically — click, type, navigate", tags: ["browser", "scraping"], trending: false, url: "https://skills.sh/browser-use/browser-use/browser-use" },
  { name: "web-design-guidelines", author: "vercel-labs", installs: "99.4K", desc: "Best practices for modern web design and accessibility", tags: ["design", "frontend"], trending: true, url: "https://skills.sh/vercel-labs/agent-skills/web-design-guidelines" },
  { name: "frontend-design", author: "anthropics", installs: "68.9K", desc: "Expert frontend engineering patterns and component design", tags: ["frontend", "react"], trending: false, url: "https://skills.sh/anthropics/skills/frontend-design" },
  { name: "senior-ml-engineer", author: "davila7", installs: "12.3K", desc: "Machine learning engineering best practices and pipelines", tags: ["ml", "python"], trending: false, url: "https://skills.sh/davila7/claude-code-templates/senior-ml-engineer" },
  { name: "devops-engineer", author: "jeffallan", installs: "8.7K", desc: "Infrastructure, CI/CD, Docker, and deployment automation", tags: ["devops", "infra"], trending: false, url: "https://skills.sh/jeffallan/claude-skills/devops-engineer" },
  { name: "typescript-expert", author: "sickn33", installs: "15.1K", desc: "Advanced TypeScript patterns, type safety, and best practices", tags: ["typescript", "backend"], trending: true, url: "https://skills.sh/sickn33/antigravity-awesome-skills/typescript-expert" },
];

const categories = ["All", "Sales", "CRM", "Browser", "Frontend", "DevOps", "ML"];

export default function SkillsStore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = skills.filter((s) => {
    const matchesSearch = s.name.includes(searchQuery.toLowerCase()) || s.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || s.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()));
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative py-20 sm:py-28 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Skills Store
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Extend your agent with one command
          </h2>
          <p className="text-stone-500 text-lg max-w-xl">
            Browse skills from{" "}
            <a href="https://skills.sh" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-stone-700">
              skills.sh
            </a>{" "}
            and{" "}
            <a href="https://clawhub.sh" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-stone-700">
              ClawHub
            </a>
            . Install any skill with a single command — your agent learns new capabilities instantly.
          </p>
        </motion.div>

        {/* Store UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-white border border-stone-200/70 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-stone-200/50 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-stone-600" />
                <span className="font-semibold text-stone-800 text-sm">Skills Directory</span>
                <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full font-mono">58,237 skills</span>
              </div>
              <div className="flex-1" />
              <div className="flex items-center gap-2 h-8 px-3 bg-stone-50 border border-stone-200/60 rounded-lg text-stone-400 w-full sm:w-64">
                <Search className="w-3.5 h-3.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search skills..."
                  className="flex-1 text-xs bg-transparent border-0 outline-none placeholder:text-stone-400 text-stone-700"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="px-5 py-2 border-b border-stone-100 flex gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-stone-900 text-white"
                      : "text-stone-500 hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills grid */}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[420px] overflow-y-auto">
              {filtered.map((skill, i) => (
                <motion.a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  className="border border-stone-200/70 rounded-xl p-4 hover:border-stone-300 hover:shadow-sm transition-all group block"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-semibold text-stone-800 truncate">{skill.name}</h4>
                        {skill.trending && <TrendingUp className="w-3 h-3 text-orange-500 shrink-0" />}
                      </div>
                      <p className="text-[10px] text-stone-400 font-mono">{skill.author}</p>
                    </div>
                    <button className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-stone-900 hover:text-white">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-relaxed mb-3 line-clamp-2">{skill.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {skill.tags.map((tag) => (
                        <span key={tag} className="text-[9px] bg-stone-50 text-stone-400 px-1.5 py-0.5 rounded font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] text-stone-400 font-mono flex items-center gap-1">
                      <Download className="w-2.5 h-2.5" />
                      {skill.installs}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Install command */}
            <div className="px-5 py-3 border-t border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-3">
                <code className="text-xs font-mono text-stone-600 bg-white px-3 py-1.5 rounded-lg border border-stone-200/60 flex-1 sm:flex-none">
                  <span className="text-stone-400">$</span> npx skills add <span className="text-blue-600">vercel-labs/agent-browser</span>
                </code>
                <span className="text-[10px] text-stone-400 hidden sm:inline">Install any skill instantly</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
