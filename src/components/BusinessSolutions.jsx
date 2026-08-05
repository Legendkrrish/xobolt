import React, { useState } from 'react';
import { Building2, ShoppingBag, Truck, Home, Briefcase, Compass, ArrowRight, Zap, CheckCircle } from 'lucide-react';

export default function BusinessSolutions() {
  const [selectedSegmentId, setSelectedSegmentId] = useState('fleets');

  const segments = [
    {
      id: 'hotels',
      name: 'Hotels & Resorts',
      icon: Building2,
      tagline: '5-Star Guest Charging Amenities',
      description: 'Offer destination charging to luxury EV travelers. Increase dwell time, boost food & beverage revenue, and list on premium EV navigation apps.',
      features: ['Automated Guest Tariffing', 'Valet RFID Charging Cards', 'Solar-Power Integration']
    },
    {
      id: 'malls',
      name: 'Malls & Retail Plazas',
      icon: ShoppingBag,
      tagline: 'High Dwell Time Monetization',
      description: 'Turn your retail parking bays into high-margin revenue hubs with dual-point fast chargers that attract premium EV shoppers.',
      features: ['Dynamic Advertising Screens', 'Merchant Loyalty Rewards', 'Peak Hour Surge Tariffing']
    },
    {
      id: 'fleets',
      name: 'Commercial Fleet Depots',
      icon: Truck,
      tagline: 'Zero-Downtime Logistics & Transit',
      description: 'High-power DC fast charging depots engineered for e-commerce delivery vans, corporate cab fleets, and municipal electric buses.',
      features: ['Sub-80ms Automated Billing', 'Automated Fleet Schedule Sync', '360kW Ultra-Fast Chargers']
    },
    {
      id: 'societies',
      name: 'Residential Societies (RWAs)',
      icon: Home,
      tagline: 'Smart Apartment Parking Infrastructure',
      description: 'Hassle-free shared charging for multi-dwelling apartment complexes with automated individual meter billing and zero RWA liability.',
      features: ['Individual App Billing', 'Grid Phase Balancing', '24x7 RWA Helpline']
    },
    {
      id: 'offices',
      name: 'Corporate Office Parks',
      icon: Briefcase,
      tagline: 'Workplace Charging & ESG Reporting',
      description: 'Demonstrate corporate sustainability leadership with smart employee charging stations linked to automated carbon footprint analytics.',
      features: ['Employee Badge RFID Access', 'Corporate ESG Reports', 'Peak-Shaving Energy OS']
    },
    {
      id: 'highways',
      name: 'Highway Plazas & Fuel Stations',
      icon: Compass,
      tagline: 'Intercity Expressway Corridors',
      description: 'Deploy 240kW to 360kW liquid-cooled charging plazas on high-speed expressways to capture lucrative intercity transit traffic.',
      features: ['Liquid Cooled Ultra Fast', 'Rest Stop Revenue Share', 'Solar Microgrid Ready']
    }
  ];

  const activeSegment = segments.find((s) => s.id === selectedSegmentId) || segments[0];
  const SegmentIcon = activeSegment.icon;

  return (
    <section id="solutions" className="relative py-28 bg-white border-y border-slate-200/80 overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold uppercase tracking-widest text-slate-700 mb-4 shadow-sm">
              <Briefcase className="w-3.5 h-3.5" />
              <span>SECTION 07 — ENTERPRISE ECOSYSTEM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Turn Parking Spaces Into <br />
              <span className="text-slate-500">Revenue Engines.</span>
            </h2>
          </div>

          <p className="text-slate-600 font-sans text-sm max-w-md leading-relaxed">
            Tailored turn-key EV infrastructure solutions for hospitality, retail, commercial fleets, residential complexes, and highway concessions.
          </p>
        </div>

        {/* Grid of 6 Segment Cards (Buildings Light Up on Hover) */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-12">
          {segments.map((seg) => {
            const Icon = seg.icon;
            const isSelected = selectedSegmentId === seg.id;
            return (
              <button
                key={seg.id}
                onClick={() => setSelectedSegmentId(seg.id)}
                className={`p-5 rounded-2xl border flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md scale-[1.03]'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected ? 'bg-white text-slate-900 shadow-sm' : 'bg-slate-50 text-slate-400 border border-slate-200'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-display font-bold leading-tight">
                  {seg.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Segment Interactive Ecosystem Showcase */}
        <div className="apple-glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 relative overflow-hidden transition-all duration-500 shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Ecosystem Visual Graphic with Animated Energy Stream */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  DYNAMIC SMART GRID STREAM
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-mono font-bold text-slate-500 shadow-sm">
                  BUILDING STATUS: ELECTRIFIED
                </span>
              </div>

              {/* Vector Building Graphic with Flowing Lines */}
              <div className="my-auto relative flex items-center justify-center">
                
                <svg viewBox="0 0 400 240" className="w-full h-full" fill="none">
                  {/* Building Outline */}
                  <path
                    d="M 60,200 L 60,60 L 160,40 L 160,200 Z M 160,200 L 160,90 L 260,80 L 260,200 Z"
                    fill="rgba(248, 250, 252, 1)"
                    stroke="#94a3b8"
                    strokeWidth="2"
                  />

                  {/* Lit Windows */}
                  <rect x="80" y="80" width="20" height="20" rx="3" fill="#0f172a" opacity="0.9" />
                  <rect x="120" y="80" width="20" height="20" rx="3" fill="#cbd5e1" opacity="0.8" />
                  <rect x="80" y="120" width="20" height="20" rx="3" fill="#0f172a" opacity="0.9" />
                  <rect x="120" y="120" width="20" height="20" rx="3" fill="#0f172a" opacity="0.9" />
                  <rect x="180" y="110" width="20" height="20" rx="3" fill="#cbd5e1" opacity="0.8" />
                  <rect x="220" y="110" width="20" height="20" rx="3" fill="#0f172a" opacity="0.9" />

                  {/* Flowing Energy Stream Line to Charger */}
                  <path
                    d="M 260,180 L 320,180 L 320,200"
                    stroke="#0f172a"
                    strokeWidth="3"
                  />

                  {/* EV Charger Icon at Ground */}
                  <rect x="305" y="170" width="30" height="40" rx="6" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
                  <circle cx="320" cy="185" r="4" fill="#0f172a" />
                </svg>

              </div>

              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500 z-10 pt-2 border-t border-slate-100">
                <span>SEGMENT: {activeSegment.name.toUpperCase()}</span>
                <span className="text-slate-900">REVENUE SHARE READY</span>
              </div>

            </div>

            {/* Right Segment Text Details */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 shadow-sm">
                  <SegmentIcon className="w-3.5 h-3.5" />
                  <span>{activeSegment.tagline}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
                  {activeSegment.name} Solutions
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  {activeSegment.description}
                </p>
              </div>

              {/* Core Solution Features List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest block">
                  COMMERCIAL FEATURES & ADVANTAGES
                </span>
                {activeSegment.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-sans font-medium text-slate-700 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-slate-900" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button className="apple-btn-black px-7 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-3">
                  <span>Request Business Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
