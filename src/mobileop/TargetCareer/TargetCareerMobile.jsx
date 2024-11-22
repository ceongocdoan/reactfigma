import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import ActionButton from "./ActionButton";

function TargetCareerMobile() {
  return (
    <section className="flex overflow-hidden flex-col mx-auto w-full py-16 bg-white max-w-[644px]">
      <div className="flex flex-col pr-4 pl-4 w-full">
        <Header />
        <MainContent />
        <ActionButton />
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bc2f3a6112a9190db0cbfc5e327889db27aa5c944d9b904b514d6bea18fee84?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" 
          alt="Illustration representing skill development" 
          className="object-contain self-center mt-8 max-w-full aspect-[1.2] w-[344px]"
        />
      </div>
    </section>
  );
}

export default TargetCareerMobile;