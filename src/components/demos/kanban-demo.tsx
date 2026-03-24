"use client";

import { useState, useCallback, DragEvent } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { GripVertical, Plus, MoveHorizontal } from "lucide-react";
import { kanbanColumns as initialColumns } from "./demo-data";

type Card = {
  id: string;
  name: string;
  company: string;
  lastAction: string;
};

type Column = {
  id: string;
  name: string;
  color: string;
  cards: Card[];
};

function KanbanCard({
  card,
  columnId,
  onDragStart,
  isDragging,
}: {
  card: Card;
  columnId: string;
  onDragStart: (e: DragEvent<HTMLDivElement>, card: Card, columnId: string) => void;
  isDragging: boolean;
}) {
  return (
    <motion.div
      layout
      layoutId={card.id}
      transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
      className="kanban-card-wrapper"
    >
      <div
        draggable
        onDragStart={(e) => onDragStart(e, card, columnId)}
        className={`flex bg-white rounded-xl border shadow-sm overflow-hidden cursor-grab active:cursor-grabbing select-none transition-all duration-200 ${
          isDragging
            ? "border-blue-300 opacity-40 shadow-lg scale-95"
            : "border-stone-200/80 hover:shadow-md hover:border-stone-300 hover:-translate-y-0.5"
        }`}
      >
        <div className="flex items-center justify-center w-6 shrink-0 bg-stone-50/80 border-r border-stone-100">
          <GripVertical className="h-3 w-3 text-stone-300" />
        </div>
        <div className="flex-1 p-2.5 space-y-1.5 min-w-0">
          <h3 className="font-semibold text-[12px] text-stone-800 truncate">
            {card.name}
          </h3>
          <p className="text-[10.5px] text-stone-400 truncate">
            {card.company}
          </p>
          <p className="text-[10px] text-stone-400 pt-1 border-t border-stone-100">
            {card.lastAction}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function KanbanColumn({
  column,
  index,
  onCardDragStart,
  onColumnDragOver,
  onColumnDragLeave,
  onColumnDrop,
  isDropTarget,
  draggedCardId,
}: {
  column: Column;
  index: number;
  onCardDragStart: (e: DragEvent<HTMLDivElement>, card: Card, columnId: string) => void;
  onColumnDragOver: (e: DragEvent<HTMLDivElement>, columnId: string) => void;
  onColumnDragLeave: (columnId: string) => void;
  onColumnDrop: (e: DragEvent<HTMLDivElement>, columnId: string) => void;
  isDropTarget: boolean;
  draggedCardId: string | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onDragOver={(e) => {
        e.preventDefault();
        onColumnDragOver(e as unknown as DragEvent<HTMLDivElement>, column.id);
      }}
      onDragLeave={() => onColumnDragLeave(column.id)}
      onDrop={(e) => {
        e.preventDefault();
        onColumnDrop(e as unknown as DragEvent<HTMLDivElement>, column.id);
      }}
      className={`flex-1 min-w-[200px] flex flex-col rounded-2xl border transition-all duration-200 ${
        isDropTarget
          ? "bg-blue-50/60 border-blue-300 ring-2 ring-blue-200/50 shadow-md"
          : "bg-stone-50/80 border-stone-200/60"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 p-3 border-b border-stone-200/60 shrink-0">
        <div
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: column.color }}
        />
        <h3 className="font-semibold text-[12px] text-stone-800 flex-1">
          {column.name}
        </h3>
        <span className="text-[10px] font-medium text-stone-400 bg-stone-200/60 px-1.5 py-0.5 rounded-full">
          {column.cards.length}
        </span>
      </div>

      {/* Cards */}
      <div className="flex-1 p-2 space-y-2 overflow-y-auto min-h-[100px]">
        <AnimatePresence mode="popLayout">
          {column.cards.map((card) => (
            <KanbanCard
              key={card.id}
              card={card}
              columnId={column.id}
              onDragStart={onCardDragStart}
              isDragging={draggedCardId === card.id}
            />
          ))}
        </AnimatePresence>

        {/* Drop hint */}
        {isDropTarget && column.cards.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-16 border-2 border-dashed border-blue-300 rounded-xl flex items-center justify-center"
          >
            <span className="text-[10px] text-blue-400 font-medium">
              Drop here
            </span>
          </motion.div>
        )}
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
  const [columns, setColumns] = useState<Column[]>(
    initialColumns.map((col) => ({ ...col, cards: [...col.cards] }))
  );
  const [draggedCard, setDraggedCard] = useState<{
    card: Card;
    sourceColId: string;
  } | null>(null);
  const [dropTargetColId, setDropTargetColId] = useState<string | null>(null);

  const handleCardDragStart = useCallback(
    (e: DragEvent<HTMLDivElement>, card: Card, columnId: string) => {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", card.id);
      setDraggedCard({ card, sourceColId: columnId });
    },
    []
  );

  const handleColumnDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>, colId: string) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      setDropTargetColId(colId);
    },
    []
  );

  const handleColumnDragLeave = useCallback(
    (colId: string) => {
      setDropTargetColId((prev) => (prev === colId ? null : prev));
    },
    []
  );

  const handleColumnDrop = useCallback(
    (e: DragEvent<HTMLDivElement>, targetColId: string) => {
      e.preventDefault();
      if (!draggedCard) return;

      if (draggedCard.sourceColId !== targetColId) {
        setColumns((prev) =>
          prev.map((col) => {
            if (col.id === draggedCard.sourceColId) {
              return {
                ...col,
                cards: col.cards.filter((c) => c.id !== draggedCard.card.id),
              };
            }
            if (col.id === targetColId) {
              const exists = col.cards.some(
                (c) => c.id === draggedCard.card.id
              );
              if (exists) return col;
              return { ...col, cards: [...col.cards, draggedCard.card] };
            }
            return col;
          })
        );
      }

      setDraggedCard(null);
      setDropTargetColId(null);
    },
    [draggedCard]
  );

  const handleDragEnd = useCallback(() => {
    setDraggedCard(null);
    setDropTargetColId(null);
  }, []);

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
            Drag-and-drop kanban boards auto-update as leads reply. Elav
            moves cards through your pipeline automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onDragEnd={handleDragEnd}
        >
          <div className="bg-white border border-stone-200/70 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Traffic lights */}
            <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-4 bg-stone-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
              </div>
              <span className="text-[11px] text-stone-500 font-medium">
                Sales Pipeline — YC W26 Outreach
              </span>
              <div className="ml-auto flex items-center gap-1.5 text-[10px] text-stone-400">
                <MoveHorizontal className="w-3 h-3" />
                <span className="hidden sm:inline">
                  Drag cards between columns
                </span>
              </div>
            </div>

            {/* Board */}
            <LayoutGroup>
              <div className="flex gap-4 p-4 overflow-x-auto">
                {columns.map((col, i) => (
                  <KanbanColumn
                    key={col.id}
                    column={col}
                    index={i}
                    onCardDragStart={handleCardDragStart}
                    onColumnDragOver={handleColumnDragOver}
                    onColumnDragLeave={handleColumnDragLeave}
                    onColumnDrop={handleColumnDrop}
                    isDropTarget={
                      dropTargetColId === col.id &&
                      draggedCard?.sourceColId !== col.id
                    }
                    draggedCardId={draggedCard?.card.id ?? null}
                  />
                ))}
              </div>
            </LayoutGroup>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
