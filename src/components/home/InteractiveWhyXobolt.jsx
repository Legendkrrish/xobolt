import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Activity, MapPin, Network, ShieldCheck, Cpu } from 'lucide-react';

const features = [
  {
    id: 'ultra-fast',
    title: 'Ultra Fast Charging',
    desc: 'Delivering up to 360kW DC power, adding 300km of range in just 12 minutes. Engineered for maximum throughput.',
    icon: Zap,
    color: '#38FF7A'
  },
  {
    id: 'smart-mon',
    title: 'Smart Monitoring',
    desc: 'Real-time telemetry, remote diagnostics, and OTA updates ensure 99.9% uptime without manual intervention.',
    icon: Activity,
    color: '#00E5FF'
  },
  {
    id: 'made-india',
    title: 'Made for India',
    desc: 'Built to withstand 50°C heat, erratic grid fluctuations, and torrential monsoons. True IP65 ruggedness.',
    icon: MapPin,
    color: '#38FF7A'
  },
  {
    id: 'network',
    title: 'Reliable Network',
    desc: 'OCPP 2.0.1 compliant infrastructure seamlessly connecting chargers, vehicles, and the grid in perfect harmony.',
    icon: Network,
    color: '#00E5FF'
  },
  {
    id: 'safety',
    title: 'Safety First',
    desc: 'Advanced insulation monitoring, physical interlocks, and liquid-cooled cables to prevent thermal events.',
    icon: ShieldCheck,
    color: '#38FF7A'
  },
  {
    id: 'future',
    title: 'Future Ready',
    desc: 'V2G (Vehicle-to-Grid) compatible architecture, ready for the next decade of battery technology and grid demands.',
    icon: Cpu,
    color: '#00E5FF'
  }
];

export default function InteractiveWhyXobolt() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-32 bg-brand-white dark:bg-[#030303] transition-colors duration-700 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 dark:from-brand-green/5 via-transparent to-transparent opacity-50 pointer-events-none transition-colors duration-700"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-6 block">Why Xobolt</span>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-brand-black dark:text-white transition-colors duration-700 tracking-tight leading-[0.95]">
            Engineering the <br/>
            <span className="text-slate-400 dark:text-slate-600">Impossible.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[500px] w-full">
          {features.map((feat, idx) => {
            const isHovered = hoveredIndex === idx;
            // Default: equal flex. Hovered: massive flex.
            return (
              <motion.div
                key={feat.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative overflow-hidden rounded-3xl cursor-pointer
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${hoveredIndex === null ? 'flex-1' : isHovered ? 'flex-[4] lg:flex-[3]' : 'flex-[0.5] opacity-50'}
                  ${isHovered ? 'bg-[#050505] dark:bg-white/5 border-[#111] dark:border-brand-green/50' : 'bg-[#FAFAFA] dark:bg-white/[0.02] border-[#E2E8F0] dark:border-white/5'}
                  border
                `}
              >
                
                {/* Abstract animated line illustration representing the feature (simulated with SVG) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  {isHovered && (
                     <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                       <motion.path 
                         d="M0,50 Q25,10 50,50 T100,50" 
                         fill="none" 
                         stroke={feat.color} 
                         strokeWidth="0.5" 
                         initial={{ pathLength: 0, opacity: 0 }}
                         animate={{ pathLength: 1, opacity: 1 }}
                         transition={{ duration: 1.5, ease: "easeInOut" }}
                       />
                       <motion.path 
                         d="M0,70 Q25,30 50,70 T100,70" 
                         fill="none" 
                         stroke={feat.color} 
                         strokeWidth="0.2" 
                         initial={{ pathLength: 0, opacity: 0 }}
                         animate={{ pathLength: 1, opacity: 0.5 }}
                         transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                       />
                     </svg>
                  )}
                </div>

                <div className="p-8 h-full flex flex-col justify-end relative z-10">
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 mb-auto
                      ${isHovered ? 'bg-white/10 text-brand-green' : 'bg-white dark:bg-white/10 text-brand-black dark:text-white shadow-sm'}
                    `}
                  >
                    <feat.icon size={24} />
                  </div>
                  
                  <h3 className={`text-2xl font-display font-bold whitespace-nowrap transition-colors duration-500 mt-4
                    ${isHovered ? 'text-white' : 'text-brand-black dark:text-white'}
                  `}>
                    {feat.title}
                  </h3>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="text-slate-400 font-sans text-sm leading-relaxed max-w-xs"
                      >
                        {feat.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
