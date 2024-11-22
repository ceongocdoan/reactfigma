import React from 'react';

function CourseCard({ type, title, description, courseCount, level, duration, badgeColor }) {
  return (
    <article className="flex overflow-hidden flex-col mt-4 w-full bg-white rounded-2xl border border-gray-200 border-solid shadow-md min-h-[406px]">
      <div className="flex flex-col flex-1 px-5 pt-5 pb-6 w-full">
        <div className={`flex gap-2 items-start w-full text-xs font-medium leading-5 text-center text-${badgeColor}-700`}>
          <div className="flex flex-col flex-1 shrink items-start w-full basis-0 min-w-[240px]">
            <div className="flex gap-2 items-center">
              <div className="flex items-start self-stretch my-auto">
                <div className={`self-stretch px-2 py-0.5 bg-${badgeColor}-50 rounded-full border border-${badgeColor}-200 border-solid`}>
                  {type}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 mt-4 w-full">
          <div className="flex gap-4 w-full">
            <h3 className="flex-1 shrink text-xl font-semibold leading-8 text-gray-900 whitespace-normal pr-[10px] basis-0 text-ellipsis">
              {title}
            </h3>
            <div className="flex flex-col self-start pt-0.5 w-6">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d62084391ef818a5c5cbbba0a852327eb923f3e1c14921e8940ee4ba1f84ddbc?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain w-6 aspect-square" />
            </div>
          </div>
          <p className="mt-2 text-base leading-6 whitespace-normal pr-[10px] text-ellipsis text-slate-600">
            {description}
          </p>
        </div>
        <div className="flex flex-col mt-4 w-full text-sm font-medium leading-5 text-gray-900">
          {courseCount && (
            <>
              <div className="flex gap-3 items-center w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/762f00aff9ab66bf8cff21f2bbe13b4a69ebbbbe33593fd0c483c879c618a7ba?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
                <div className="flex flex-col flex-1 shrink justify-center items-start self-stretch my-auto basis-0 min-w-[240px]">
                  <div className="flex flex-col justify-center pt-1 w-[83px]">
                    <div className="py-0.5 w-full">{courseCount}</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full border border-gray-200 border-dashed min-h-[1px]" />
              <div className="flex gap-3 items-center mt-2 w-full min-h-[32px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5110935cf879223fd2ac378beb3bc92f2de137cde575a0e8d0e959b3cf27cf8d?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
                <div className="flex flex-col flex-1 shrink justify-center items-start self-stretch my-auto basis-0 min-w-[240px]">
                  <div className="flex flex-col justify-center pt-1 w-[83px]">
                    <div className="py-0.5 pr-0 w-full">Đi kèm khoá học</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full border border-gray-200 border-dashed min-h-[1px]" />
            </>
          )}
          <div className="flex gap-10 justify-between items-center mt-2 w-full">
            <div className="flex gap-3 items-center self-stretch my-auto">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a2f5240282c3a4fd4c490fffafe22f7ef85f853a58962664976b595fce23c97?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
              <div className="flex flex-col justify-center self-stretch my-auto w-[83px]">
                <div className="flex flex-col justify-center pt-1 w-[83px]">
                  <div className="py-0.5 w-full">{level}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center self-stretch my-auto text-right">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/153f24a20158554b279a090995bbd345c7df7671a3aa98e28678e7fd931dd142?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
              <div className="flex flex-col self-stretch my-auto w-10">
                <div className="flex flex-col pt-1 w-full">
                  <div className="py-0.5 w-full whitespace-nowrap">{duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;