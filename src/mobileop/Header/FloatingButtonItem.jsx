import React from "react";

function FloatingButtonItem({ src, alt, className }) {
  return (
    <button className={`w-full z-10 ${className}`}>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain w-full rounded-2xl aspect-square shadow"
      />
    </button>
  );
}

export default FloatingButtonItem;