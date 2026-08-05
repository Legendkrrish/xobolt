import React, { useState } from 'react';
import { ShieldCheck, Award, Building, Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const certifications = [
    { name: 'ARAI Certified', desc: 'Automotive Research Association of India Approved' },
    { name: 'OCPP 2.0.1 Certified', desc: 'Open Charge Point Protocol Global Standard' },
    { name: 'ISO 9001:2015', desc: 'Certified Quality Management System' },
    { name: 'IP65 & IK10', desc: 'Waterproof, Dustproof & Impact Rated' },
    { name: 'CE Safety Compliant', desc: 'European Standard Safety Conformity' }
  ];

  const partners = [
    'TATA MOTORS FLEET',
    'MAHINDRA ELECTRIC',
    'HYUNDAI INDIA',
    'MG MOTOR',
    'BLUSMART',
    'SHELL RECHARGE',
    'NHAI CORRIDORS',
    'DLF COMMERCIAL'
  ];

  const testimonials = [
    {
      quote:
        'Deploying Xobolt 360kW liquid-cooled chargers across our Mumbai-Pune highway food plazas increased our EV footfall by 340% within 90 days. Zero downtime in 14 months.',
      author: 'Rajiv Sharma',
      role: 'VP Infrastructure, Expressway Concessions India',
      metrics: '340% Footfall Increase'
    },
    {
      quote:
        'Xobolt’s automated OCPP cloud billing and 2-hour technician SLA give our 500+ electric delivery fleet total reliability. Charging costs dropped by 18% with smart peak shaving.',
      author: 'Ananya Deshmukh',
      role: 'Head of Fleet Operations, GreenFreight Logistics',
      metrics: '18% Cost Reduction'
    },
    {
      quote:
        'Our hotel guests expect flawless charging. Xobolt’s sleek aluminum chargers and seamless app QR payments fit our luxury brand standard perfectly.',
      author: 'Vikramaditya Oberoi',
      role: 'Director, Heritage Hospitality Group',
      metrics: '4.9/5 Guest Satisfaction'
    }
  ];

  const currentTestimonial = testimonials[activeTestimonialIndex];

  return (
    <section id="trust" className="relative py-28 bg-[#070A0F] border-t border-slate-900 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(56,255,122,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#38FF7A]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECTION 08 — TRUST & COMPLIANCE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Trusted by India’s Leading <br />
            <span className="text-[#38FF7A]">Automakers & Enterprise Fleets.</span>
          </h2>

          <p className="text-slate-300 font-sans text-base">
            Engineered to stringent national and global safety standards with proven reliability across millions of charging sessions.
          </p>
        </div>

        {/* Certifications Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-[#38FF7A]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#38FF7A] mb-3 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-white">{cert.name}</h4>
                <p className="text-[11px] font-sans text-slate-400 leading-tight">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Marquee Bar */}
        <div className="mb-20 glass-panel rounded-2xl p-6 border border-slate-800 overflow-hidden">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block text-center mb-4">
            INTEGRATED WITH LEADING EV OEMS & FLEET NETWORKS
          </span>
          <div className="flex items-center justify-around gap-6 flex-wrap">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="text-xs font-mono font-bold text-slate-400 hover:text-[#38FF7A] transition-colors tracking-wider"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Showcase Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex items-center gap-1 text-[#38FF7A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#38FF7A]" />
                ))}
              </div>

              <Quote className="w-10 h-10 text-[#38FF7A]/30" />

              <p className="text-xl sm:text-2xl font-display font-medium text-slate-100 leading-relaxed italic">
                "{currentTestimonial.quote}"
              </p>

              <div>
                <h4 className="text-lg font-display font-bold text-white">
                  {currentTestimonial.author}
                </h4>
                <p className="text-xs font-sans text-slate-400">
                  {currentTestimonial.role}
                </p>
              </div>

            </div>

            {/* Metrics ROI Box */}
            <div className="lg:col-span-4 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between">
              
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                VERIFIED ENTERPRISE RESULT
              </span>

              <div className="text-3xl font-mono font-extrabold text-[#38FF7A]">
                {currentTestimonial.metrics}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() =>
                    setActiveTestimonialIndex(
                      (prev) => (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length)
                  }
                  className="p-3 rounded-full bg-[#38FF7A] text-black font-bold hover:bg-[#45ff84] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
