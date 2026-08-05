import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Search, Navigation, Zap, ShieldCheck } from 'lucide-react';

export default function FindChargerModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  if (!isOpen) return null;

  const sampleStations = [
    {
      id: 1,
      name: 'Xobolt HyperCharge Plaza — Aerocity',
      city: 'Delhi NCR',
      address: 'IGI Airport Aerocity Hospitality District, New Delhi',
      distance: '1.4 km away',
      power: '360 kW DC Ultra-Fast',
      type: 'dc-ultra',
      guns: '4 / 4 Available',
      status: 'Open 24x7',
      rate: '₹18 / kWh'
    },
    {
      id: 2,
      name: 'Xobolt FastX Hub — BKC Commercial',
      city: 'Mumbai',
      address: 'G-Block, Bandra Kurla Complex, Mumbai',
      distance: '2.8 km away',
      power: '120 kW DC Fast',
      type: 'dc-fast',
      guns: '3 / 4 Available',
      status: 'Open 24x7',
      rate: '₹16 / kWh'
    },
    {
      id: 3,
      name: 'Xobolt Solar Hub — Electronic City',
      city: 'Bengaluru',
      address: 'Phase 1, Hosur Main Road, Electronic City, Bengaluru',
      distance: '0.8 km away',
      power: '360 kW DC Ultra-Fast',
      type: 'dc-ultra',
      guns: '2 / 4 Available',
      status: 'Solar Grid Active',
      rate: '₹17.5 / kWh'
    },
    {
      id: 4,
      name: 'Xobolt Commercial Pro — Cyberabad',
      city: 'Hyderabad',
      address: 'HITEC City Phase 2, Madhapur, Hyderabad',
      distance: '3.1 km away',
      power: '22 kW AC Dual',
      type: 'ac-smart',
      guns: '2 / 2 Available',
      status: 'Open 24x7',
      rate: '₹12 / kWh'
    },
    {
      id: 5,
      name: 'Xobolt Expressway Hub — Yamuna Expressway Toll',
      city: 'Noida',
      address: 'Mile 42, Yamuna Expressway Corridor, Greater Noida',
      distance: '12 km away',
      power: '360 kW DC Ultra-Fast',
      type: 'dc-ultra',
      guns: '4 / 4 Available',
      status: 'Rest Plaza Active',
      rate: '₹19 / kWh'
    }
  ];

  const filtered = sampleStations.filter((st) => {
    const matchesQuery =
      st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || st.type === filterType;
    return matchesQuery && matchesFilter;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        
        {/* Backdrop overlay with heavy blur */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_25px_70px_rgba(11,78,217,0.15)] flex flex-col max-h-[85vh] overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F5FAFF] border border-[#0B4ED9]/20 flex items-center justify-center text-[#0B4ED9]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-[#0F172A] tracking-tight">Find XOBOLT Charger</h3>
                <p className="text-xs font-mono text-slate-500 font-medium">Search 12,450+ active telemetry stations</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:text-[#0F172A] hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input & Filter Pills */}
          <div className="py-5 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city (e.g. Delhi, Mumbai, Bengaluru)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0B4ED9] focus:bg-white transition-all shadow-inner"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-[11px] font-mono no-scrollbar">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-full border font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  filterType === 'all'
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#0B4ED9]'
                }`}
              >
                All Stations
              </button>

              <button
                onClick={() => setFilterType('dc-ultra')}
                className={`px-4 py-2 rounded-full border font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  filterType === 'dc-ultra'
                    ? 'bg-[#0B4ED9] text-white border-[#0B4ED9] shadow-md'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#0B4ED9]'
                }`}
              >
                360kW Ultra-Fast
              </button>

              <button
                onClick={() => setFilterType('dc-fast')}
                className={`px-4 py-2 rounded-full border font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  filterType === 'dc-fast'
                    ? 'bg-[#0B4ED9] text-white border-[#0B4ED9] shadow-md'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#0B4ED9]'
                }`}
              >
                120kW Fast DC
              </button>

              <button
                onClick={() => setFilterType('ac-smart')}
                className={`px-4 py-2 rounded-full border font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  filterType === 'ac-smart'
                    ? 'bg-[#0B4ED9] text-white border-[#0B4ED9] shadow-md'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#0B4ED9]'
                }`}
              >
                22kW AC Destination
              </button>
            </div>
          </div>

          {/* Results List */}
          <div className="overflow-y-auto space-y-3 pr-1 py-1 no-scrollbar">
            {filtered.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs font-mono">
                No matching Xobolt charging stations found for "{searchQuery}".
              </div>
            ) : (
              filtered.map((st) => (
                <div
                  key={st.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0B4ED9]/40 hover:shadow-[0_10px_25px_rgba(11,78,217,0.08)] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F5FAFF] border border-[#0B4ED9]/20 text-[10px] font-mono text-[#0B4ED9] font-bold">
                        {st.power}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">{st.distance}</span>
                    </div>

                    <h4 className="text-base font-display font-bold text-[#0F172A] group-hover:text-[#0B4ED9] transition-colors">
                      {st.name}
                    </h4>

                    <p className="text-xs font-sans text-slate-500">
                      {st.address}
                    </p>

                    <div className="flex items-center gap-4 text-[11px] font-mono text-slate-600 pt-1">
                      <span className="text-[#0B4ED9] font-bold flex items-center gap-1">
                        <Zap size={12} /> {st.guns}
                      </span>
                      <span>Rate: {st.rate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => alert(`Starting navigation to ${st.name}`)}
                      className="px-5 py-2.5 rounded-full bg-[#0B4ED9] text-white font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_6px_16px_rgba(11,78,217,0.25)] hover:bg-[#083BB0] transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Navigate</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Bar */}
          <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0B4ED9] animate-pulse" />
              LIVE TELEMETRY ACTIVE
            </span>
            <button onClick={onClose} className="text-[#0B4ED9] hover:underline font-bold">Close</button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
