import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FindChargerModal from './components/FindChargerModal';
import SmoothScroll from './components/SmoothScroll';
import NoiseOverlay from './components/NoiseOverlay';

import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  const [isFindChargerOpen, setIsFindChargerOpen] = useState(false);

  return (
    <SmoothScroll>
      <Router>
        <NoiseOverlay />
        <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#0B4ED9] selection:text-white relative flex flex-col justify-between">
        
        {/* Main App Layout */}
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Navigation Bar */}
          <Navbar onOpenFindCharger={() => setIsFindChargerOpen(true)} />

          {/* Router Views */}
          <main className="flex-1 overflow-x-clip">
            <AnimatedRoutes onOpenFindCharger={() => setIsFindChargerOpen(true)} />
          </main>

          {/* Ultra-Premium Footer */}
          <Footer onOpenFindCharger={() => setIsFindChargerOpen(true)} />

        </div>

        {/* Interactive Find Charger Search Modal */}
        <FindChargerModal
          isOpen={isFindChargerOpen}
          onClose={() => setIsFindChargerOpen(false)}
        />

      </div>
    </Router>
  </SmoothScroll>
  );
}
