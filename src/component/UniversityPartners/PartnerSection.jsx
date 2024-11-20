import React from 'react';
import PartnerLogo from './PartnerLogo';

function PartnerSection({ title, partners }) {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <h2 className="w-full text-3xl font-semibold tracking-tight leading-none text-center text-gray-900 max-md:max-w-full">
        {title}
      </h2>
      <div className="flex flex-wrap gap-4 items-start mt-6 w-full max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-4 justify-center items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} src={partner.src} alt={partner.alt} />
          ))}
        </div>
      </div>
      {title === "Đối tác trường đại học" && (
        <div className="flex gap-2 items-center self-center mt-6">
          <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-sky-600 rounded-full" />
          <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-gray-300 rounded-full" />
        </div>
      )}
    </div>
  );
}

export default PartnerSection;