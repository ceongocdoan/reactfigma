import React from 'react';

function Button() {
  return (
    <button className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 mt-8 text-base font-semibold leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700">
      <span className="self-stretch px-0.5 my-auto">
        Khám phá ngay khoá học
      </span>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9f4ea8b5c0e48d7367d5f47bef95176bc8d8bd88a50a59a3a32d7b84101a9ed?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" 
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" 
      />
    </button>
  );
}

export default Button;