import React from 'react';
import ExpertCard from './ExpertCard';

const ExpertTeam = () => {
  const experts = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/675887e57b1753a5040cf065263281fd3e63779c78a7534d5cd4463d9dfe5982?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
      name: "Vũ Đăng Minh",
      experience: "Kinh nghiệm 07+ năm",
      position: "CTO-NSGEDU",
      stars: 5
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5e9f1e8694ac40f08dc9f48353d65a3387712ac93fef12958ba7a012a9c6128?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
      name: "Lê Mạnh Tuấn",
      experience: "Kinh nghiệm 17+ năm",
      position: "CEO-Xanh House",
      stars: 5
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d596c30e40df252b85a57908c6d8c4f97b640eb34fb75ce8a7b3fd5a5e69e38?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
      name: "Lưu Quốc Tuấn",
      experience: "Kinh nghiệm 17+ năm",
      position: "Chairman-Toprate",
      stars: 5
    }
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-24 bg-gray-50">
      <div className="flex flex-col px-8 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
        <header className="flex flex-wrap gap-8 justify-between items-start w-full font-semibold max-md:max-w-full">
          <h1 className="flex flex-col flex-1 shrink max-w-screen-md text-4xl tracking-tighter leading-10 text-gray-900 basis-0 min-w-[320px] max-md:max-w-full">
            Lộ trình học do đội ngũ chuyên gia dày dặn kinh nghiệm thiết kế
          </h1>
          <div className="flex gap-3 items-start text-base leading-6 text-white">
            <button className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
              Đăng ký tư vấn ngay!
            </button>
          </div>
        </header>
        <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
            {experts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;