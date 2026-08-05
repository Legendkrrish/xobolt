import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition';

// Modular Storytelling Components
import HeroSequence from '../components/home/HeroSequence';
import OurPartners from '../components/home/OurPartners';
import WhyXoboltCards from '../components/home/WhyXoboltCards';
import ProductsShowcase from '../components/home/ProductsShowcase';
import ExplodedView from '../components/home/ExplodedView';
import IndustriesScroll from '../components/home/IndustriesScroll';
import WhyBusinessesChoose from '../components/home/WhyBusinessesChoose';
import InstallationProcess from '../components/home/InstallationProcess';
import SmartFeatures from '../components/home/SmartFeatures';
import TrustNumbers from '../components/home/TrustNumbers';
import StackedTestimonials from '../components/home/StackedTestimonials';
import FaqAccordion from '../components/home/FaqAccordion';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-white text-[#0F172A] overflow-x-clip">
        
        {/* Section 1: Hero */}
        <HeroSequence />

        {/* Section 2: Enterprise Partners Marquee (Immediately after Hero) */}
        <OurPartners />

        {/* Section 3: Why XOBOLT 4 Floating Cards */}
        <WhyXoboltCards />

        {/* Section 4: Storytelling Products Showcase */}
        <ProductsShowcase />

        {/* Section 5: Interactive Charger Exploded View */}
        <ExplodedView />

        {/* Section 6: Industries We Serve Horizontal Scroll */}
        <IndustriesScroll />

        {/* Section 7: Why Businesses Choose XOBOLT Timeline */}
        <WhyBusinessesChoose />

        {/* Section 8: Turnkey Installation Process */}
        <InstallationProcess />

        {/* Section 9: Smart Features */}
        <SmartFeatures />

        {/* Section 10: Trust Section & Real Numbers */}
        <TrustNumbers />

        {/* Section 11: Stacked Partner Testimonials */}
        <StackedTestimonials />

        {/* Section 12: Apple FAQ Accordion */}
        <FaqAccordion />

        {/* Section 13: Final CTA */}
        <FinalCTA />

      </div>
    </PageTransition>
  );
}
