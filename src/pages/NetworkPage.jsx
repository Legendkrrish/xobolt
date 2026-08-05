import React from 'react';
import IndiaMapSection from '../components/IndiaMapSection';

import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';

export default function NetworkPage() {
  return (
    <PageTransition>
      <div className="pt-24 bg-hardware-launch text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
        <Reveal width="100%">
          <IndiaMapSection />
        </Reveal>
      </div>
    </PageTransition>
  );
}
