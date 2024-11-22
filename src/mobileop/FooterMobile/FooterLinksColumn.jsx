import React from 'react';

const FooterLinksColumn = ({ heading, links }) => {
  return (
    <div className="flex flex-col mt-8 max-w-full min-w-[96px] w-[180px]">
      <h2 className="text-sm leading-5 text-sky-300 ">{heading}</h2>
      <nav className="flex flex-col items-start mt-4 w-full text-base leading-6 text-sky-200">
        {links.map((link, index) => (
          <div key={index} className={`flex gap-2 items-center ${index > 0 ? 'mt-3' : ''}`}>
            <button className="overflow-hidden gap-2 self-stretch my-auto">
              {link.text}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default FooterLinksColumn;