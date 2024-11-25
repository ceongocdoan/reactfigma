
import React from "react";
import ProfileCard from "./ProfileCard";

const ExpertCard = ({ imageSrc, name, experience, position, stars }) => {
  return (
    <article className="flex relative flex-col flex-1 shrink pt-44 aspect-[0.8] basis-0 min-w-[320px] max-md:pt-24">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col justify-center px-6 pt-24 pb-6 max-md:px-5">
        <div className="flex flex-col ml-3">
          <ProfileCard
            name={name}
            experience={experience}
            position={position}
            stars={stars}
          />
        </div>
      </div>
    </article>
  );
};

export default ExpertCard;
