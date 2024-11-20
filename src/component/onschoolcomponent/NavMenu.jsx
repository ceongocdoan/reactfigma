// import React from 'react';

// const NavMenu = () => {
//   const menuItems = [
//     { text: 'Công ty', hasDropdown: false },
//     { text: 'Lộ trình', hasDropdown: true },
//     { text: 'Tài nguyên', hasDropdown: true },
//     { text: 'Blogs', hasDropdown: true }
//   ];

//   return (
//     <nav className="flex gap-8 items-center self-stretch my-auto text-base font-semibold leading-6 min-w-[240px] text-slate-600 max-md:max-w-full">
//       {menuItems.map((item, index) => (
//         <div key={index} className={`flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto ${item.text === 'Công ty' ? '' : 'whitespace-nowrap'}`}>
//           <div className="self-stretch my-auto">{item.text}</div>
//           {item.hasDropdown && (
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?apiKey=ac8d84f3191644fbac37f90f1063bf65&" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
//           )}
//         </div>
//       ))}
//     </nav>
//   );
// };

// export default NavMenu;