import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Check, Download, ChevronRight, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSpecModel, setActiveSpecModel] = useState(null);

  const productCatalog = [
    {
      id: 'xb-ac-7',
      name: 'Xobolt XB AC 7.4kW',
      series: 'XB AC Series',
      category: 'ac',
      type: 'Single Phase Smart Home AC',
      power: '7.4 kW AC',
      output: '230V 32A 1-Phase',
      speed: '5 - 7 Hours',
      connectors: 'Type-2 Tethered (7.5m Cable)',
      efficiency: '99.4%',
      features: ['Solar Microgrid Matching', 'Wi-Fi / RFID / App Control', 'IP65 Outdoor Sealed', 'Dynamic Phase Load Balance'],
      tagline: 'Ideal for Single-Family Homes & Apartments',
      image: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
      badgeColor: 'border-[#0B4ED9]/20 text-[#0B4ED9] bg-[#F5FAFF]'
    },
    {
      id: 'xb-ac-22',
      name: 'Xobolt XB AC 22kW Dual',
      series: 'XB AC Series',
      category: 'ac',
      type: 'Three Phase Commercial AC',
      power: '22 kW AC Dual',
      output: '400V 32A 3-Phase',
      speed: '3 - 4 Hours',
      connectors: 'Dual Type-2 Sockets',
      efficiency: '99.2%',
      features: ['Dual Point Concurrent Charge', 'OCPP 2.0.1 Cloud Billing', 'RFID & Mobile QR Access', 'RCD Type A + 6mA DC Protection'],
      tagline: 'Built for Corporate Parks, Hotels & Malls',
      image: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
      badgeColor: 'border-[#0B4ED9]/20 text-[#0B4ED9] bg-[#F5FAFF]'
    },
    {
      id: 'xb-rapid-60',
      name: 'Xobolt XB RAPID 60kW',
      series: 'XB RAPID Series',
      category: 'rapid',
      type: 'Commercial DC Fast Charger',
      power: '60 kW DC',
      output: '200V - 750V DC',
      speed: '35 Mins (10-80%)',
      connectors: 'Dual CCS2 Air Cooled',
      efficiency: '95.8%',
      features: ['Dual Gun Dynamic Load Sharing', '10.1" Rugged Touch Screen', '24/7 Cloud NOCC Telemetry', 'Dual SIM LTE Failover'],
      tagline: 'Workhorse Charger for Urban Hubs & Taxi Depots',
      image: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
      badgeColor: 'border-[#0B4ED9]/30 text-[#0B4ED9] bg-[#F5FAFF]'
    },
    {
      id: 'xb-rapid-80',
      name: 'Xobolt XB RAPID 80kW',
      series: 'XB RAPID Series',
      category: 'rapid',
      type: 'Commercial Heavy DC Fast Charger',
      power: '80 kW DC',
      output: '200V - 750V DC',
      speed: '28 Mins (10-80%)',
      connectors: 'Dual CCS2 Air Cooled',
      efficiency: '96.2%',
      features: ['Silicon Carbide Power Module', 'Automated Tariff Engine', 'IP55 / IK10 Vandal Proof', 'Over-the-Air Firmware Updates'],
      tagline: 'High Throughput Charging for Commercial Plazas',
      image: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
      badgeColor: 'border-[#0B4ED9]/30 text-[#0B4ED9] bg-[#F5FAFF]'
    },
    {
      id: 'xb-rapid-plus-120',
      name: 'Xobolt XB RAPID+ 120kW',
      series: 'XB RAPID+ Series',
      category: 'rapid-plus',
      type: 'Highway High-Power DC',
      power: '120 kW DC',
      output: '150V - 1000V DC',
      speed: '20 Mins (10-80%)',
      connectors: 'Dual CCS2 Heavy Duty',
      efficiency: '96.5%',
      features: ['Ultra-Wide 1000V Output', 'High-Frequency SiC Inverter', 'Integrated Energy Metering', '15.6" Daylight Touch Display'],
      tagline: 'Engineered for Intercity Highway Corridors',
      image: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
      badgeColor: 'border-[#0B4ED9]/30 text-[#0B4ED9] bg-[#F5FAFF]'
    },
    {
      id: 'xb-rapid-plus-360',
      name: 'Xobolt XB RAPID+ 360kW Ultra',
      series: 'XB RAPID+ Series',
      category: 'rapid-plus',
      type: 'Liquid Cooled Hypercharger',
      power: '360 kW DC',
      output: '150V - 1000V DC',
      speed: '12 Mins (10-80%)',
      connectors: 'Motorized Liquid-Cooled CCS2',
      efficiency: '96.8%',
      features: ['Synthetic Dielectric Liquid Loop', 'Zero Thermal Throttling', 'Sub-80ms OCPP Handshake', 'BESS Battery Microgrid Sync'],
      tagline: 'Flagship Hypercharger for Heavy Fleets & Highways',
      image: 'https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png',
      badgeColor: 'border-[#0B4ED9] text-[#0B4ED9] bg-[#F5FAFF]'
    }
  ];

  const filteredProducts = productCatalog.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-white text-[#0F172A] min-h-screen relative overflow-x-clip font-sans selection:bg-[#0B4ED9] selection:text-white">
        
        {/* Soft Ambient Radial Backdrop */}
        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#EBF2FF] via-[#F5FAFF]/40 to-transparent blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
                Hardware Product Portfolio
              </span>
              <h1 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] tracking-tight leading-tight">
                XOBOLT Charger <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
                  Hardware Lineup.
                </span>
              </h1>
            </div>
            <p className="text-slate-600 font-sans text-sm md:text-base max-w-md leading-relaxed">
              From smart home 7.4kW AC chargers to 360kW liquid-cooled highway hyperchargers. Designed and manufactured in India by XOBOLT.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar font-mono text-xs"
          >
            {[
              { id: 'all', label: `All Products (${productCatalog.length})` },
              { id: 'ac', label: 'XB AC Series (Home & Commercial)' },
              { id: 'rapid', label: 'XB RAPID Series (60 - 80kW DC)' },
              { id: 'rapid-plus', label: 'XB RAPID+ Series (120 - 360kW Ultra)' }
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`relative px-5 py-3 rounded-full border transition-all whitespace-nowrap font-bold uppercase tracking-wider ${
                    isActive
                      ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:border-[#0B4ED9] hover:text-[#0F172A]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,78,217,0.1)] hover:border-[#0B4ED9]/40 transition-all flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  
                  {/* Image Stage */}
                  <div className="w-full h-56 rounded-2xl overflow-hidden relative bg-[#F5FAFF] border border-[#0B4ED9]/15 flex items-center justify-center p-4">
                    <img 
                      src={prod.image} 
                      alt={prod.name}
                      className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(11,78,217,0.15)]"
                    />
                    
                    {/* Power Chip overlay */}
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full border text-xs font-mono font-bold ${prod.badgeColor} shadow-sm`}>
                      {prod.power}
                    </div>
                    
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-500 shadow-sm">
                      {prod.series}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <h3 className="text-2xl font-display font-black text-[#0F172A] group-hover:text-[#0B4ED9] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-sans font-medium text-slate-500">{prod.tagline}</p>
                  </div>

                  {/* Specs Summary Box */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2 shadow-sm">
                    <div className="flex justify-between text-xs font-mono text-slate-500">
                      <span>Speed:</span>
                      <span className="text-[#0F172A] font-bold">{prod.speed}</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-500">
                      <span>Connectors:</span>
                      <span className="text-slate-800 font-semibold">{prod.connectors.split(' ')[0]} {prod.connectors.split(' ')[1]}</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-500">
                      <span>Efficiency:</span>
                      <span className="text-[#0B4ED9] font-bold">{prod.efficiency}</span>
                    </div>
                  </div>

                  {/* Features bullet points */}
                  <div className="space-y-2 pt-1">
                    {prod.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-sans text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#0B4ED9] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3 mt-6">
                  <button
                    onClick={() => alert(`Downloading Technical Datasheet for ${prod.name}...`)}
                    className="px-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 font-bold hover:border-[#0B4ED9] hover:text-[#0B4ED9] transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Datasheet</span>
                  </button>

                  <button
                    onClick={() => setActiveSpecModel(prod)}
                    className="px-5 py-2.5 rounded-full bg-[#0B4ED9] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#083BB0] transition-all flex items-center gap-1 shadow-[0_6px_16px_rgba(11,78,217,0.22)]"
                  >
                    <span>Full Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Full Specs Modal */}
        <AnimatePresence>
          {activeSpecModel && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveSpecModel(null)}
                className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-xl"
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl z-10"
              >
                <button 
                  onClick={() => setActiveSpecModel(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-[#F5FAFF] border border-[#0B4ED9]/20 flex items-center justify-center p-2 shadow-sm">
                    <img src={activeSpecModel.image} alt={activeSpecModel.name} className="h-full w-auto object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0B4ED9] uppercase">{activeSpecModel.series}</span>
                    <h3 className="text-2xl font-display font-black text-[#0F172A]">{activeSpecModel.name}</h3>
                    <p className="text-xs text-slate-500 font-sans">{activeSpecModel.type}</p>
                  </div>
                </div>

                <div className="space-y-3 bg-[#F7F8FA] p-5 rounded-2xl border border-slate-200 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Power Rating:</span>
                    <span className="text-[#0B4ED9] font-bold">{activeSpecModel.power}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Electrical Output:</span>
                    <span className="text-slate-800">{activeSpecModel.output}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Connectors:</span>
                    <span className="text-slate-800">{activeSpecModel.connectors}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Charging Speed:</span>
                    <span className="text-[#0F172A] font-bold">{activeSpecModel.speed}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Efficiency:</span>
                    <span className="text-[#0B4ED9] font-bold">{activeSpecModel.efficiency}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      setActiveSpecModel(null);
                      window.location.href = '/contact';
                    }}
                    className="w-full py-4 rounded-full bg-[#0B4ED9] text-white font-mono text-xs font-bold uppercase tracking-widest text-center shadow-[0_8px_20px_rgba(11,78,217,0.25)] hover:bg-[#083BB0] transition-all"
                  >
                    Inquire For Purchase
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}
