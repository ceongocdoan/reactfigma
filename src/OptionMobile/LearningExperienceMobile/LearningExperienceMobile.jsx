import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureSection from "./FeatureSection";
import ImageSection from "./ImageSection";

function LearningExperienceMobile() {
  return (
    <main className="flex overflow-hidden flex-col py-16 mx-auto w-full bg-white max-w-[644px]">
      <SectionHeader
        title="Learning by doing - Trải nghiệm học tập"
      />
      <FeatureSection
        title="Project based learning - Thực hành kỹ năng thông qua dự án thực tiễn"
        items={[
          {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1408b9f16db13e61f4110770d20183826a90c784fc62eebe033566246abe4cb4?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
            text: "Học thông qua làm dự án,",
          },
          {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01302ffe8a95b11df8d6221b48f9e548a6ef651e31d8700060def6fbf2f38231?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
            text: "Được coach theo từng task nhỏ.",
          },
          {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d62696b7f4f40da22a8f64dd8269e955974bd25f2857abbe12a22ee53875203?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
            text: "Dùng ngay kỹ năng, công cụ vào công việc hàng ngày.",
          },
        ]}
      />
      <ImageSection
        decorationIcons={[
          "https://cdn.builder.io/api/v1/image/assets/TEMP/740f2f03544c0b5a0f8c5bbac3a1c91a3f58421fb346a7dfb393b64b1cb42257?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/004a219b82662ca9c282a8cee89de97def295cbdbec2bad3133d922b39cf7d53?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c1d1ce2b03fc022e94da25b1ed5605b381378a434099b23f80b8b1a7943fe620?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d77d7506e4ceff6424622beef5d4eb6dd532198c63334874f9d44d081193e01a?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/60d92040358bbf60d1b05e252d5db1f3b96649821e3c2ebe62359335be0977a5?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/a2cdec085415d3304f4f342eace40e82a2d46118a1af189e6e47dee1026636c5?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
        ]}
        mainImage="https://cdn.builder.io/api/v1/image/assets/TEMP/4a1d717b1e4c6eff67c8ce098424c4874a7320ec892a59be48d84b335c230f61?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f"
        secondaryImage="https://cdn.builder.io/api/v1/image/assets/TEMP/bece9ad3265a5123160e8f5ac3580069b6625f76d8378a54ef666c5fe0d13c1d?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f"
      />
      <FeatureSection
        title="Guided Self-Practice - Học tập chủ động với AI và Mentor 1:1"
        items={[
          {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/676c4492b7b73c6b680f64f38e4fc1bfff80570f41526e03434ad282b8ee3202?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
            text: "Nâng cao hiệu quả học tập thông qua phương pháp học tập chủ động và cá nhân hóa.",
          },
          {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5a2e67aa9707db949c03d72bb32556e23fd287f057d1e9bd6322689c77bd507?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
            text: "Tiết kiệm thời gian và chi phí với sự hỗ trợ của AI và Mentor.",
          },
          {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4317c954e64b579cb5d9a6bebee433c3f96b1907b1f6eafbc89999c40dbcb866?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f",
            text: "Tăng sự tương tác và gắn kết với Mentor 1:1.",
          },
        ]}
      />
      <section className="flex flex-col items-start px-2 mt-10 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2F057aab5311cf46f4b038f586fb84e77f%2F1cba52a1768e430fba90b8d8eb7576d5"
          alt="Illustration of guided self-practice concept"
          className="object-contain max-w-full w-[480px]"
        />
      </section>
    </main>
  );
}

export default LearningExperienceMobile;