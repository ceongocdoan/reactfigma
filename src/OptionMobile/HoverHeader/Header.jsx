import React from 'react';

function Header() {
  return (
    <header className="flex flex-col py-px w-full bg-white border-b border-gray-200">
      <div className="flex flex-col justify-center w-full min-h-[72px]">
        <div className="flex gap-10 justify-between items-center pr-3 pl-4 w-full">
          <div className="flex items-start self-stretch my-auto min-h-[32px] w-[142px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/2753a381c5bc7c035a3c5035181f17ba296129cc132adac60ad2461b2d7e9b9f?apiKey=057aab5311cf46f4b038f586fb84e77f&" alt="Company logo" className="object-contain w-12 aspect-[1.55]" />
          </div>
          <div className="flex gap-2 items-center self-stretch my-auto w-[143px]">
            <div className="flex shrink-0 self-stretch my-auto w-10 h-10"></div>
            <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto w-10 rounded-lg" aria-label="Navigation menu">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/333e9663d086b8e04d447872ea655a08ab800cba973c3bf4f05b9284d68ac5e2?apiKey=057aab5311cf46f4b038f586fb84e77f&" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;