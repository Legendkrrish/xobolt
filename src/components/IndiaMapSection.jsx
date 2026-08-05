import React, { useState, useEffect } from 'react';
import { MapPin, Zap, Globe } from 'lucide-react';

export default function IndiaMapSection() {
  const [selectedHub, setSelectedHub] = useState('delhi');
  const [counters, setCounters] = useState({
    stations: 0,
    points: 0,
    drivers: 0,
    co2: 0,
  });

  const hubs = [
    {
      id: 'delhi',
      name: 'Delhi NCR Hub',
      coords: { x: 38, y: 32 },
      stations: 3420,
      points: 12800,
      status: 'Active High Power',
      corridors: ['Yamuna Expressway', 'Delhi-Jaipur NH48', 'Delhi-Agra']
    },
    {
      id: 'mumbai',
      name: 'Mumbai & Pune Corridor',
      coords: { x: 26, y: 58 },
      stations: 2890,
      points: 10400,
      status: 'Supercharged 360kW',
      corridors: ['Mumbai-Pune Expressway', 'NH48 Coastal', 'Samruddhi Mahamarg']
    },
    {
      id: 'bengaluru',
      name: 'Bengaluru Tech Belt',
      coords: { x: 37, y: 76 },
      stations: 2450,
      points: 9200,
      status: 'Grid-Connected Solar',
      corridors: ['Bengaluru-Mysuru Expressway', 'NH44 South', 'Electronic City']
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad Cyberabad',
      coords: { x: 42, y: 64 },
      stations: 1650,
      points: 5800,
      status: '24x7 Fleet Hub',
      corridors: ['Outer Ring Road', 'Hyderabad-Vijayawada', 'NH44']
    },
    {
      id: 'chennai',
      name: 'Chennai Auto Hub',
      coords: { x: 44, y: 78 },
      stations: 1120,
      points: 4200,
      status: 'Industrial Ultra-Fast',
      corridors: ['Chennai-Bengaluru Highway', 'ECR Coastal', 'Sriperumbudur']
    },
    {
      id: 'kolkata',
      name: 'Kolkata East Hub',
      coords: { x: 68, y: 48 },
      stations: 920,
      points: 2600,
      status: 'Smart Grid Active',
      corridors: ['Kolkata-Durgapur Expressway', 'NH16 East']
    }
  ];

  const targetMetrics = {
    stations: 12450,
    points: 45000,
    drivers: 1200000,
    co2: 380000
  };

  useEffect(() => {
    let frame;
    const duration = 2000;
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);

      setCounters({
        stations: Math.floor(targetMetrics.stations * eased),
        points: Math.floor(targetMetrics.points * eased),
        drivers: Math.floor(targetMetrics.drivers * eased),
        co2: Math.floor(targetMetrics.co2 * eased),
      });

      if (progress < 1) {
        frame = requestAnimationFrame(animateCounters);
      }
    };

    frame = requestAnimationFrame(animateCounters);
    return () => cancelAnimationFrame(frame);
  }, []);

  const activeHubData = hubs.find((h) => h.id === selectedHub) || hubs[0];

  return (
    <section id="india-map" className="relative py-28 bg-white border-y border-slate-200/80 overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-bold uppercase tracking-widest shadow-sm">
            <Globe className="w-3.5 h-3.5" />
            <span>PAN-INDIA COVERAGE NETWORK</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Powering India’s <span className="text-slate-500">Highways & Cities.</span>
          </h2>

          <p className="text-slate-600 font-sans text-base">
            From Kashmir to Kanyakumari, Xobolt's ultra-fast EV charging backbone connects metros, state highways, and industrial corridors.
          </p>
        </div>

        {/* Interactive Map & Side Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Map Canvas / SVG Column */}
          <div className="lg:col-span-7 apple-glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 relative min-h-[460px] flex items-center justify-center overflow-hidden shadow-sm">
            
            {/* Styled Stylized India Map SVG Silhouette */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">
              
              <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-sm" fill="none">
                {/* Simplified High-Tech India Contour Path */}
                <path
                  d="M 230,40 L 290,60 L 310,100 L 370,120 L 410,170 L 470,220 L 440,270 L 370,280 L 340,310 L 280,360 L 250,440 L 220,530 L 190,460 L 150,380 L 120,330 L 100,280 L 80,240 L 110,180 L 150,140 L 190,110 Z"
                  fill="rgba(248, 250, 252, 1)"
                  stroke="rgba(148, 163, 184, 0.4)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Animated Connection Beams between hubs */}
                <path
                  d="M 210,190 L 150,340 M 150,340 L 210,450 M 210,450 L 240,460 M 240,460 L 230,380 M 210,190 L 360,290"
                  stroke="#334155"
                  strokeWidth="1.5"
                  className="opacity-40"
                />
              </svg>

              {/* Interactive Pulsing Hub Pins overlaid on map */}
              {hubs.map((hub) => {
                const isSelected = selectedHub === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub.id)}
                    style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                  >
                    {/* Glowing outer pulse */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'w-10 h-10 -left-3 -top-3 bg-slate-200 blur-md animate-ping'
                          : 'w-6 h-6 -left-1 -top-1 bg-slate-100 blur-sm group-hover:scale-150'
                      }`}
                    />

                    {/* Pin Head */}
                    <div
                      className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isSelected
                          ? 'bg-slate-900 border-white shadow-md scale-125'
                          : 'bg-white border-slate-300 group-hover:border-slate-900'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-slate-400'}`} />
                    </div>

                    {/* Tooltip Label */}
                    <div
                      className={`absolute left-6 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md text-[11px] font-bold font-mono whitespace-nowrap transition-all duration-300 pointer-events-none ${
                        isSelected
                          ? 'bg-slate-900 border border-slate-800 text-white shadow-md opacity-100 scale-100'
                          : 'bg-white border border-slate-200 text-slate-500 opacity-80 group-hover:opacity-100 shadow-sm'
                      }`}
                    >
                      {hub.name}
                    </div>
                  </button>
                );
              })}

            </div>

          </div>

          {/* Hub Details & Highway Corridors Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Hub Card */}
            <div className="apple-glass-panel rounded-3xl p-8 border border-slate-200 space-y-6 shadow-md">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span>SELECTED REGION</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold text-slate-700">
                  {activeHubData.status}
                </span>
              </div>

              <h3 className="text-3xl font-display font-extrabold text-slate-900">
                {activeHubData.name}
              </h3>

              {/* Hub Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1">
                  <span className="text-xs font-sans font-bold text-slate-500 uppercase tracking-widest">Active Stations</span>
                  <p className="text-2xl font-mono font-bold text-slate-900">
                    {activeHubData.stations.toLocaleString()}+
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1">
                  <span className="text-xs font-sans font-bold text-slate-500 uppercase tracking-widest">Charge Guns</span>
                  <p className="text-2xl font-mono font-extrabold text-slate-700">
                    {activeHubData.points.toLocaleString()}+
                  </p>
                </div>
              </div>

              {/* Major Highway Corridors List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Major Electrified Expressways
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeHubData.corridors.map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-sans font-bold text-slate-600 flex items-center gap-1.5 shadow-sm"
                    >
                      <Zap className="w-3 h-3 text-slate-900" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Hub Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {hubs.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedHub(h.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-sans font-bold transition-all shadow-sm ${
                    selectedHub === h.id
                      ? 'bg-slate-900 text-white border-transparent'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {h.name.split(' ')[0]}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Live Counters Grid Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="apple-glass-panel rounded-3xl p-8 border border-slate-200 space-y-2 relative overflow-hidden group hover:border-slate-300 transition-all shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Charging Stations</span>
            <div className="text-4xl font-mono font-extrabold text-slate-900 group-hover:text-slate-700 transition-colors">
              {counters.stations.toLocaleString()}+
            </div>
            <p className="text-xs text-slate-500 font-sans font-medium">Public & Commercial Hubs</p>
          </div>

          <div className="apple-glass-panel rounded-3xl p-8 border border-slate-200 space-y-2 relative overflow-hidden group hover:border-slate-300 transition-all shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Charge Points</span>
            <div className="text-4xl font-mono font-extrabold text-slate-700">
              {counters.points.toLocaleString()}+
            </div>
            <p className="text-xs text-slate-500 font-sans font-medium">Active CCS2 & Type-2 Guns</p>
          </div>

          <div className="apple-glass-panel rounded-3xl p-8 border border-slate-200 space-y-2 relative overflow-hidden group hover:border-slate-300 transition-all shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Happy EV Drivers</span>
            <div className="text-4xl font-mono font-extrabold text-slate-900 transition-colors">
              {(counters.drivers / 1000000).toFixed(1)}M+
            </div>
            <p className="text-xs text-slate-500 font-sans font-medium">Seamless Charging Sessions</p>
          </div>

          <div className="apple-glass-panel rounded-3xl p-8 border border-slate-200 space-y-2 relative overflow-hidden group hover:border-slate-300 transition-all shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">CO₂ Abated</span>
            <div className="text-4xl font-mono font-extrabold text-slate-700">
              {(counters.co2 / 1000).toFixed(0)}k Tons
            </div>
            <p className="text-xs text-slate-500 font-sans font-medium">Clean Miles Powered</p>
          </div>

        </div>

      </div>
    </section>
  );
}
