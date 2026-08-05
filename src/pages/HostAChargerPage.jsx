import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Zap, Building, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function HostAChargerPage() {
  const [calculatorState, setCalculatorState] = useState({
    propertyType: 'commercial',
    chargers: 2,
    model: 'revenue-share'
  });

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    propertyDetails: ''
  });

  const propertyTypes = [
    { id: 'commercial', label: 'Commercial Building' },
    { id: 'hospitality', label: 'Hotel / Restaurant' },
    { id: 'residential', label: 'Residential Society' },
    { id: 'retail', label: 'Retail Mall' },
    { id: 'highway', label: 'Highway Stop' }
  ];

  const calculateRevenue = () => {
    const baseRevenuePerCharger = 15000;
    let multiplier = 1;
    if (calculatorState.model === 'fofo') multiplier = 1.8;
    if (calculatorState.propertyType === 'highway' || calculatorState.propertyType === 'commercial') multiplier *= 1.2;
    
    return Math.floor(calculatorState.chargers * baseRevenuePerCharger * multiplier).toLocaleString('en-IN');
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our partnership team will contact you shortly.');
    setFormData({ name: '', mobile: '', email: '', city: '', propertyDetails: '' });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-[#0F172A] pt-32 pb-24 font-sans selection:bg-[#0B4ED9] selection:text-white relative overflow-x-clip">
      
        {/* Soft Ambient Glow */}
        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#EBF2FF] via-[#F5FAFF]/40 to-transparent blur-[120px] pointer-events-none z-0" />

        {/* Hero Section */}
        <section className="relative overflow-hidden pb-20 border-b border-slate-100 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
                Turnkey Partnership Program
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-[#0F172A]">
                Host a XOBOLT Charger. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] via-[#1A56DB] to-[#2563EB]">
                  Earn Passive EV Revenue.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                Transform your idle parking bay into a high-yield charging asset. Join India's fastest-growing EV charging network and attract premium EV drivers to your property.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="#onboarding-form"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0B4ED9] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#083BB0] shadow-[0_10px_25px_rgba(11,78,217,0.25)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Become a Partner</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#calculator"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 text-[#0F172A] hover:border-[#0B4ED9] font-mono text-xs font-bold uppercase tracking-widest shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Calculate Revenue</span>
                </a>
              </div>
            </motion.div>

            {/* Hero Property Partnership Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_50px_rgba(11,78,217,0.1)] space-y-6 relative z-10"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9]">
                  Property Monetization
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F5FAFF] border border-[#0B4ED9]/20 text-[10px] font-mono text-[#0B4ED9] font-bold">
                  Passive Income
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-slate-500 font-bold uppercase">Up to 80% Revenue</p>
                    <p className="text-sm font-display font-bold text-[#0F172A]">Franchise Share Option</p>
                  </div>
                  <span className="text-lg font-display font-black text-[#0B4ED9]">FOFO</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-slate-500 font-bold uppercase">Zero Upfront Cost</p>
                    <p className="text-sm font-display font-bold text-[#0F172A]">Turnkey Investment</p>
                  </div>
                  <span className="text-lg font-display font-black text-[#0B4ED9]">REVENUE SHARE</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-slate-500 font-bold uppercase">Guaranteed Rent</p>
                    <p className="text-sm font-display font-bold text-[#0F172A]">Fixed Monthly Lease</p>
                  </div>
                  <span className="text-lg font-display font-black text-[#0B4ED9]">COCO</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Partnership Models */}
        <section className="py-24 bg-[#F7F8FA] border-b border-slate-200/60 z-10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 space-y-3"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
                Revenue Models
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-[#0F172A]">
                Choose Your Partnership Model.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Revenue Share */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#0B4ED9]/40 hover:shadow-[0_20px_40px_rgba(11,78,217,0.1)] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F5FAFF] border border-[#0B4ED9]/20 flex items-center justify-center text-[#0B4ED9] mb-6">
                    <IndianRupee className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-[#0F172A] mb-3">Zero-Investment<br/>(Revenue Share)</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    You provide the parking bay and power load. XOBOLT handles CAPEX, hardware, software, and 24/7 telemetry maintenance.
                  </p>
                </div>
                <ul className="space-y-3 text-xs font-mono font-semibold text-slate-700 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span>Zero Upfront CAPEX</span></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span>Free 24/7 Maintenance</span></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span>Monthly Profit Payouts</span></li>
                </ul>
              </motion.div>

              {/* FOFO */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-3xl bg-white border-2 border-[#0B4ED9] shadow-[0_20px_50px_rgba(11,78,217,0.15)] relative flex flex-col justify-between transform md:-translate-y-2"
              >
                <div className="absolute top-0 right-0 bg-[#0B4ED9] text-white text-[10px] font-mono font-bold uppercase tracking-wider py-1.5 px-4 rounded-bl-xl">Popular</div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B4ED9] flex items-center justify-center text-white mb-6 shadow-md">
                    <Building className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-[#0F172A] mb-3">Franchise Owned<br/>(FOFO)</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Invest in the charger hardware and retain up to 80% of revenue. XOBOLT provides software, branding, and billing.
                  </p>
                </div>
                <ul className="space-y-3 text-xs font-mono font-semibold text-slate-700 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span className="font-bold text-[#0F172A]">Up to 80% Revenue Share</span></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span>Full Tariff Control</span></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span>XOBOLT App Listing</span></li>
                </ul>
              </motion.div>

              {/* COCO */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#0B4ED9]/40 hover:shadow-[0_20px_40px_rgba(11,78,217,0.1)] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F5FAFF] border border-[#0B4ED9]/20 flex items-center justify-center text-[#0B4ED9] mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-[#0F172A] mb-3">Company Owned<br/>(COCO)</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Lease your premium commercial space to XOBOLT for long-term guaranteed fixed monthly rental income.
                  </p>
                </div>
                <ul className="space-y-3 text-xs font-mono font-semibold text-slate-700 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span>Guaranteed Monthly Rent</span></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span>Zero Operation Risk</span></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B4ED9]" /> <span>Long-term 10-Year Lease</span></li>
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="calculator" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div>
            {/* Onboarding Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="onboarding-form" 
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden"
            >
              <div className="mb-6 space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9]">
                  Apply Online
                </span>
                <h3 className="text-3xl font-display font-black text-[#0F172A]">Partner Onboarding</h3>
                <p className="text-slate-500 text-xs">Fill in your property details and our site engineers will contact you.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
                <div>
                  <label className="text-[10px] font-mono text-slate-700 font-bold uppercase tracking-wider block mb-1">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleFormChange} className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl px-4 py-3 text-xs font-mono text-[#0F172A] focus:border-[#0B4ED9] focus:bg-white outline-none" placeholder="Enter your name" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-slate-700 font-bold uppercase tracking-wider block mb-1">Mobile Number</label>
                    <input type="tel" name="mobile" required value={formData.mobile} onChange={handleFormChange} className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl px-4 py-3 text-xs font-mono text-[#0F172A] focus:border-[#0B4ED9] focus:bg-white outline-none" placeholder="+91" />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-700 font-bold uppercase tracking-wider block mb-1">City</label>
                    <input type="text" name="city" required value={formData.city} onChange={handleFormChange} className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl px-4 py-3 text-xs font-mono text-[#0F172A] focus:border-[#0B4ED9] focus:bg-white outline-none" placeholder="e.g. Jaipur" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-700 font-bold uppercase tracking-wider block mb-1">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl px-4 py-3 text-xs font-mono text-[#0F172A] focus:border-[#0B4ED9] focus:bg-white outline-none" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-700 font-bold uppercase tracking-wider block mb-1">Property Details</label>
                  <textarea name="propertyDetails" required rows="3" value={formData.propertyDetails} onChange={handleFormChange} className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl px-4 py-3 text-xs font-mono text-[#0F172A] focus:border-[#0B4ED9] focus:bg-white outline-none resize-none" placeholder="Briefly describe property location and available power load"></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-full bg-[#0B4ED9] text-white font-mono text-xs font-bold uppercase tracking-widest shadow-[0_8px_20px_rgba(11,78,217,0.25)] hover:bg-[#083BB0] transition-all"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
