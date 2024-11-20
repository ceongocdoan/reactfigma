import React from 'react';
import FeatureItem from './FeatureItem';

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01181ce0240e0bf4ce6b10df72ab394cd2a0ef524f1c8d68a29f03f0996af15b?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    text: "Nâng cao hiệu quả học tập thông qua phương pháp học tập chủ động và cá nhân hóa."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45341fafc6e322ead9bffb37e78fd6e0684d0ce2da11271025c5a93a643429c8?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    text: "Tiết kiệm thời gian và chi phí với sự hỗ trợ của AI và Mentor."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/96c51c997d668ba6aebdbd6f38667674f1d454112451106493407e941bbad22c?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    text: "Tăng sự tương tác và gắn kết với Mentor 1:1."
  }
];

function GuidedSelfPractice() {
  return (
    <section className="flex flex-wrap gap-10 items-center px-8 max-md:px-5">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dc3634882206562f1425f185a8b3f3e95af7c0656303fd8089677647a9587e5?apiKey=ac8d84f3191644fbac37f90f1063bf65&" 
        alt="Guided Self-Practice illustration" 
        className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[0.9] basis-0 min-w-[240px] max-md:max-w-full" 
      />
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <h2 className="w-full text-3xl font-semibold leading-10 text-gray-900 max-md:max-w-full">
          Guided Self-Practice - Học tập chủ động với AI và Mentor 1:1
        </h2>
        <ul className="flex flex-col pl-4 mt-8 w-full text-lg leading-7 text-slate-600 max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GuidedSelfPractice;