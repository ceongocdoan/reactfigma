import * as React from "react";

export function CalltoAction() {
  return (
    <div className="transition transform hover:bg-blue-600 active:scale-95 rounded-lg flex flex-col mt-8 w-full text-base font-semibold leading-6 text-white">
      <button 
        className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 w-full bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10"
        tabIndex={0}
      >
        <span className="self-stretch px-0.5 my-auto">Bắt đầu ngay!</span>
      </button>
    </div>
  );
}