import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import AuthButtons from './AuthButtons';
import NavMenu from './NavMenu';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="flex relative flex-col justify-center items-center w-full min-h-[80px] max-md:-mr-0.5 max-md:max-w-full">
      <div className="flex justify-between items-center w-full max-w-screen-xl max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <Logo />
          <NavMenu />
        </div>
        <div className="flex flex-wrap gap-2 items-start self-stretch my-auto text-base leading-6 min-w-[240px] max-md:max-w-full">
          <SearchBar />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from 'react';
// import Logo from './Logo';
// import SearchBar from './SearchBar';
// import AuthButtons from './AuthButtons';
// import NavMenu from './NavMenu';

// const Header = () => {
//   return (
//     <header className="flex relative flex-col justify-center items-center w-full min-h-[80px] max-md:max-w-full">
//       <div className="flex justify-between items-center w-full max-w-screen-xl px-4 md:px-8">
//         {/* Logo và NavMenu */}
//         <div className="flex items-center gap-6">
//           <Logo />
//           <div className="hidden md:block">
//             <NavMenu />
//           </div>
//         </div>

//         {/* SearchBar và AuthButtons */}
//         <div className="flex items-center gap-4 ml-auto">
//           <div className="hidden md:block">
//             <SearchBar />
//           </div>
//           <AuthButtons />
//         </div>
//       </div>

//       {/* NavMenu ở chế độ Mobile */}
//       <div className="w-full block md:hidden mt-2">
//         <NavMenu />
//       </div>
//     </header>
//   );
// };

// export default Header;
