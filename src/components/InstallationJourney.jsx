import React, { useState } from 'react';
import { MapPin, Wrench, ShieldCheck, Zap, Activity, ChevronRight, Car } from 'lucide-react';

export default function InstallationJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Site Inspection & Feasibility',
      icon: MapPin,
      subtitle: '3D LIDAR Mapping & Grid Capacity Analysis',
      description:
        'Our certified electrical engineers perform high-resolution site scans, transformer load profiling, and solar microgrid integration audits to ensure optimal charger placement.',
      deliverables: ['Transformer Load Profile', 'Civil Layout CAD Drawing', 'DISCOM Grid NOC Assistance'],
      duration: 'Day 1 - 2'
    },
    {
      step: '02',
      title: 'Civil & Electrical Installation',
      icon: Wrench,
      subtitle: 'Heavy-Duty Foundations & Shielded Cabling',
      description:
        'Custom poured concrete pedestals, flame-retardant armory cabling, industrial surge arresters, and dedicated grounding pits installed to DISCOM and ARAI safety guidelines.',
      deliverables: ['IP65 Cable Trenching', 'Dual Earth Pit Grounding', 'Heavy-Duty Pedestal Mounting'],
      duration: 'Day 3 - 5'
    },
    {
      step: '03',
      title: 'High-Voltage Testing & QA',
      icon: ShieldCheck,
      subtitle: 'Isolation Testing & Thermal Imaging',
      description:
        'Rigorous dielectric isolation checks, thermal imaging sweeps under full 360kW dummy load, emergency trip stress-tests, and CE/OCPP protocol compliance verification.',
      deliverables: ['Dielectric Insulation Test', 'Emergency Cutoff Audit', 'CE & Safety Certificate'],
      duration: 'Day 6'
    },
    {
      step: '04',
      title: 'Activation & Cloud Handshake',
      icon: Zap,
      subtitle: 'OCPP 2.0.1 Provisioning & Payment Sync',
      description:
        'Seamless integration into the Xobolt Central Management System (CMS), dynamic load sharing activation, UPI payment gateway sync, and app listing live across India.',
      deliverables: ['Xobolt OS Provisioning', 'Dynamic Tariff Setup', 'Live App Map Listing'],
      duration: 'Day 7'
    },
    {
      step: '05',
      title: '24x7 Telemetry & Maintenance',
      icon: Activity,
      subtitle: 'Predictive AI Diagnostics & SLA Support',
      description:
        'Continuous remote health checks from our NOCC command center with automatic firmware upgrades and 2-hour on-site engineering SLA for uninterrupted charging operations.',
      deliverables: ['24/7 Command Monitoring', 'Over-the-Air Firmware', '2-Hour Technician SLA'],
      duration: 'Ongoing 24/7'
    }
  ];

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  // Car position percentage along timeline track
  const carPosition = (activeStep / (steps.length - 1)) * 88 + 4;

  return (
    <section id="installation" className="relative py-28 bg-[#070A0F] border-t border-slate-900 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(56,255,122,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#38FF7A]">
            <Wrench className="w-3.5 h-3.5" />
            <span>SECTION 06 — END-TO-END DEPLOYMENT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            The Xobolt <span className="text-[#38FF7A]">Installation Journey.</span>
          </h2>

          <p className="text-slate-300 font-sans text-base">
            From initial site inspection to live 24x7 cloud telemetry in 7 days flat.
          </p>
        </div>

        {/* Interactive Track Timeline with Moving Electric EV */}
        <div className="relative mb-16 pt-12 pb-8">
          
          {/* Main Track Line */}
          <div className="w-full h-2 bg-slate-800 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#38FF7A] to-[#00E5FF] transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Animated Electric Car moving along track */}
          <div
            className="absolute top-4 transition-all duration-500 ease-out z-20 pointer-events-none -translate-x-1/2"
            style={{ left: `${carPosition}%` }}
          >
            <div className="relative p-2.5 rounded-xl bg-slate-900 border-2 border-[#38FF7A] text-[#38FF7A] shadow-[0_0_20px_#38FF7A] flex items-center justify-center">
              <Car className="w-6 h-6 animate-pulse" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#38FF7A]" />
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="relative flex justify-between items-center -mt-5 z-10">
            {steps.map((s, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep >= idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-mono font-bold text-xs ${
                      isActive
                        ? 'bg-[#38FF7A] border-white text-black shadow-[0_0_25px_#38FF7A] scale-125'
                        : isPassed
                        ? 'bg-slate-900 border-[#38FF7A] text-[#38FF7A]'
                        : 'bg-slate-900 border-slate-700 text-slate-500 group-hover:border-slate-500'
                    }`}
                  >
                    {s.step}
                  </div>
                  <span
                    className={`mt-3 text-xs font-mono font-semibold transition-colors hidden sm:block ${
                      isActive ? 'text-[#38FF7A]' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {s.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Active Stage Detail Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#38FF7A]">
                  <StepIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    STAGE {currentStep.step} OF 05 — {currentStep.duration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 font-sans text-base leading-relaxed">
                {currentStep.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-[#38FF7A] uppercase tracking-wider block">
                  KEY STAGE DELIVERABLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentStep.deliverables.map((d, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-sans text-slate-200 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#38FF7A]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Interactive Next Step Trigger */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-4">
              
              <div className="w-16 h-16 rounded-full bg-[#38FF7A]/10 border border-[#38FF7A]/30 flex items-center justify-center text-[#38FF7A]">
                <StepIcon className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono text-slate-400 text-center">
                ESTIMATED STAGE DURATION
              </span>
              <p className="text-2xl font-mono font-extrabold text-white">
                {currentStep.duration}
              </p>

              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                className="w-full py-3 rounded-xl bg-[#38FF7A] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,255,122,0.4)]"
              >
                <span>Advance to Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
