import React from 'react';

function PartnerSection({ title, partners }) {
  return (
    <div className="flex flex-col w-full">
      <h2 className="w-full text-2xl font-semibold tracking-tight leading-10 text-center text-gray-900">
        {title}
      </h2>
      <div className="flex gap-6 items-start mt-4 w-[82%] ml-1">
        {partners.map((partner) => (
          <img
            key={partner.id}
            loading="lazy"
            src={partner.src}
            alt={partner.alt}
            className="object-contain shrink-0 gap-3.5 aspect-[2.56] w-[156px]"
          />
        ))}
      </div>
    </div>
  );
}

export default PartnerSection;