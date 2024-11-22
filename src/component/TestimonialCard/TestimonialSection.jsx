import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialSection = () => {
  return (
    <section className="flex flex-col items-end w-full px-0 max-md:pl-0">
      <div className="flex overflow-hidden flex-col py-24 w-full bg-sky-600  max-md:max-w-full">
        <h2 className="flex flex-col self-center px-8 max-w-screen-xl text-4xl font-semibold tracking-tighter leading-10 text-center text-white w-[1280px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center w-full max-md:max-w-full">
            <div className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                Cảm hứng từ hành trình học tập của học viên
              </div>
            </div>
          </div>
        </h2>
        <div className="flex flex-col mt-10 w-full max-md:max-w-full">
          <div className="flex gap-6 flex-col justify-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full">
            <TestimonialCarousel />
          </div>
          <div className="flex gap-6 items-center self-center max-w-full min-h-[48px] w-[1280px]">
            <div className="ml-3 flex gap-6 items-start  my-auto">
              <button className="transition transform hover:bg-blue-50 active:scale-95 flex justify-center items-center p-3 w-12 h-12 border-2 border-gray-100 border-solid shadow rounded-[100px]" aria-label="Previous testimonial">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd1f13c18a76a532b636f90354d55400a22b56f7d613ef0684277e6ae45222ed?apiKey=ac8d84f3191644fbac37f90f1063bf65&" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
              </button>
              <button className="transition transform hover:bg-blue-50 active:scale-95 flex justify-center items-center p-3 w-12 h-12 border-2 border-gray-100 border-solid shadow rounded-[100px]" aria-label="Next testimonial">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c2bcfde29584ace305eabf381bad418377323239cbf43beb0b1a0e3689db913?apiKey=ac8d84f3191644fbac37f90f1063bf65&" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;