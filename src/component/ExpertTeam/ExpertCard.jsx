import React from 'react';

const ExpertCard = ({ imageSrc, name, experience, position, stars }) => {
  return (
    <article className="flex relative flex-col flex-1 shrink pt-44 aspect-[0.8] basis-0 min-w-[320px] max-md:pt-24">
      <img loading="lazy" src={imageSrc} alt={`Portrait of ${name}`} className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col justify-center px-6 pt-24 pb-6 max-md:px-5">
        {/* <div className="flex flex-col gap-3 px-5 py-6 w-full border border-solid backdrop-blur-md bg-white bg-opacity-30 border-white border-opacity-30">
          <div className="flex flex-col w-full">
            <div className="flex gap-1 items-center self-start">
              {[...Array(5)].map((_, index) => (
                <img key={index} loading="lazy" src={index < stars ? "https://cdn.builder.io/api/v1/image/assets/TEMP/2589c2f06e3bddf387940565a5297e1d43f8a2ccc46593f20c38e484f421c1a2?apiKey=ac8d84f3191644fbac37f90f1063bf65&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/50ad006d9828c6f43e1261be702cb239eddea01bc741bc9c351ce293de6f5499?apiKey=ac8d84f3191644fbac37f90f1063bf65&"} alt={index < stars ? "Filled star" : "Empty star"} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              ))}
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-10 text-white">{name}</h2>
          </div>
          <div className="flex flex-col mt-3 w-full text-white">
            <p className="text-lg font-semibold leading-7">{experience}</p>
            <p className="text-base leading-6">{position}</p>
          </div>
        </div> */}
      </div>
    </article>
  );
};

export default ExpertCard;