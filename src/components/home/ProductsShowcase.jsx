import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: "xb7",
    name: "XB 7 Home",
    category: "Residential",
    tagline: "The ultimate home charging experience.",
    desc: "Sleek, intelligent, and designed to blend seamlessly into your garage or private parking bay.",
    power: "7.4kW AC",
    speed: "0-100% in 7 Hours",
    connector: "Single Type-2 Plug",
    warranty: "3 Years Full Replacement",
    img: "https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png"
  },
  {
    id: "xb14",
    name: "XB 14 Dual",
    category: "Commercial",
    tagline: "Dual-gun power for corporate fleets.",
    desc: "Built for enterprise offices and premium residential societies. Dual charging points with smart load balancing.",
    power: "14kW AC Dual",
    speed: "Simultaneous 7kW Output",
    connector: "Dual Type-2 Sockets",
    warranty: "3 Years Commercial Warranty",
    img: "https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png"
  },
  {
    id: "xb30",
    name: "XB Hybrid 30",
    category: "Retail",
    tagline: "Fast DC top-ups + AC reliability.",
    desc: "The perfect hybrid destination charger. Quick DC power for patrons on the go, combined with AC backup.",
    power: "22kW / 30kW DC",
    speed: "0-80% in 1.5 Hours",
    connector: "CCS2 + Type-2 Hybrid",
    warranty: "5 Years Industrial Warranty",
    img: "https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png"
  },
  {
    id: "xb240",
    name: "XB Rapid+ 240",
    category: "Ultra-Fast",
    tagline: "The absolute pinnacle of power.",
    desc: "Liquid-cooled ultra-fast cables delivering massive energy bursts for commercial bus fleets and mega charging parks.",
    power: "240kW DC",
    speed: "0-80% in 15 Mins",
    connector: "Liquid-Cooled Dual CCS2",
    warranty: "5 Years Premier Fleet Support",
    img: "https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png"
  }
];

export default function ProductsShowcase() {
  const [activeTab, setActiveTab] = useState(products[0]);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100" id="products">
      
      {/* Soft Ambient Radial Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F5FAFF] via-white to-white pointer-events-none rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Product Image Array */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-[#EBF2FF] blur-[70px]" />
              <img 
                src={activeTab.img} 
                alt={activeTab.name}
                className="relative max-h-[350px] lg:max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(11,78,217,0.15)] animate-float-slow"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Interactive Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          
          {/* Header Tab System */}
          <div className="flex items-center gap-1 mb-10 bg-slate-100 p-1.5 rounded-full border border-slate-200/80 overflow-x-auto w-full max-w-full no-scrollbar">
            {products.map((product) => {
              const isActive = activeTab.id === product.id;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product)}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest transition-all duration-300 flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-[#0F172A] hover:bg-slate-200/50'
                  }`}
                >
                  <span className="relative z-10">{product.category}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeProductTab"
                      className="absolute inset-0 bg-[#0F172A] rounded-full z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[320px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
                  {activeTab.category} Lineup
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#0F172A] leading-tight mb-3 tracking-tight">
                  {activeTab.name}
                </h2>
                
                <p className="text-[#0B4ED9] text-base sm:text-lg font-sans font-semibold mb-3">
                  "{activeTab.tagline}"
                </p>

                <p className="text-slate-600 text-sm font-sans leading-relaxed max-w-md mb-8">
                  {activeTab.desc}
                </p>

                {/* Specs Glass Box */}
                <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-lg p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
                  <div>
                    <p className="text-slate-400 text-[9px] font-mono uppercase tracking-widest mb-1">Max Power</p>
                    <p className="text-base font-display font-bold text-[#0F172A] flex items-center gap-1.5">
                      <Zap size={14} className="text-[#0B4ED9]" />
                      {activeTab.power}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[9px] font-mono uppercase tracking-widest mb-1">Charging Speed</p>
                    <p className="text-base font-display font-bold text-[#0F172A] flex items-center gap-1.5">
                      <Gauge size={14} className="text-[#0B4ED9]" />
                      {activeTab.speed}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[9px] font-mono uppercase tracking-widest mb-1">Connector</p>
                    <p className="text-xs font-sans font-semibold text-slate-700">{activeTab.connector}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[9px] font-mono uppercase tracking-widest mb-1">Warranty</p>
                    <p className="text-xs font-sans font-semibold text-slate-700">{activeTab.warranty}</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4">
                  <Link 
                    to="/products" 
                    className="px-6 py-3 rounded-full bg-[#0B4ED9] text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-[0_8px_20px_rgba(11,78,217,0.25)] hover:bg-[#083BB0] transition-all"
                  >
                    View Specifications
                  </Link>

                  <Link 
                    to="/contact" 
                    className="px-6 py-3 rounded-full bg-white border border-slate-200 text-[#0F172A] font-mono text-[10px] font-bold uppercase tracking-widest hover:border-[#0B4ED9] hover:bg-slate-50 transition-all"
                  >
                    Request Quote
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
