import React from 'react';

function Button({ text }) {
  return (
    <button className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 w-full bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
      <span className="self-stretch px-0.5 my-auto">{text}</span>
    </button>
  );
}

export default Button;