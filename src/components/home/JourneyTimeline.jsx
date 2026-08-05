import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const milestones = [
  {
    year: "2021",
    title: "The Inception",
    desc: "Founded with a vision to build charging infrastructure specifically for extreme Indian conditions."
  },
  {
    year: "2023",
    title: "1,000+ Stations",
    desc: "Crossed the milestone of 1,000 active chargers across 50 cities, establishing the backbone of our network."
  },
  {
    year: "2025",
    title: "HyperCharge Launch",
    desc: "Introduced the 360kW liquid-cooled ultra-fast chargers, bringing 12-minute charging to highway plazas."
  },
  {
    year: "Future",
    title: "V2G Ecosystem",
    desc: "Pioneering Vehicle-to-Grid technology to turn EVs into moving power plants for a sustainable grid."
  }
];

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-40 bg-brand-black relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        <div className="text-center mb-32">
          <span className="text-brand-green text-xs font-mono tracking-widest uppercase mb-4 block">Our Journey</span>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white">Powering the Future</h2>
        </div>

        <div className="relative">
          {/* Background Line (Faded) */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 -ml-[1px] w-[2px] bg-white/10"></div>
          
          {/* Animated Glowing Progress Line */}
          <motion.div 
            className="absolute top-0 left-8 md:left-1/2 -ml-[1px] w-[2px] bg-brand-green shadow-[0_0_15px_#38FF7A] origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          {/* Milestones */}
          <div className="space-y-32">
            {milestones.map((item, idx) => {
              // Determine if this is an even or odd item for staggering on desktop
              const isEven = idx % 2 === 0;
              
              // We trigger the reveal when scroll reaches a specific threshold
              const threshold = (idx + 0.5) / milestones.length;
              
              // Scale animation for the dot
              const dotScale = useTransform(
                smoothProgress,
                [threshold - 0.1, threshold],
                [0, 1]
              );
              
              const dotBg = useTransform(
                smoothProgress,
                [threshold - 0.1, threshold],
                ["#1A1A1A", "#38FF7A"]
              );

              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-2 z-10 flex items-center justify-center">
                     <div className="w-8 h-8 bg-brand-black rounded-full border-[3px] border-white/20 flex items-center justify-center">
                       <motion.div 
                         style={{ scale: dotScale, backgroundColor: dotBg }}
                         className="w-3 h-3 rounded-full shadow-[0_0_10px_#38FF7A]"
                       />
                     </div>
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className={`pl-20 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
                  >
                    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-green/50 transition-colors group">
                      <span className="text-5xl font-display font-black text-white/20 group-hover:text-brand-green/20 transition-colors block mb-4">{item.year}</span>
                      <h3 className="text-2xl font-bold font-display text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
