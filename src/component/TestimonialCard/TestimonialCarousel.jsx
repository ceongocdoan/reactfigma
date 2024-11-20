import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/936d782ba45ba353b524b2a0d0094cbcdd228e302fad406138d81ea510dc605a?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Sau 2 tháng học thì Linh thấy mình có được nhiều thứ như một số kỹ năng mềm chuyên dụng về dữ liệu (trực quan hóa, hệ thống, mô hình) các kỹ thuật ứng dụng nâng cao năng suất làm việc, đặc biệt là kỹ năng sống còn như tìm kiếm, làm việc với các công cụ AI...để phân tích dữ liệu khách hàng, thị trường.",
    name: "Đỗ Khánh Linh"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93f2941a4bab421e35d930be09342748083a14789383ae2c4b46841835477ffd?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Tại Onschool, ngoài việc được làm một số dự án thực tế trau dồi kỹ năng thì đặc biệt nhất là ở đây Huy còn được luyện để lấy chứng chỉ quốc tế về đánh giá năng lực lập trình viên; với việc này đã giúp Huy có ngay vị trí lập trình viên thực tập tại công ty AllXone trong khi Huy đang học năm 3 ngành CNTT.",
    name: "Đào Gia Huy"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a269003d76ad8d05f024a76b9d7dd70cf9688f921a9f0c70da251c3c7cf2ea3c?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Mỹ đánh giá cao nhất là được làm những dự án thực tế, đó là lợi thế lớn khi tìm kiếm việc làm. Lúc trình bày dự án Mỹ thể hiện được đủ các kỹ năng chuyên môn, tư duy cơ bản đã được các thầy hướng dẫn khi học. Điều đó đã được Nhà tuyển dụng đánh giá cao, nhờ đó Mỹ nhận việc ngay khi chưa kết thúc khóa học",
    name: "Huỳnh Ngọc Khánh Mỹ"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6be2d2f74b752cb5d8166dd6a81bc96925137e8bf0aae23d4c6dffbbf167ceca?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Phương Anh thích máy tính, biết tiếng Anh, muốn học một số kỹ năng làm lập trình vì mình thấy ngành này tiềm năng. Mình chọn Onschool vì lộ trình đào tạo bài bản và đầy đủ. Mình đã có một trải nghiệm chuyển ngành lập trình tích cực và đã tìm thấy một công việc phù hợp với sở thích và năng lực của mình..",
    name: "Trần Trịnh Phương Anh"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fc230af8405602344b42702ebabaa890253a6e1bc15ae77d879c167ca9c5d55?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Trung thấy Onschool có lộ trình ngắn, phương pháp học Learning by doing học liên tục rất phù hợp với người chuyển ngành như Trung. Học ở đây thấy rất nhanh, áp lực về thách thức hoàn thành dự án, cày deadline nhưng sung sướng. Rất vui vì thành quả đạt được là Trung hoàn thành mục tiêu chuyển ngành của mình.",
    name: "Võ Nguyễn Minh Trung"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=ac8d84f3191644fbac37f90f1063bf65&",
    testimonial: "Mình chọn Onschool vì được bạn bè giới thiệu, học phí cũng phù hợp với tình hình của mình lúc đó. Trong thời gian học, mình được các thầy và admin hỗ trợ rất nhiệt tình. Chương trình học ở Onschool là học thông qua thực chiến, dựa trên các dự án thực tế nên khi bắt tay vào công việc, mình làm được việc ngay",
    name: "Nguyễn Văn Chương"
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="flex overflow-x-auto gap-6 justify-center items-center h-[299px]">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          imageSrc={testimonial.imageSrc}
          testimonial={testimonial.testimonial}
          name={testimonial.name}
        />
      ))}
    </div>
  );
};

export default TestimonialCarousel;