"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Fathin Dosunmu",
    role: "Co-Founder",
    location: "Tallinn, Estonia",
    bio: "AI engineer. Built agent systems before it was cool. Runs CodesDevs OÜ.",
    initials: "FD",
  },
  {
    name: "Roman Gallardo",
    role: "Co-Founder",
    location: "Buenos Aires → Tallinn",
    bio: "Part-66 qualified. Aviation industry veteran turned AI operations. Closes deals.",
    initials: "RG",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 bg-stone-50 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-[family-name:var(--font-mono)] text-stone-400 tracking-widest uppercase mb-4">
            About Us
          </p>
          <h2 className="font-[family-name:var(--font-instrument)] text-3xl sm:text-4xl lg:text-5xl text-stone-900 italic mb-4">
            Built by operators, not just engineers
          </h2>
          <p className="text-stone-500 text-lg max-w-md mx-auto">
            Two people. Seven agents. One mission: make AI actually work for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-stone-200 bg-white p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-stone-900 flex items-center justify-center mb-5">
                <span className="text-white text-xl font-semibold font-[family-name:var(--font-mono)]">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-[family-name:var(--font-mono)] text-stone-500 mb-1">
                {member.role}
              </p>
              <p className="text-xs text-stone-400 mb-4">
                {member.location}
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
