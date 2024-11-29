import React, {useEffect, useState} from 'react';
import Logo from './Logo2';
import Navigation from './Navigation2';
import SearchBar from './SearchBar2';
import AuthButtons from './AuthButtons1';

function Header2() {
  return (
    <header className="flex flex-col justify-center items-center w-full min-h-[80px] max-md:max-w-full">
      <div className="flex  justify-between items-center w-full max-w-screen-xl max-md:max-w-full">
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
