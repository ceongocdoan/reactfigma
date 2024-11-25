import * as React from "react";
import StarRating from "./StarRating";

const ProfileCard = ({ name, experience, position, stars }) => {
  return (
    <article className="flex flex-col gap-2 self-stretch px-4 py-6 border border-solid backdrop-blur-md bg-white bg-opacity-30 border-white border-opacity-30 max-w-[311px]">
      <header className="flex flex-col w-full">
        <StarRating stars={stars} />
        <h1 className="mt-4 text-2xl font-semibold leading-8 text-white">
          {name}
        </h1>
      </header>
      <section className="flex flex-col mt-2 w-full text-white">
        <h2 className="text-base font-semibold leading-6">{experience}</h2>
        <p className="text-sm leading-5">{position}</p>
      </section>
    </article>
  );
};

export default ProfileCard;
