import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How fast can XOBOLT chargers power an electric vehicle?",
    a: "Our AC chargers (XB 7 & XB 14) provide full charges in 4-7 hours for overnight or workplace stays. Our DC Fast Chargers (XB Rapid 60 to XB Rapid+ 240) deliver an 80% charge in 15 to 45 minutes depending on battery size."
  },
  {
    q: "Do XOBOLT chargers support all EV models in India?",
    a: "Yes. All XOBOLT chargers adhere strictly to CCS2 and Type-2 international standards, making them 100% compatible with Tata, MG, Hyundai, Mahindra, BYD, BMW, Mercedes, and commercial EV fleets."
  },
  {
    q: "What is the timeline for commercial installation?",
    a: "Our turnkey installation process—from initial load feasibility audit and transformer engineering to mounting, testing, and cloud onboarding—is typically completed within 7 business days."
  },
  {
    q: "How does XOBOLT handle grid fluctuations and extreme weather?",
    a: "XOBOLT chargers feature IP65 weather-resistant aluminum armor, internal active glycol cooling, and Class II surge arrester protection built specifically for Indian grid spikes and temperatures ranging from -10°C to 55°C."
  },
  {
    q: "Can businesses monetize XOBOLT charging stations?",
    a: "Absolutely. Our OCPP 1.6J cloud management platform allows property hosts to set custom tariffs, generate automatic RFID/QR billing revenues, and track real-time utilization analytics."
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight">
            Everything You Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
              To Know.
            </span>
          </h2>
        </div>

        {/* Apple-Style Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-3xl bg-[#F7F8FA] border border-slate-200/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 font-display font-bold text-lg sm:text-xl text-[#0F172A] hover:text-[#0B4ED9] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0B4ED9] text-white border-transparent' : 'text-slate-500'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 sm:px-8 pb-8 text-slate-600 font-sans text-base leading-relaxed border-t border-slate-200/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
