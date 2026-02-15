"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function YCBacked() {
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
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm sm:text-base text-stone-400 font-light">
              Backed by
            </span>
            <Image
              src="/yc-logo-name.svg"
              alt="Y Combinator"
              width={140}
              height={32}
              className="w-28 sm:w-36 h-auto"
            />
          </div>

          <h2 className="font-[family-name:var(--font-instrument)] text-2xl sm:text-3xl lg:text-4xl text-stone-900 italic font-light max-w-2xl leading-snug">
            Agentic workflows that let you focus on what matters
          </h2>

          <div className="flex items-center gap-8 text-stone-400 text-sm">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-stone-800">200+</span>
              <span className="text-[11px]">Active users</span>
            </div>
            <div className="w-px h-8 bg-stone-200" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-stone-800">50K+</span>
              <span className="text-[11px]">Leads enriched</span>
            </div>
            <div className="w-px h-8 bg-stone-200" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-stone-800">98%</span>
              <span className="text-[11px]">Enrichment rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
