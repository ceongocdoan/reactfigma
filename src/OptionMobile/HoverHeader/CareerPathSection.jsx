import React from 'react';
import MenuItem from './MenuItem';

function CareerPathSection() {
  const careerPaths = [
    "Full-Stack Engineer",
    "Front-End Engineer",
    "Back-End Engineer",
    "Computer-Science",
    "Java Fullstack Web Developer",
    "Python Fullstack Web Developer"
  ];

  return (
    <section className="flex flex-col w-full">
      <div className="flex overflow-hidden flex-col gap-4 justify-center px-0 py-5 w-full bg-yellow-50 opacity-90">
        <div className="flex flex-col justify-center px-4 py-3 w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-base font-semibold leading-6 text-gray-900 text-ellipsis">
              Lộ trình sự nghiệp
            </h2>
            <p className="mt-1 text-sm leading-5 text-ellipsis text-slate-700">
              Chọn lộ trình sự nghiệp của bạn. Chúng tôi sẽ giúp bạn nâng cao kỹ năng nhanh chóng.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 w-full text-base font-semibold leading-6 text-gray-900">
        {careerPaths.map((path, index) => (
          <MenuItem key={index} text={path} />
        ))}
      </div>
    </section>
  );
}

export default CareerPathSection;