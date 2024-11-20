import React from 'react';
import FooterColumn from './FooterColumn';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const courseLinks = [
    { text: 'Lộ trình Sự nghiệp' },
    { text: 'Lộ trình Kỹ năng' },
    { text: 'Khoá học' },
    { text: 'Dự án' }
  ];

  const companyLinks = [
    { text: 'Về chúng tôi' },
    { text: 'Liên hệ' }
  ];

  const legalLinks = [
    { text: 'Điều khoản & Điều kiện' }
  ];

  return (
    <footer className="flex overflow-hidden flex-col items-center pt-16 pb-12 bg-sky-600 border-t border-gray-200">
      <div className="flex flex-col px-8 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-12 items-start w-full max-md:max-w-full">
          <div className="flex flex-col w-80 max-w-xs min-w-[320px]">
            <div className="flex items-start max-w-full min-h-[32px] w-[142px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c8859a84e8ec8bfb5db2a1941e7a50a4959cbecf578cfa2e09ee6e98e925c3?apiKey=ac8d84f3191644fbac37f90f1063bf65&" alt="Company Logo" className="object-contain w-12 aspect-[1.5]" />
            </div>
            <p className="mt-4 text-base leading-6 text-sky-200">
              Mở khóa kỹ năng - Nâng tầm sự nghiệp
            </p>
          </div>
          <div className="flex flex-wrap flex-1 shrink gap-6 items-start basis-0 min-w-[420px] max-md:max-w-full">
            <FooterColumn title="Khoá học" links={courseLinks} />
            <FooterColumn title="Công ty" links={companyLinks} />
            <FooterColumn title="Pháp lý" links={legalLinks} />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-8 mt-16 w-full max-w-screen-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-center pt-8 w-full border-t border-sky-600 max-md:max-w-full">
          <div className="flex flex-wrap flex-1 shrink gap-8 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <p className="self-stretch my-auto text-base leading-6 text-sky-300">
              © 2024 Onschool. All rights reserved.
            </p>
            <SocialIcons />
          </div>
          <p className="self-stretch my-auto text-base leading-6 text-sky-300">
            Hotline: +84 865 341 018
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;