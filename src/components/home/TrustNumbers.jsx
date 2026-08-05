import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "100+", label: "Charging Stations", sub: "Nationwide Hubs" },
  { value: "99.9%", label: "Uptime SLA", sub: "Telemetry Guaranteed" },
  { value: "2,500+", label: "Installations", sub: "Commercial & Residential" },
  { value: "50+", label: "Cities Covered", sub: "Tier-1 & Transit Routes" },
  { value: "10+", label: "Years Experience", sub: "Energy Engineering" },
];

const logos = [
  "RADISSON", "TAJ HOTELS", "DLF", "MARRIOTT", "HYATT", "AMAZON"
];

export default function TrustNumbers() {
  return (
    <section className="py-28 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Soft Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#EBF2FF] to-[#F5FAFF] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
            Proven Scale & Reliability
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight">
            Backed By Numbers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
              Trusted By Leaders.
            </span>
          </h2>
        </div>

        {/* Animated Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 hover:border-[#0B4ED9]/40 hover:bg-white transition-all duration-300 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-[0_15px_30px_rgba(11,78,217,0.08)] group"
            >
              <div className="text-4xl lg:text-[2.75rem] xl:text-5xl font-display font-black tracking-tight text-[#0F172A] group-hover:text-[#0B4ED9] transition-colors mb-2">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-display font-bold text-slate-800 mb-1 leading-tight">
                {item.label}
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold leading-tight">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative flex overflow-x-hidden group bg-[#F7F8FA] py-8 border-y border-slate-200/80">
        <div className="animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap flex items-center">
          {[...logos, ...logos].map((logo, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-3xl font-display font-black text-slate-400 mx-12 transition-colors duration-300 hover:text-[#0B4ED9] cursor-default tracking-wider"
            >
              {logo}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
