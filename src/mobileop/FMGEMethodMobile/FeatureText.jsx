import React from 'react';

function FeatureText({ imageSrc, title, description, className }) {
  return (
    <article className={`flex gap-4 items-start w-full ${className}`}>
      <img loading="lazy" src={imageSrc} alt="" className="object-contain shrink-0 w-10 aspect-square" />
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
        <h2 className="text-lg font-semibold leading-7 text-gray-900">
          {title}
        </h2>
        <p className="mt-1 text-base leading-6 text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}

export default FeatureText;