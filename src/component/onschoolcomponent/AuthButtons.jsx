import React from 'react';

const AuthButtons = () => {
  return (
    <div className="flex gap-3 items-center font-semibold">
      <button className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-4 py-2.5 my-auto rounded-lg text-slate-600">
        <span className="self-stretch px-0.5 my-auto">Đăng nhập</span>
      </button>
      <button className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-4 py-2.5 my-auto text-white bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
        <span className="self-stretch px-0.5 my-auto">Đăng ký</span>
      </button>
    </div>
  );
};

export default AuthButtons;