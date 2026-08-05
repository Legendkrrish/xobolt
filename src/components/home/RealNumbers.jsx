import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: "100+", label: "Charging Stations", sub: "Deployed Nationwide" },
  { value: "99.9%", label: "Uptime SLA", sub: "Cloud Monitored" },
  { value: "240kW", label: "Peak DC Output", sub: "Ultra-Fast Energy" },
  { value: "24×7", label: "Autonomous Support", sub: "Instant Dispatch" },
];

export default function RealNumbers() {
  return (
    <section className="py-32 bg-[#0A0A0C] relative overflow-hidden border-t border-white/5">
      
      {/* Background Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#3B82F6]/10 to-[#00D9FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D9FF] mb-4 block">
            // Verified Field Performance
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white leading-tight">
            Real Numbers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#3B82F6]">
              Unmatched Scale.
            </span>
          </h2>
        </div>

        {/* Huge Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00D9FF]/40 transition-colors backdrop-blur-2xl flex flex-col justify-between text-center group"
            >
              <div className="text-6xl sm:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#00D9FF] group-hover:scale-105 transition-transform duration-500 mb-4">
                {item.value}
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
