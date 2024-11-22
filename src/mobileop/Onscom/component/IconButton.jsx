import React from 'react';

export const IconButton = ({ src, alt }) => {
  return (
    <div className="flex overflow-hidden justify-center items-center p-2 w-10 rounded-md">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain self-stretch my-auto w-6 aspect-square"
      />
    </div>
  );
};