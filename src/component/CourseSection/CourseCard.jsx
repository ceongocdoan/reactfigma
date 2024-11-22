import React from 'react';

function CourseCard({ type, title, description, courseCount, level, duration, typeColor }) {
  return (
    <article className="flex overflow-hidden flex-col grow shrink justify-center p-4 bg-white rounded-2xl border border-gray-200 border-solid shadow-md min-h-[408px] min-w-[240px] w-[307px]">
      <div className="flex flex-col flex-1 w-full">
        <div className={`flex flex-wrap gap-2 items-start w-full text-xs font-medium leading-5 text-center text-${typeColor}-700`}>
          <div className="flex flex-col flex-1 shrink items-start w-full basis-0 min-w-[240px]">
            <div className="flex gap-2 items-center">
              <div className="flex items-start self-stretch my-auto">
                <div className={`self-stretch px-2 py-0.5 bg-${typeColor}-50 rounded-full border border-${typeColor}-200 border-solid`}>
                  {type}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 mt-4 w-full">
          <div className="flex gap-4 w-full">
            <h2 className="flex-1 shrink text-2xl font-semibold leading-8 text-gray-900 whitespace-normal basis-0 text-ellipsis">
              {title}
            </h2>
            <div className="flex flex-col self-start pt-1 w-6">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dd1d0a7bdda62d4b615f2ee12c1f9b1c8e2ea7556b1b0c7636f4dcdd2307525?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain w-6 aspect-square" alt="" />
            </div>
          </div>
          <p className="mt-2 text-base leading-6 whitespace-normal text-ellipsis text-slate-600">
            {description}
          </p>
        </div>
        <div className="flex flex-col mt-4 w-full text-sm font-medium leading-5 text-gray-900">
          {courseCount && (
            <>
              <div className="flex gap-3 items-center w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ae9e02a617269b7d6bdaf3f7b04b5cc9188b62689b2e96f19b854b24aecdfad?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="" />
                <div className="flex flex-col flex-1 shrink justify-center items-start self-stretch my-auto basis-0 min-w-[240px]">
                  <div className="flex flex-col justify-center pt-1 w-[83px]">
                    <div className="py-0.5 w-full">{courseCount}</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full border border-gray-200 border-dashed min-h-[1px]" />
              <div className="flex gap-3 items-center mt-2 w-full min-h-[32px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/76f072201a8a1189e90b9472fb017f787901fa3bb361a2ae765e0aab36f299b3?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="" />
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
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41e1dacecf0bb86ab411a53cb27d3e0da65bc9822d62a23ae77f7b48c6ecb4fd?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="" />
              <div className="flex flex-col justify-center self-stretch my-auto w-[83px]">
                <div className="flex flex-col justify-center pt-1 w-[83px]">
                  <div className="py-0.5 w-full">{level}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center self-stretch my-auto text-right">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ad48331550d20c6549a0094eb6975dd1a2320bea76d98b6aa00130895a9da26?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="" />
              <div className="flex flex-col self-stretch my-auto w-10">
                <div className="flex flex-col pt-1 w-full">
                  <div className="whitespace-nowrap py-0.5 w-full">{duration}</div>
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