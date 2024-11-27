import React from "react";
import ProfileCard from "./ProfileCard";

const ExpertCard = ({ imageSrc, name, experience, position, stars }) => {
  return (
    <article className="relative flex flex-col flex-1 aspect-[0.8] basis-0 min-w-[320px] max-w-[400px] overflow-hidden rounded-lg shadow-lg">
      {/* Ảnh nền */}
      <img
        loading="lazy"
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      {/* Nội dung */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-10 pb-6">
        <ProfileCard
          name={name}
          experience={experience}
          position={position}
          stars={stars}
        />
      </div>
    </article>
  );
};

export default ExpertCard;
