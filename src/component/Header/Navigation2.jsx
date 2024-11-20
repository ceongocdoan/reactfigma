import React from 'react';

function Navigation2() {
  const navItems = [
    { label: 'Công ty', hasDropdown: false },
    { label: 'Lộ trình', hasDropdown: true },
    { label: 'Tài nguyên', hasDropdown: true },
    { label: 'Blogs', hasDropdown: true }
  ];

  return (
    <nav className="flex gap-6 items-center self-stretch my-auto text-base font-semibold leading-6 min-w-[240px] text-slate-600 max-md:max-w-full">
      {navItems.map((item, index) => (
        <div key={index} className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto">
          <div className="self-stretch my-auto">{item.label}</div>
          {item.hasDropdown && (
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
          )}
        </div>
      ))}
    </nav>
  );
}

export default Navigation2;


// import React, { useState } from 'react';
// import NavMenuItem from './NavMenuItem';
// import NavigationMenu from '../HoverRoadmap/NavigationMenu';

// function NavMenu() {
//   const [isNavigationMenuVisible, setIsNavigationMenuVisible] = useState(false);

//   const menuItems = [
//     { text: 'Công ty', hasDropdown: false },
//     { text: 'Lộ trình', hasDropdown: true },
//     { text: 'Tài nguyên', hasDropdown: true },
//     { text: 'Blogs', hasDropdown: true }
//   ];

//   const handleClick = (text) => {
//     if (text === 'Lộ trình') {
//       setIsNavigationMenuVisible(!isNavigationMenuVisible);
//     }
//   };

//   return (
//     <div className="relative">
//       <nav className="flex gap-6 items-center self-stretch my-auto text-base font-semibold leading-6 min-w-[240px] text-slate-600 max-md:max-w-full">
//         {menuItems.map((item, index) => (
//           <NavMenuItem
//             key={index}
//             text={item.text}
//             hasDropdown={item.hasDropdown}
//             onClick={() => handleClick(item.text)}
//           />
//         ))}
//       </nav>
      
//       {isNavigationMenuVisible && (
//         <>
//           <div className="fixed top-[76px] left-0 w-full h-[calc(100vh)] z-10 bg-white bg-opacity-50 backdrop-blur-sm shadow-lg overflow-y-auto">
//             <NavigationMenu />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default NavMenu;