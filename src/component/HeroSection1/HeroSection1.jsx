

import React from 'react';
import BackgroundImage from './BackgroundImage';
import ContentImage from './ContentImage';
import Button from './Button';
import Text from './Text';
import OnSchoolSection from '../SloganMobile/OnschoolHero';

function HeroSection1() {
  return (
    <section className="relative w-full flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        {/* <BackgroundImage /> */}
      </div>

      {/* Content Image */}
      {/* <ContentImage /> */}

      <div className="w-full px-4 py-8">
        
      </div>
      <OnSchoolSection />
    </section>
  );
}

export default HeroSection1;
