import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, ShieldCheck, Zap } from 'lucide-react';

const comparisonData = [
  {
    feature: "Peak Charging Output",
    xobolt: "Up to 240kW Ultra-Fast DC",
    traditional: "Limited 15-30kW Standard AC",
  },
  {
    feature: "Smart Load Balancing",
    xobolt: "Autonomous Dynamic Grid Balancing",
    traditional: "Static Manual Breaker Tripping",
  },
  {
    feature: "Network Uptime SLA",
    xobolt: "99.9% Telemetry Guaranteed",
    traditional: "Unmonitored Frequent Outages",
  },
  {
    feature: "Remote Diagnostics & OTA",
    xobolt: "24/7 Automated Cloud Diagnostics",
    traditional: "Requires Physical Tech On-Site",
  },
  {
    feature: "Mobile App & RFID Billing",
    xobolt: "Instant Tap-to-Charge Unified App",
    traditional: "Fragmented Offline Payment",
  },
  {
    feature: "Weather & Thermal Armor",
    xobolt: "IP65 All-Weather + Liquid Cooling",
    traditional: "Basic Enclosures Overheating",
  },
  {
    feature: "Warranty & Replacement",
    xobolt: "5 Years Full Industrial Replacement",
    traditional: "Standard 1-Year Limited Parts",
  }
];

export default function WhyXoboltComparison() {
  return (
    <section className="py-32 bg-[#050506] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D9FF] mb-4 block">
            // Competitive Superiority
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white leading-tight">
            Why Infrastructure Leaders <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#3B82F6]">
              Choose XOBOLT.
            </span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="w-full rounded-3xl bg-white/[0.01] border border-white/10 overflow-hidden backdrop-blur-2xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 p-6 sm:p-8 bg-white/[0.03] border-b border-white/10 font-mono text-xs uppercase tracking-wider font-bold">
            <div className="col-span-5 sm:col-span-4 text-slate-400">Architecture Feature</div>
            <div className="col-span-4 sm:col-span-4 text-[#00D9FF] flex items-center gap-2">
              <Zap size={14} className="fill-[#00D9FF]" />
              <span>XOBOLT Platform</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-slate-500">Traditional Chargers</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="grid grid-cols-12 p-6 sm:p-8 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-5 sm:col-span-4 text-sm sm:text-base font-display font-bold text-white pr-4">
                  {row.feature}
                </div>

                {/* XOBOLT Cell */}
                <div className="col-span-4 sm:col-span-4 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF] flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-200">
                    {row.xobolt}
                  </span>
                </div>

                {/* Traditional Cell */}
                <div className="col-span-3 sm:col-span-4 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0">
                    <X size={16} />
                  </div>
                  <span className="text-xs sm:text-sm font-sans text-slate-500">
                    {row.traditional}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
