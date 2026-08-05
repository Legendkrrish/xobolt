import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Target, Lightbulb, Zap, Users, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen text-[#0F172A] font-sans pt-28 pb-16 selection:bg-[#0B4ED9] selection:text-white overflow-x-clip">
        
        {/* Soft Radial Ambient Glow */}
        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#EBF2FF] via-[#F5FAFF]/40 to-transparent blur-[120px] pointer-events-none z-0" />

        {/* 1. Hero Section */}
        <section className="relative py-16 px-6 lg:px-12 max-w-7xl mx-auto border-b border-slate-100 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <nav className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-6">
                <Link to="/" className="hover:text-[#0B4ED9] transition-colors">Home</Link>
                <ChevronRight size={14} className="text-[#0B4ED9]" />
                <span className="text-[#0F172A] font-extrabold">About XOBOLT</span>
              </nav>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
                Pioneer Energy Engineering
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-tight text-[#0F172A] mb-6 tracking-tight">
                Powering India's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] via-[#1A56DB] to-[#2563EB]">
                  EV Charging Era.
                </span>
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed max-w-xl font-normal mb-8">
                XOBOLT is accelerating electric vehicle adoption across India through hardware reliability, AI-driven dynamic load management, and an interconnected charging network built for enterprise fleets and highways.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-full bg-[#0B4ED9] text-white font-mono text-xs font-bold uppercase tracking-widest shadow-[0_8px_20px_rgba(11,78,217,0.25)] hover:bg-[#083BB0] transition-all flex items-center gap-2"
                >
                  <span>Explore Hardware</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 relative z-10"
            >
              <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-center">
                <span className="text-3xl sm:text-4xl font-display font-black text-[#0B4ED9] mb-1">2,500+</span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">Active Stations</span>
                <span className="text-[10px] font-mono text-slate-400">Nationwide Network</span>
              </div>

              <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-center">
                <span className="text-3xl sm:text-4xl font-display font-black text-[#0F172A] mb-1">50+</span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">Cities Covered</span>
                <span className="text-[10px] font-mono text-slate-400">Tier-1 & Highways</span>
              </div>

              <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-center">
                <span className="text-3xl sm:text-4xl font-display font-black text-[#0F172A] mb-1">99.9%</span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">Uptime SLA</span>
                <span className="text-[10px] font-mono text-slate-400">Telemetry Guaranteed</span>
              </div>

              <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-center">
                <span className="text-3xl sm:text-4xl font-display font-black text-[#0B4ED9] mb-1">10+</span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">Years Experience</span>
                <span className="text-[10px] font-mono text-slate-400">Energy Engineering</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. Vision & Mission Section */}
        <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto z-10">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,78,217,0.1)] hover:border-[#0B4ED9]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F5FAFF] border border-[#0B4ED9]/20 flex items-center justify-center text-[#0B4ED9] mb-8 group-hover:bg-[#0B4ED9] group-hover:text-white transition-all">
                <Lightbulb size={28} />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-2 block">
                Long-Term Impact
              </span>
              <h3 className="text-3xl font-display font-black text-[#0F172A] mb-4">Our Vision</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To spearhead India's transition to 100% electric mobility by engineering the nation's most intelligent, resilient, and ultra-fast charging infrastructure.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,78,217,0.1)] hover:border-[#0B4ED9]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F5FAFF] border border-[#0B4ED9]/20 flex items-center justify-center text-[#0B4ED9] mb-8 group-hover:bg-[#0B4ED9] group-hover:text-white transition-all">
                <Target size={28} />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-2 block">
                Strategic Execution
              </span>
              <h3 className="text-3xl font-display font-black text-[#0F172A] mb-4">Our Mission</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To deploy turnkey charging corridors across every major highway, corporate hub, and residential complex with 99.9% telemetry SLA guarantees.
              </p>
            </motion.div>

          </div>
        </section>

        {/* 3. Journey Timeline Section */}
        <section className="py-24 bg-[#F7F8FA] border-y border-slate-200/60 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
                Milestone Timeline
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-[#0F172A]">
                From Engineering Prototype <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
                  To Nationwide Network.
                </span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                { 
                  year: '2021', 
                  title: 'R&D Foundation & Pilot Deployment', 
                  desc: 'Established state-of-the-art power electronics laboratory and successfully launched our first 50 AC pilot chargers in NCR.' 
                },
                { 
                  year: '2023', 
                  title: 'In-House Hardware Manufacturing', 
                  desc: 'Scale manufacturing of 120kW DC Fast Chargers with proprietary OCPP 1.6J IoT cloud integration.' 
                },
                { 
                  year: '2025', 
                  title: '2,500+ Active Charging Points', 
                  desc: 'Expanded charging network to 50+ cities, partnering with premier real estate and hospitality conglomerates.' 
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(11,78,217,0.08)] hover:border-[#0B4ED9]/30 transition-all flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  <div className="text-3xl font-display font-black text-[#0B4ED9] bg-[#F5FAFF] px-6 py-3.5 rounded-2xl border border-[#0B4ED9]/20 shrink-0">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">{item.title}</h3>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Core Values Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 z-10 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
              Core Operating Principles
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-[#0F172A]">
              Pillars Driving XOBOLT.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Uncompromising Tech', desc: 'Pushing energy efficiency to 99.4% peak conversion.' },
              { icon: Users, title: 'Driver First', desc: 'Instant tap-to-charge mobile app and seamless RFIDs.' },
              { icon: ShieldCheck, title: 'Industrial Grade', desc: 'IP65 all-weather casing & Class II surge protection.' },
              { icon: HeartHandshake, title: 'Turnkey Support', desc: 'End-to-end load assessment and 24/7 telemetry SLA.' }
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 hover:bg-white hover:border-[#0B4ED9]/40 hover:shadow-[0_15px_30px_rgba(11,78,217,0.08)] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0B4ED9] mb-6 group-hover:bg-[#0B4ED9] group-hover:text-white transition-all shadow-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">{val.title}</h3>
                    <p className="text-slate-600 font-sans text-xs leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </section>

        {/* 5. Bottom CTA Banner */}
        <section className="max-w-7xl mx-auto px-6 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
                // Partner With Us
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black mb-3">
                Ready to electrify your property?
              </h3>
              <p className="text-slate-300 text-sm font-sans">
                Host an EV charging station and unlock new revenue streams for your commercial space.
              </p>
            </div>

            <Link
              to="/host-a-charger"
              className="relative z-10 px-8 py-4 rounded-full bg-[#0B4ED9] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#083BB0] shadow-[0_10px_25px_rgba(11,78,217,0.35)] transition-all shrink-0"
            >
              Host A Charger
            </Link>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
