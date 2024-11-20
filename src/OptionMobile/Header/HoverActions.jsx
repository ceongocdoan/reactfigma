import React, { useState } from 'react';
import NavActions from './NavActions';
import LearningPlatform from './LearningPlatform';

function HoverActions() {
  const [isNavigationMenuVisible, setIsNavigationMenuVisible] = useState(false);

  const closeMenu = () => {
    setIsNavigationMenuVisible(false); // Hàm đóng menu
  };

  return (
    <div className="App">
      <NavActions
        isNavigationMenuVisible={isNavigationMenuVisible}
        setIsNavigationMenuVisible={setIsNavigationMenuVisible}
      />
      {isNavigationMenuVisible && (
        <LearningPlatform closeMenu={closeMenu} />
      )}
    </div>
  );
}

export default HoverActions;
