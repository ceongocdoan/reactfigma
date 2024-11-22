// import React from 'react';

// import { IconButton } from './IconButton';
// import { Logo } from './logo';

// export const Header = () => {
//   const navigationIcons = [
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/22fc5c13350bc011763ebb31e888a908357f2532e9a50be57d70166cb6e51390?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Navigation Menu" },
//     { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff9f96134545d54ea44c8a8d7c3b015b3fa8f83312a99547a1ca9048ff988357?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "User Profile" }
//   ];

//   return (
//     <header className="flex flex-col justify-center w-full min-h-[72px]">
//       <nav className="flex gap-10 justify-between items-center pr-3 pl-4 w-full">
//         <Logo />
//         <div className="flex gap-2 items-center self-stretch my-auto w-[143px]">
//           {navigationIcons.map((icon, index) => (
//             <IconButton key={index} {...icon} />
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };