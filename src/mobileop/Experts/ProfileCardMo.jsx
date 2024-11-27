import * as React from "react";
import StarRating from "./StarRating";

const ProfileCard = ({ name, experience, role, position, stars }) => {
  return (
    <article className="flex flex-col gap-2 self-stretch whitespace-nowrap items-center justify-center  backdrop-blur-md bg-white bg-opacity-30  max-w-[380px]">
      <header className="flex flex-col w-full ml-16 mt-6 items-start ">
      <StarRating
          className="ml- items-start" /* Dịch hàng stars sang phải */
          stars={stars}
        />
        <h1 className="mt-2  text-2xl font-semibold items-start leading-8 text-white">
          {name}
        </h1>
      </header>
      <section className="flex flex-col mb-4 w-full text-white ml-16 items-start">
        <h2 className="text-base font-semibold leading-6">{experience}</h2>
        <p className="text-sm leading-5">{role}</p>
      </section>
    </article>
  );
};

export default ProfileCard;
