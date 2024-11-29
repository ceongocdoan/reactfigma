import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialSection = () => {
  return (
    <section className="flex  flex-col items-end w-full px-0 max-md:pl-0">
      <div className="flex overflow-visible py-24 flex-col  w-full bg-[#0072BC]  max-md:max-w-full">
        <h2 className="flex flex-col self-center px-8 max-w-screen-xl text-4xl font-semibold tracking-tighter leading-10 text-center text-white w-[1280px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center w-full max-md:max-w-full">
            <div className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                Cảm hứng từ hành trình học tập của học viên
              </div>
            </div>
          </div>
        </h2>
        <div className="flex gap-4 flex-wrap justify-center mt-10 w-full max-md:max-w-full">

          <div className="flex  flex-col gap-2 justify-center  w-full max-md:px-5 max-md:max-w-full">
            <TestimonialCarousel />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;