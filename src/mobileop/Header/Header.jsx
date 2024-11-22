import React from 'react';
import Logo from './Logo';
import NavAction from './NavAction';

function Header() {
  return (
    <header data-layername="headerNavigation" className="flex flex-col w-full bg-sky-50">
      <div data-layername="header" className="flex flex-col justify-center w-full min-h-[72px]">
        <div data-layername="container" className="flex gap-10 justify-between items-center pr-3 pl-4 w-full">
          <Logo/>
          <NavAction/>
        </div>
      </div>
    </header>
  );
}

export default Header;