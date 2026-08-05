import React, { useState, useEffect } from 'react';
import { Zap, BatteryCharging, Shield, Check, ArrowRight, RotateCw, SlidersHorizontal, ChevronRight, X } from 'lucide-react';

export default function ProductShowcase() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(20);
  const [isComparing, setIsComparing] = useState(false);

  const products = [
    {
      id: 'hypercharge-ultra',
      name: 'Xobolt HyperCharge Ultra',
      category: 'HIGHWAY & ULTRA-FAST FLEET',
      power: '240kW - 360kW DC',
      speedTime: '12 Mins (10-80%)',
      connectors: 'Dual CCS2 Liquid Cooled',
      efficiency: '96.8%',
      description: 'The pinnacle of EV charging engineering. Built for highway plazas and heavy transit fleets needing maximum power throughput.',
      specs: [
        { key: 'Input Voltage', value: '380V - 480V 3-Phase' },
        { key: 'Output Voltage', value: '150V - 1000V DC' },
        { key: 'Cable Management', value: 'Motorized Liquid-Cooled' },
        { key: 'Protection', value: 'IP65 / IK10 Outdoor Rated' },
        { key: 'Display', value: '15.6" Ultra-Bright Touchscreen' }
      ],
      color: '#38FF7A',
      imageGradient: 'from-[#38FF7A]/20 via-[#0E131F] to-[#070A0F]'
    },
    {
      id: 'fastx-highway',
      name: 'Xobolt FastX Highway',
      category: 'COMMERCIAL FAST DC',
      power: '60kW - 120kW DC',
      speedTime: '25 Mins (10-80%)',
      connectors: 'Dual CCS2 Air Cooled',
      efficiency: '95.5%',
      description: 'Versatile dual-gun DC fast charger engineered for shopping malls, hotels, fuel stations, and urban fast-charging hubs.',
      specs: [
        { key: 'Input Voltage', value: '415V AC ± 15%' },
        { key: 'Output Voltage', value: '200V - 750V DC' },
        { key: 'Grid Load Balance', value: 'Dynamic Smart Sharing' },
        { key: 'Protection', value: 'IP55 / Surge Class II' },
        { key: 'Display', value: '10.1" Rugged Touch Interface' }
      ],
      color: '#00E5FF',
      imageGradient: 'from-[#00E5FF]/20 via-[#0E131F] to-[#070A0F]'
    },
    {
      id: 'commercial-pro',
      name: 'Xobolt Commercial Pro',
      category: 'WORKPLACE & RETAIL AC',
      power: '22kW AC Dual',
      speedTime: '3.5 Hours (10-100%)',
      connectors: 'Dual Type-2 Sockets',
      efficiency: '99.1%',
      description: 'Compact dual-point AC charging pillar designed for corporate parks, residential societies, and hospitality destinations.',
      specs: [
        { key: 'Input Voltage', value: '400V 3-Phase 32A' },
        { key: 'Authentication', value: 'RFID, QR, Plug & Charge' },
        { key: 'Billing Integration', value: 'OCPP 1.6J / 2.0.1 Cloud' },
        { key: 'Protection', value: 'RCD Type A + 6mA DC' },
        { key: 'Mounting', value: 'Pedestal / Wall Mount' }
      ],
      color: '#38FF7A',
      imageGradient: 'from-[#38FF7A]/20 via-[#0E131F] to-[#070A0F]'
    },
    {
      id: 'homeflex',
      name: 'Xobolt HomeFlex',
      category: 'RESIDENTIAL SMART HOME',
      power: '7.4kW - 22kW AC',
      speedTime: '4 - 7 Hours',
      connectors: 'Single Type-2 Tethered',
      efficiency: '99.4%',
      description: 'Sleek, aluminum-clad home EV charger with solar microgrid integration, scheduled off-peak charging, and mobile app control.',
      specs: [
        { key: 'Input Voltage', value: '230V Single / 400V 3-Phase' },
        { key: 'Connectivity', value: 'Wi-Fi, Bluetooth, 4G, Matter' },
        { key: 'Solar Integration', value: 'Eco Solar Matching Mode' },
        { key: 'Protection', value: 'IP65 All-Weather Sealed' },
        { key: 'Cable Length', value: '7.5 Meters Premium Cable' }
      ],
      color: '#00E5FF',
      imageGradient: 'from-[#00E5FF]/20 via-[#0E131F] to-[#070A0F]'
    }
  ];

  const currentProd = products[selectedProductIndex];

  // Battery percentage animation effect
  useEffect(() => {
    setBatteryLevel(15);
    const interval = setInterval(() => {
      setBatteryLevel((prev) => {
        if (prev >= 98) return 15;
        return prev + 2;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [selectedProductIndex]);

  return (
    <section id="products" className="relative py-28 bg-[#070A0F] border-t border-slate-900 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(56,255,122,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#38FF7A] mb-4">
              <span>SECTION 04 — HARDWARE SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Engineered for <span className="text-[#38FF7A]">Extreme Performance.</span>
            </h2>
          </div>

          {/* Comparison Trigger Button */}
          <button
            onClick={() => setIsComparing(true)}
            className="px-5 py-2.5 rounded-full glass-panel border border-slate-700 text-xs font-mono text-white flex items-center gap-2 hover:border-[#38FF7A] hover:text-[#38FF7A] transition-all"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#38FF7A]" />
            <span>Compare All Models</span>
          </button>
        </div>

        {/* Product Selector Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {products.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedProductIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                selectedProductIndex === idx
                  ? 'bg-slate-900 border-[#38FF7A] shadow-[0_0_20px_rgba(56,255,122,0.2)]'
                  : 'bg-[#0E131F]/40 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-white'
              }`}
            >
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                {p.category.split(' ')[0]}
              </span>
              <p className="font-display font-bold text-sm text-white truncate">
                {p.name.replace('Xobolt ', '')}
              </p>
              <span className="text-xs font-mono text-[#38FF7A] mt-2 block font-semibold">
                {p.power}
              </span>
            </button>
          ))}
        </div>

        {/* Main Product Showcase Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 3D Charger Visual Column */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
              
              {/* Charger Image Card Box */}
              <div className={`w-full aspect-[4/3] rounded-3xl bg-gradient-to-b ${currentProd.imageGradient} border border-slate-800/80 p-8 flex flex-col items-center justify-between relative overflow-hidden shadow-2xl`}>
                
                {/* Product Badge */}
                <div className="w-full flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono text-[#38FF7A]">
                    {currentProd.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Interactive View</span>
                  </div>
                </div>

                {/* 3D Charger Render Mockup */}
                <div className="my-4 relative w-44 h-64 sm:w-52 sm:h-72 flex items-center justify-center group">
                  
                  {/* Outer glowing aura */}
                  <div className="absolute inset-0 rounded-3xl bg-[#38FF7A]/15 blur-2xl group-hover:bg-[#38FF7A]/30 transition-all duration-500" />

                  {/* Charger Casing Graphics */}
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#182234] via-[#0E131F] to-[#070A0F] border-2 border-slate-700 shadow-2xl flex flex-col items-center p-4 justify-between">
                    
                    {/* Top Status Light */}
                    <div className="w-full h-2 rounded-full bg-[#38FF7A] shadow-[0_0_12px_#38FF7A] animate-pulse" />

                    {/* Digital Screen */}
                    <div className="w-full h-28 rounded-xl bg-black border border-slate-800 p-3 flex flex-col items-center justify-center gap-1 text-center">
                      <Zap className="w-5 h-5 text-[#38FF7A]" />
                      <span className="text-[10px] font-mono text-slate-400">ACTIVE SESSION</span>
                      <span className="text-xl font-mono font-bold text-white">{batteryLevel}%</span>
                    </div>

                    {/* Cable Docking Point */}
                    <div className="w-16 h-10 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#38FF7A]/20 border border-[#38FF7A] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#38FF7A]" />
                      </div>
                    </div>

                  </div>

                </div>

                {/* Simulated Battery Charging Speed Fill Animation */}
                <div className="w-full bg-slate-900/90 rounded-2xl p-4 border border-slate-800 z-10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <BatteryCharging className="w-4 h-4 text-[#38FF7A]" />
                      SIMULATED CHARGE SPEED
                    </span>
                    <span className="text-[#38FF7A] font-bold">{batteryLevel}% CHARGED</span>
                  </div>

                  {/* Battery Bar */}
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#38FF7A] to-[#00E5FF] transition-all duration-300"
                      style={{ width: `${batteryLevel}%` }}
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* Right Product Specs Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#38FF7A] uppercase tracking-widest">
                  HARDWARE SPECIFICATIONS
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                  {currentProd.name}
                </h3>
                <p className="text-slate-300 font-sans text-sm leading-relaxed">
                  {currentProd.description}
                </p>
              </div>

              {/* Specs Table List */}
              <div className="space-y-3 pt-2">
                {currentProd.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2.5 border-b border-slate-800/80 text-xs sm:text-sm font-sans"
                  >
                    <span className="text-slate-400 font-medium">{spec.key}</span>
                    <span className="text-white font-mono font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button className="px-6 py-3.5 rounded-full bg-[#38FF7A] text-black font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(56,255,122,0.4)] hover:shadow-[0_0_35px_rgba(56,255,122,0.8)] transition-all">
                  <span>Download Spec Datasheet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsComparing(true)}
                  className="px-6 py-3.5 rounded-full glass-panel border border-slate-700 text-xs font-sans text-white hover:border-[#38FF7A] hover:text-[#38FF7A] transition-all"
                >
                  <span>Compare with others</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Comparison Drawer Modal */}
      {isComparing && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
          <div className="glass-panel w-full max-w-5xl rounded-3xl p-6 sm:p-8 border border-slate-700 max-h-[90vh] overflow-y-auto relative space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Xobolt Product Comparison Matrix</h3>
                <p className="text-xs font-sans text-slate-400">Detailed side-by-side technical specs</p>
              </div>
              <button
                onClick={() => setIsComparing(false)}
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="py-3 px-4">Feature</th>
                    {products.map((p) => (
                      <th key={p.id} className="py-3 px-4 text-[#38FF7A] font-bold">
                        {p.name.replace('Xobolt ', '')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Power Rating</td>
                    {products.map((p) => (
                      <td key={p.id} className="py-3 px-4 font-mono">{p.power}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Charging Speed</td>
                    {products.map((p) => (
                      <td key={p.id} className="py-3 px-4">{p.speedTime}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Connectors</td>
                    {products.map((p) => (
                      <td key={p.id} className="py-3 px-4">{p.connectors}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Efficiency</td>
                    {products.map((p) => (
                      <td key={p.id} className="py-3 px-4 font-mono">{p.efficiency}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Primary Use Case</td>
                    {products.map((p) => (
                      <td key={p.id} className="py-3 px-4">{p.category}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setIsComparing(false)}
                className="px-6 py-2.5 rounded-full bg-[#38FF7A] text-black font-bold text-xs uppercase"
              >
                Close Comparison
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
