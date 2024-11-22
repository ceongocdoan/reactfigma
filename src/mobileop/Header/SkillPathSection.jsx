import React from 'react';
import MenuItem from './MenuItem';

function SkillPathSection() {
  const skillPaths = [
    "Python", "JavaScript", "HTML & CSS", "SQL", "Java", "C++", "C#", "Bash", "C", "PHP",
    "R", "Swift", "Cloud Computing", "AI", "Web Development", "Data Science", "Web Design", "Cybersecurity"
  ];

  return (
    <section className="flex flex-col mt-6 w-full">
      <div className="flex overflow-hidden flex-col gap-4 justify-center px-0 py-5 w-full bg-yellow-50">
        <div className="flex flex-col justify-center px-4 py-3 w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-base font-semibold leading-6 text-gray-900 text-ellipsis">
              Lộ trình kỹ năng
            </h2>
            <p className="mt-1 text-sm leading-5 text-ellipsis text-slate-700">
              Khám phá các khoá học miễn phí hoặc các chủ đề yêu thích của bạn.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 w-full text-base font-semibold leading-6 text-gray-900">
        {skillPaths.map((skill, index) => (
          <MenuItem key={index} text={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillPathSection;