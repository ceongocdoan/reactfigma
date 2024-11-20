import React from 'react';

function PartnerLogo({ src, alt }) {
  return (
    <div className="  flex relative flex-col gap-5 items-center self-stretch my-auto aspect-[2.558] w-[220px]">
      <img loading="lazy" src={src} alt={alt} className="object-contain absolute inset-0 size-full" />
      <div className="flex relative self-stretch my-auto min-h-[86px] min-w-[240px] w-[275px]" />
    </div>
  );
}

export default PartnerLogo;