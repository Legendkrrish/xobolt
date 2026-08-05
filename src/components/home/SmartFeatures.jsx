import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Smartphone, Radio, Zap, ShieldCheck, Scale } from 'lucide-react';

const features = [
  {
    title: "Real-time Monitoring",
    tagline: "Live telemetry & energy analytics",
    desc: "Inspect live charging voltage, current draw, session duration, and revenue metrics in real-time.",
    icon: Activity,
  },
  {
    title: "App Control",
    tagline: "Tap-to-charge mobile ecosystem",
    desc: "Drivers can effortlessly scan QR codes, authenticate via RFID, or schedule charging from iOS & Android apps.",
    icon: Smartphone,
  },
  {
    title: "Remote Diagnostics",
    tagline: "Autonomous cloud troubleshooting",
    desc: "Our automated telemetry system diagnoses grid fluctuations and executes OTA firmware updates automatically.",
    icon: Radio,
  },
  {
    title: "Fast Charging",
    tagline: "Up to 240kW DC output",
    desc: "Industrial-grade liquid-cooled power modules delivering 80% charge in under 15 minutes.",
    icon: Zap,
  },
  {
    title: "Safety Protection",
    tagline: "Class II industrial surge armor",
    desc: "Built-in Type-B RCD leakage protection, ground fault monitoring, and instant emergency mechanical shutoff.",
    icon: ShieldCheck,
  },
  {
    title: "Dynamic Load Balancing",
    tagline: "Intelligent grid management",
    desc: "Intelligently distributes available power across multiple chargers to prevent building circuit overloads.",
    icon: Scale,
  }
];

export default function SmartFeatures() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="py-28 bg-[#F7F8FA] relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
            // Smart Software & Hardware Integration
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight">
            Next-Gen Features Built <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
              For Commercial Scale.
            </span>
          </h2>
        </motion.div>

        {/* Feature Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-8 rounded-3xl bg-white/80 backdrop-blur-xl border transition-all duration-500 cursor-pointer ${
                  isHovered 
                    ? 'border-[#0B4ED9] shadow-[0_20px_40px_rgba(11,78,217,0.14)] scale-[1.02]' 
                    : 'border-slate-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)]'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    isHovered ? 'bg-[#0B4ED9] text-white' : 'bg-[#F5FAFF] border border-[#0B4ED9]/15 text-[#0B4ED9]'
                  }`}>
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-2">
                  {feat.title}
                </h3>

                <p className="text-xs font-mono font-semibold text-[#0B4ED9] mb-4">
                  {feat.tagline}
                </p>

                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
