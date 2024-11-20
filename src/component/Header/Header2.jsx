import React from 'react';
import Logo from './Logo2';
import Navigation from './Navigation2';
import SearchBar from './SearchBar2';
import AuthButtons from './AuthButtons1';

function Header2() {
  return (
    <header className="flex flex-col justify-center items-center w-full min-h-[80px] max-md:max-w-full">
      <div className="flex px-8 justify-between items-center w-full max-w-screen-xl max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <Logo />
          {/* Hiển thị Navigation trên màn hình lớn */}
          <div className="custom-1180:block hidden">
            <Navigation />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center self-stretch my-auto text-base leading-6 min-w-[240px] max-md:max-w-full">
          {/* Hiển thị SearchBar trên màn hình lớn */}
          <div className="custom-928:block hidden">
            <SearchBar />
          </div>
          {/* AuthButtons luôn hiển thị */}
          <div>
            <AuthButtons />
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header2;
// import React from 'react';
// import Logo from './Logo2';
// import Navigation from './Navigation2';
// import SearchBar from './SearchBar2';
// import AuthButtons from './AuthButtons1';

// function Header2() {
//   return (
//     <header className="flex flex-col items-center w-full min-h-[80px] bg-gray-50">
//       {/* Container chính */}
//       <div className="flex justify-between items-center w-full max-w-screen-xl px-4 md:px-8">
//         {/* Logo và Navigation */}
        
//         <div className="flex items-center gap-0 ">
//           <div className="min-w-[140px]  pl-0  ">
           
//             <Logo />
//           </div>
//           <div className="hidden md:block">
//             {/* Navigation hiển thị trên màn hình lớn */}
//             <Navigation />
//           </div>
//         </div>

//         {/* SearchBar và AuthButtons */}
//         <div className="flex items-center gap-0">
//           <div className="hidden md:block ">
//             {/* SearchBar chỉ hiển thị trên màn hình lớn */}
//             <SearchBar />
//           </div>
//           <AuthButtons />
//         </div>
//       </div>

//       {/* Navigation ở chế độ Mobile */}
//       <div className="w-full block md:hidden mt-2">
//         <Navigation />
//       </div>
//     </header>
//   );
// }

// export default Header2;
