import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Headphones } from 'lucide-react';

const cards = [
  {
    title: "Smart Technology",
    desc: "AI-driven dynamic load balancing, real-time cloud telemetry, and seamless OCPP 1.6J integration for remote management.",
    icon: Cpu,
  },
  {
    title: "Reliable Hardware",
    desc: "Built for extreme Indian grid fluctuations with IP65 all-weather casing, surge protection, and 98%+ localized components.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Installation",
    desc: "Turnkey deployment from initial site audit and load engineering to commissioning within 7 business days.",
    icon: Zap,
  },
  {
    title: "Nationwide Support",
    desc: "24/7 dedicated fleet diagnostics and emergency technician dispatch across 45+ Tier-1 & transit corridors.",
    icon: Headphones,
  }
];

export default function WhyXoboltCards() {
  return (
    <section className="py-28 bg-[#F7F8FA] relative overflow-hidden border-t border-slate-200/60">
      
      {/* Soft Blue Ambient Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EBF2FF]/80 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-4 block">
            // Core Engineering Pillars
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight">
            Why Infrastructure Leaders <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
              Trust XOBOLT.
            </span>
          </h2>
        </motion.div>

        {/* 4 Floating Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,78,217,0.12)] hover:border-[#0B4ED9]/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F5FAFF] border border-[#0B4ED9]/15 flex items-center justify-center text-[#0B4ED9] mb-8 group-hover:scale-110 group-hover:bg-[#0B4ED9] group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#0B4ED9] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 font-sans text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
