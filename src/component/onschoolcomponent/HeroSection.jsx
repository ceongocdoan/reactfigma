import React from 'react';

function HeroSection() {
  return (
    <section className="flex relative flex-col px-20 mb-80  max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-8 max-md:px-5 max-md:mr-1 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="flex flex-col w-full max-w-screen-lg text-center max-md:max-w-full">
            <h1 className="w-full text-6xl font-semibold tracking-tighter text-sky-700 leading-[72px] max-md:text-4xl max-md:leading-[53px] max-sm:text-3xl max-sm:leading-[40px] max-md:max-w-full">
              ONSCHOOL - MỞ KHÓA KỸ NĂNG - NÂNG TẦM SỰ NGHIỆP
            </h1>
            <p className="self-center mt-6 max-w-screen-md text-xl leading-8 text-slate-700 w-[768px] max-md:max-w-full md:text-lg sm:text-base sm:leading-6 sm:mt-4">
              Phát triển các kỹ năng theo xu thế ứng dụng công nghệ vào thực tiễn - Mang lại kỹ năng làm việc thiết yếu cho hàng triệu người một cách hiệu quả
            </p>
          </div>
          <div className="flex gap-3 items-start mt-12 text-lg font-semibold leading-7 text-white max-md:mt-10">
            <button className="transition transform hover:bg-blue-600 active:scale-95 active flex overflow-hidden gap-2.5 justify-center items-center px-6 py-4 bg-sky-600 rounded-xl border-2 shadow-sm border-white border-opacity-10 max-md:px-5">
              <span className="self-stretch px-0.5 my-auto">Bắt đầu ngay!</span>
            </button>
          </div>
        </div>
      </div>

      
      <div className="fixed z-50 right-2 bottom-2 flex flex-col gap-2 items-center">
        <img
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/c68f/982e/1aa9224c39e38a298e69f07ec6319056?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PB-7NhDLpc-4NkTuHxQBnfyuaoOT~rnaTNKA6i1kbN6z~f3cun9~QOs~AIM87QWSQZODT3NPYILjRBCp-gg07RC9LDwSvkm72ch20d4zGfm8H3IfQ3o2-QYlv9O2a~voYpCpL~-l7V9wQqVugMXSPLNx9LUawCzW1tr~WIS0Y-4Aevnycubs88~wYe1IA87B8bF2OS~CbQ1CDBc9tniINnUmgLRBPNEepBqfjhZ1yUQkS60s0yA-~Mw-6t~4xFDulDdqnth4xMKV4o0gwwEflQ36tbBwPcBHfsloK7lCd16eWH3a1qn70Mq2GlP1iAIGg0f~yLdC6uWKM2JQOD8bfw__"
          className="object-contain w-10 h-10"
          alt="Icon 1"
        />
        <img
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/b492/3021/0b12fbc7b342c11472c208228a1a37bf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Si9fusY4IQK6fDrAa1oKYoD361GgvW5aw2k-aNnWLTKYfY3v-DKHgALO40dxtCG97fqKHic62HHgw-guWtsVJc-jButfLIUqD9OzzuaG75P3mmfHKP8oTZV6uLDWMVp4LDQLezFksPm-nuh5rfW388d8PCyPh497qySEAJ3~n-5sJeCsblfBL2D01QfUB7vEyVrfxog5cDAM4aJailrHy6cZmUJ0iTet6~W8~sNHNy027DGKaq9-wjz~RZF2NT9jXx~8p1XIVhR59ABNVyNxxtyxzsWvYWjp-X0BV0UZNmCMW8mw3Ph5zmnTBrUO3~sTAKVecnP7QaRWlqfJow5KTg__"
          className="object-contain w-10 h-10 "
          alt="Icon 2"
        />
      </div>
    </section>
  );
}

export default HeroSection;
