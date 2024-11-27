import * as React from "react";

const StarRating = () => {
  const stars = Array(5).fill(null); // 5 sao

  return (
    <div className="flex gap-1 items-center self-start mt-4 ">
      {stars.map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gold"
          className="w-6 h-6"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
