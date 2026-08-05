import React, { useState } from 'react';
import { Cpu, ShieldAlert, Thermometer, Wind, Zap, Layers, Activity } from 'lucide-react';

export default function EngineeringSection() {
  const [activeComponentId, setActiveComponentId] = useState('cooling');

  const components = [
    {
      id: 'cooling',
      name: 'Liquid Cooling System',
      icon: Thermometer,
      coords: { x: 30, y: 25 },
      linePath: 'M 180,100 L 320,100',
      tagline: 'Dielectric Liquid Thermal Loop',
      details:
        'Active synthetic dielectric coolant circulation keeps liquid-cooled CCS2 charging cables and power connectors below 45°C even during continuous 360kW ultra-fast charging under +52°C tropical heat.',
      specs: [
        { label: 'Thermal Capacity', value: '12 kW Heat Dissipation' },
        { label: 'Coolant Type', value: 'Non-conductive Synthetic' },
        { label: 'Cable Weight Reduction', value: '40% Lighter' }
      ]
    },
    {
      id: 'sic-module',
      name: 'Silicon Carbide (SiC) Power Module',
      icon: Zap,
      coords: { x: 50, y: 45 },
      linePath: 'M 250,220 L 340,220',
      tagline: '96.8% Conversion Efficiency',
      details:
        'Next-gen SiC MOSFET semiconductors replace legacy IGBTs, providing 3x higher switching frequency, dramatically reduced heat generation, and whisper-quiet power conversion.',
      specs: [
        { label: 'Switching Frequency', value: '100 kHz' },
        { label: 'Peak Efficiency', value: '96.8%' },
        { label: 'Power Density', value: '45W / cu.inch' }
      ]
    },
    {
      id: 'pcb',
      name: 'Smart Core PCB & IoT Gateway',
      icon: Cpu,
      coords: { x: 35, y: 65 },
      linePath: 'M 200,320 L 300,320',
      tagline: 'Dual ARM Cortex + Dual SIM 4G',
      details:
        'Military-grade 8-layer PCB equipped with hardware Security Module (HSM), real-time grid harmonics monitoring, and automated cloud telemetry reporting at sub-80ms latency.',
      specs: [
        { label: 'Processor', value: 'Dual-Core ARM 1.8GHz' },
        { label: 'Security', value: 'ISO 15118 PKI Hardware' },
        { label: 'Cellular', value: 'Dual SIM Failover LTE' }
      ]
    },
    {
      id: 'safety',
      name: 'Multi-Tier Safety Circuits',
      icon: ShieldAlert,
      coords: { x: 65, y: 35 },
      linePath: 'M 350,150 L 420,150',
      tagline: 'Millisecond Emergency Shutdown',
      details:
        'Integrated Residual Current Devices (RCD), isolation monitoring (IMD), lighting surge arresters (SPD Type 1+2), and over-temperature sensors cut power in under 10 milliseconds during fault events.',
      specs: [
        { label: 'Trip Latency', value: '< 10 ms' },
        { label: 'Surge Rating', value: '40 kA (8/20 µs)' },
        { label: 'Isolation Check', value: 'Continuous IMD' }
      ]
    },
    {
      id: 'weather',
      name: 'IP65 & IK10 All-Weather Shield',
      icon: Wind,
      coords: { x: 60, y: 75 },
      linePath: 'M 320,380 L 410,380',
      tagline: 'Monsoon & Dust Protection',
      details:
        'Heavy-gauge galvanized steel body coated with anti-corrosive polyurethane powder coating designed for seaside salinity, dust storms, and torrential Indian monsoons.',
      specs: [
        { label: 'Ingress Protection', value: 'IP65 Sealed' },
        { label: 'Impact Protection', value: 'IK10 Vandal-Proof' },
        { label: 'Salt Spray Rating', value: '1500 Hours ASTM B117' }
      ]
    }
  ];

  const activeComp = components.find((c) => c.id === activeComponentId) || components[0];
  const ActiveIcon = activeComp.icon;

  return (
    <section id="engineering" className="relative py-28 bg-[#070A0F] border-t border-slate-900 overflow-hidden">
      
      {/* Soft Blue Radial Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#38FF7A] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>SECTION 05 — HARDWARE DECONSTRUCTION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Don’t Take Quality For Granted. <br />
              <span className="text-gradient-electric">Inspect The Engineering.</span>
            </h2>
          </div>

          <p className="text-slate-400 font-sans text-sm max-w-md">
            Hover over any internal component to explore Xobolt’s high-power hardware layout, thermal management loop, and safety architecture.
          </p>
        </div>

        {/* Interactive Exploded View Diagram & Detail Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Exploded Hardware Canvas / SVG Blueprint Column */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 relative min-h-[500px] flex items-center justify-center overflow-hidden">
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="relative w-full max-w-[480px] aspect-[4/5] flex items-center justify-center">
              
              {/* Exploded Hardware Diagram SVG Layer */}
              <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_20px_rgba(56,255,122,0.2)]" fill="none">
                
                {/* Background exploded frame layers */}
                <rect x="140" y="60" width="220" height="380" rx="20" fill="rgba(14, 19, 31, 0.8)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
                <rect x="160" y="80" width="180" height="340" rx="14" fill="rgba(7, 10, 15, 0.9)" stroke="rgba(56, 255, 122, 0.2)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Animated Connecting SVG Line to active component */}
                <path
                  d={activeComp.linePath}
                  stroke="#38FF7A"
                  strokeWidth="2"
                  className="animate-energy-flow"
                />
                
                {/* Internal Component Wireframe Visuals */}
                {/* 1. Cooling Reservoir */}
                <rect x="180" y="90" width="140" height="50" rx="8" fill="#182234" stroke={activeComponentId === 'cooling' ? '#38FF7A' : '#334155'} strokeWidth="2" />
                {/* 2. SiC Modules */}
                <rect x="180" y="155" width="140" height="75" rx="8" fill="#182234" stroke={activeComponentId === 'sic-module' ? '#00E5FF' : '#334155'} strokeWidth="2" />
                {/* 3. Smart Core PCB */}
                <rect x="180" y="245" width="140" height="60" rx="8" fill="#182234" stroke={activeComponentId === 'pcb' ? '#38FF7A' : '#334155'} strokeWidth="2" />
                {/* 4. Safety Circuits */}
                <rect x="180" y="320" width="140" height="40" rx="8" fill="#182234" stroke={activeComponentId === 'safety' ? '#00E5FF' : '#334155'} strokeWidth="2" />
                {/* 5. Outer Weather Shell */}
                <rect x="180" y="375" width="140" height="35" rx="8" fill="#182234" stroke={activeComponentId === 'weather' ? '#38FF7A' : '#334155'} strokeWidth="2" />

              </svg>

              {/* Component Hotspots */}
              {components.map((comp) => {
                const isSelected = activeComponentId === comp.id;
                const Icon = comp.icon;
                return (
                  <button
                    key={comp.id}
                    onMouseEnter={() => setActiveComponentId(comp.id)}
                    onClick={() => setActiveComponentId(comp.id)}
                    style={{ left: `${comp.coords.x}%`, top: `${comp.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group focus:outline-none"
                  >
                    {/* Hotspot Ring */}
                    <div
                      className={`relative p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                        isSelected
                          ? 'bg-[#38FF7A] text-black border-white shadow-[0_0_25px_#38FF7A] scale-110'
                          : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-[#38FF7A] hover:text-[#38FF7A]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[11px] font-mono font-bold whitespace-nowrap hidden sm:inline">
                        {comp.name.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}

            </div>

          </div>

          {/* Right Active Hardware Breakdown Panel Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6 relative overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#38FF7A]">
                  <ActiveIcon className="w-4 h-4" />
                  <span>ACTIVE COMPONENT</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#38FF7A]/10 border border-[#38FF7A]/30 text-[11px] font-mono text-[#38FF7A]">
                  {activeComp.tagline}
                </span>
              </div>

              <h3 className="text-3xl font-display font-bold text-white">
                {activeComp.name}
              </h3>

              <p className="text-slate-300 font-sans text-sm leading-relaxed">
                {activeComp.details}
              </p>

              {/* Hardware Specs Grid */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                {activeComp.specs.map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-800/60 text-xs sm:text-sm">
                    <span className="text-slate-400 font-sans">{s.label}</span>
                    <span className="text-[#38FF7A] font-mono font-bold">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Diagnostic Status Indicator */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Activity className="w-4 h-4 text-[#38FF7A] animate-pulse" />
                  <span>INTEGRITY TELEMETRY</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#38FF7A]">PASS 100%</span>
              </div>

            </div>

            {/* Quick Component Selector List */}
            <div className="flex flex-wrap gap-2">
              {components.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveComponentId(c.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-sans font-medium transition-all ${
                    activeComponentId === c.id
                      ? 'bg-[#38FF7A] text-black font-bold shadow-[0_0_15px_rgba(56,255,122,0.4)]'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
