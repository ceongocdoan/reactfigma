import React from 'react';
import FooterLinksColumn from './FooterLinksColumn';
import SocialIcons from './SocialIcons';

const FooterMobile = () => {
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
    <footer className="flex overflow-hidden flex-col py-12 mx-auto w-full bg-sky-600 max-w-[644px]">
      <div className="flex flex-col px-4 w-full">
        <div className="flex gap-8 items-start w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
            <div className="flex items-start max-w-full min-h-[32px] w-[142px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12b2df3618a2adff60d5344b72c5405eedb68a7ab6f246b9f4c10e962c91474e?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="Company logo" className="object-contain w-12 aspect-[1.55]" />
            </div>
            <p className="mt-6 text-base leading-6 text-sky-200">
              Mở khóa kỹ năng - Nâng tầm sự nghiệp
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 mt-12 w-full font-semibold">
        <div className="flex flex-col items-start w-full">
          <FooterLinksColumn heading="Khoá học" links={courseLinks} />
          <FooterLinksColumn heading="Công ty" links={companyLinks} />
          <FooterLinksColumn heading="Pháp lý" links={legalLinks} />
        </div>
      </div>
      <div className="flex flex-col px-4 mt-12 w-full">
        <div className="flex flex-col pt-8 w-full border-t border-sky-600">
          <SocialIcons />
          <p className="mt-6 text-base leading-6 text-sky-300">
            © 2024 Onschool. All rights reserved.
          </p>
          <p className="mt-6 text-base leading-6 text-sky-300">
            Hotline: +84 865 341 018
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;