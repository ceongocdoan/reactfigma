import React from 'react';
import FeatureText from './FeatureText';

const featureData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e0fefeff39f2e760c608feb8d15e513b7df87489b8923ccc2bed1781d926445?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
    title: "Full Demonstration",
    description: "Tất cả kỹ năng đều được giới thiệu chi tiết và sinh động trước khi chuyển sang thực hành. Việc giới thiệu này được thực hiện theo nhiều cách: giảng viên thực hành trực tiếp, hướng dẫn bằng video, và học viên thảo luận nhóm để cùng nhau hoàn thành bài tập."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/87fa88f51e2a537652d8934fab13aec858e53aaaccc15ede9a6a03e2c387e3f3?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
    title: "Micro Coaching",
    description: "Để giúp người học hiểu sâu, đa chiều và tự chọn cách làm phù hợp, các bài học đều được chia nhỏ và có hướng dẫn chi tiết cho từng phần nhỏ của nhiệm vụ. Các hình thức hướng dẫn bao gồm: Mentor 1-1, AI TechLead, Pie Step-By-Step Coach."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6231603811eab1f6c924bbc61a9b5270fbe7e43facae7bdc506b3554ca91ad45?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
    title: "Guided Self-Practice",
    description: "Học tập chủ động, linh hoạt kết hợp hướng dẫn và hỗ trợ bởi mentor, AI TechLead để đảm bảo tiến độ và chất lượng cho học viên."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4efd8dc17df6117ff64c03dba88635ac86c7fda88d443524aa62d18776d3ace7?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
    title: "Evaluation 360",
    description: "Đánh giá 360 là hình thức đánh giá toàn diện và liên tục, được thực hiện thông qua các hoạt động sau: Test 360, Mini Task, Weekly Project, Milestone Exam, Milestone Project, Review Hackathon."
  }
];

function FMGEMethodMobile() {
  return (
    <section className="flex overflow-hidden flex-col py-16 mx-auto w-full bg-sky-50 max-w-[644px]">
      <div className="flex flex-col px-4 w-full">
        <header className="flex flex-col w-full">
          <h1 className="w-full text-3xl font-semibold leading-10 text-sky-900">
            PHƯƠNG PHÁP SƯ PHẠM <span className="text-sky-900">F.M.G.E</span>
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Phương pháp sư phạm F.M.G.E được áp dụng xuyên suốt trong quá trình đào tạo, từ những nhiệm vụ nhỏ đến việc hoàn thành những dự án. Nhờ vậy, học viên có thể nâng cao chất lượng học tập một cách hiệu quả và phát triển tư duy học tập chủ động.
          </p>
        </header>
      </div>
      <div className="flex flex-col px-4 mt-12 w-full">
        <div className="flex flex-col w-full">
          {featureData.map((feature, index) => (
            <FeatureText
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
              className={index > 0 ? "mt-10" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FMGEMethodMobile;