import * as React from "react";
import ImageCarousel from "./ImageCarousel";
import CarouselDots from "./CarouselDots";

const universityPartners = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c95c27bcfb642de929a52a4955da9b0684b4dd01f78ec1233ec451f0621e3570?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "University Partner Logo 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/64117106cfee232b6a013901c3d6bcb277c7adb1f8c52d0c56d50a7573f77867?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "University Partner Logo 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "University Partner Logo 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "University Partner Logo 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "University Partner Logo 5" }
];

const techPartners = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9b9f812afbc4839b40ac0fb454bd274830e367bc93831d3c111a5ac2a03f3e9?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/89aa1cec59298541110001843a5ef7f7786e69c6e0ca4bc3279f37ae3f8c8b6a?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ac8d84f3191644fbac37f90f1063bf65", alt: "Tech Partner Logo 5" }
];

function PartnerSection() {
  return (
    <main className="flex flex-col justify-center px-4 max-w-[375px]">
      <section className="flex flex-col w-full">
        <h2 className="w-full text-2xl font-semibold tracking-tight leading-10 text-center text-gray-900">
          Đối tác trường đại học
        </h2>
        <ImageCarousel images={universityPartners} />
        <CarouselDots count={5} activeIndex={0} />
      </section>

      <section className="flex flex-col mt-8 w-full">
        <h2 className="w-full text-2xl font-semibold   tracking-tight leading-10 text-center text-gray-900">
          Đối tác công ty công nghệ
        </h2>
        <ImageCarousel images={techPartners} />
        <CarouselDots count={3} activeIndex={0} />
      </section>
    </main>
  );
}

export default PartnerSection;