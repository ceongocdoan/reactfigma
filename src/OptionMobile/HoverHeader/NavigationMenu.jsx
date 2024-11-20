import React from 'react';
import CareerPathSection from './CareerPathSection';
import SkillPathSection from './SkillPathSection';

function NavigationMenu() {
  return (
    <nav className="flex overflow-hidden z-10 flex-col mt-0 w-full bg-white shadow-lg">
      <div className="flex overflow-hidden flex-col w-full bg-white shadow-lg">
        <div className="flex flex-col py-6 w-full border-b border-gray-200">
          <button className="flex overflow-hidden gap-1.5 justify-center items-center self-start p-4 text-sm font-semibold leading-5 text-slate-600">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/e9504322d35402bbf29587bc9ae0e2552df0ebbdd2e46dff1bcc65c70b1e6965?apiKey=057aab5311cf46f4b038f586fb84e77f&" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <span className="self-stretch my-auto">Trở về</span>
          </button>
          <div className="flex overflow-hidden flex-col w-full bg-white">
            <div className="flex overflow-hidden flex-col w-full">
              <CareerPathSection />
              <SkillPathSection />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;