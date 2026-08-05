import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Factory, Network, Building2, Globe2, Calendar } from 'lucide-react';

export default function BuiltForIndia() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const timelineItems = [
    {
      year: "2021",
      title: "Foundational R&D",
      desc: "Architected high-efficiency power electronics designed specifically for Indian grid conditions and extreme climate profiles.",
      icon: Calendar
    },
    {
      year: "Manufacturing",
      title: "Indigenized Production",
      desc: "Established state-of-the-art manufacturing facilities producing high-speed AC & DC chargers with 98%+ local components.",
      icon: Factory
    },
    {
      year: "Charging Network",
      title: "Nationwide Infrastructure",
      desc: "Deployed ultra-reliable charging hubs across major highways, urban centers, and corporate real estate.",
      icon: Network
    },
    {
      year: "Commercial Solutions",
      title: "Enterprise Fleet Power",
      desc: "Launched smart load-balancing hardware and SaaS fleet management for logistics, hospitality, and residential hubs.",
      icon: Building2
    },
    {
      year: "Nationwide Expansion",
      title: "The Next-Gen Grid",
      desc: "Scaling to 10,000+ fast-charging points powered by real-time IoT, autonomous diagnostic telemetry, and solar integration.",
      icon: Globe2
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#0A0A0C] relative overflow-hidden border-t border-white/5">
      
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Huge Typography */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:h-fit">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D9FF] mb-6 block">
              // Evolution & Engineering
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-[5rem] font-display font-black text-white leading-[0.95] tracking-tight mb-8">
              Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#3B82F6]">
                India's EV Revolution.
              </span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl font-sans leading-relaxed max-w-md font-normal">
              From localized thermal engineering to grid-aware load distribution, XOBOLT is pioneering India's heavy-duty charging infrastructure.
            </p>
          </div>

          {/* Right Column: Growing Timeline */}
          <div className="w-full lg:w-1/2 relative pl-8 border-l border-white/10">
            
            {/* Animated Growing Vertical Line */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-[-1px] bottom-0 w-[2px] bg-gradient-to-b from-[#00D9FF] via-[#3B82F6] to-transparent shadow-[0_0_15px_rgba(0,217,255,0.8)]"
            />

            <div className="space-y-16">
              {timelineItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#0A0A0C] border-2 border-[#00D9FF] group-hover:border-white shadow-[0_0_12px_rgba(0,217,255,0.6)] flex items-center justify-center transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                    </div>

                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#00D9FF]/30 transition-all duration-500 backdrop-blur-xl group-hover:bg-white/[0.04]">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D9FF]">
                          {item.year}
                        </span>
                        <Icon size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 font-sans leading-relaxed text-sm">
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
