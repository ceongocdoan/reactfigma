import React from 'react';

function AuthButtons1() {
  return (
    <div className="flex gap-3 items-center font-semibold">
      <button className="transition transform hover:bg-blue-100 active:scale-95 flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-4 py-2.5 my-auto rounded-lg text-slate-600">
        Đăng nhập
      </button>
      <button className="transition transform hover:bg-blue-600 active:scale-95 flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-4 py-2.5 my-auto text-white bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
        Đăng ký
      </button>
    </div>
  );
}

export default AuthButtons1;