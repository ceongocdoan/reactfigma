import React from 'react';

const TestimonialCard = ({ imageSrc, testimonial, name }) => {
  return (
    <article className="flex flex-col self-stretch my-auto w-96 bg-white rounded-3xl border border-gray-300 border-solid shadow-lg min-w-[240px]">
      <div className="flex relative z-10 flex-col mt-0 ml-6 w-16 rounded-full aspect-square max-md:ml-2.5">
        <img loading="lazy" src={imageSrc} alt={`${name}'s profile`} className="object-cover absolute inset-0 size-full" />
        <div className="flex relative shrink-0 h-16 rounded-full border border-solid border-black border-opacity-10" />
      </div>
      <div className="flex flex-col px-8 py-10 mt-0 w-full text-base leading-6 min-h-[368px] max-md:px-5">
        <p className="flex-1 text-gray-900">{testimonial}</p>
        <div className="flex gap-3 items-center self-start mt-4 font-semibold text-slate-700">
          <div className="self-stretch my-auto">{name}</div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
