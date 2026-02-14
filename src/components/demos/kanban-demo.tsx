"use client";

import { motion } from "framer-motion";
import { GripVertical, Plus, MoreHorizontal } from "lucide-react";
import { kanbanColumns } from "./demo-data";

function KanbanCard({ name, company, lastAction, delay }: { name: string; company: string; lastAction: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-center w-5 shrink-0 bg-stone-50/80 border-r border-stone-100 cursor-grab opacity-40 hover:opacity-80 transition-opacity">
        <GripVertical className="h-3 w-3 text-stone-400" />
      </div>
      <div className="flex-1 p-2.5 space-y-1.5 min-w-0">
        <h3 className="font-semibold text-[12px] text-stone-800 truncate">{name}</h3>
        <p className="text-[10.5px] text-stone-400 truncate">{company}</p>
        <p className="text-[10px] text-stone-400 pt-1 border-t border-stone-100">{lastAction}</p>
      </div>
    </motion.div>
  );
}

function KanbanColumn({ name, color, cards, index }: { name: string; color: string; cards: typeof kanbanColumns[0]["cards"]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex-1 min-w-[200px] flex flex-col bg-stone-50/80 rounded-2xl border border-stone-200/60"
    >
      {/* Header */}
      <div className="flex items-center gap-2 p-3 border-b border-stone-200/60 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
        <h3 className="font-semibold text-[12px] text-stone-800 flex-1">{name}</h3>
        <span className="text-[10px] font-medium text-stone-400 bg-stone-200/60 px-1.5 py-0.5 rounded-full">
          {cards.length}
        </span>
      </div>

      {/* Cards */}
      <div className="flex-1 p-2 space-y-2 overflow-y-auto">
        {cards.map((card, i) => (
          <KanbanCard
            key={card.id}
            name={card.name}
            company={card.company}
            lastAction={card.lastAction}
            delay={index * 0.08 + i * 0.06}
          />
        ))}
      </div>

      {/* Add */}
      <div className="p-2 border-t border-stone-200/60 shrink-0">
        <button className="w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] text-stone-400 hover:text-stone-600 hover:bg-stone-200/50 rounded-xl transition-colors">
          <Plus className="h-3 w-3" />
          Add Item
        </button>
      </div>
    </motion.div>
  );
}

export default function KanbanDemo() {
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
            Pipeline
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Track every conversation
          </h2>
          <p className="text-stone-500 text-lg max-w-xl">
            Drag-and-drop kanban boards auto-update as leads reply.
            Ironclaw moves cards through your pipeline automatically.
          </p>
        </motion.div>

        {/* Kanban board in app window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-white border border-stone-200/70 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Traffic lights */}
            <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-4 bg-stone-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
              </div>
              <span className="text-[11px] text-stone-500 font-medium">Sales Pipeline — YC W26 Outreach</span>
            </div>

            {/* Board */}
            <div className="flex gap-4 p-4 overflow-x-auto">
              {kanbanColumns.map((col, i) => (
                <KanbanColumn
                  key={col.id}
                  name={col.name}
                  color={col.color}
                  cards={col.cards}
                  index={i}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
