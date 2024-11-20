import React from 'react';
import ExpertCard from './ExpertCard';
import Button from './Button';

const experts = [
  {
    name: 'Vũ Đăng Minh',
    experience: 'Kinh nghiệm 07+ năm',
    role: 'CTO-NSGEDU',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8788f2aeb5f64ae3c93c5e1ea878d78f40d6db3d28f053fa51d9dd59ba249b27?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f'
  },
  {
    name: 'Lê Mạnh Tuấn',
    experience: 'Kinh nghiệm 17+ năm',
    role: 'CEO-Xanh House',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff8507bf19abc12af2eb7e2cf9cf83f916a5a0fcc75e7162294fe297197f6f96?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f'
  },
  {
    name: 'Lưu Quốc Tuấn',
    experience: 'Kinh nghiệm 17+ năm',
    role: 'Chairman-Toprate',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a89f087ec042df227498faa526c814a3fc39004be37db3693f33b97c1c31c92a?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f'
  }
];

function ExpertTeamMobile() {
  return (
    <section className="flex overflow-hidden flex-col py-16 mx-auto w-full bg-gray-50 max-w-[644px]">
      <div className="flex items-start px-4 w-full font-semibold">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <h2 className="flex flex-col w-full text-3xl leading-10 text-gray-900">
            Lộ trình học do đội ngũ chuyên gia dày dặn kinh nghiệm thiết kế
          </h2>
          <div className="mt-8 w-full text-base leading-6 text-white">
            <Button text="Đăng ký tư vấn ngay!" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 mt-12 w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            {experts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertTeamMobile;