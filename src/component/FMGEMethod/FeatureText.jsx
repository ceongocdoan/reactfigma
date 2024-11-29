import React from 'react';

function FeatureText({ title, description, className }) {
  return (
    <div className={`flex flex-col min-w-[240px] ${className}`}>
      <div className="flex flex-col w-full">
        <h2 className="text-xl font-semibold leading-8 text-gray-900">{title}</h2>
        <p className="mt-2 text-base leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export default FeatureText;



