import React from "react";
import Slider from "react-slick"; // Import Slider từ react-slick
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS

const universityPartners = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/556e72bfc5f53ca30cd85cd9262491bed267b2229cc8967ad0a8109900b3fb53?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner Logo 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eef24f760401baf4904c1955361ad30e87869f201af75da5046271c74aab11bd?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner Logo 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf1ebf1d34e3182e6f8624f2c14211fa39ba0d2db62b28eef2733b2aa8979ed3?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner Logo 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7e7267f436ac08cd3da7ce861e6b0292e4e25c81c87082c3d1cd0214f1ab0a?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner Logo 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/19aa60a0be9ebd7cd31f9b56454fc85b1321b3a6bf57d8b5bd707d935eaf3db3?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "University Partner Logo 5" },
];

const techPartners = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba7f0257e7d280242165c7e971b40fb9c613f8fb987e8be72a7746b70bcb24aa?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Tech Partner Logo 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ce674c7ec11bd213ce9532ea8a64a499f01e0a711bd1154ced5b5974dea72e0?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Tech Partner Logo 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fff8254538c2ad9fb583e3980772bbf4ca5ee2283a8dbe3ab00ab6a593bcc066?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Tech Partner Logo 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/165acf9bbf6802f0a6843282686f05fc1a43ba95586da415ede05715a82b3ab4?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Tech Partner Logo 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf679bb2d550620aea33715db036cc97867c06a60a102bcd778e5b1894df3074?apiKey=ac8d84f3191644fbac37f90f1063bf65&", alt: "Tech Partner Logo 5" },
];

const PartnerSection = ({ title, partners }) => {
  // Cấu hình slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Màn hình nhỏ hơn 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full text-center mb-16">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <Slider {...settings} className="flex items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={partner.src}
              alt={partner.alt}
              className="h-auto w-[200px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

function UniversityPartners() {
  return (
    <section className="relative flex flex-col items-center px-16 max-md:pl-5">
      {/* Background Image */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d290a4bf756f3e65dfdf65692aef6acfefc02c989dca0320112fd67b079598d?apiKey=ac8d84f3191644fbac37f90f1063bf65&"
        alt=""
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />

      {/* Content Section */}
      <div className="relative z-10 w-full flex flex-col gap-12 py-24 px-8 max-w-screen-xl">
        {/* University Partners */}
        <PartnerSection
          title="Đối tác trường đại học"
          partners={universityPartners}
        />
        {/* Tech Partners */}
        <PartnerSection title="Đối tác công ty công nghệ" partners={techPartners} />
      </div>
    </section>
  );
}

export default UniversityPartners;
