import React from 'react';

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col grow shrink w-52 font-semibold min-w-[96px]">
      <h3 className="text-sm leading-5 text-sky-300">{title}</h3>
      <nav className="flex flex-col items-start mt-4 w-full text-base leading-6 text-sky-200">
        {links.map((link, index) => (
          <a key={index} href="#" className="flex gap-2 items-center mt-3 first:mt-0">
            <span className="overflow-hidden gap-2 self-stretch my-auto">{link.text}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterColumn;