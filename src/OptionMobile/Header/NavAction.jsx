import React, {useState} from 'react';
import CareerPathSection from '../HoverHeader/CareerPathSection';
import SkillPathSection from '../HoverHeader/SkillPathSection';

function NavAction() {
  const [isNavigationMenuVisible, setIsNavigationMenuVisible] = useState(false);

  const handleClick = () => {
    setIsNavigationMenuVisible(!isNavigationMenuVisible);
  }
  const closeMenu = () => {
    setIsNavigationMenuVisible(false)
  } 

  return (
    <div className="flex gap-2 items-center self-stretch my-auto w-auto">
      <div data-layername="actions" className="flex gap-1 items-start self-stretch my-auto w-10">
        <button data-layername="navItemButton" className="flex overflow-hidden justify-center items-center p-2 w-10 rounded-md">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22fc5c13350bc011763ebb31e888a908357f2532e9a50be57d70166cb6e51390?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="Navigation Item" className="object-contain self-stretch my-auto w-6 aspect-square" />
        </button>
      </div>
      <button 
        data-layername="navMenuButton" 
        className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto w-10 rounded-lg"
        onClick={handleClick}
        >
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff9f96134545d54ea44c8a8d7c3b015b3fa8f83312a99547a1ca9048ff988357?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="Menu" className="object-contain self-stretch my-auto w-6 aspect-square" />
      </button>

      {isNavigationMenuVisible && (
        <>
          <div className="fixed top-0 left-0 w-full h-[calc(100vh)] z-40 bg-white bg-opacity-50 backdrop-blur-sm shadow-lg overflow-y-auto">
            <div className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
              <header className="flex flex-col py-px w-full bg-white border-b border-gray-200">
                <div className="flex flex-col justify-center w-full min-h-[72px]">
                  <div className="flex gap-10 justify-between items-center pr-3 pl-4 w-full">
                    <div className="flex items-start self-stretch my-auto min-h-[32px] w-[142px]">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/2753a381c5bc7c035a3c5035181f17ba296129cc132adac60ad2461b2d7e9b9f?apiKey=057aab5311cf46f4b038f586fb84e77f&" alt="Company logo" className="object-contain w-12 aspect-[1.55]" />
                    </div>
                    <div className="flex gap-2 items-center self-stretch my-auto w-auto">
                      <div className="flex shrink-0 self-stretch my-auto w-10 h-10"></div>
                      <button 
                        className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto w-10 rounded-lg" 
                        aria-label="Navigation menu"
                        onClick={closeMenu}
                      >
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/333e9663d086b8e04d447872ea655a08ab800cba973c3bf4f05b9284d68ac5e2?apiKey=057aab5311cf46f4b038f586fb84e77f&" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
                      </button>
                    </div>
                  </div>
                </div>
              </header>

              <nav className="flex overflow-hidden z-10 flex-col mt-0 w-full bg-white shadow-lg">
                <div className="flex overflow-hidden flex-col w-full bg-white shadow-lg">
                  <div className="flex flex-col py-6 w-full border-b border-gray-200">
                    <button onClick={closeMenu} className="flex overflow-hidden gap-1.5 justify-center items-center self-start p-4 text-sm font-semibold leading-5 text-slate-600">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/e9504322d35402bbf29587bc9ae0e2552df0ebbdd2e46dff1bcc65c70b1e6965?apiKey=057aab5311cf46f4b038f586fb84e77f&" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                      <span 
                        className="self-stretch my-auto"
                        >Trở về</span>
                    </button>
                    <div className="flex overflow-hidden flex-col w-full bg-white">
                      <div className="flex overflow-hidden flex-col w-full">
                        <CareerPathSection />
                        <SkillPathSection/>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>

    
  );
}

export default NavAction;