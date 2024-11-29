import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const universityPartners = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/556e72bfc5f53ca30cd85cd9262491bed267b2229cc8967ad0a8109900b3fb53?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner  1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eef24f760401baf4904c1955361ad30e87869f201af75da5046271c74aab11bd?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner  2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf1ebf1d34e3182e6f8624f2c14211fa39ba0d2db62b28eef2733b2aa8979ed3?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner  3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7e7267f436ac08cd3da7ce861e6b0292e4e25c81c87082c3d1cd0214f1ab0a?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner  4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/19aa60a0be9ebd7cd31f9b56454fc85b1321b3a6bf57d8b5bd707d935eaf3db3?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner  5" },
];

const technologyPartners = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba7f0257e7d280242165c7e971b40fb9c613f8fb987e8be72a7746b70bcb24aa?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Technology Partner 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ce674c7ec11bd213ce9532ea8a64a499f01e0a711bd1154ced5b5974dea72e0?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Technology Partner 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fff8254538c2ad9fb583e3980772bbf4ca5ee2283a8dbe3ab00ab6a593bcc066?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Technology Partner 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/165acf9bbf6802f0a6843282686f05fc1a43ba95586da415ede05715a82b3ab4?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Technology Partner 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf679bb2d550620aea33715db036cc97867c06a60a102bcd778e5b1894df3074?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Technology Partner 5" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
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
            <img src={partner.src} alt={partner.alt} className="mx-auto w-24 h-auto object-contain" />
          </div>
        ))}
      </Slider>

      <h2 className="text-2xl font-semibold text-center mt-12 mb-4">Đối tác công ty công nghệ</h2>
      <Slider {...sliderSettings}>
        {technologyPartners.map((partner) => (
          <div key={partner.id} className="p-4">
            <img src={partner.src} alt={partner.alt} className="mx-auto w-24 h-auto object-contain" />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default UniversityPartnersMobile;
