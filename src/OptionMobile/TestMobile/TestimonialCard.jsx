import React from 'react';

const TestimonialCard = ({ content, author, imageSrc }) => {
  return (
    <article className="flex flex-col ml-[5%]  self-stretch my-auto text-base leading-6 text-gray-900 bg-white rounded-3xl border border-gray-300 border-solid shadow-lg min-w-[240px] w-[89%]">
      {imageSrc && (
        <div className="flex relative z-10 flex-col mt-0 ml-6 w-16 rounded-full aspect-square max-md:ml-2.5 top-3 ">
          <img loading="lazy" src={imageSrc} alt={`${author || 'Testimonial'} avatar`} className="object-cover absolute inset-0 size-full " />
          <div className="flex relative shrink-0 h-16 rounded-full border border-solid border-black border-opacity-10" />
        </div>
      )}
      <div className="flex flex-col px-8 py-10 mt-0 w-full min-h-[368px] max-md:px-5">
        <p className="flex-1">{content}</p>
        {author && (
          <div className="flex gap-3 items-center self-start mt-4 font-semibold text-slate-700">
            <span>{author}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default TestimonialCard;