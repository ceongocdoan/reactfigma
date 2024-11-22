import * as React from "react";

function ImageCarousel({ images }) {
  return (
    <div className="flex gap-6 items-start mt-4 w-full">
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className="object-contain shrink-0 gap-3.5 aspect-[2.56] w-[156px]"
        />
      ))}
    </div>
  );
}

export default ImageCarousel;