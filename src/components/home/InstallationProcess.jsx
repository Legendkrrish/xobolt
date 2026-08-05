import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, FileCheck, Wrench, CheckCircle2, Zap, Headphones } from 'lucide-react';

const steps = [
  { step: "01", title: "Site Audit", desc: "Technical load feasibility study and electrical transformer assessment.", icon: MapPin },
  { step: "02", title: "Planning", desc: "Custom civil layout blueprint and electrical load-balancing configuration.", icon: FileCheck },
  { step: "03", title: "Installation", desc: "Precision hardware mounting, industrial cabling, and surge armor setup.", icon: Wrench },
  { step: "04", title: "Testing", desc: "Simulated load stress testing, thermal check, and safety trip verification.", icon: CheckCircle2 },
  { step: "05", title: "Activation", desc: "OCPP cloud onboarding, RFID setup, and commercial app publishing.", icon: Zap },
  { step: "06", title: "24/7 Support", desc: "Continuous SLA monitoring and automated predictive telemetry dispatch.", icon: Headphones },
];

export default function InstallationProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <section ref={containerRef} className="py-28 bg-white relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
            Turnkey Implementation
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight">
            Streamlined Turnkey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
              Installation Process.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 font-sans max-w-lg mx-auto text-sm sm:text-base">
            From initial site survey to commercial activation in under 7 business days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 hover:bg-white hover:border-[#0B4ED9]/30 hover:shadow-[0_20px_40px_rgba(11,78,217,0.1)] transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-black text-[#0B4ED9]">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0B4ED9] group-hover:bg-[#0B4ED9] group-hover:text-white transition-all">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
