import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Fan, Monitor, Zap } from 'lucide-react';

const hotspots = [
  {
    id: "connector",
    title: "Heavy-Duty CCS2 Connector",
    desc: "Silver-plated beryllium copper contacts engineered for 10,000+ insertion cycles with real-time pin temperature monitoring.",
    icon: Zap,
    pos: "top-16 left-12 lg:left-28"
  },
  {
    id: "cooling",
    title: "Active Thermal Management",
    desc: "Closed-loop glycol cooling system keeping internal components below 45°C under continuous 240kW ultra-fast loads.",
    icon: Fan,
    pos: "top-1/4 right-12 lg:right-28"
  },
  {
    id: "display",
    title: "10.1\" Anti-Glare Touch Display",
    desc: "Sunlight-readable 1500-nit glass touch interface with integrated RFID tap & QR payment processing hardware.",
    icon: Monitor,
    pos: "top-1/2 left-12 lg:left-28"
  },
  {
    id: "safety",
    title: "Class II Surge Armor & RCD",
    desc: "Integrated Type-B leakage protection, lightning surge arrester, ground monitoring, and emergency mechanical isolation.",
    icon: ShieldCheck,
    pos: "bottom-16 right-12 lg:right-28"
  },
  {
    id: "motherboard",
    title: "Dual 32-Bit ARM Controller",
    desc: "High-frequency power electronics executing 99.4% peak energy conversion logic with real-time 4G IoT cloud diagnostics.",
    icon: Cpu,
    pos: "bottom-16 left-12 lg:left-28"
  }
];

export default function ExplodedView() {
  const [activeSpot, setActiveSpot] = useState(hotspots[0]);

  return (
    <section className="py-28 bg-[#F7F8FA] relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background Soft Blue Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EBF2FF] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
            // Hardware Deep Dive
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight">
            Interactive Charger <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
              Engineering Architecture.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 font-sans max-w-lg mx-auto text-sm sm:text-base">
            Hover over internal hardware hotspots to explore XOBOLT's aerospace-grade charging components.
          </p>
        </div>

        {/* Interactive View Stage */}
        <div className="relative min-h-[580px] lg:min-h-[660px] w-full flex items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-6">
          
          {/* Charger Image Centerpiece */}
          <div className="relative w-72 lg:w-96 h-[440px] lg:h-[540px] flex items-center justify-center">
            <img
              src="https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png"
              alt="XOBOLT Charger Architecture"
              className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(11,78,217,0.12)]"
            />
          </div>

          {/* Hotspot Pins */}
          {hotspots.map((spot) => {
            const isSelected = activeSpot.id === spot.id;
            const Icon = spot.icon;

            return (
              <div key={spot.id} className={`absolute ${spot.pos} z-30`}>
                <button
                  onMouseEnter={() => setActiveSpot(spot)}
                  onClick={() => setActiveSpot(spot)}
                  className={`group relative p-3.5 rounded-2xl flex items-center gap-3 transition-all duration-300 ${
                    isSelected 
                      ? 'bg-[#0B4ED9] text-white shadow-[0_10px_25px_rgba(11,78,217,0.35)] scale-105' 
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-[#0B4ED9] hover:text-[#0B4ED9] shadow-sm'
                  }`}
                >
                  <Icon size={18} className={isSelected ? 'text-white' : 'text-[#0B4ED9]'} />
                  <span className="hidden lg:inline text-xs font-mono font-bold tracking-wider uppercase">
                    {spot.title.split(' ')[0]} {spot.title.split(' ')[1]}
                  </span>

                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white animate-ping' : 'bg-[#0B4ED9]'}`} />
                </button>
              </div>
            );
          })}

          {/* Floating Details Card */}
          <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-md z-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpot.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-white border border-[#0B4ED9]/20 shadow-[0_20px_40px_rgba(11,78,217,0.12)]"
              >
                <div className="flex items-center gap-2.5 mb-2 text-[#0B4ED9]">
                  <activeSpot.icon size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">Component Specification</span>
                </div>
                <h4 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                  {activeSpot.title}
                </h4>
                <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                  {activeSpot.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
