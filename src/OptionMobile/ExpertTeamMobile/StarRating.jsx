import React from 'react';

function StarRating() {
  return (
    <div className="flex gap-1 items-center self-start">
      {[...Array(5)].map((_, index) => (
        <img key={index} loading="lazy" src={`http://b.io/ext_${index + 2}-`} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
      ))}
    </div>
  );
}

export default StarRating;