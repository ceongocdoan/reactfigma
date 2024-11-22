import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const universityPartners = [
  { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/feb00063f794bf0d592c5cf7e5979ad946de74e11b66ca59081e2a8acbf9b78e?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 1" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1a2fb334e14c20eb06a2c22d8c1739aac2d663925d1034b6b7986b29bc06b11?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 2" },
  { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b364eb965f5c2eba682f54a46134e661c8b709b3a9277bec90cb112c45e210bf?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 3" },
  { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 4" },
  { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 5" },
];

const technologyPartners = [
  { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1359f117c1b725cd583b9400de926c90a90a19f6f898babbd59b11fb454c56c1?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 1" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c5a6dcd25f2674eae44ea00a399af43229e2f852fd8383bc39cb03d56f09736?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 2" },
  { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 3" },
  { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 4" },
  { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 5" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function UniversityPartnersMobile() {
  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Đối tác trường đại học</h2>
      <Slider {...sliderSettings}>
        {universityPartners.map((partner) => (
          <div key={partner.id} className="p-4">
            <img src={partner.src} alt={partner.alt} className="mx-auto w-48 h-auto object-contain" />
          </div>
        ))}
      </Slider>

      <h2 className="text-2xl font-semibold text-center mt-12 mb-4">Đối tác công ty công nghệ</h2>
      <Slider {...sliderSettings}>
        {technologyPartners.map((partner) => (
          <div key={partner.id} className="p-4">
            <img src={partner.src} alt={partner.alt} className="mx-auto w-48 h-auto object-contain" />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default UniversityPartnersMobile;
