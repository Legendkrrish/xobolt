import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, BatteryCharging, Bell, Wallet, History, Smartphone } from 'lucide-react';

const appFeatures = [
  {
    title: 'Find & Route',
    desc: 'Live maps showing real-time charger availability and intelligent route planning based on your current SOC.',
    icon: MapPin,
    screenBg: 'bg-slate-900',
    screenUI: (
      <div className="w-full h-full p-4 flex flex-col relative">
        <div className="w-full h-48 bg-slate-800 rounded-xl mb-4 relative overflow-hidden">
           {/* Fake Map */}
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center">
             <div className="w-4 h-4 rounded-full bg-brand-green shadow-[0_0_10px_#38FF7A]"></div>
           </div>
        </div>
        <div className="w-full h-16 bg-white/5 rounded-xl mb-2"></div>
        <div className="w-full h-16 bg-white/5 rounded-xl"></div>
      </div>
    )
  },
  {
    title: 'Live Charging',
    desc: 'Monitor power delivery in real-time. See voltage, current, and estimated time to completion.',
    icon: BatteryCharging,
    screenBg: 'bg-brand-black',
    screenUI: (
      <div className="w-full h-full p-6 flex flex-col items-center justify-center relative">
        <div className="w-48 h-48 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="96" cy="96" r="90" fill="none" stroke="#38FF7A" strokeWidth="8" strokeDasharray="565" strokeDashoffset="120" className="drop-shadow-[0_0_10px_#38FF7A]" />
          </svg>
          <div className="text-center">
            <span className="text-4xl font-display font-bold text-white">78%</span>
            <span className="block text-xs text-brand-green uppercase tracking-widest mt-1">Charging</span>
          </div>
        </div>
        <div className="mt-8 flex gap-4 w-full">
           <div className="flex-1 h-12 bg-white/5 rounded-lg flex items-center justify-center text-sm font-mono text-white">64kW</div>
           <div className="flex-1 h-12 bg-white/5 rounded-lg flex items-center justify-center text-sm font-mono text-white">12m Left</div>
        </div>
      </div>
    )
  },
  {
    title: 'Wallet & Pay',
    desc: 'Seamless auto-deduct wallet. Plug in and walk away—billing is handled instantly when you unplug.',
    icon: Wallet,
    screenBg: 'bg-slate-900',
    screenUI: (
      <div className="w-full h-full p-4 flex flex-col">
        <div className="w-full h-40 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl mb-6 p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(56,255,122,0.2)]">
          <span className="text-brand-black/70 font-mono text-xs uppercase tracking-widest">Xobolt Balance</span>
          <span className="text-3xl font-display font-black text-brand-black">₹ 1,450.00</span>
        </div>
        <div className="space-y-3">
          {[1,2,3].map(i => (
             <div key={i} className="w-full h-14 bg-white/5 rounded-xl flex items-center justify-between px-4">
               <div className="flex gap-3 items-center">
                 <div className="w-8 h-8 rounded-full bg-white/10"></div>
                 <div className="w-20 h-2 bg-white/20 rounded"></div>
               </div>
               <div className="w-12 h-3 bg-white/20 rounded"></div>
             </div>
          ))}
        </div>
      </div>
    )
  }
];

export default function AppEcosystem() {
  const containerRef = useRef(null);
  
  // 3 features = 300vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-white dark:bg-[#000000] transition-colors duration-700">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 overflow-hidden">
        
        {/* Background Decorative Blob */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-green/10 rounded-full blur-[80px] pointer-events-none transition-colors duration-700"></div>

        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left: Text Content (Crossfading) */}
          <div className="w-full lg:w-1/2 relative h-64">
            {appFeatures.map((feat, idx) => {
              const start = (idx - 0.5) * (1 / appFeatures.length);
              const peak = idx * (1 / appFeatures.length);
              const end = (idx + 0.5) * (1 / appFeatures.length);

              const opacity = useTransform(smoothProgress, [start, peak, end], [0, 1, 0]);
              const y = useTransform(smoothProgress, [start, peak, end], [30, 0, -30]);

              return (
                <motion.div 
                  key={idx}
                  style={{ opacity, y }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 shadow-sm border border-brand-green/20">
                    <feat.icon size={24} />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-display font-black text-brand-black dark:text-white transition-colors duration-700 mb-4">
                    {feat.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-sans leading-relaxed max-w-sm transition-colors duration-700">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Phone Mockup (Screen changes based on scroll) */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="w-[300px] h-[600px] bg-[#0A0A0A] rounded-[3rem] p-3 shadow-2xl relative border-[6px] border-[#1A1A1A]">
              
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1A1A1A] rounded-b-2xl z-50"></div>

              {/* Screen Container */}
              <div className="w-full h-full bg-brand-black rounded-[2rem] overflow-hidden relative">
                {appFeatures.map((feat, idx) => {
                  const start = (idx - 0.5) * (1 / appFeatures.length);
                  const peak = idx * (1 / appFeatures.length);
                  const end = (idx + 0.5) * (1 / appFeatures.length);

                  const opacity = useTransform(smoothProgress, [start, peak, end], [0, 1, 0]);
                  const scale = useTransform(smoothProgress, [start, peak, end], [0.9, 1, 0.9]);

                  return (
                    <motion.div 
                      key={idx}
                      style={{ opacity, scale }}
                      className={`absolute inset-0 ${feat.screenBg}`}
                    >
                      {feat.screenUI}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Ambient glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-brand-green/20 rounded-full blur-[60px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
