import React from "react";
import MethodDescription from "./MethodDescription";
import MethodItem from "./MethodItem";

const methodItems = [
  {
    title: "Full Demonstration",
    description: "Tất cả kỹ năng đều được giới thiệu chi tiết và sinh động trước khi chuyển sang thực hành. Việc giới thiệu này được thực hiện theo nhiều cách: giảng viên thực hành trực tiếp, hướng dẫn bằng video, và học viên thảo luận nhóm để cùng nhau hoàn thành bài tập.",
    alignment: "right"
  },
  {
    title: "Micro Coaching",
    description: "Để giúp người học hiểu sâu, đa chiều và tự chọn cách làm phù hợp, các bài học đều được chia nhỏ và có hướng dẫn chi tiết cho từng phần nhỏ của nhiệm vụ. Các hình thức hướng dẫn bao gồm: Mentor 1-1, AI TechLead, Pie Step-By-Step Coach.",
    alignment: "left"
  },
  {
    title: "Guide Self-Practice",
    description: "Học tập chủ động, linh hoạt kết hợp hướng dẫn và hỗ trợ bởi mentor, AI TechLead để đảm bảo tiến độ và chất lượng cho học viên.",
    alignment: "left"
  },
  {
    title: "Evaluation 360",
    description: "Đánh giá 360 là hình thức đánh giá toàn diện và liên tục, được thực hiện thông qua các hoạt động sau: Test 360, Mini Task, Weekly Project, Milestone Exam, Milestone Project, Review Hackathon.",
    alignment: "right"
  }
];

function FMGEMethod() {
  return (
    <section className="flex overflow-hidden flex-col items-center py-24 bg-sky-50">
      <div className="flex flex-col px-8 w-full max-w-screen-xl text-center max-md:px-5 max-md:max-w-full">
        <MethodDescription />
      </div>
      <div className="mt-16 max-w-full w-[1259px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto text-right max-md:mt-9">
              {methodItems.filter(item => item.alignment === "right").map((item, index) => (
                <MethodItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-3.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/df369a17dcdb066f957fea11fd9cd779b8feec44c9e4e8acaa212af5360bf6e0?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain grow w-full aspect-[1.03] max-md:max-w-full" alt="FMGE Method illustration" />
                </div>
                <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-6 max-md:mt-6">
                    {methodItems.filter(item => item.alignment === "left").map((item, index) => (
                      <MethodItem key={index} {...item} />
                    ))}
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