// import React from 'react';

// function NavActions() {

//   return (
//     <div className="flex gap-2 items-center self-stretch my-auto w-[25%]">
//       <div data-layername="actions" className="flex gap-1 items-start self-stretch my-auto w-10">
//         <button data-layername="navItemButton" className="flex overflow-hidden justify-center items-center p-2 w-10 rounded-md">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22fc5c13350bc011763ebb31e888a908357f2532e9a50be57d70166cb6e51390?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="Navigation Item" className="object-contain self-stretch my-auto w-6 aspect-square" />
//         </button>
//       </div>
//       <button 
//         data-layername="navMenuButton" 
//         className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto w-10 rounded-lg"
//         >
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff9f96134545d54ea44c8a8d7c3b015b3fa8f83312a99547a1ca9048ff988357?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="Menu" className="object-contain self-stretch my-auto w-6 aspect-square" />
//       </button>
//     </div>

    
//   );
// }

// export default NavActions;


import React, {useState} from 'react';
import LearningPlatform from '../HoverHeader/LearningPlatform';

function NavActions() {
  const [isNavigationMenuVisible, setIsNavigationMenuVisible] = useState(false);

  const handleClick = () => {
    setIsNavigationMenuVisible(!isNavigationMenuVisible);
  }

  return (
    <div className="flex gap-2 items-center self-stretch my-auto w-[25%]">
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
            <LearningPlatform />
          </div>
        </>
      )}
    </div>

    
  );
}

export default NavActions;