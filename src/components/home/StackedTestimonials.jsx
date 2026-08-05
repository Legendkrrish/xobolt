import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "XOBOLT transformed our hotel chain's guest amenities. Our patrons love the fast charging speed, and we've seen a noticeable 35% increase in F&B dining revenue while guests wait.",
    author: "Vikram Malhotra",
    role: "VP of Hospitality Operations, Premier Hotels",
    location: "New Delhi"
  },
  {
    quote: "Deploying 40 dual-gun XOBOLT chargers across our tech parks was completely seamless. Their remote telemetry and smart load balancing saved us millions in transformer upgrades.",
    author: "Ananya Deshmukh",
    role: "Head of Infrastructure, Mindspace Tech Parks",
    location: "Bengaluru"
  },
  {
    quote: "In the commercial fleet business, uptime is everything. XOBOLT's 99.9% uptime SLA and 24/7 automated cloud diagnostics have kept our 200+ electric delivery vans running without a single hiccup.",
    author: "Rajesh Iyer",
    role: "Director of Fleet Operations, Logistics Corp",
    location: "Mumbai"
  }
];

export default function StackedTestimonials() {
  return (
    <section className="py-28 bg-[#F7F8FA] relative overflow-hidden border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9] mb-3 block">
            Partner Endorsements
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#0F172A] leading-tight">
            What Infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4ED9] to-[#1A56DB]">
              Leaders Say.
            </span>
          </h2>
        </div>

        {/* Stacked Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,78,217,0.12)] hover:border-[#0B4ED9]/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#0B4ED9]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#0B4ED9]" />
                    ))}
                  </div>
                  <Quote size={24} className="text-[#0B4ED9]/20" />
                </div>

                <p className="text-slate-700 font-sans text-base leading-relaxed mb-8 font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-display font-bold text-[#0F172A]">
                    {item.author}
                  </h4>
                  <p className="text-xs font-sans text-slate-500">
                    {item.role}
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0B4ED9] bg-[#F5FAFF] px-2.5 py-1 rounded-full border border-[#0B4ED9]/15">
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
