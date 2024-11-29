import React from "react";
import FeatureText from "./FeatureText";
import { featureData } from "./featureData";

function FMGEMethod() {
  return (
    <section className="flex overflow-hidden flex-col items-center py-24 bg-sky-50">
      <div className="flex flex-col px-8 w-full max-w-screen-xl text-center max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <header className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full">
            <h1 className="w-full text-4xl font-semibold tracking-tighter leading-10 text-sky-900 max-md:max-w-full">
              PHƯƠNG PHÁP SƯ PHẠM <span className="text-sky-900">F.M.G.E</span>
            </h1>
            <p className="self-start mt-5 text-xl leading-8 text-slate-600 max-md:max-w-full">
              Phương pháp sư phạm F.M.G.E được áp dụng xuyên suốt trong quá trình đào tạo, từ những nhiệm vụ nhỏ đến việc hoàn thành những dự án. Nhờ vậy, học viên có thể nâng cao chất lượng học tập một cách hiệu quả và phát triển tư duy học tập chủ động.
            </p>
          </header>
        </div>
      </div>
      <div className="mt-16 max-w-full w-[1259px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start pr-5 self-stretch my-auto text-right max-md:mt-9">
              <FeatureText {...featureData[0]} />
              <FeatureText {...featureData[1]} className="mt-52 ml-3 max-md:mt-10 max-md:ml-2.5" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-3.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13dc3bfc089ce1620321e5a6ac3edb06fca8b5ac668dc86b212f4619dfd8f784?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" className="object-contain grow w-full aspect-[1.03] max-md:max-w-full" alt="FMGE Method Illustration" />
                </div>
                <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-6 max-md:mt-6">
                    <FeatureText {...featureData[2]} />
                    <FeatureText {...featureData[3]} className="mt-52 max-md:mt-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FMGEMethod;