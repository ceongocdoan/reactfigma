import React from 'react';

function Card({ type, title, description, courseCount, level, duration, badgeColor }) {
  return (
    <article data-layername="cardCourseVertical" className="flex overflow-hidden flex-col grow shrink justify-center p-4 bg-white rounded-2xl border border-gray-200 border-solid shadow-md min-h-[450px] min-w-[240px] w-[307px]">
      <div className="flex flex-col flex-1 w-full">
        <div data-layername="categories" className={`flex flex-wrap gap-2 items-start w-full text-xs font-medium leading-5 text-center text-${badgeColor}-700`}>
          <div className="flex flex-col flex-1 shrink items-start w-full basis-0 min-w-[240px]">
            <div className="flex gap-2 items-center">
              <div data-layername="cellCourseBadge" className="flex items-start self-stretch my-auto">
                <div data-layername="badge" className={`self-stretch px-2 py-0.5 bg-${badgeColor}-50 rounded-full border border-${badgeColor}-200 border-solid`}>
                  {type}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-layername="headingAndText" className="flex flex-col flex-1 mt-4 w-full">
          <div data-layername="headingAndIcon" className="flex gap-4 w-full">
            <h2 data-layername="heading" className="flex-1 shrink text-2xl font-semibold leading-8 text-gray-900 whitespace-normal basis-0 text-ellipsis">
              {title}
            </h2>
            <div data-layername="iconWrap" className="flex flex-col self-start pt-1 w-6">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dd1d0a7bdda62d4b615f2ee12c1f9b1c8e2ea7556b1b0c7636f4dcdd2307525?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain w-6 aspect-square" />
            </div>
          </div>
          <p data-layername="supportingText" className="mt-2 text-base leading-6 whitespace-normal text-ellipsis text-slate-600">
            {description}
          </p>
        </div>
        <div className="flex flex-col mt-4 w-full text-sm font-medium leading-5 text-gray-900">
          {courseCount && (
            <>
              <div data-layername="rowCourseCharacteristics" className="flex gap-3 items-center w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/75f9145982b2d7308bd61f1a55d0901672f0deb6a99d68c1f2872543a137464e?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
                <div data-layername="content" className="flex flex-col flex-1 shrink justify-center items-start self-stretch my-auto basis-0 min-w-[240px]">
                  <div className="flex flex-col justify-center pt-1 w-[83px]">
                    <div data-layername="cellCourseLevel" className="py-0.5 w-full">
                      {courseCount}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full border border-gray-200 border-dashed min-h-[1px]" />
              <div data-layername="rowCourseCharacteristics" className="flex gap-3 items-center mt-2 w-full min-h-[32px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d283ac67d1662c5b609c23a222c3c1e6ac65bf910048c747f96c37ea8ec3da?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
                <div data-layername="content" className="flex flex-col flex-1 shrink justify-center items-start self-stretch my-auto basis-0 min-w-[240px]">
                  <div className="flex flex-col justify-center pt-1 w-[83px]">
                    <div data-layername="cellCourseLevel" className="py-0.5 whitespace-nowrap pr-0 w-full">
                      Đi kèm khoá học
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full border border-gray-200 border-dashed min-h-[1px]" />
            </>
          )}
          <div className="flex gap-10 justify-between items-center mt-2 w-full">
            <div data-layername="rowCourseCharacteristics" className="flex gap-3 items-center self-stretch my-auto">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91708a6480d82c3c28ea5414f3f1a555b62e452dd94e17fd53ba9c3eb0b108b4?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
              <div data-layername="content" className="flex flex-col justify-center self-stretch my-auto w-[83px]">
                <div className="flex flex-col justify-center pt-1 w-[83px]">
                  <div data-layername="cellCourseLevel" className="py-0.5 w-full">
                    {level}
                  </div>
                </div>
              </div>
            </div>
            <div data-layername="rowCourseCharacteristics" className="flex gap-3 items-center self-stretch my-auto text-right">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a4dbca19ca72484864cf93dda301291d3110ba04312bf6c1aac8dfdc6a1b18?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
              <div data-layername="content" className="flex flex-col self-stretch my-auto w-10">
                <div className="flex flex-col pt-1 w-full">
                  <div data-layername="cellCourseLevel" className="py-0.5 w-full whitespace-nowrap">
                    {duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;