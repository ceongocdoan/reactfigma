import React from 'react';
import Card from './Card';
import TabButton from './TabButton';

const courseData = [
  {
    type: 'Lộ trình sự nghiệp',
    title: 'Chuyên viên phân tích dữ liệu',
    description: 'Chuyên viên phân tích dữ liệu và nhà khoa học dữ liệu sử dụng Python và MySQL để truy vấn, phân tích và trực quan hóa dữ liệu - và truyền đạt kết quả. Bao gồm Python 3, MySQL, Pandas, Numpy, Matplotlib, PowerBI và nhiều hơn nữa.',
    courseCount: '07 khoá học',
    level: 'Mới bắt đầu',
    duration: '73 giờ',
    badgeColor: 'sky'
  },
  {
    type: 'Lộ trình kỹ năng',
    title: 'Tạo ứng dụng backend với JavaScript',
    description: 'Học cách xây dựng API backend web sử dụng Express.js, Node.js, MongoDB và Firebase. Bao gồm HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, APIs, MongoDB, Firebase và nhiều hơn nữa.',
    courseCount: '05 khoá học',
    level: 'Mới bắt đầu',
    duration: '81 giờ',
    badgeColor: 'indigo'
  },
  {
    type: 'Khoá học',
    title: 'Giới thiệu về Python',
    description: 'Học các kiến thức cơ bản về Python 3, một trong những ngôn ngữ lập trình mạnh mẽ, linh hoạt và được săn đón nhất hiện nay.',
    level: 'Mới bắt đầu',
    duration: '20 giờ',
    badgeColor: 'violet'
  },
  {
    type: 'Khoá học',
    title: 'Trực quan hóa dữ liệu với PowerBI',
    description: 'Xây dựng các báo cáo tương tác, ấn tượng với bảng điều khiển thông minh (BI) của Microsoft Power BI.',
    level: 'Mới bắt đầu',
    duration: '19 giờ',
    badgeColor: 'violet'
  },
  {
    type: 'Project',
    title: 'Phân tích tính khả thi tăng giá cho Toman Bike Share',
    description: 'Đánh giá tính khả thi của việc tăng giá dịch vụ xe đạp chia sẻ Toman Bike Share vào năm tới.',
    level: 'Mới bắt đầu',
    duration: '02 giờ',
    badgeColor: 'emerald'
  },
  {
    type: 'Project',
    title: 'Phân tích dữ liệu bán hàng của Walmart',
    description: 'Phân tích dữ liệu bán hàng để xác định các ảnh hưởng đến doanh số bán hàng của các chi nhánh khác nhau',
    level: 'Mới bắt đầu',
    duration: '02 giờ',
    badgeColor: 'emerald'
  }
];

function Section() {
  return (
    <section data-layername="sectionHomepage" className="flex overflow-hidden flex-col items-center py-24 bg-sky-50">
      <div className="flex flex-col items-center max-w-full font-semibold w-[1280px]">
        <header data-layername="container" className="flex flex-col px-8 w-full max-w-screen-xl text-4xl tracking-tighter leading-10 text-center text-gray-900 max-md:px-5 max-md:max-w-full">
          <div data-layername="content" className="flex flex-col items-center w-full max-md:max-w-full">
            <div data-layername="headingAndSupportingText" className="flex flex-col max-w-screen-md w-[768px] max-md:max-w-full">
              <h1 data-layername="headingAndSubheading" className="w-full whitespace-nowrap max-md:max-w-full">
                Mở rộng cơ hội nghề nghiệp với các khóa học phổ biến
              </h1>
            </div>
          </div>
        </header>
        <nav data-layername="horizontalTabs" className="flex flex-col items-center mt-8 text-sm leading-5 text-gray-500 border-b border-gray-200">
          <div data-layername="tabs" className="flex gap-3 items-start">
            <TabButton label="Tất cả" active={true} />
            <TabButton label="Khoá học" />
            <TabButton label="Lộ trình kỹ năng" />
            <TabButton label="Lộ trình sự nghiệp" />
          </div>
        </nav>
      </div>
      <div data-layername="container" className="flex flex-col px-8 mt-8 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
        <div data-layername="content" className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          {courseData.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </div>
        <button data-layername="buttonsButton" className="flex overflow-hidden gap-1.5 justify-center items-center self-center px-5 py-3 mt-8 text-base font-semibold leading-6 text-white bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
          <span data-layername="text" className="self-stretch px-0.5 my-auto">Khám phá tất cả khoá học</span>
        </button>
      </div>
    </section>
  );
}

export default Section;