"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            <Image
              src="/yc-logo-name.svg"
              alt="Y Combinator"
              width={140}
              height={32}
              className="w-28 sm:w-36 h-auto"
            />
          </div>

          <h2 className="font-[family-name:var(--font-instrument)] text-2xl sm:text-3xl lg:text-4xl text-stone-900 italic font-light max-w-2xl">
            Agentic workflows that let you focus on what matters
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
