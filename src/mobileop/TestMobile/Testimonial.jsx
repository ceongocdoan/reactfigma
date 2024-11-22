import React from 'react';
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    content: "Sau 2 tháng học thì Linh thấy mình có được nhiều thứ như một số kỹ năng mềm chuyên dụng về dữ liệu (trực quan hóa, hệ thống, mô hình) các kỹ thuật ứng dụng nâng cao năng suất làm việc, đặc biệt là kỹ năng sống còn như tìm kiếm, làm việc với các công cụ AI...để phân tích dữ liệu khách hàng, thị trường.",
    author: "Đỗ Khánh Linh",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/bf795e3f541363db26f45df524ec95556cf4fd3a5c359e35b70ee76a5c9b32e4?apiKey=057aab5311cf46f4b038f586fb84e77f&"
  },
  {
    content: "Mỹ đánh giá cao nhất là được làm những dự án thực tế, đó là lợi thế lớn khi tìm kiếm việc làm. Lúc trình bày dự án Mỹ thể hiện được đủ các kỹ năng chuyên môn, tư duy cơ bản đã được các thầy hướng dẫn khi học. Điều đó đã được Nhà tuyển dụng đánh giá cao, nhờ đó Mỹ nhận việc ngay khi chưa kết thúc khóa học",
    author: "Huỳnh Ngọc Khánh Mỹ",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/469e0a6cbf55b1f401e9cb9b1c7e128e911ca209c31c21a047477c97dac62b77?apiKey=057aab5311cf46f4b038f586fb84e77f&"
  },
  {
    content: "Tại Onschool, ngoài việc được làm một số dự án thực tế trau dồi kỹ năng thì đặc biệt nhất là ở đây Huy còn được luyện để lấy chứng chỉ quốc tế về đánh giá năng lực lập trình viên; với việc này đã giúp Huy có ngay vị trí lập trình viên thực tập tại công ty AllXone trong khi Huy đang học năm 3 ngành CNTT.",
    author: "Đào Gia Huy",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/f0120e8f175b0d0c268d96661ebcc49d6c9e8b749ba16dd99ee6d5b7e0e3b5d4?apiKey=057aab5311cf46f4b038f586fb84e77f&"
  },
  {
    content: "Phương Anh thích máy tính, biết tiếng Anh, muốn học một số kỹ năng làm lập trình vì mình thấy ngành này tiềm năng. Mình chọn Onschool vì lộ trình đào tạo bài bản và đầy đủ. Mình đã có một trải nghiệm chuyển ngành lập trình tích cực và đã tìm thấy một công việc phù hợp với sở thích và năng lực của mình..",
    author: "Trần Trịnh Phương Anh",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/f4ee213ff946976168d5c46d4411b2797d2ee073ae22eedd43b3eed9719cf70b?apiKey=057aab5311cf46f4b038f586fb84e77f&"
  },
  {
    content: "Trung thấy Onschool có lộ trình ngắn, phương pháp học Learning by doing học liên tục rất phù hợp với người chuyển ngành như Trung. Học ở đây thấy rất nhanh, áp lực về thách thức hoàn thành dự án, cày deadline nhưng sung sướng. Rất vui vì thành quả đạt được là Trung hoàn thành mục tiêu chuyển ngành của mình.",
    author: "Võ Nguyễn Minh Trung",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/57bd9db570fe2b9ca65fa9544793c5c5ad396693310aa34ab283392b8d91c0b9?apiKey=057aab5311cf46f4b038f586fb84e77f&"
  },
  {
    content: "Mình chọn Onschool vì được bạn bè giới thiệu, học phí cũng phù hợp với tình hình của mình lúc đó. Trong thời gian học, mình được các thầy và admin hỗ trợ rất nhiệt tình. Chương trình học ở Onschool là học thông qua thực chiến, dựa trên các dự án thực tế nên khi bắt tay vào công việc, mình làm được việc ngay",
    author: "Nguyễn Văn Chương",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/d3ae91a8d4120a6a288d1f498f981360a6accaddd138deda4aa793fbb1664a20?apiKey=057aab5311cf46f4b038f586fb84e77f&"
  },
];

const Testimonial = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const PrevButton = ({ onClick }) => (
    <button 
      onClick = {onClick} 
      className="transition transform hover:bg-blue-50 active:scale-95 flex justify-center items-center p-3 w-12 h-12 border-2 border-gray-100 border-solid shadow rounded-[100px]" aria-label="Previous testimonial">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/c24a9934dba55c41d42b7a9930287b31f7b67d5965bf23fb91df5c46d38de6d7?apiKey=057aab5311cf46f4b038f586fb84e77f&" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button 
      onClick = {onClick} 
      className="transition transform hover:bg-blue-50 active:scale-95 flex justify-center items-center p-3 w-12 h-12 border-2 border-gray-100 border-solid shadow rounded-[100px]" aria-label="Previous testimonial">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/057aab5311cf46f4b038f586fb84e77f/a13b3a4a8112c5e2b40ccf6d3b7921179d8d4670e084f66715cf6b4298867efe?apiKey=057aab5311cf46f4b038f586fb84e77f&" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
    </button>
  );

  let sliderRef = null;

  return (
    <section className="flex flex-col justify-center items-center pb-6 mt-8 w-full ">
      <div className="w-[90%] max-w-md">
        <Slider ref={(slider) => (sliderRef = slider)} {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
        <div className="flex justify-center m-5 gap-4 pt-4">
          <PrevButton onClick={() => sliderRef.slickPrev()} />
          <NextButton onClick={() => sliderRef.slickNext()} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
