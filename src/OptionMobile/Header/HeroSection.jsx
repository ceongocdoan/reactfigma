import React from 'react';
import FloatingButton from './FloatingButton';

function HeroSection() {
  return (
    <section className="flex relative flex-col pt-20 w-full aspect-[0.280] max-h-[800px]">
      <img loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed0e5993c95c04bee34b9f2e6391e057249e6dabaddd2ddee3df16903f5fb50?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" 
        alt="Hero background" 
        className="object-cover absolute inset-0 size-full" 
      />
      <div data-layername="container" className="flex relative items-start px-4 h-[268px]">
        <div data-layername="content" className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <div data-layername="headingAndSupportingText" className="flex flex-col w-full">
            <h1 data-layername="headingAndBadge" className="w-full text-4xl font-semibold tracking-tighter leading-10 text-sky-700">
              ONSCHOOL - MỞ KHÓA KỸ NĂNG - NÂNG TẦM SỰ NGHIỆP
            </h1>
            <p data-layername="supportingText" className="mt-4 text-lg leading-7 text-slate-700">
              Phát triển các kỹ năng theo xu thế ứng dụng công nghệ vào thực tiễn - Mang lại kỹ năng làm việc thiết yếu cho hàng triệu người một cách hiệu quả
            </p>
          </div>
          <div data-layername="actions" className="flex flex-col mt-8 w-full text-base font-semibold leading-6 text-white">
            <button data-layername="buttonsButton" className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 w-full bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
              <span data-layername="text" className="self-stretch px-0.5 my-auto">
                Bắt đầu ngay!
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex bottom-0 max-w-[644px]">
          
        <img src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/f7957849553f8758047b04274e0fe5f5ec6abb29f8bb749643f02a21b92a4ba5?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
              alt="Main Person" 
              class="w-[89px] h-[89px] absolute bottom-[29%] left-[2%] z-10" 
          />

        <img src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/2d0a506104a4f8cb26af642fd7db91668efeea8ca7311a4ad020d7218844bcbf?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
            alt="Icon 1" 
            class="w-[35px] h-[35px] absolute top-[58%] left-[30%] z-10" 
        />

        <img src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/9ac1f63567dac00536fbfe33bc81fe39942a378e9e9c5f52fda535b3b60c5b3a?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
            alt="Icon 2" 
            class="w-[24px] h-[24px] absolute bottom-[5%] left-[5%] z-10"
        />
        <div className="absolute right-[5%] bottom-[8%] z-15">
          <FloatingButton />
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/21d0e92aaeb6bbcd4225e3cd191dfd5df77194d48d04a292148ac899527c61b7?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
            alt="Icon 3" 
            class="w-[35px] h-[35px] absolute bottom-[29%] right-[6%] z-10" 
        />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/c18655d35bdde29916abfea380762c439aec150f9aafeeea64de66c21a61ddaa?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
              alt="Hero illustration" 
              className="absolute bottom-0 object-contain justify-self-center w-full z-5" 
        />
    </div>

    </section>
  );
}

export default HeroSection;

// import React from 'react';
// import FloatingButton from './FloatingButton';

// function HeroSection() {
//   return (
//     <section className="flex relative flex-col pt-20 w-full aspect-[0.507] max-h-[800px]">
//       <img loading="lazy" 
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed0e5993c95c04bee34b9f2e6391e057249e6dabaddd2ddee3df16903f5fb50?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" 
//         alt="Hero background" 
//         className="object-cover absolute inset-0 size-full" 
//       />
//       <div data-layername="container" className="flex relative items-start px-4 h-[268px]">
//         <div data-layername="content" className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
//           <div data-layername="headingAndSupportingText" className="flex flex-col w-full">
//             <h1 data-layername="headingAndBadge" className="w-full text-4xl font-semibold tracking-tighter leading-10 text-sky-700">
//               ONSCHOOL - MỞ KHÓA KỸ NĂNG - NÂNG TẦM SỰ NGHIỆP
//             </h1>
//             <p data-layername="supportingText" className="mt-4 text-lg leading-7 text-slate-700">
//               Phát triển các kỹ năng theo xu thế ứng dụng công nghệ vào thực tiễn - Mang lại kỹ năng làm việc thiết yếu cho hàng triệu người một cách hiệu quả
//             </p>
//           </div>
//           <div data-layername="actions" className="flex flex-col mt-8 w-full text-base font-semibold leading-6 text-white">
//             <button data-layername="buttonsButton" className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 w-full bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
//               <span data-layername="text" className="self-stretch px-0.5 my-auto">
//                 Bắt đầu ngay!
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex bottom-0 max-w-[644px]">
          
//         <img src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/f7957849553f8758047b04274e0fe5f5ec6abb29f8bb749643f02a21b92a4ba5?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
//               alt="Main Person" 
//               class="w-[89px] h-[89px] absolute bottom-[29%] left-[2%] z-10" 
//           />

//         <img src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/2d0a506104a4f8cb26af642fd7db91668efeea8ca7311a4ad020d7218844bcbf?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
//             alt="Icon 1" 
//             class="w-[35px] h-[35px] absolute top-[58%] left-[30%] z-10" 
//         />

//         <img src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/9ac1f63567dac00536fbfe33bc81fe39942a378e9e9c5f52fda535b3b60c5b3a?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
//             alt="Icon 2" 
//             class="w-[24px] h-[24px] absolute bottom-[5%] left-[5%] z-10"
//         />
//         <div className="absolute right-[5%] bottom-[8%] z-15">
//           <FloatingButton />
//         </div>
//         <img src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/21d0e92aaeb6bbcd4225e3cd191dfd5df77194d48d04a292148ac899527c61b7?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
//             alt="Icon 3" 
//             class="w-[35px] h-[35px] absolute bottom-[29%] right-[6%] z-10" 
//         />
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/c18655d35bdde29916abfea380762c439aec150f9aafeeea64de66c21a61ddaa?apiKey=057aab5311cf46f4b038f586fb84e77f&" 
//               alt="Hero illustration" 
//               className="absolute bottom-0 object-contain justify-self-center w-full z-5" 
//         />
//     </div>

//     </section>
//   );
// }

// export default HeroSection;