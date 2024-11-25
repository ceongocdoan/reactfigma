import * as React from "react";
import ProfileCardMo from "./ProfileCardMo";

function ExpertCard({ image, name, experience, role, stars = 5 }) {
  return (
    <article className="group relative flex flex-col items-center w-full aspect-[0.858] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      {/* Hình ảnh nền */}
      <img
        loading="lazy"
        src={image}
        alt={`Portrait of ${name}, ${role}`}
        className="object-cover absolute inset-0 w-full h-full transition-transform group-hover:scale-110"
      />
      {/* Overlay mờ với nội dung */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div >
        {/* Stars */}
        <div className="flex gap-1 mb-2">
          {[...Array(stars)].map((_, index) => (
            <img
              key={index}
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/1200px-Star_empty.svg.png"
              alt="star"
              className="object-contain w-5 h-5"
            />
          ))}
        </div>
        {/* Tên */}
        <h2 className="text-2xl font-semibold text-white">{name}</h2>
        {/* Thông tin bổ sung */}
        <p className="mt-2 text-base text-gray-300"> {experience}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
      <div className="flex relative flex-col justify-center px-6 pt-24 pb-6 max-md:px-5">
      <div className="flex flex-col ml-3 mt-28">
          <ProfileCardMo
            name={name}
            experience={experience}
            role={role}
            stars={stars}
          />
        </div>
      </div>
    </article>
  );
}

export default ExpertCard;
