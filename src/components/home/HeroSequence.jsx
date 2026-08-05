import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Zap, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSequence() {
  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] overflow-hidden flex flex-col justify-center pt-28 pb-16 selection:bg-[#0B4ED9] selection:text-white">
      
      {/* Soft Ambient Radial Backdrop */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#EBF2FF] via-[#F5FAFF]/50 to-transparent blur-[100px] pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b4ed905_1px,transparent_1px),linear-gradient(to_bottom,#0b4ed905_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Side: Typography & Actions */}
        <div className="w-full lg:w-3/5 flex flex-col items-start z-20">
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-[5.2rem] xl:text-[5.6rem] font-display font-black leading-[0.96] tracking-tight text-[#0F172A] mb-6 sm:mb-8"
          >
            India's Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] via-[#1A56DB] to-[#2563EB]">
              EV Charging Starts Here.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-600 text-lg sm:text-xl lg:text-2xl font-sans max-w-xl leading-relaxed font-normal mb-10"
          >
            Engineered for commercial fleets, highways, and enterprise hubs with intelligent 240kW ultra-fast energy delivery.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 w-full sm:w-auto mb-12"
          >
            <Link 
              to="/products" 
              className="group relative px-8 py-4 rounded-full bg-[#0B4ED9] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(11,78,217,0.3)] hover:shadow-[0_15px_40px_rgba(11,78,217,0.45)] hover:bg-[#083BB0] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Lineup
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="group px-8 py-4 rounded-full bg-white border border-slate-200 text-[#0F172A] hover:border-[#0B4ED9] hover:text-[#0B4ED9] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Book Consultation</span>
            </Link>
          </motion.div>

          {/* Hardware Badges Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-slate-200/80 w-full max-w-xl flex items-center justify-between text-slate-500 font-mono text-[11px] uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#0B4ED9]" />
              <span>IP65 All-Weather</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-[#0B4ED9]" />
              <span>240kW DC Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#0B4ED9]" />
              <span>OCPP 1.6J Ready</span>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Clean Borderless Charger Image */}
        <div className="w-full lg:w-2/5 h-[480px] lg:h-[600px] relative flex items-center justify-center">
          
          {/* Glowing Radial Aura */}
          <div className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full bg-[#EBF2FF] blur-[70px] pointer-events-none" />

          {/* Clean Charger Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 w-full h-full flex items-center justify-center"
          >
            <img 
              src="https://xobolt.in/wp-content/uploads/2025/06/20250620_1611_Sleek-EV-Charger-Design_remix_01jy6escy6fygtbf26cnwb9cjh.png"
              alt="XOBOLT Charger Showcase"
              className="max-h-[90%] lg:max-h-[98%] object-contain drop-shadow-[0_25px_50px_rgba(11,78,217,0.22)] relative z-10"
            />
          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 font-mono text-[10px] uppercase tracking-widest"
      >
        <span>Scroll to Explore</span>
        <ChevronDown size={14} className="animate-bounce text-[#0B4ED9]" />
      </motion.div>
    </div>
  );
}
