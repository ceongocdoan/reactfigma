import React from 'react';

function ProjectCard({ title, description, level, duration }) {
  return (
    <article className="flex overflow-hidden flex-col grow shrink justify-center p-4 bg-white rounded-2xl border border-gray-200 border-solid shadow-md min-h-[408px] min-w-[240px] w-[307px]">
      <div className="flex flex-col flex-1 w-full">
        <div className="flex flex-wrap gap-2 items-start w-full text-xs font-medium leading-5 text-center text-emerald-700 whitespace-nowrap">
          <div className="flex flex-col flex-1 shrink items-start w-full basis-0 min-w-[240px]">
            <div className="flex gap-2 items-center">
              <div className="flex items-start self-stretch my-auto">
                <div className="self-stretch px-2 py-0.5 bg-emerald-50 rounded-full border border-emerald-200 border-solid">
                  Project
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 mt-4 w-full">
          <div className="flex gap-4 w-full">
            {/* <h2 className="flex-1 shrink text-2xl font-semibold leading-8 text-gray-900 whitespace-nowrap basis-0 text-ellipsis">
              {title}
            </h2> */}
            <h2 className="flex-1 shrink text-2xl font-semibold leading-8 text-gray-900 basis-0 text-ellipsis whitespace-normal break-words">
              {title}
            </h2>

            <div className="flex flex-col self-start pt-1 w-6">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dd1d0a7bdda62d4b615f2ee12c1f9b1c8e2ea7556b1b0c7636f4dcdd2307525?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain w-6 aspect-square" alt="" />
            </div>
          </div>
          <p className="whitespace-normal mt-2 text-base leading-6  text-ellipsis text-slate-600">
            {description}
          </p>
        </div>
        <div className="flex flex-col mt-4 w-full text-sm font-medium leading-5 text-gray-900">
          <div className="w-full border border-gray-200 border-dashed min-h-[1px]" />
          <div className="flex gap-10 justify-between items-center mt-2 w-full">
            <div className="flex gap-3 items-center self-stretch my-auto">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0518431997437ab8ba60a62cf9175106c808ed220b009a875e8217bf3bb9f572?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="" />
              <div className="flex flex-col justify-center self-stretch my-auto w-[83px]">
                <div className="flex flex-col justify-center pt-1 w-[83px]">
                  <div className="py-0.5 w-full">{level}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center self-stretch my-auto text-right">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad5bb7216394043db2511f597969beb67dabd812aee7647575713e26bdab7e64?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="" />
              <div className="flex flex-col self-stretch my-auto w-10">
                <div className="flex flex-col pt-1 w-full">
                  <div className="py-0.5 w-full">{duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;