import React from 'react';
import StarRating from './StarRating';

function ExpertCard({ name, experience, role, imageSrc }) {
  return (
    <article className="flex relative flex-col pt-36 mt-6 w-full aspect-[0.858] first:mt-0">
      <img loading="lazy" src={imageSrc} alt={`Portrait of ${name}`} className="object-cover absolute inset-0 size-full" />
      {/* <div className="flex relative flex-col justify-center px-4 pt-16 pb-4">
        <div className="flex flex-col gap-2 px-4 py-6 w-full border border-solid backdrop-blur-md bg-white bg-opacity-30 border-white border-opacity-30">
          <div className="flex flex-col w-full">
            <StarRating />
            <h3 className="mt-4 text-2xl font-semibold leading-8 text-white">{name}</h3>
          </div>
          <div className="flex flex-col mt-2 w-full text-white">
            <p className="text-base font-semibold leading-6">{experience}</p>
            <p className="text-sm leading-5">{role}</p>
          </div>
        </div>
      </div> */}
    </article>
  );
}

export default ExpertCard;