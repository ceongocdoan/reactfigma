import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import NavigationMenu from './NavigationMenu';

function LearningPlatform() {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <Header />
      <NavigationMenu />
    </div>
  );
}

export default LearningPlatform;