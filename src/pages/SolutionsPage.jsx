import React from 'react';
import BusinessSolutions from '../components/BusinessSolutions';

import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';

export default function SolutionsPage() {
  return (
    <PageTransition>
      <div className="pt-24 bg-hardware-launch text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
        <Reveal width="100%">
          <BusinessSolutions />
        </Reveal>
      </div>
    </PageTransition>
  );
}
