import * as React from "react";

function CarouselDots({ count, activeIndex }) {
  return (
    <div className="flex gap-2 items-center self-center mt-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 self-stretch my-auto w-3 h-3 rounded-full ${
            index === activeIndex ? "bg-sky-600" : "bg-gray-300"
          }`}
          role="button"
          tabIndex={0}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default CarouselDots;