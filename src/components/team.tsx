"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Roman Gallardo",
    role: "Co-Founder",
    location: "Tallinn, Estonia",
    bio: "I've been building and scaling ventures for over a decade. Started in operations, learned fast that growth isn't about ideas — it's about execution speed and systems that don't break. I've co-founded companies across multiple verticals, taken products from zero to revenue, and built GTM machines that actually convert. From assembling teams to closing enterprise deals, I've done every role in a startup at least twice. I moved from Buenos Aires to Tallinn because this is where the edge is — European tech, global ambition, zero bureaucracy. When I saw what autonomous AI agents could do for business operations, I didn't want to consult on it. I wanted to own it. ELAV AI is the company I wish existed at every venture I've built — an AI operations team that runs while you focus on what matters.",
    initials: "RG",
  },
  {
    name: "Fathin Dosunmu",
    role: "Co-Founder",
    location: "Tallinn, Estonia",
    bio: "I've been building software since I was a teenager in London. Moved to Tallinn at 23 to start CodesDevs, an AI engineering studio where I built agent systems for clients before 'AI agents' was even a buzzword. I went through the Tehnopol pre-accelerator in Estonia, pitched to investors, and learned that the hard part isn't building AI — it's making it do something a business will actually pay for. I've shipped autonomous pipelines that run 24/7, knowledge graphs with thousands of entities, and multi-agent fleets that coordinate without human intervention. ELAV AI is everything I've learned distilled into one product: AI that doesn't just answer questions, but runs your operations while you sleep.",
    initials: "FD",
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
