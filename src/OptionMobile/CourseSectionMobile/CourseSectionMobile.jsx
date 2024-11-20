import React from 'react';
import CourseCard from './CourseCard';
import TabButton from './TabButton';

const courses = [
  {
    type: 'Lộ trình sự nghiệp',
    title: 'Chuyên viên phân tích dữ liệu',
    description: 'Chuyên viên phân tích dữ liệu và nhà khoa học dữ liệu sử dụng Python và MySQL để truy vấn, phân tích và trực quan hóa dữ liệu - và truyền đạt kết quả. Bao gồm Python 3, MySQL, Pandas, Numpy, Matplotlib, PowerBI và nhiều hơn nữa.',
    courseCount: '07 khoá học',
    level: 'Mới bắt đầu',
    duration: '73 giờ',
    badgeColor: 'sky',
  },
  {
    type: 'Lộ trình kỹ năng',
    title: 'Tạo ứng dụng backend với JavaScript',
    description: 'Học cách xây dựng API backend web sử dụng Express.js, Node.js, MongoDB và Firebase. Bao gồm HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, APIs, MongoDB, Firebase và nhiều hơn nữa.',
    courseCount: '07 khoá học',
    level: 'Mới bắt đầu',
    duration: '81 giờ',
    badgeColor: 'indigo',
  },
  {
    type: 'Khoá học',
    title: 'Giới thiệu về Python',
    description: 'Học các kiến thức cơ bản về Python 3, một trong những ngôn ngữ lập trình mạnh mẽ, linh hoạt và được săn đón nhất hiện nay.',
    level: 'Mới bắt đầu',
    duration: '20 giờ',
    badgeColor: 'violet',
  },
  {
    type: 'Khoá học',
    title: 'Trực quan hóa dữ liệu với PowerBI',
    description: 'Xây dựng các báo cáo tương tác, ấn tượng với bảng điều khiển thông minh (BI) của Microsoft Power BI.',
    level: 'Mới bắt đầu',
    duration: '19 giờ',
    badgeColor: 'violet',
  },
  {
    type: 'Project',
    title: 'Phân tích tính khả thi tăng giá cho Toman Bike Share',
    description: 'Đánh giá tính khả thi của việc tăng giá dịch vụ xe đạp chia sẻ Toman Bike Share vào năm tới.',
    level: 'Mới bắt đầu',
    duration: '02 giờ',
    badgeColor: 'emerald',
  },
  {
    type: 'Project',
    title: 'Phân tích dữ liệu bán hàng của Walmart',
    description: 'Phân tích dữ liệu bán hàng để xác định các ảnh hưởng đến doanh số bán hàng của các chi nhánh khác nhau',
    level: 'Mới bắt đầu',
    duration: '02 giờ',
    badgeColor: 'emerald',
  },
];

const tabs = ['Tất cả', 'Khoá học', 'Lộ trình kỹ năng', 'Lộ trình sự nghiệp'];

function CourseSectionMobile() {
  return (
    <section className="flex overflow-hidden flex-col py-16 mx-auto w-full bg-sky-50 max-w-[644px]">
      <div className="flex flex-col px-4 w-full font-semibold">
        <h2 className="flex flex-col w-full text-3xl leading-10 text-center text-gray-900">
          Mở rộng cơ hội nghề nghiệp với các khóa học phổ biến
        </h2>
        <nav className="flex overflow-hidden flex-col items-start mt-8 w-full text-sm leading-5 text-gray-500 border-b border-gray-200">
          <ul className="flex gap-3 items-start">
            {tabs.map((tab, index) => (
              <TabButton key={index} label={tab} isActive={index === 0} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col px-[5%] mt-12 w-full">
        <div className="flex flex-col items-center w-full max-w-screen-xl">
          <div className="flex flex-col max-w-full ">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          <button className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 mt-8 text-base font-semibold leading-6 text-white bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
            Khám phá tất cả khoá học
          </button>
        </div>
      </div>
    </section>
  );
}

export default CourseSectionMobile;