import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Hotel, Truck, Compass, Home, Briefcase, Landmark, Building2 } from 'lucide-react';

const industries = [
  {
    title: "Luxury Hotels & Hospitality",
    desc: "Premium 5-Star guest charging amenities driving unprecedented F&B dwell time revenue.",
    icon: Hotel,
    stats: "+35% Dwell Time",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Commercial Fleet Depots",
    desc: "High-power 240kW DC fast charging matrix for logistics, delivery vans, and bus fleets.",
    icon: Truck,
    stats: "99.9% Fleet Uptime",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Highway Express Corridors",
    desc: "Ruggedized fast-charging plazas providing rapid 15-minute EV top-ups for travelers.",
    icon: Compass,
    stats: "15 Min Fast Top-Up",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Gated Residential Societies",
    desc: "Shared smart load-balancing AC chargers for premium apartment complexes.",
    icon: Home,
    stats: "Zero Grid Overload",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Corporate Tech Parks",
    desc: "Employee charging perks with RFID authentication and corporate ERP integration.",
    icon: Briefcase,
    stats: "ESG Certified",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Government & Municipal",
    desc: "Standardized OCPP public charging stations built for municipal infrastructure.",
    icon: Landmark,
    stats: "Govt Compliant",
    img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Commercial Real Estate",
    desc: "Scalable EV infrastructure increasing property valuation and tenant retention.",
    icon: Building2,
    stats: "Valuation Boost",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
  }
];

export default function IndustriesScroll() {
  const scrollRef = useRef(null);

  return (
    <section className="py-28 bg-white relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
          Sector Deployment
        </span>
        <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight">
          Industries We Power <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
            Across India.
          </span>
        </h2>
      </div>

      {/* Horizontal Scroll Cards */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar px-6 max-w-7xl mx-auto pb-8 cursor-grab active:cursor-grabbing"
      >
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative min-w-[320px] sm:min-w-[400px] h-[500px] rounded-3xl overflow-hidden border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,78,217,0.12)] transition-all duration-500 flex flex-col justify-end p-8 flex-shrink-0"
            >
              {/* Background Image with Hover Zoom */}
              <img 
                src={ind.img} 
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Light White/Slate Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent z-10" />

              {/* Card Content */}
              <div className="relative z-20 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5FAFF] border border-[#0B4ED9]/20 flex items-center justify-center text-[#0B4ED9]">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0B4ED9] bg-[#F5FAFF] px-2.5 py-1 rounded-full border border-[#0B4ED9]/15">
                    {ind.stats}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                  {ind.title}
                </h3>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
