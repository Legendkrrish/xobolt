import React, { useState } from 'react';
import { Zap, Cpu, Network, Headphones, Flag, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function WhyXobolt() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      id: 'fast-charging',
      icon: Zap,
      title: 'Fast Charging',
      badge: '360kW Liquid Cooled',
      heading: 'From 10% to 80% Battery in Under 15 Minutes.',
      description:
        'Engineered with Silicon Carbide (SiC) power electronics and liquid-cooled cable management, Xobolt chargers deliver uninterrupted ultra-high power output without thermal throttling even under peak ambient temperatures.',
      metrics: [
        { label: 'Max Output', value: '360 kW' },
        { label: 'Voltage Range', value: '150V - 1000V' },
        { label: 'Efficiency', value: '96.8%' }
      ],
      color: 'from-[#38FF7A]/20 to-transparent',
      borderColor: '#38FF7A'
    },
    {
      id: 'smart-software',
      icon: Cpu,
      title: 'Smart Software',
      badge: 'OCPP 2.0.1 Cloud OS',
      heading: 'AI-Driven Energy Balancing & Predictive Maintenance.',
      description:
        'Our proprietary IoT OS continuously monitors grid fluctuations, optimizes peak-shaving, balances local solar microgrids, and runs automated self-healing firmware updates over-the-air.',
      metrics: [
        { label: 'Response Latency', value: '< 80ms' },
        { label: 'Protocol', value: 'OCPP 2.0.1' },
        { label: 'Fleet Integration', value: 'REST API' }
      ],
      color: 'from-[#00E5FF]/20 to-transparent',
      borderColor: '#00E5FF'
    },
    {
      id: 'reliable-network',
      icon: Network,
      title: 'Reliable Network',
      badge: '99.98% High Availability',
      heading: 'Zero Downtime Architecture built for India’s Highways.',
      description:
        'Dual-cellular SIM failover, internal battery backup for cloud telemetry, and military-grade hardware enclosures protect every Xobolt charger from dust, water, surge strikes, and power spikes.',
      metrics: [
        { label: 'Network Uptime', value: '99.98%' },
        { label: 'Enclosure Rating', value: 'IP65 & IK10' },
        { label: 'Redundant Power', value: 'Dual Modular' }
      ],
      color: 'from-[#38FF7A]/20 to-transparent',
      borderColor: '#38FF7A'
    },
    {
      id: 'support-247',
      icon: Headphones,
      title: '24x7 Support',
      badge: 'Pan-India SLA',
      heading: '2-Hour Emergency On-Site Service SLA Across 500+ Cities.',
      description:
        'Our centralized Network Operations Command Center (NOCC) monitors every charge point 24 hours a day, 365 days a year. Rapid response engineering teams are stationed across all major highway corridors.',
      metrics: [
        { label: 'Command Center', value: '24/7/365 Live' },
        { label: 'Dispatch SLA', value: '< 2 Hours' },
        { label: 'Remote Diagnostics', value: '94% Fixed' }
      ],
      color: 'from-[#00E5FF]/20 to-transparent',
      borderColor: '#00E5FF'
    },
    {
      id: 'indian-manufacturing',
      icon: Flag,
      title: 'Indian Manufacturing',
      badge: 'Atmanirbhar EV Infrastructure',
      heading: 'Designed & Manufactured in India for Indian Conditions.',
      description:
        'Built to withstand +52°C peak summer heat, monsoon humidity, grid voltage drops, and high dust index. 100% indigenous R&D based out of Bengaluru and Gurgaon mega-factories.',
      metrics: [
        { label: 'Indigenous Content', value: '88% R&D' },
        { label: 'Thermal Rating', value: '+55°C Tested' },
        { label: 'Factories', value: 'Bengaluru & GGN' }
      ],
      color: 'from-[#38FF7A]/20 to-transparent',
      borderColor: '#38FF7A'
    }
  ];

  const current = pillars[activeStep];
  const IconComponent = current.icon;

  return (
    <section id="why-xobolt" className="relative py-28 bg-[#070A0F] overflow-hidden border-t border-slate-900">
      
      {/* Dynamic Background Glow according to active pillar */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] transition-all duration-700 pointer-events-none bg-gradient-to-tr ${current.color}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#38FF7A] mb-4">
              <span>SECTION 02 — ARCHITECTURE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Why Xobolt is <span className="text-[#38FF7A]">Unmatched.</span>
            </h2>
          </div>
          <p className="text-slate-400 font-sans text-sm max-w-md">
            We don't just assemble chargers. We engineer high-reliability power electronics and smart software ground-up for the Indian EV ecosystem.
          </p>
        </div>

        {/* Storytelling Tabs Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none mb-12">
          {pillars.map((item, idx) => {
            const ItemIcon = item.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl border text-sm font-display font-semibold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-900/90 border-[#38FF7A] text-white shadow-[0_0_25px_rgba(56,255,122,0.25)] scale-[1.02]'
                    : 'bg-[#0E131F]/50 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <ItemIcon className={`w-4 h-4 ${isActive ? 'text-[#38FF7A]' : 'text-slate-500'}`} />
                <span>{item.title}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#38FF7A] animate-ping" />}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Storytelling Showcase Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-mono text-[#38FF7A]">
                <IconComponent className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                {current.heading}
              </h3>

              <p className="text-slate-300 font-sans text-base leading-relaxed">
                {current.description}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                {current.metrics.map((m, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#38FF7A]">
                      {m.value}
                    </span>
                    <p className="text-xs text-slate-400 font-sans">{m.label}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Interactive Motion Graphics Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px]">
              
              {/* Radial Graphic Backdrop */}
              <div className="relative w-full h-full bg-[#0B0F17] rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    SYSTEM STATUS — ONLINE
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38FF7A] animate-pulse" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  </div>
                </div>

                {/* Animated Graphic Element */}
                <div className="my-8 flex flex-col items-center justify-center relative">
                  <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-[#38FF7A]/40 flex items-center justify-center animate-[spin_12s_linear_infinite]">
                    <div className="w-24 h-24 rounded-full border border-slate-700 bg-slate-900/80 flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-[#38FF7A]" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-40 h-40 rounded-full bg-[#38FF7A]/10 blur-xl animate-pulse" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-slate-800/60">
                  <span>TELEMETRY: OPTIMAL</span>
                  <span className="text-[#38FF7A] font-bold">XOBOLT FAST-OS</span>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Progress Bar */}
          <div className="mt-10 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#38FF7A] to-[#00E5FF] transition-all duration-500"
              style={{ width: `${((activeStep + 1) / pillars.length) * 100}%` }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
