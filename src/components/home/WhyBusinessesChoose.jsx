import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ShieldCheck, Wrench, Radio, Headphones, Flag } from 'lucide-react';

const topics = [
  {
    title: "Reliable Hardware",
    desc: "Aerospace-grade aluminum enclosures, IP65 weatherproofing, and silver-plated contact guns rated for 10,000+ plug cycles.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Installation",
    desc: "Complete turnkey deployment including electrical transformer load sizing, civil work, mounting, and commissioning.",
    icon: Wrench,
  },
  {
    title: "Remote Monitoring",
    desc: "24/7 automated cloud telemetry analyzing voltage stability, peak usage patterns, and predictive component health.",
    icon: Radio,
  },
  {
    title: "Service Support",
    desc: "Dedicated enterprise SLAs with 4-hour technician dispatch across 45+ Tier-1 cities and major transit routes.",
    icon: Headphones,
  },
  {
    title: "Made for India",
    desc: "Specifically engineered to handle extreme Indian weather profiles (-10°C to 55°C) and voltage spikes without tripping.",
    icon: Flag,
  }
];

export default function WhyBusinessesChoose() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <section ref={containerRef} className="py-28 bg-[#F7F8FA] relative overflow-hidden border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side Sticky Column */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:h-fit">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
              Enterprise Value Proposition
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight mb-6">
              Why Businesses <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
                Choose XOBOLT.
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed max-w-md font-normal">
              We combine enterprise-grade reliability, localized thermal engineering, and automated cloud operations so your EV infrastructure runs seamlessly.
            </p>
          </div>

          {/* Right Side Growing Timeline */}
          <div className="w-full lg:w-1/2 relative pl-8 border-l border-slate-200">
            
            {/* Blue Growing Vertical Progress Line */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-[-1px] bottom-0 w-[2px] bg-[#0B4ED9] shadow-[0_0_12px_rgba(11,78,217,0.6)]"
            />

            <div className="space-y-12">
              {topics.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.12 }}
                    className="relative group"
                  >
                    {/* Node Circle */}
                    <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white border-2 border-[#0B4ED9] group-hover:bg-[#0B4ED9] transition-colors shadow-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0B4ED9] group-hover:bg-white transition-colors" />
                    </div>

                    {/* Content Card */}
                    <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,78,217,0.1)] transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4 text-[#0B4ED9]">
                        <div className="w-10 h-10 rounded-xl bg-[#F5FAFF] border border-[#0B4ED9]/15 flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                          0{idx + 1} Enterprise Advantage
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 font-sans leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
