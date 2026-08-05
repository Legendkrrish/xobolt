import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenFindCharger }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Network', path: '/network' },
    { name: 'Host Charger', path: '/host-a-charger' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full">
        
        {/* Full Width Liquid Glass Bar */}
        <div 
          className={`liquid-glass relative w-full border-b transition-all duration-500 ${
            scrolled 
              ? 'py-3 px-6 lg:px-12 bg-white/90 backdrop-blur-3xl border-slate-200/90 shadow-[0_10px_35px_rgba(11,78,217,0.1)]' 
              : 'py-5 px-6 lg:px-12 bg-white/75 backdrop-blur-2xl border-white/60 shadow-[0_4px_25px_rgba(0,0,0,0.03)]'
          }`}
        >
          {/* Glossy Top Reflection */}
          <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 relative z-10">
            
            {/* Official Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-[#0B4ED9] transition-all">
                <img 
                  src="https://xobolt.in/wp-content/uploads/2025/06/Logo-with-no-bg.png" 
                  alt="XOBOLT Logo" 
                  className="h-5 w-auto object-contain"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-wider text-[#0F172A]">
                XOBOLT
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/60 backdrop-blur-md rounded-2xl p-1.5 border border-slate-200/60 shadow-inner">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 lg:px-5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive 
                        ? 'liquid-pill text-white font-extrabold shadow-sm' 
                        : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenFindCharger}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-[#0B4ED9] hover:text-white border border-slate-200 shadow-sm transition-all duration-300"
              >
                <Search size={14} className="text-[#0B4ED9] group-hover:text-white transition-colors" />
                <span>Find Charger</span>
              </button>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#0B4ED9] shadow-md transition-all duration-300"
              >
                <span>Request Quote</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-900 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (Fullscreen Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl px-6 pt-32 pb-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B4ED9]">
                Navigation Menu
              </span>
              {navLinks.map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-display font-black text-[#0F172A] hover:text-[#0B4ED9] transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-slate-200/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFindCharger();
                }}
                className="w-full py-3.5 rounded-xl bg-white text-[#0F172A] font-mono text-xs uppercase font-bold tracking-wider border border-slate-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <Search size={14} className="text-[#0B4ED9]" />
                <span>Find Charger</span>
              </button>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl bg-[#0B4ED9] text-white font-mono text-xs uppercase font-bold tracking-wider shadow-[0_8px_20px_rgba(11,78,217,0.25)]"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
