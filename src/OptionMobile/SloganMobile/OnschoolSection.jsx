import React from 'react';
import HeadingAndSupportingText from './HeadingAndSupportingText';
import Button from './Button';

function OnSchoolSection() {
  return (
    <section className="flex overflow-hidden mx-auto flex-col items-end max-w-[644px] ">
      <div className="flex relative mx-auto flex-col py-16 max-w-full bg-sky-600 ">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1aaf2fa6f794440e585be4c51bfe149e8be243bc474b5b2553cbdacea36a17?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" 
          alt=""
          className="object-contain absolute bottom-0 z-0 aspect-[2.65] h-[552px] left-[-365px] w-[552px]" 
        />
        <div className="flex z-0 flex-col self-center px-4 w-full">
          <div className="flex flex-col items-center w-full p-[10px]">
            <HeadingAndSupportingText />
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnSchoolSection;