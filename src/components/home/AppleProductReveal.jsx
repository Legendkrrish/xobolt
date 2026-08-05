import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Zap, Shield, Maximize, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'XB 7',
    category: 'Premium Home Charging',
    power: '7.4kW AC',
    speed: '0-100% in 7 Hours',
    desc: 'The ultimate home charging experience. Sleek, intelligent, and designed to blend seamlessly into your garage.',
    img: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
    features: ['Wi-Fi / App Control', 'Solar Matching', 'IP65 All-Weather']
  },
  {
    name: 'XB 14 Dual Gun',
    category: 'Commercial & Workplace',
    power: '14kW AC Dual',
    speed: 'Charge 2 Cars Simultaneously',
    desc: 'Built for corporate parks and premium residential societies. Dual charging points with smart load balancing.',
    img: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png', // Fallback, would be nice to have distinct images
    features: ['Dual Type-2 Sockets', 'Dynamic Load Sharing', 'RFID & QR Authentication']
  },
  {
    name: 'XB Hybrid',
    category: 'Retail & Destination',
    power: '22kW AC / 30kW DC',
    speed: '0-80% in 1.5 Hours',
    desc: 'The perfect hybrid. Fast DC charging for quick top-ups, combined with reliable AC power for longer stays.',
    img: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
    features: ['Combined AC/DC', 'OCPP 1.6J', '10.1" Touch Display']
  },
  {
    name: 'XB Rapid',
    category: 'Highway Fast Charging',
    power: '60kW DC',
    speed: '0-80% in 45 Mins',
    desc: 'Heavy-duty fast charging for highway plazas. Rugged, reliable, and capable of handling continuous loads.',
    img: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
    features: ['Dual CCS2 Air Cooled', 'Surge Class II Protection', '24/7 Connectivity']
  },
  {
    name: 'XB Rapid+',
    category: 'Ultra-Fast Hubs',
    power: '120kW - 240kW DC',
    speed: '0-80% in 15 Mins',
    desc: 'The absolute pinnacle of power. Liquid-cooled cables delivering massive energy for fleet operators and premium charging hubs.',
    img: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
    features: ['Liquid-Cooled Cables', '96.8% Peak Efficiency', '15.6" Interactive Screen']
  }
];

export default function AppleProductReveal() {
  const containerRef = useRef(null);
  
  // Height is 500vh (100vh per product)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#FAFAFA] dark:bg-[#000000] transition-colors duration-700 z-20" id="products">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Apple-style gradient background that pulses */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/5 dark:from-brand-green/10 via-[#FAFAFA] dark:via-[#000000] to-[#FAFAFA] dark:to-[#000000] pointer-events-none transition-colors duration-700"></div>

        {products.map((product, index) => {
          // Each product gets a 0.2 slice of the scroll progress
          const start = index * 0.2;
          const peak = start + 0.1;
          const end = start + 0.2;

          // Animate opacity: fade in, hold, fade out
          const opacity = useTransform(
            smoothProgress, 
            [start - 0.05, start, end - 0.05, end], 
            [0, 1, 1, 0]
          );

          // Animate 3D rotation: rotates as user scrolls through this product's phase
          const rotateY = useTransform(
            smoothProgress,
            [start, end],
            [30, -30]
          );

          const scale = useTransform(
            smoothProgress,
            [start, peak, end],
            [0.8, 1, 0.8]
          );
          
          const textY = useTransform(
            smoothProgress,
            [start, peak, end],
            [50, 0, -50]
          );

          // If it's outside the render window, don't mount it (performance)
          return (
            <motion.div 
              key={product.name}
              style={{ opacity, pointerEvents: 'none' }}
              className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-center p-8 lg:p-24 z-10"
            >
              {/* Left Side: Product Image spinning in 3D */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center" style={{ perspective: '1000px' }} data-cursor="product">
                <motion.img 
                  src={product.img} 
                  alt={product.name}
                  style={{ rotateY, scale }}
                  className="max-h-[80%] object-contain drop-shadow-[0_20px_50px_rgba(56,255,122,0.15)] pointer-events-auto"
                />
              </div>

              {/* Right Side: Specs & Features animating in */}
              <motion.div style={{ y: textY }} className="w-full lg:w-1/2 flex flex-col items-start pointer-events-auto">
                <p className="text-brand-green font-mono text-sm tracking-widest uppercase mb-4">{product.category}</p>
                <h2 className="text-5xl lg:text-7xl font-display font-black text-brand-black dark:text-white transition-colors duration-700 mb-6">{product.name}</h2>
                
                <p className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl font-sans max-w-md leading-relaxed mb-10 transition-colors duration-700">
                  {product.desc}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-8 mb-12 w-full max-w-md">
                  <div>
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-mono uppercase tracking-wider mb-2">Max Power</p>
                    <p className="text-3xl font-display font-bold text-brand-black dark:text-white transition-colors duration-700">{product.power}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-mono uppercase tracking-wider mb-2">Charging Speed</p>
                    <p className="text-3xl font-display font-bold text-brand-black dark:text-white transition-colors duration-700">{product.speed}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-12">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center transition-colors duration-700">
                        <Check size={14} className="text-brand-green" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium transition-colors duration-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Glowing CTA */}
                <Link to="/products" className="group relative px-8 py-4 bg-brand-green text-brand-black font-mono text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden shadow-[0_0_15px_rgba(56,255,122,0.3)] hover:shadow-[0_0_25px_rgba(56,255,122,0.6)] transition-all duration-300">
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                    Pre-Order {product.name}
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
        
        {/* Progress indicator */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
          {products.map((_, idx) => (
            <div key={idx} className="w-1.5 h-12 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="w-full bg-brand-green"
                style={{
                  height: useTransform(
                    smoothProgress,
                    [idx * 0.2, (idx * 0.2) + 0.2],
                    ["0%", "100%"]
                  )
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
