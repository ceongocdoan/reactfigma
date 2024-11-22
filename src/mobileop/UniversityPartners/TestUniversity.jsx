import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const universityPartners = [
  { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/feb00063f794bf0d592c5cf7e5979ad946de74e11b66ca59081e2a8acbf9b78e?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 1" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1a2fb334e14c20eb06a2c22d8c1739aac2d663925d1034b6b7986b29bc06b11?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 2" },
  { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b364eb965f5c2eba682f54a46134e661c8b709b3a9277bec90cb112c45e210bf?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 3" },
  { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d56daabc080bd8781137b01759104e2ab4e842b3c9c8f166d0b84d6f5d1022e?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 4" },
  { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e406e613ec74e2873cb67a864a201d8c283ec5629d8638f85d3b30afcefe5e3b?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 5" },
];

const technologyPartners = [
  { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1359f117c1b725cd583b9400de926c90a90a19f6f898babbd59b11fb454c56c1?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 1" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c5a6dcd25f2674eae44ea00a399af43229e2f852fd8383bc39cb03d56f09736?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 2" },
  { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bc1ea7bc290e860feec6c13054d91b52b71472089d4bf8e0c4fea73e11d03bf?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 3" },
  { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a176472aa7d9ee90c3194532f49017b027a5b23cc4812f1ad91e27be7373d6a?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 4" },
  { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8a979ba0827e344c22d8cc570c8dd0aa0087ed2de4e031345128a488eaaa753?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 5" },
];

function TestUniversity() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    appendDots: (dots) => (
      <div className="flex justify-center mt-10 space-x-1">{dots}</div>
    ),
    customPaging: (i) => (
      <button className="w-5 h-5 bg-[#0284C7] rounded-full" />
    ),
  };

  return (
    <section className="flex flex-col items-end px-16 w-full justify-center">
      {/* <div className="flex z-10 overflow-hidden justify-center items-start py-16 bg-white">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/184e2c98398f926180678ef9d52de1ee8347d3fa1402a24f9a8234718144a06b?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f"
          alt=""
          className="object-contain absolute z-10 "
        /> */}
          <div className="flex z-10 flex-col flex-1 shrink justify-center px-4 w-full basis-0 min-w-[240px] py-20">
            <h2 className="w-full text-2xl font-semibold tracking-tight leading-10 text-center text-gray-900">Đối tác trường đại học</h2>
            <Slider {...sliderSettings} className = "mt-8">
              {universityPartners.map((partner) => (
                <div key={partner.id} className="text-center">
                  <img src={partner.src} alt={partner.alt} className="w-full h-auto" />
                </div>
              ))}
            </Slider>
            <h2 className="mt-14 w-full text-2xl font-semibold tracking-tight leading-10 text-center text-gray-900">Đối tác công ty công nghệ</h2>
            <Slider {...sliderSettings} className = "mt-6">
              {technologyPartners.map((partner) => (
                <div key={partner.id} className="text-center">
                  <img src={partner.src} alt={partner.alt} className="w-full h-auto" />
                </div>
              ))}
            </Slider>
          </div>
    </section>
  );
}

export default TestUniversity;
