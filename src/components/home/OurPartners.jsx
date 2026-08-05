import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

// Custom Crisp Inline SVG Logos for 100% guaranteed rendering
const partnersData = [
  {
    name: 'Holiday Inn Express',
    sub: '& Suites',
    logo: (
      <svg viewBox="0 0 100 60" className="w-16 h-10">
        <rect x="25" y="10" width="50" height="40" rx="8" fill="#00A859" />
        <path d="M40 20 H46 V28 H54 V20 H60 V40 H54 V32 H46 V40 H40 Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: 'Radisson',
    sub: 'HOTEL GROUP',
    logo: (
      <svg viewBox="0 0 120 50" className="w-20 h-10">
        <text x="50%" y="65%" textAnchor="middle" fill="#0F172A" fontFamily="serif" fontWeight="900" fontSize="24" fontStyle="italic" letterSpacing="1">
          Radisson
        </text>
      </svg>
    )
  },
  {
    name: 'Crazy Coffee',
    sub: 'EST. 2018',
    logo: (
      <svg viewBox="0 0 100 50" className="w-16 h-10">
        <rect x="15" y="10" width="70" height="30" rx="15" fill="#0F172A" stroke="#0B4ED9" strokeWidth="2" />
        <text x="50%" y="62%" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="10" letterSpacing="1">
          CRAZY COFFEE
        </text>
      </svg>
    )
  },
  {
    name: 'MG Motors',
    sub: 'MORRIS GARAGES',
    logo: (
      <svg viewBox="0 0 60 60" className="w-10 h-10">
        <polygon points="30,5 52,17 52,43 30,55 8,43 8,17" fill="none" stroke="#0F172A" strokeWidth="4" />
        <text x="50%" y="62%" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontSize="18">
          MG
        </text>
      </svg>
    )
  },
  {
    name: 'Mahindra Electric',
    sub: 'SUVS & MOBILITY',
    logo: (
      <svg viewBox="0 0 80 50" className="w-14 h-10">
        <path d="M20 35 L40 15 L60 35 M30 35 L40 25 L50 35" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: 'The Fern Hotels',
    sub: '& RESORTS',
    logo: (
      <svg viewBox="0 0 70 50" className="w-12 h-10">
        <path d="M35 40 Q25 25 20 10 Q35 20 35 40 Q35 20 50 10 Q45 25 35 40 Z" fill="#15803D" />
      </svg>
    )
  },
  {
    name: 'TATA Motors',
    sub: 'CONNECTING ASPIRATIONS',
    logo: (
      <svg viewBox="0 0 100 50" className="w-20 h-10">
        <rect x="15" y="8" width="70" height="34" rx="4" fill="#0B4ED9" />
        <text x="50%" y="58%" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="12" letterSpacing="2">
          TATA
        </text>
      </svg>
    )
  },
  {
    name: 'KGK Realty',
    sub: 'BUILDING TRUST',
    logo: (
      <svg viewBox="0 0 60 60" className="w-10 h-10">
        <polygon points="30,5 52,17 52,43 30,55 8,43 8,17" fill="none" stroke="#0B4ED9" strokeWidth="2.5" />
        <text x="50%" y="60%" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontSize="12">
          KGK
        </text>
      </svg>
    )
  },
  {
    name: 'Cygnett Lite',
    sub: 'HOTELS & RESORTS',
    logo: (
      <svg viewBox="0 0 80 50" className="w-14 h-10">
        <path d="M25 35 Q40 10 55 20 Q45 25 35 35 Z" fill="#D97706" />
      </svg>
    )
  },
  {
    name: 'Pushkara Resort',
    sub: '& SPA',
    logo: (
      <svg viewBox="0 0 60 60" className="w-10 h-10">
        <circle cx="30" cy="30" r="22" fill="none" stroke="#0F172A" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="30" cy="30" r="10" fill="#0B4ED9" opacity="0.2" />
      </svg>
    )
  },
  {
    name: 'Mercedes-Benz',
    sub: 'LUXURY AUTOMOTIVE',
    logo: (
      <svg viewBox="0 0 60 60" className="w-10 h-10">
        <circle cx="30" cy="30" r="24" fill="none" stroke="#0F172A" strokeWidth="3" />
        <line x1="30" y1="30" x2="30" y2="8" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="30" x2="11" y2="41" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="30" x2="49" y2="41" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'Novotel Hotels',
    sub: '& RESORTS',
    logo: (
      <svg viewBox="0 0 100 50" className="w-20 h-10">
        <path d="M20 15 Q50 5 80 15" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
        <text x="50%" y="70%" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="2">
          NOVOTEL
        </text>
      </svg>
    )
  }
];

export default function OurPartners() {
  return (
    <section className="py-16 bg-white relative overflow-hidden border-y border-slate-100 font-sans">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 text-[#0B4ED9] text-xs font-mono font-bold uppercase tracking-widest mb-2">
          <Zap size={14} className="fill-[#0B4ED9]" />
          <span>OUR PARTNERS</span>
        </div>
      </motion.div>

      {/* Static 6-Column Grid of High-Res Partner Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partnersData.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="h-32 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(11,78,217,0.12)] hover:border-[#0B4ED9]/40 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center group cursor-pointer"
            >
              <div className="h-12 w-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {p.logo}
              </div>
              <div className="mt-1">
                <span className="text-[12px] font-display font-black text-[#0F172A] tracking-tight block group-hover:text-[#0B4ED9] transition-colors">
                  {p.name}
                </span>
                <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                  {p.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
