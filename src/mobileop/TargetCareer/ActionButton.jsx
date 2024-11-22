import React from "react";

function ActionButton() {
  return (
    <div className="flex flex-col mt-8 w-full text-base font-semibold leading-6 text-white">
      <button className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 w-full bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
        <span className="self-stretch px-0.5 my-auto">
          Bắt đầu ngay!
        </span>
      </button>
    </div>
  );
}

export default ActionButton;