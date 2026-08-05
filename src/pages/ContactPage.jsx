import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, ChevronRight, Home, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import MagneticButton from '../components/MagneticButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pincode: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Xobolt! Our team will get back to you shortly.');
    setFormData({ name: '', phone: '', email: '', pincode: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-hardware-launch text-slate-900 pt-32 pb-24 font-sans relative selection:bg-slate-900 selection:text-white">
      
      {/* Page Header */}
      <Reveal width="100%">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center space-x-2 text-sm text-slate-500 mb-4 font-mono uppercase tracking-wider">
            <Link to="/" className="hover:text-slate-900 transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" /> Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            Contact Us<span className="text-slate-500">.</span>
          </h1>
        </div>
      </Reveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        
        {/* Left Side Content */}
        <Reveal width="100%">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Zap className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase leading-tight text-slate-900">
              HAPPY TO <span className="text-slate-500">HELP!</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-sans max-w-xl">
              Have questions about EV charging, XOBOLT products, or partnership opportunities? Our team is ready to assist you with expert support and personalized solutions.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4 p-6 apple-glass-panel rounded-2xl hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</h3>
                  <a href="tel:+917374002121" className="text-xl font-display font-bold text-slate-900 hover:text-slate-600 transition-colors mt-1 block">
                    +91 7374-00-2121
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 apple-glass-panel rounded-2xl hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h3>
                  <a href="mailto:support@xobolt.in" className="text-xl font-display font-bold text-slate-900 hover:text-slate-600 transition-colors mt-1 block">
                    support@xobolt.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 apple-glass-panel rounded-2xl hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Headquarters</h3>
                  <p className="text-slate-800 text-sm font-semibold mt-1">
                    P.N. 44, Jai Bhawani Nagar, Khatipura, Jaipur, Rajasthan 302012
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal width="100%" delay={0.2}>
          <div className="apple-glass-panel rounded-[2rem] p-8 sm:p-10 shadow-lg relative overflow-hidden">
            <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Full Name *</label>
                <input 
                  type="text" name="name" required value={formData.name} onChange={handleChange} 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none transition-colors shadow-sm" 
                  placeholder="Enter your name" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Mobile Number *</label>
                  <input 
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none transition-colors shadow-sm" 
                    placeholder="+91" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Pin Code *</label>
                  <input 
                    type="number" name="pincode" required value={formData.pincode} onChange={handleChange} 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none transition-colors shadow-sm" 
                    placeholder="302012" 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Email Address *</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleChange} 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none transition-colors shadow-sm" 
                  placeholder="your@email.com" 
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Message</label>
                <textarea 
                  name="message" rows="4" value={formData.message} onChange={handleChange} 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none transition-colors shadow-sm resize-none" 
                  placeholder="How can we help you?" 
                />
              </div>

              <div className="pt-2">
                <MagneticButton 
                  type="submit" 
                  className="w-full"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </MagneticButton>
              </div>
            </form>
          </div>
        </Reveal>

      </div>

      {/* Google Maps Location */}
      <Reveal width="100%" delay={0.4}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-[400px]">
            <iframe
              title="Xobolt Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4334234567!2d75.7485!3d26.9211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU1JzE2LjAiTiA3NcKwNDQnNTQuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Reveal>

      </div>
    </PageTransition>
  );
}
