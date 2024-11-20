import React from 'react';
import PartnerSection from './PartnerSection';
import Pagination from './Pagination';

const universityPartners = [
  { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/feb00063f794bf0d592c5cf7e5979ad946de74e11b66ca59081e2a8acbf9b78e?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 1" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1a2fb334e14c20eb06a2c22d8c1739aac2d663925d1034b6b7986b29bc06b11?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 2" },
  { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b364eb965f5c2eba682f54a46134e661c8b709b3a9277bec90cb112c45e210bf?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 3" },
  { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 4" },
  { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "University Partner 5" },
];

const technologyPartners = [
  { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1359f117c1b725cd583b9400de926c90a90a19f6f898babbd59b11fb454c56c1?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 1" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c5a6dcd25f2674eae44ea00a399af43229e2f852fd8383bc39cb03d56f09736?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 2" },
  { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 3" },
  { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 4" },
  { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f", alt: "Technology Partner 5" },
];

function UniversityPartnersMobile() {
  return (
    <section className="flex flex-col items-end px-16 w-full justify-center">
      <div className="flex overflow-hidden relative justify-center items-start py-16 bg-white">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/184e2c98398f926180678ef9d52de1ee8347d3fa1402a24f9a8234718144a06b?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" 
          alt=""
          className="object-contain absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 aspect-[2.02] h-[960px] min-w-[240px] w-[960px] max-md:max-w-full max-sm:top-3 max-sm:left-[98px]" 
        />
        <div className="flex z-0 flex-col flex-1 shrink justify-center px-4 w-full basis-0 min-w-[240px]">
          <PartnerSection 
            title="Đối tác trường đại học" 
            partners={universityPartners} 
          />
          <Pagination count={5} activeIndex={0} />
          <div className="mt-[5%]">
            <PartnerSection 
              title="Đối tác công ty công nghệ" 
              partners={technologyPartners} 
            />
            <div className=" justify-self-center">
              <Pagination count={3} activeIndex={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UniversityPartnersMobile;