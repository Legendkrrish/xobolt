import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// A simple animated counter component
const AnimatedCounter = ({ from = 0, to, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(from + (to - from) * easeOut));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    // Add delay
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [inView, from, to, duration, delay]);

  return <span ref={ref}>{count}</span>;
};

export default function MapNetwork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mapScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const mapOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // Points representing major charging hubs across India
  const hubs = [
    { id: 1, cx: "250", cy: "150", name: "Delhi NCR", delay: 0.2 },
    { id: 2, cx: "180", cy: "350", name: "Mumbai", delay: 0.4 },
    { id: 3, cx: "300", cy: "450", name: "Hyderabad", delay: 0.6 },
    { id: 4, cx: "320", cy: "550", name: "Bengaluru", delay: 0.8 },
    { id: 5, cx: "350", cy: "580", name: "Chennai", delay: 1.0 },
    { id: 6, cx: "450", cy: "320", name: "Kolkata", delay: 0.7 }
  ];

  // Connection lines
  const lines = [
    { id: 'l1', d: "M250,150 L180,350", delay: 0.6 },
    { id: 'l2', d: "M180,350 L300,450", delay: 0.8 },
    { id: 'l3', d: "M300,450 L320,550", delay: 1.0 },
    { id: 'l4', d: "M320,550 L350,580", delay: 1.2 },
    { id: 'l5', d: "M250,150 L450,320", delay: 0.9 },
    { id: 'l6', d: "M450,320 L300,450", delay: 1.1 }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Typography & Stats */}
        <div className="w-full lg:w-5/12 flex flex-col items-start z-20">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 1 }}
          >
            <span className="text-brand-green text-sm font-mono tracking-widest uppercase mb-4 block">National Infrastructure</span>
            <h2 className="text-5xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
              Powering a <br /> Billion Journeys.
            </h2>
            <p className="text-slate-400 text-lg lg:text-xl font-sans max-w-md leading-relaxed mb-12">
              From the highest passes of the Himalayas to the coastal highways of the South, Xobolt's intelligent network is expanding every single day.
            </p>

            <div className="flex items-center gap-12">
              <div>
                <p className="text-5xl lg:text-7xl font-display font-black text-brand-green drop-shadow-[0_0_15px_rgba(56,255,122,0.5)]">
                  <AnimatedCounter to={2500} duration={3} />+
                </p>
                <p className="text-slate-400 font-mono text-sm uppercase tracking-widest mt-2">Active Stations</p>
              </div>
              <div>
                <p className="text-5xl lg:text-7xl font-display font-black text-white">
                  <AnimatedCounter to={150} duration={3} delay={0.5} />+
                </p>
                <p className="text-slate-400 font-mono text-sm uppercase tracking-widest mt-2">Cities Covered</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: The Map */}
        <div className="w-full lg:w-7/12 relative flex items-center justify-center">
          
          <motion.div 
            style={{ scale: mapScale, opacity: mapOpacity }}
            className="relative w-full max-w-lg aspect-square"
          >
            {/* The Map Graphic (Stylized SVG Outline of India) */}
            <svg viewBox="0 0 600 700" className="w-full h-full text-white/5 drop-shadow-2xl">
               {/* Abstract India path (simplified representation) */}
               <path 
                 d="M200,50 L250,20 L300,50 L350,150 L450,200 L550,300 L520,400 L400,450 L350,550 L300,650 L250,650 L200,500 L150,450 L50,300 L100,200 L150,100 Z" 
                 fill="currentColor" 
                 stroke="rgba(255,255,255,0.1)" 
                 strokeWidth="2" 
               />
               
               {/* Connections */}
               {lines.map((line) => (
                 <motion.path
                   key={line.id}
                   d={line.d}
                   fill="none"
                   stroke="#38FF7A"
                   strokeWidth="1.5"
                   strokeDasharray="5,5"
                   initial={{ pathLength: 0, opacity: 0 }}
                   whileInView={{ pathLength: 1, opacity: 0.5 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 1.5, delay: line.delay + 0.5, ease: "easeInOut" }}
                 />
               ))}

               {/* Hub Points */}
               {hubs.map((hub) => (
                 <g key={hub.id}>
                   <motion.circle
                     cx={hub.cx}
                     cy={hub.cy}
                     r="6"
                     fill="#38FF7A"
                     initial={{ scale: 0, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ type: "spring", delay: hub.delay, bounce: 0.5 }}
                   />
                   <motion.circle
                     cx={hub.cx}
                     cy={hub.cy}
                     r="12"
                     fill="none"
                     stroke="#38FF7A"
                     strokeWidth="1"
                     initial={{ scale: 0, opacity: 0 }}
                     whileInView={{ scale: [0, 2, 2], opacity: [1, 0, 0] }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 2, delay: hub.delay, repeat: Infinity }}
                   />
                 </g>
               ))}
            </svg>

            {/* Floating Glass Stat Cards */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 1.5, type: "spring" }}
               className="absolute top-10 -right-10 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                <span className="text-white text-xs font-mono uppercase tracking-widest">Network Status</span>
              </div>
              <p className="text-xl font-bold text-white">99.9% Uptime</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 1.8, type: "spring" }}
               className="absolute bottom-20 -left-10 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                <span className="text-white text-xs font-mono uppercase tracking-widest">Energy Dispensed</span>
              </div>
              <p className="text-xl font-bold text-white">45.2 GWh</p>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
