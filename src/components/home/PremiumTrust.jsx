import React from 'react';

const logos = [
  "RADISSON", "TAJ HOTELS", "DLF", "MARRIOTT", "HYATT", 
  "AMAZON FLEET", "FLIPKART LOGISTICS", "TATA POWER", "MINDSPACE", "L&T REALTY"
];

export default function PremiumTrust() {
  return (
    <section className="py-24 bg-[#0A0A0C] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 block">
          Trusted By Industry Leaders & Infrastructure Partners
        </span>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative flex overflow-x-hidden group bg-white/[0.01] py-8 border-y border-white/5">
        <div className="animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap flex items-center">
          {[...logos, ...logos].map((logo, index) => (
            <span 
              key={index} 
              className="text-3xl md:text-4xl font-display font-black text-slate-600 mx-12 transition-colors duration-300 hover:text-[#00D9FF] cursor-default tracking-wider"
            >
              {logo}
            </span>
          ))}
        </div>
        
        {/* Edge Vignette Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0C] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0C] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
