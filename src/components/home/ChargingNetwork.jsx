import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, Activity, Building, Clock } from 'lucide-react';

const statsData = [
  { label: "Charging Stations", value: "100+", sub: "Active Plazas", icon: MapPin },
  { label: "Uptime Guarantee", value: "99.9%", sub: "SLA Guaranteed", icon: Activity },
  { label: "Fast Charging", value: "240 kW", sub: "Peak DC Output", icon: Zap },
  { label: "Cities Covered", value: "45+", sub: "Tier 1 & Transit Routes", icon: Building },
  { label: "Charging Sessions", value: "2.5M+", sub: "Completed Successfully", icon: Clock },
];

const nodes = [
  { name: "Delhi NCR", top: "28%", left: "32%", count: "32 Hubs", delay: 0 },
  { name: "Mumbai", top: "54%", left: "22%", count: "28 Hubs", delay: 0.2 },
  { name: "Bengaluru", top: "72%", left: "34%", count: "38 Hubs", delay: 0.4 },
  { name: "Hyderabad", top: "62%", left: "40%", count: "24 Hubs", delay: 0.6 },
  { name: "Chennai", top: "75%", left: "44%", count: "20 Hubs", delay: 0.8 },
  { name: "Kolkata", top: "45%", left: "70%", count: "16 Hubs", delay: 1.0 },
  { name: "Ahmedabad", top: "44%", left: "20%", count: "14 Hubs", delay: 1.2 },
];

export default function ChargingNetwork() {
  return (
    <section className="py-32 bg-[#0A0A0C] relative overflow-hidden border-t border-white/5">
      
      {/* Background Radial Spotlights */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#3B82F6]/20 to-[#00D9FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D9FF] mb-4 block">
              // National Energy Grid
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-white leading-tight">
              India's Most Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#3B82F6]">
                EV Charging Network.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 font-sans max-w-md text-base font-normal">
            Real-time IoT telemetry, 99.9% uptime SLAs, and high-power corridor coverage connecting India's economic hubs.
          </p>
        </div>

        {/* Live Counters Banner */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00D9FF]/30 transition-colors backdrop-blur-xl group"
              >
                <div className="flex items-center gap-2 mb-3 text-[#00D9FF]">
                  <Icon size={16} />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{stat.sub}</span>
                </div>
                <div className="text-3xl lg:text-4xl font-display font-black text-white group-hover:text-[#00D9FF] transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-sans text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Map Visualizer */}
        <div className="relative min-h-[500px] lg:min-h-[600px] w-full rounded-3xl bg-white/[0.01] border border-white/10 p-8 overflow-hidden flex items-center justify-center backdrop-blur-2xl">
          
          {/* Futuristic Map Outline SVG */}
          <div className="relative w-full max-w-3xl h-[450px] opacity-40">
            <svg className="w-full h-full text-slate-700" viewBox="0 0 800 800" fill="none">
              {/* Glowing Route Lines */}
              <path d="M 250 220 L 180 350 L 270 580 L 350 600 L 320 490 Z" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" />
              <path d="M 250 220 L 560 360 L 350 600" stroke="#00D9FF" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            {/* Pulsing City Nodes */}
            {nodes.map((node, idx) => (
              <div 
                key={idx} 
                className="absolute flex items-center gap-3 group" 
                style={{ top: node.top, left: node.left }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#00D9FF] animate-ping opacity-75" />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#00D9FF]" />
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-[#0A0A0C]/90 border border-[#00D9FF]/40 text-xs font-mono backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold block">{node.name}</span>
                  <span className="text-[#00D9FF] text-[10px] block">{node.count}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
