import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Building2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background Soft Blue Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#EBF2FF] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Charger Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 mb-8 flex items-center justify-center"
        >
          <img 
            src="https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png"
            alt="XOBOLT Charger"
            className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(11,78,217,0.18)] animate-float-slow"
          />
        </motion.div>

        {/* Heading */}
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-4 block">
          Ready To Transform Your Infrastructure?
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-[#0F172A] leading-tight mb-8 max-w-4xl">
          Power the Next Generation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
            of Electric Mobility.
          </span>
        </h2>

        <p className="text-slate-600 text-base sm:text-xl font-sans max-w-xl leading-relaxed font-normal mb-12">
          Partner with India's premier EV charging network. Custom hardware engineering, turnkey site deployment, and automated OCPP cloud management.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 w-full sm:w-auto">
          <Link 
            to="/contact" 
            className="group px-8 py-4 rounded-full bg-[#0B4ED9] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[0_10px_25px_rgba(11,78,217,0.25)] hover:shadow-[0_20px_40px_rgba(11,78,217,0.4)] hover:bg-[#083BB0] transition-all duration-300 flex items-center gap-2"
          >
            <span>Request Quote</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            to="/contact" 
            className="px-8 py-4 rounded-full bg-[#F7F8FA] border border-slate-200 text-[#0F172A] hover:border-[#0B4ED9] hover:text-[#0B4ED9] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
          >
            <Building2 size={16} className="text-[#0B4ED9]" />
            <span>Become Partner</span>
          </Link>

          <a 
            href="tel:+917374002121" 
            className="px-8 py-4 rounded-full bg-white border border-slate-200 text-[#0F172A] hover:border-[#0B4ED9] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
          >
            <Phone size={16} className="text-[#0B4ED9]" />
            <span>+91 7374-00-2121</span>
          </a>
        </div>

      </div>
    </section>
  );
}
