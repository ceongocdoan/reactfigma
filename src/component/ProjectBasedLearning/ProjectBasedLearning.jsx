import React from "react";
import FeatureItem from "./FeatureItem";

const features = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5feda837184fb4dde1e6be03db0db5e6caf9fd9b9f7240553d212884cb822be?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    text: "Học thông qua làm dự án,",
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7864c11eb75da87d26a007193010d307ef21d8f09622e536a0eb8be1f7f54a17?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    text: "Được coach theo từng task nhỏ.",
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e6768234aecfdc6c97a28dc581d5c4a8ddcf4ef9df6e22009d472833baa0555?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    text: "Dùng ngay kỹ năng, công cụ vào công việc hàng ngày.",
  },
];

function ProjectBasedLearning() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center px-8 w-full min-h-[476px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[485px] max-md:max-w-full">
          <h2 className="w-full text-3xl font-semibold leading-10 text-gray-900 max-md:max-w-full">
            Project based learning - Thực hành kỹ năng thông qua dự án thực tiễn
          </h2>
          <div className="flex flex-col pl-4 mt-8 w-full text-lg leading-7 text-slate-600 max-md:max-w-full">
            {features.map((feature, index) => (
              <FeatureItem key={index} imgSrc={feature.imgSrc} text={feature.text} />
            ))}
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/04948e09174001960c1c019c35f7b730e4ac3e64ad2806fec89f822d95ecd1d3?apiKey=ac8d84f3191644fbac37f90f1063bf65&"
          alt="Project based learning illustration"
          className="object-contain grow shrink self-stretch my-auto aspect-[1.6] min-w-[240px] w-[423px] max-md:max-w-full"
        />
      </div>
    </section>
  );
}

export default ProjectBasedLearning;