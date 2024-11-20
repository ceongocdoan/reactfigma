import React from 'react';

function MainContent() {
  return (
    <main className="flex items-start px-4 mt-20 min-h-[268px]">
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
        <section className="flex flex-col w-full">
          <h1 className="w-full text-4xl font-semibold tracking-tighter leading-10 text-gray-900">
            Mở khóa kỹ năng - Nâng tầm sự nghiệp
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-700">
            Nâng cao kỹ năng, kiến thức chuyên môn để phát triển bản thân và thăng tiến trong sự nghiệp
          </p>
        </section>
        <div className="flex flex-col mt-8 w-full text-base font-semibold leading-6 text-white">
          <button className="flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 w-full bg-sky-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
            Học thử ngay bây giờ!
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainContent;