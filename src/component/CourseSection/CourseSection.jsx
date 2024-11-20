import React from 'react';
import CourseCard from './CourseCard';
import ProjectCard from './ProjectCard';

const courses = [
  {
    type: 'Lộ trình sự nghiệp',
    title: 'Chuyên viên phân tích dữ liệu',
    description: 'Chuyên viên phân tích dữ liệu và nhà khoa học dữ liệu sử dụng Python và MySQL để truy vấn, phân tích và trực quan hóa dữ liệu - và truyền đạt kết quả. Bao gồm Python 3, MySQL, Pandas, Numpy, Matplotlib, PowerBI và nhiều hơn nữa.',
    courseCount: '07 khoá học',
    level: 'Mới bắt đầu',
    duration: '73 giờ',
    typeColor: 'sky'
  },
  {
    type: 'Lộ trình kỹ năng',
    title: 'Tạo ứng dụng backend với JavaScript',
    description: 'Học cách xây dựng API backend web sử dụng Express.js, Node.js, MongoDB và Firebase. Bao gồm HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, APIs, MongoDB, Firebase và nhiều hơn nữa.',
    courseCount: '05 khoá học',
    level: 'Mới bắt đầu',
    duration: '81 giờ',
    typeColor: 'indigo'
  },
  {
    type: 'Khoá học',
    title: 'Giới thiệu về Python',
    description: 'Học các kiến thức cơ bản về Python 3, một trong những ngôn ngữ lập trình mạnh mẽ, linh hoạt và được săn đón nhất hiện nay.',
    level: 'Mới bắt đầu',
    duration: '20 giờ',
    typeColor: 'violet'
  },
  {
    type: 'Khoá học',
    title: 'Trực quan hóa dữ liệu với PowerBI',
    description: 'Xây dựng các báo cáo tương tác, ấn tượng với bảng điều khiển thông minh (BI) của Microsoft Power BI.',
    level: 'Mới bắt đầu',
    duration: '19 giờ',
    typeColor: 'violet'
  }
];

const projects = [
  {
    title: 'Phân tích tính khả thi tăng giá cho Toman Bike Share',
    description: 'Đánh giá tính khả thi của việc tăng giá dịch vụ xe đạp chia sẻ Toman Bike Share vào năm tới.',
    level: 'Mới bắt đầu',
    duration: '02 giờ'
  },
  {
    title: 'Phân tích dữ liệu bán hàng của Walmart',
    description: 'Phân tích dữ liệu bán hàng để xác định các ảnh hưởng đến doanh số bán hàng của các chi nhánh khác nhau',
    level: 'Mới bắt đầu',
    duration: '02 giờ'
  }
];

function CourseSection() {
  return (
    <section className="flex overflow-hidden flex-col items-center py-24 bg-sky-50">
      <div className="flex flex-col items-center max-w-full font-semibold w-[1280px]">
        <header className="flex flex-col px-8 w-full max-w-screen-xl text-4xl tracking-tighter leading-10 text-center text-gray-900 max-md:px-5 max-md:max-w-full">
          <h1 className="flex flex-col items-center w-full max-md:max-w-full">
            <span className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full">
              Mở rộng cơ hội nghề nghiệp với các khóa học phổ biến
            </span>
          </h1>
        </header>
        <nav className="flex flex-col items-center mt-8 text-sm leading-5 text-gray-500 border-b border-gray-200">
          <ul className="flex gap-3 items-start">
            <li className="gap-2 self-stretch px-1 pb-3 text-sky-700 border-b-2 border-sky-600 min-h-[32px]">Tất cả</li>
            <li className="gap-2 self-stretch px-1 pb-3 min-h-[32px]">Khoá học</li>
            <li className="gap-2 self-stretch px-1 pb-3 min-h-[32px]">Lộ trình kỹ năng</li>
            <li className="gap-2 self-stretch px-1 pb-3 min-h-[32px]">Lộ trình sự nghiệp</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col px-8 mt-8 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <button className="flex overflow-hidden gap-1.5 justify-center items-center self-center px-5 py-3 mt-8 text-base font-semibold leading-6 text-white bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
          Khám phá tất cả khoá học
        </button>
      </div>
    </section>
  );
}

export default CourseSection;