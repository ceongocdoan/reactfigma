import React from 'react';

function FeatureItem({ icon, text }) {
  return (
    <li className="flex flex-wrap gap-3 items-start w-full max-md:max-w-full mb-5 last:mb-0">
      <img 
        loading="lazy" 
        src={icon} 
        alt="" 
        className="object-contain shrink-0 w-7 rounded-full aspect-square" 
      />
      <p className="flex-1 shrink min-w-[240px] max-md:max-w-full">
        {text}
      </p>
    </li>
  );
}

export default FeatureItem; 