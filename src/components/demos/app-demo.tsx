"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search,
  Plus,
  Columns3,
  ChevronDown,
  ChevronRight,
  Table,
  Database,
  FileText,
  Folder,
  FolderOpen,
  Square,
  Zap,
} from "lucide-react";
import { founders, sidebarItems, chatMessages } from "./demo-data";

/* ─── Sidebar ─── */

function SidebarItem({
  name,
  type,
  active,
  children,
  depth = 0,
}: {
  name: string;
  type: string;
  active?: boolean;
  children?: { name: string; type: string }[];
  depth?: number;
}) {
  const [open, setOpen] = useState(type === "folder");
  const icon =
    type === "table" ? (
      <Table className="w-[14px] h-[14px] text-stone-400" />
    ) : type === "database" ? (
      <Database className="w-[14px] h-[14px] text-stone-400" />
    ) : type === "folder" ? (
      open ? (
        <FolderOpen className="w-[14px] h-[14px] text-stone-400" />
      ) : (
        <Folder className="w-[14px] h-[14px] text-stone-400" />
      )
    ) : (
      <FileText className="w-[14px] h-[14px] text-stone-400" />
    );

  return (
    <div>
      <div
        onClick={() => children && setOpen(!open)}
        className={`flex items-center gap-1.5 px-2 py-[5px] rounded-lg text-[12.5px] cursor-default select-none ${
          active
            ? "bg-stone-200/70 text-stone-900 font-medium"
            : "text-stone-600 hover:bg-stone-100/60"
        }`}
        style={{ paddingLeft: `${8 + depth * 12}px` }}
      >
        {children ? (
          <ChevronRight
            className={`w-3 h-3 text-stone-400 transition-transform ${
              open ? "rotate-90" : ""
            }`}
          />
        ) : (
          <span className="w-3" />
        )}
        {icon}
        <span className="truncate flex-1">{name}</span>
        {type === "table" && (
          <span className="text-[10px] text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded font-mono">
            table
          </span>
        )}
      </div>
      {open && children && (
        <div>
          {children.map((child) => (
            <SidebarItem
              key={child.name}
              name={child.name}
              type={child.type}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function DemoSidebar() {
  return (
    <div className="w-[200px] bg-[#f5f5f0] border-r border-stone-200/60 flex flex-col text-[13px] shrink-0">
      {/* Header */}
      <div className="px-3 py-3 border-b border-stone-200/40">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-stone-200 flex items-center justify-center">
            <Square className="w-3 h-3 text-stone-500" />
          </div>
          <div>
            <div className="text-xs font-semibold text-stone-800">Workspace</div>
            <div className="text-[10px] text-stone-400">Ironclaw</div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-2 pt-2">
        <div className="flex items-center gap-1.5 px-2 py-1.5 bg-stone-100/60 rounded-md text-stone-400">
          <Search className="w-3 h-3" />
          <span className="text-[11px]">Search files...</span>
        </div>
      </div>

      {/* File tree */}
      <div className="flex-1 overflow-y-auto px-1 py-2 space-y-0.5">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.name}
            name={item.name}
            type={item.type}
            active={"active" in item ? item.active : false}
            children={"children" in item ? item.children : undefined}
          />
        ))}
      </div>

      {/* Bottom sections */}
      <div className="border-t border-stone-200/40 px-1 py-2 space-y-0.5">
        {["Skills", "Memories", "Cron"].map((name) => (
          <div
            key={name}
            className="flex items-center gap-1.5 px-2 py-[5px] rounded-lg text-[12.5px] text-stone-500 cursor-default"
          >
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <Folder className="w-[14px] h-[14px] text-stone-400" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── CRM Table ─── */

function CompanyBadge({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"
      style={{
        background: `${color}18`,
        color: color,
        border: `1px solid ${color}30`,
      }}
    >
      {name}
    </span>
  );
}

function CrmTable({ animateEnrichment }: { animateEnrichment: boolean }) {
  const [enrichedRows, setEnrichedRows] = useState<Set<string>>(new Set());
  const [isEnriching, setIsEnriching] = useState(false);

  useEffect(() => {
    if (!animateEnrichment) return;
    setIsEnriching(true);
    setEnrichedRows(new Set());

    founders.forEach((f, i) => {
      setTimeout(() => {
        setEnrichedRows((prev) => {
          const next = new Set(prev);
          next.add(f.id);
          return next;
        });
        if (i === founders.length - 1) {
          setTimeout(() => setIsEnriching(false), 400);
        }
      }, 600 + i * 120);
    });
  }, [animateEnrichment]);

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      {/* Table header bar */}
      <div className="px-4 py-3 border-b border-stone-200/50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-stone-900 font-[family-name:var(--font-instrument)]">
              Founders
            </h1>
            <p className="text-[11px] text-stone-400 mt-0.5">
              YC Winter 2026 batch founders
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
              <span className="bg-stone-100 px-2 py-0.5 rounded">200 entries</span>
              <span className="bg-stone-100 px-2 py-0.5 rounded">18 fields</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded">1 relation</span>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 h-7 px-2.5 bg-stone-50 border border-stone-200/60 rounded-lg text-stone-400">
              <Search className="w-3 h-3" />
              <span className="text-[11px]">Search founders...</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="h-7 px-2.5 text-[11px] border border-stone-200/60 rounded-lg text-stone-500 flex items-center gap-1">
              <Columns3 className="w-3 h-3" />
              Columns
            </button>
            <button className="h-7 px-2.5 text-[11px] bg-blue-600 text-white rounded-lg flex items-center gap-1">
              <Plus className="w-3 h-3" />
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[12px]">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b border-stone-200/50 text-stone-600">
              <th className="w-8 px-2 py-2 text-center">
                <input type="checkbox" className="w-3.5 h-3.5 rounded border-stone-300 accent-blue-600" readOnly />
              </th>
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                FULL NAME <ChevronDown className="w-2.5 h-2.5 inline ml-0.5 opacity-40" />
              </th>
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                COMPANY <span className="text-stone-400 font-normal text-[10px]">(companies)</span>
              </th>
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                LINKEDIN <ChevronDown className="w-2.5 h-2.5 inline ml-0.5 opacity-40" />
              </th>
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                NOTES <ChevronDown className="w-2.5 h-2.5 inline ml-0.5 opacity-40" />
              </th>
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                EDUCATION <ChevronDown className="w-2.5 h-2.5 inline ml-0.5 opacity-40" />
              </th>
            </tr>
          </thead>
          <tbody>
            {founders.map((f, i) => {
              const isEnriched = enrichedRows.has(f.id);
              return (
                <tr
                  key={f.id}
                  className="border-b border-stone-100/80 hover:bg-stone-50/50 transition-colors"
                >
                  <td className="px-2 py-2 text-center">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-stone-300 accent-blue-600" readOnly />
                  </td>
                  <td className="px-3 py-2 font-medium text-blue-600 whitespace-nowrap">
                    {f.fullName}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <CompanyBadge name={f.company} color={f.companyColor} />
                  </td>
                  <td className="px-3 py-2 text-stone-500 max-w-[220px] truncate">
                    {isEnriched ? (
                      <motion.span
                        initial={{ opacity: 0, color: "#8b5cf6" }}
                        animate={{ opacity: 1, color: "#78716c" }}
                        transition={{ duration: 0.5 }}
                      >
                        {f.linkedin}
                      </motion.span>
                    ) : isEnriching ? (
                      <span className="inline-block w-36 h-3.5 bg-gradient-to-r from-stone-100 via-stone-50 to-stone-100 rounded animate-pulse" />
                    ) : (
                      <span className="text-stone-400">{f.linkedin}</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-stone-500 max-w-[250px] truncate">
                    {f.notes}
                  </td>
                  <td className="px-3 py-2 text-stone-500 whitespace-nowrap">
                    {f.education}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── Chat Panel ─── */

function ChatPanel({ animate }: { animate: boolean }) {
  const [visibleMessages, setVisibleMessages] = useState<typeof chatMessages>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;
    setVisibleMessages([]);

    chatMessages.forEach((msg, i) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg]);
      }, msg.delay);
    });
  }, [animate]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleMessages]);

  return (
    <div className="w-[380px] border-l border-stone-200/60 flex flex-col bg-white shrink-0">
      {/* Header */}
      <div className="px-3 py-2.5 border-b border-stone-200/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-stone-800">Chat: founders</span>
          <span className="text-[10px] text-stone-400">Streaming...</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-6 h-6 rounded text-stone-400 hover:bg-stone-100 flex items-center justify-center">
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button className="w-6 h-6 rounded text-stone-400 hover:bg-stone-100 flex items-center justify-center text-[11px] font-medium">
            Stop
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3">
        <AnimatePresence>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {msg.role === "user" ? (
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-[12px] px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[85%]">
                    {msg.content}
                  </div>
                </div>
              ) : msg.role === "tool" && msg.isReport ? (
                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  <div className="px-2.5 py-1.5 bg-stone-50 border-b border-stone-200/60 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
                    <span className="text-[9px] text-stone-500 font-[family-name:var(--font-mono)]">report-json — Pipeline</span>
                  </div>
                  <div className="p-2.5 flex items-end gap-2 h-[80px]">
                    {[
                      { label: "New", value: 89, color: "#94a3b8" },
                      { label: "Contacted", value: 67, color: "#3b82f6" },
                      { label: "Qualified", value: 31, color: "#10b981" },
                      { label: "Converted", value: 13, color: "#8b5cf6" },
                    ].map((b) => (
                      <div key={b.label} className="flex-1 flex flex-col items-center gap-0.5">
                        <div className="w-full rounded-t" style={{ height: `${(b.value / 89) * 55}px`, background: b.color }} />
                        <span className="text-[7px] text-stone-400">{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : msg.role === "tool" ? (
                <div className="bg-stone-900 text-stone-300 text-[10px] font-[family-name:var(--font-mono)] p-2.5 rounded-lg overflow-x-auto leading-relaxed max-h-[120px] overflow-y-auto">
                  <pre className="whitespace-pre-wrap break-all">{msg.content}</pre>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-[12.5px] text-stone-800 leading-relaxed">
                    {msg.content}
                  </p>
                  {msg.thinking && (
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <Zap className="w-2.5 h-2.5" />
                      {msg.thinking}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Streaming indicator */}
        {animate && visibleMessages.length > 0 && visibleMessages.length < chatMessages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5"
          >
            <div className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-stone-300 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-stone-200/40 p-2">
        <div className="bg-stone-50 rounded-xl px-3 py-2 text-[12px] text-stone-400">
          Message Ironclaw...
        </div>
      </div>
    </div>
  );
}

/* ─── Main App Demo ─── */

function useResponsiveScale(baseWidth: number, padding: number = 32) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      const available = window.innerWidth - padding;
      setScale(Math.min(1, available / baseWidth));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [baseWidth, padding]);
  return scale;
}

export default function AppDemo() {
  const baseWidth = 1360;
  const baseHeight = 720;
  const scale = useResponsiveScale(baseWidth, 48);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <section id="demo" ref={sectionRef} className="relative py-16 sm:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-3">
            Live Demo
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl lg:text-5xl text-stone-900 italic mb-4">
            Your CRM, powered by AI
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl">
            Say &ldquo;build me a founder database from this batch, enrich all
            their profiles, and set up outreach&rdquo; — and watch it happen in real time.
          </p>
        </motion.div>

        {/* App window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative w-full"
            style={{ height: baseHeight * scale }}
          >
            <div
              className="absolute origin-top-left"
              style={{
                width: baseWidth,
                height: baseHeight,
                transform: `scale(${scale})`,
              }}
            >
              <div className="bg-white border border-stone-200/70 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden h-full flex flex-col">
                {/* Traffic lights + breadcrumb */}
                <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-4 bg-stone-50/50 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                    <span>workspace</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-stone-700 font-medium">founders</span>
                  </div>
                  <div className="flex-1" />
                  <span className="text-[10px] text-stone-400 font-mono">ironclaw.sh</span>
                </div>

                {/* Content area */}
                <div className="flex flex-1 min-h-0">
                  <DemoSidebar />
                  <CrmTable animateEnrichment={hasAnimated} />
                  <ChatPanel animate={hasAnimated} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
