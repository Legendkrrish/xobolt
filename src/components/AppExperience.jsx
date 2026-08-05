import React, { useState } from 'react';
import { Smartphone, MapPin, QrCode, CreditCard, BarChart3, Zap, Shield, ChevronRight } from 'lucide-react';

export default function AppExperience() {
  const [activeTab, setActiveTab] = useState(0);

  const appScreens = [
    {
      id: 'search',
      title: 'Live Charger Search & Slot Reserve',
      icon: MapPin,
      tagline: 'Real-time Station Telemetry',
      description: 'Locate 12,000+ fast chargers across India, check live gun availability, reserve charging slots in advance, and navigate via Google Maps / Apple Maps integration.',
      screenContent: {
        header: 'Near You in Bengaluru',
        cardTitle: 'Xobolt HyperCharge Plaza',
        dist: '1.2 km away',
        power: '360 kW DC Fast',
        available: '3 of 4 Guns Available',
        buttonText: 'Reserve Slot Now'
      }
    },
    {
      id: 'session',
      title: 'One-Tap QR Scan & Charge Telemetry',
      icon: QrCode,
      tagline: 'Instant Session Control',
      description: 'Scan the station QR code to start charging instantly. Monitor real-time voltage, current draw, battery percentage curve, and estimated completion time in real-time.',
      screenContent: {
        header: 'Active Charging Session',
        cardTitle: 'Tata Nexon EV Max',
        dist: '78% Charged',
        power: '118 kW Current Rate',
        available: '11 Mins to 80%',
        buttonText: 'Stop Charging Session'
      }
    },
    {
      id: 'payment',
      title: 'Seamless Instant UPI & Auto-Debit',
      icon: CreditCard,
      tagline: 'Zero Friction Payments',
      description: 'Pay instantly via GPay, PhonePe, Paytm, Credit Cards, or setup Xobolt Wallet for automatic Plug & Charge billing with instant GST tax invoices sent to email.',
      screenContent: {
        header: 'Payment Complete',
        cardTitle: 'Session Summary',
        dist: '34.5 kWh Delivered',
        power: 'Total: ₹517.50',
        available: 'GST Invoice #XB-98214 Generated',
        buttonText: 'Download Invoice PDF'
      }
    },
    {
      id: 'analytics',
      title: 'Energy Insights & Fleet Telemetry',
      icon: BarChart3,
      tagline: 'Carbon & Cost Analytics',
      description: 'Track your monthly kWh consumption, money saved compared to petrol, carbon footprint abated, and battery health degradation diagnostics.',
      screenContent: {
        header: 'Monthly Energy Summary',
        cardTitle: 'July 2026 Fleet Telemetry',
        dist: '420 kWh Total Energy',
        power: '₹14,200 Fuel Saved',
        available: '385 kg CO2 Abated',
        buttonText: 'Export Fleet Analytics'
      }
    }
  ];

  const currentAppScreen = appScreens[activeTab];
  const CurrentTabIcon = currentAppScreen.icon;

  return (
    <section id="app-experience" className="relative py-28 bg-[#070A0F] border-t border-slate-900 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(56,255,122,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#38FF7A]">
            <Smartphone className="w-3.5 h-3.5" />
            <span>SECTION 09 — MOBILE OS APP</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            The Xobolt App. <br />
            <span className="text-[#38FF7A]">Control Power From Anywhere.</span>
          </h2>

          <p className="text-slate-300 font-sans text-base">
            Available on iOS and Android. Rated 4.9/5 by over 1.2 million EV drivers across India.
          </p>
        </div>

        {/* Feature Tabs & Smartphone Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Tabs Selection Column */}
          <div className="lg:col-span-6 space-y-4">
            {appScreens.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-6 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-slate-900 border-[#38FF7A] shadow-[0_0_25px_rgba(56,255,122,0.2)] scale-[1.01]'
                      : 'bg-[#0E131F]/40 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#38FF7A] text-black shadow-[0_0_15px_#38FF7A]' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#38FF7A] font-bold uppercase tracking-wider block">
                      {tab.tagline}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white">
                      {tab.title}
                    </h3>
                    <p className="text-xs font-sans text-slate-400 leading-relaxed">
                      {tab.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Floating Interactive Smartphone Mockup */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Phone Outer Shadow / Glow */}
            <div className="absolute w-[300px] h-[580px] bg-[#38FF7A]/20 blur-3xl rounded-[50px] pointer-events-none" />

            {/* iPhone Frame */}
            <div className="relative w-[300px] sm:w-[330px] h-[600px] sm:h-[640px] rounded-[48px] bg-[#0B0F17] border-[8px] border-slate-800 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
              
              {/* Top Notch & Camera Island */}
              <div className="w-full flex justify-center z-20">
                <div className="w-28 h-5 bg-black rounded-b-2xl flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900" />
                </div>
              </div>

              {/* Dynamic App UI Content */}
              <div className="my-auto space-y-4 p-2 transition-all duration-500 z-10">
                
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-2">
                  <span className="text-[#38FF7A] font-bold">XOBOLT OS v4.2</span>
                  <span>9:41 AM</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    {currentAppScreen.screenContent.header}
                  </span>
                  <h4 className="text-xl font-display font-bold text-white">
                    {currentAppScreen.screenContent.cardTitle}
                  </h4>
                </div>

                {/* Simulated Screen Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-[#141B2B] border border-slate-700 space-y-3 shadow-xl">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-[#38FF7A]">
                      {currentAppScreen.screenContent.dist}
                    </span>
                    <CurrentTabIcon className="w-5 h-5 text-[#38FF7A]" />
                  </div>

                  <p className="text-xs font-sans text-slate-300 font-medium">
                    {currentAppScreen.screenContent.power}
                  </p>

                  <div className="p-2.5 rounded-xl bg-black/60 border border-slate-800 text-[11px] font-mono text-slate-300">
                    {currentAppScreen.screenContent.available}
                  </div>

                </div>

                {/* Simulated Primary App Action Button */}
                <button className="w-full py-3.5 rounded-2xl bg-[#38FF7A] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,255,122,0.4)]">
                  <span>{currentAppScreen.screenContent.buttonText}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-full flex justify-center pb-1 z-20">
                <div className="w-32 h-1 rounded-full bg-slate-700" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
