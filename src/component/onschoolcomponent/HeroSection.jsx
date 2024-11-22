import React from 'react';

function HeroSection() {
  return (
    <section className="flex relative flex-col px-20 mt-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-8 max-md:px-5 max-md:mr-1 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="flex flex-col w-full max-w-screen-lg text-center max-md:max-w-full">
            {/* w-full text-6xl font-semibold tracking-tighter text-sky-700 leading-[72px] max-md:text-4xl max-md:leading-[53px] max-sm:text-3xl max-sm:leading-[40px] max-md:max-w-full */}
            <h1 className="w-full text-6xl font-semibold tracking-tighter text-sky-700 leading-[72px] max-md:text-4xl max-md:leading-[53px] max-sm:text-3xl max-sm:leading-[40px] max-md:max-w-full">
              ONSCHOOL - MỞ KHÓA KỸ NĂNG - NÂNG TẦM SỰ NGHIỆP
            </h1>
            <p className="self-center mt-6 max-w-screen-md text-xl leading-8 text-slate-700 w-[768px] max-md:max-w-full md:text-lg sm:text-base sm:leading-6 sm:mt-4">
              Phát triển các kỹ năng theo xu thế ứng dụng công nghệ vào thực tiễn - Mang lại kỹ năng làm việc thiết yếu cho hàng triệu người một cách hiệu quả
            </p>
          </div>
          <div className="flex gap-3 items-start mt-12 text-lg font-semibold leading-7 text-white max-md:mt-10">
            <button className="transition transform hover:bg-blue-600 active:scale-95  active flex overflow-hidden gap-2.5 justify-center items-center px-6 py-4 bg-sky-600 rounded-xl border-2  shadow-sm border-white border-opacity-10 max-md:px-5">
              <span className=" self-stretch px-0.5 my-auto">Bắt đầu ngay!</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-end mt-80 w-12 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1029fd4b6ec6ed6ae17e9ddb533905bbadf8b48cb7180fcdcd24603703246f6e?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain w-full shadow aspect-square" alt="" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6155bcff750aa9d780ca177ec58605d3e577675f590826230c1974a95feb027f?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain mt-2 w-full shadow aspect-square" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;