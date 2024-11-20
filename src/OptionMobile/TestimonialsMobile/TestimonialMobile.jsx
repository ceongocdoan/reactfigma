import React from 'react';
import TestimonialSection from './TestimonialSectionMobile';

const TestimonialMobile = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-16 mx-auto max-w-full bg-sky-600 min-h-[711px] w-[480px]">
      <div className="flex flex-col w-full min-h-[647px]">
        <section className="flex flex-col w-full min-h-[548px]">
          <header className="flex flex-col items-center w-full text-3xl font-semibold leading-10 text-center text-white">
            <h1 className="max-w-full w-[275px]">
              Cảm hứng từ hành trình học tập của học viên
            </h1>
          </header>
          <TestimonialSection />
        </section>
      </div>
    </main>
  );
}

export default TestimonialMobile;