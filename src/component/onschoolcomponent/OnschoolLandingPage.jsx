import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';

const OnschoolLandingPage = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-sky-50">
      <div className="flex overflow-hidden relative flex-col pb-12 min-h-[960px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49c3c04c50ffdce8791f1b8bbdf8bf467ffee2501506a934b8c411bf12826e08?apiKey=ac8d84f3191644fbac37f90f1063bf65&" alt="Background" className="object-cover absolute inset-0 size-full" />
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default OnschoolLandingPage;