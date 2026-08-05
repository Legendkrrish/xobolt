import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Search, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [counts, setCounts] = useState({ stations: 0, points: 0, happy: 0 });

  // Smooth count-up
  useEffect(() => {
    const targets = { stations: 5, points: 15, happy: 100 };
    const duration = 2000;
    const start = Date.now();
    
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      
      setCounts({
        stations: Math.round(targets.stations * ease),
        points: Math.round(targets.points * ease),
        happy: Math.round(targets.happy * ease),
      });
      
      if (progress < 1) requestAnimationFrame(tick);
    };
    
    requestAnimationFrame(tick);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#070A0F] font-sans">
      {/* Lightweight background — no blur, just gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(56,255,122,0.08)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-[#070A0F]/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text Content */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Zap className="w-4 h-4 text-[#38FF7A]" />
            <span className="text-sm font-medium tracking-wider text-white/80">Welcome to XOBOLT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-display tracking-tight">
            Advanced. Scalable. <br />
            <span className="text-[#38FF7A]">Built for India's</span> <br />
            EV Revolution.
          </h1>

          <p className="text-lg text-[#8A99AD] mb-10 max-w-xl leading-relaxed">
            Need a charge? Use our search tool to find the closest Xobolt station in seconds. Stay on the move with reliable EV charging.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#38FF7A] text-[#070A0F] font-bold rounded-lg hover:bg-[#2CE567] transition-colors">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 text-white font-bold rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <Search className="w-5 h-5 text-[#38FF7A]" />
              Find Charger
            </button>
          </div>

          {/* Stats — simple, no heavy animations */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 border-t border-white/10 w-full">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-display">{counts.stations}K+</div>
              <div className="text-sm text-[#8A99AD] mt-1">Stations Network</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-display">{counts.points}k+</div>
              <div className="text-sm text-[#8A99AD] mt-1">Charge Points</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#38FF7A] font-display">{counts.happy}%</div>
              <div className="text-sm text-[#8A99AD] mt-1">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Right side — clean charger visual, NO canvas, NO heavy animations */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-80 h-[480px]">
            {/* Subtle background glow — single layer, no blur stacking */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#38FF7A]/8 rounded-full" style={{filter: 'blur(80px)'}}></div>

            {/* Charger body */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#141A24] to-[#0C1018] border border-white/10 rounded-3xl overflow-hidden">
              {/* Top accent line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[#38FF7A] to-transparent"></div>
              
              {/* Screen area */}
              <div className="mx-8 mt-12 bg-[#070A0F] rounded-xl border border-white/10 p-5">
                {/* Xobolt logo on screen */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <img src="https://xobolt.in/wp-content/uploads/2025/06/Logo-with-no-bg.png" 
                       alt="Xobolt" className="w-8 h-8" loading="lazy" />
                  <span className="font-display font-bold text-sm text-white tracking-wider">XOBOLT</span>
                </div>
                
                {/* Charging status */}
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-[#38FF7A] mb-1">84%</div>
                  <div className="text-xs text-[#8A99AD] uppercase tracking-widest">Charging</div>
                  <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[84%] bg-gradient-to-r from-[#38FF7A] to-[#00E5FF] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#8A99AD] mt-2">
                    <span>60 kW</span>
                    <span>ETA: 12 min</span>
                  </div>
                </div>
              </div>

              {/* Connector slots */}
              <div className="flex justify-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-xl bg-[#38FF7A]/10 border border-[#38FF7A]/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#38FF7A]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white/30" />
                </div>
              </div>

              {/* Status bar */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-white/5">
                <div className="flex justify-between items-center text-xs text-[#8A99AD]">
                  <span>● Online</span>
                  <span className="text-[#38FF7A] font-medium">CCS2 + AC</span>
                </div>
              </div>
            </div>

            {/* Side LED strip */}
            <div className="absolute top-16 -right-1 w-1 h-32 bg-gradient-to-b from-[#38FF7A] via-[#38FF7A]/50 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
