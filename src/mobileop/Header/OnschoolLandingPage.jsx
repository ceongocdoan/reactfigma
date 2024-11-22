import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';

function OnschoolLandingPage() {
  return (
    <div data-layername="option1MobileNeutral" className="flex overflow-hidden flex-col mx-auto w-full bg-sky-50 max-w-[644px]">
      <Header/>
      <div>
        <HeroSection />
      </div>
    </div>
  );
}

export default OnschoolLandingPage;