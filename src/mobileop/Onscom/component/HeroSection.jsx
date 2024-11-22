import React from 'react';

export const HeroSection = () => {
  return (
    <section className="flex relative flex-col pt-20 w-full aspect-[0.507]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c3a080459b016afc0257c96a07aadad34f105bde00a40f9b8a8f3e9d7517468?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65"
        alt="OnSchool Hero Background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative items-start px-4 h-[268px]">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <div className="flex flex-col w-full">
            <h1 className="w-full text-4xl font-semibold tracking-tighter leading-10">
              ONSCHOOL - MỞ KHÓA KỸ NĂNG - NÂNG TẦM SỰ NGHIỆP
            </h1>
            <p className="mt-4 text-lg leading-7">
              Phát triển các kỹ năng theo xu thế ứng dụng công nghệ vào thực
              tiễn - Mang lại kỹ năng làm việc thiết yếu cho hàng triệu người
              một cách hiệu quả
            </p>
          </div>
          <button 
            className="flex flex-col mt-8 w-full text-base font-semibold"
            tabIndex="0"
          >
            <span className="self-stretch px-0.5 my-auto">Bắt đầu ngay!</span>
          </button>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e57a6458bafdb0db3e618be4b4a72214b51925968cc4ddb89daebee4fb39390c?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65"
        alt="OnSchool Features Showcase"
        className="object-contain mt-9 w-full aspect-[1.05]"
      />
    </section>
  );
};