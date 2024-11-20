import React from "react";

function MethodDescription() {
  return (
    <div className="flex flex-col items-center w-full max-md:max-w-full">
      <div className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full">
        <h2 className="w-full text-4xl font-semibold tracking-tighter leading-10 text-sky-900 max-md:max-w-full">
          PHƯƠNG PHÁP SƯ PHẠM <span className="text-sky-900">F.M.G.E</span>
        </h2>
        <p className="self-start mt-5 text-xl leading-8 text-slate-600 max-md:max-w-full">
          Phương pháp sư phạm F.M.G.E được áp dụng xuyên suốt trong quá trình đào tạo, từ những nhiệm vụ nhỏ đến việc hoàn thành những dự án. Nhờ vậy, học viên có thể nâng cao chất lượng học tập một cách hiệu quả và phát triển tư duy học tập chủ động.
        </p>
      </div>
    </div>
  );
}

export default MethodDescription;