import React from "react";

function FeatureSection({ title, items }) {
  return (
    <section className="flex flex-col mt-12 w-full">
      <div className="flex flex-col px-4 w-full">
        <h2 className="w-full text-2xl font-semibold leading-8 text-gray-900">
          {title}
        </h2>
        <ul className="flex flex-col pl-2 mt-8 w-full text-base leading-6 text-slate-600">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3 items-start mt-4 w-full">
              <img
                loading="lazy"
                src={item.icon}
                alt=""
                className="object-contain shrink-0 w-7 rounded-full aspect-square"
              />
              <p className="flex-1 shrink pt-0.5 min-w-[240px]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeatureSection;