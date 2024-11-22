import React from "react";

function ImageSection({ decorationIcons, mainImage, secondaryImage }) {
  return (
    <section className="flex relative gap-7 justify-center items-start pl-5 mt-10 w-full h-[204px]">
      <div className="flex absolute z-0 flex-col bottom-[66px] right-[134px] rotate-[-1.570796370506285rad]">
        {decorationIcons.map((icon, index) => (
          <img
            key={index}
            loading="lazy"
            src={icon}
            alt=""
            className={`object-contain ${
              index === 0 ? "self-end" : index < 4 ? "self-center" : ""
            } ${index > 0 ? "mt-1" : ""} w-1 aspect-[0.09]`}
          />
        ))}
      </div>
      <img
        loading="lazy"
        src={mainImage}
        alt="Main feature illustration"
        className="object-contain absolute top-2/4 z-0 shrink-0 rounded-3xl -translate-y-2/4 aspect-[0.83] h-[204px] left-[26px] translate-x-[0%] w-[169px]"
      />
      <img
        loading="lazy"
        src={secondaryImage}
        alt="Secondary feature illustration"
        className="object-contain z-0 self-end rounded-md aspect-[1.51] min-w-[240px] w-[271px]"
      />
    </section>
  );
}

export default ImageSection;