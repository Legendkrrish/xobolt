import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenFindCharger }) {
  return (
    <footer className="bg-[#F7F8FA] border-t border-slate-200 text-[#0F172A] pt-20 pb-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://xobolt.in/wp-content/uploads/2025/06/Logo-with-no-bg.png" 
                alt="XOBOLT Logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-black text-2xl tracking-widest text-[#0F172A]">
                XOBOLT
              </span>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              India's premier EV charging infrastructure company engineering ultra-reliable, smart AC & DC charging solutions for commercial real estate, fleets, and transit hubs.
            </p>

            <div className="space-y-3 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#0B4ED9]" />
                <span>+91 7374-00-2121</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#0B4ED9]" />
                <span>support@xobolt.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-[#0B4ED9]" />
                <span>New Delhi // Pan-India Deployments</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B4ED9] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link to="/products" className="hover:text-[#0B4ED9] transition-colors">Products Showcase</Link></li>
              <li><Link to="/network" className="hover:text-[#0B4ED9] transition-colors">National Network</Link></li>
              <li><Link to="/host-a-charger" className="hover:text-[#0B4ED9] transition-colors">Host a Charger</Link></li>
              <li><Link to="/about" className="hover:text-[#0B4ED9] transition-colors">About XOBOLT</Link></li>
              <li><button onClick={onOpenFindCharger} className="hover:text-[#0B4ED9] transition-colors text-left">Find Charger</button></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B4ED9] mb-6">
              Hardware Lineup
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link to="/products" className="hover:text-[#0B4ED9] transition-colors">XB 7 Home AC</Link></li>
              <li><Link to="/products" className="hover:text-[#0B4ED9] transition-colors">XB 14 Commercial Dual</Link></li>
              <li><Link to="/products" className="hover:text-[#0B4ED9] transition-colors">XB Hybrid 30 AC/DC</Link></li>
              <li><Link to="/products" className="hover:text-[#0B4ED9] transition-colors">XB Rapid 60 DC Fast</Link></li>
              <li><Link to="/products" className="hover:text-[#0B4ED9] transition-colors">XB Rapid+ 240 Ultra-Fast</Link></li>
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B4ED9] mb-6">
              Enterprise
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link to="/contact" className="hover:text-[#0B4ED9] transition-colors">Fleet Partnership</Link></li>
              <li><Link to="/contact" className="hover:text-[#0B4ED9] transition-colors">Hospitality Solutions</Link></li>
              <li><Link to="/contact" className="hover:text-[#0B4ED9] transition-colors">Commercial Real Estate</Link></li>
              <li><Link to="/contact" className="hover:text-[#0B4ED9] transition-colors">Contact Sales Team</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} XOBOLT Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#0B4ED9]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#0B4ED9]">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
