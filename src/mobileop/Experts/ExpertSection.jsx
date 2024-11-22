import * as React from "react";
import ExpertCard from "./ExpertCard";

const experts = [
  {
    // name: "Vũ Đăng Minh",
    // experience: "07",
    // role: "CTO-NSGEDU",
    image: "https://cdn.builder.io/api/v1/image/assets/ac8d84f3191644fbac37f90f1063bf65/d9d3be18c2ffd268d06c8d55656f41a4be6841bf7cf1bfdc9788e27305cf892f?apiKey=ac8d84f3191644fbac37f90f1063bf65&"
  },
  {
    // name: "Lê Mạnh Tuấn",
    // experience: "17",
    // role: "CEO-Xanh House",
    image: "https://cdn.builder.io/api/v1/image/assets/ac8d84f3191644fbac37f90f1063bf65/ea8bf107debe8295a60e27a37768d89777c45e96e52daaed006ddd2a80c0433a?apiKey=ac8d84f3191644fbac37f90f1063bf65&"
  },
  {
    // name: "Lưu Quốc Tuấn",
    // experience: "17",
    // role: "Chairman-Toprate", 
    image: "https://cdn.builder.io/api/v1/image/assets/ac8d84f3191644fbac37f90f1063bf65/66e91e744ee82c9fbb4fe7147c7dfc71172f377fc4d5054fc13e9208fabb1936?apiKey=ac8d84f3191644fbac37f90f1063bf65&"
  }
];

function ExpertSection() {
  return (
    <main className="flex overflow-hidden flex-col py-16 mx-auto w-full bg-gray-50 max-w-[480px]">
      <header className="flex items-start px-4 w-full font-semibold">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <h1 className="flex flex-col w-full text-3xl leading-10 text-gray-900">
            Lộ trình học do đội ngũ chuyên gia dày dặn kinh nghiệm thiết kế
          </h1>
          <div className="flex flex-col mt-8 w-full text-base leading-6 text-white">
            <button className="transition transform hover:bg-blue-400 active:scale-95 flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 w-full bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
              Đăng ký tư vấn ngay!
            </button>
          </div>
        </div>
      </header>
      <section className="flex flex-col px-4 mt-12 w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full space-y-6">
            {experts.map((expert) => (
              <ExpertCard key={expert.name} {...expert} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ExpertSection;