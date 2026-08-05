import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import HostAChargerPage from '../pages/HostAChargerPage';
import SolutionsPage from '../pages/SolutionsPage';
import NetworkPage from '../pages/NetworkPage';
import ContactPage from '../pages/ContactPage';

export default function AnimatedRoutes({ onOpenFindCharger }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage onOpenFindCharger={onOpenFindCharger} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/host-a-charger" element={<HostAChargerPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}
