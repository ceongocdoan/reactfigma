

import React from "react";
import Slider from "react-slick"; // Import Slider
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS

const testimonials = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/bf795e3f541363db26f45df524ec95556cf4fd3a5c359e35b70ee76a5c9b32e4?apiKey=057aab5311cf46f4b038f586fb84e77f&",
    testimonial: "Sau 2 tháng học thì Linh thấy mình có được nhiều thứ như một số kỹ năng mềm chuyên dụng về dữ liệu...",
    name: "Đỗ Khánh Linh",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/f0120e8f175b0d0c268d96661ebcc49d6c9e8b749ba16dd99ee6d5b7e0e3b5d4?apiKey=057aab5311cf46f4b038f586fb84e77f&",
    testimonial: "Tại Onschool, ngoài việc được làm một số dự án thực tế trau dồi kỹ năng thì đặc biệt nhất là ở đây...",
    name: "Đào Gia Huy",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a269003d76ad8d05f024a76b9d7dd70cf9688f921a9f0c70da251c3c7cf2ea3c?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Mỹ đánh giá cao nhất là được làm những dự án thực tế, đó là lợi thế lớn khi tìm kiếm việc làm...",
    name: "Huỳnh Ngọc Khánh Mỹ",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6be2d2f74b752cb5d8166dd6a81bc96925137e8bf0aae23d4c6dffbbf167ceca?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Phương Anh thích máy tính, biết tiếng Anh, muốn học một số kỹ năng làm lập trình vì mình thấy ngành này tiềm năng...",
    name: "Trần Trịnh Phương Anh",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fc230af8405602344b42702ebabaa890253a6e1bc15ae77d879c167ca9c5d55?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Trung thấy Onschool có lộ trình ngắn, phương pháp học Learning by doing học liên tục rất phù hợp...",
    name: "Võ Nguyễn Minh Trung",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/d3ae91a8d4120a6a288d1f498f981360a6accaddd138deda4aa793fbb1664a20?apiKey=057aab5311cf46f4b038f586fb84e77f&",
    testimonial: "Mình chọn Onschool vì được bạn bè giới thiệu, học phí cũng phù hợp với tình hình của mình lúc đó...",
    name: "Nguyễn Văn Chương",
  },
  
];

const TestimonialCarousel = () => {
  // Cấu hình của Slick Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1140, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1, 
        },
      },
      {
        breakpoint: 870, // Khi màn hình dưới 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470, // Khi màn hình dưới 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imageSrc={testimonial.imageSrc}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
