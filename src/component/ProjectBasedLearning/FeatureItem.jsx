import React from "react";

function FeatureItem({ imgSrc, text }) {
  return (
    <div className="flex flex-wrap gap-3 items-start w-full mt-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={imgSrc}
        alt=""
        className="object-contain shrink-0 w-7 rounded-full aspect-square"
      />
      <p className="flex-1 shrink min-w-[240px] max-md:max-w-full">{text}</p>
    </div>
  );
}

export default FeatureItem;