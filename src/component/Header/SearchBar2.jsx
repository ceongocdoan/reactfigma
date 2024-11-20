import React from 'react';

function SearchBar2() {
  return (
    <div className="flex gap-2 items-center text-gray-500 min-w-[240px]  max-md:max-w-full">
      <form className="flex flex-col self-stretch my-auto w-80 max-w-xs min-w-[240px]">
        <div className="flex flex-col w-full">
          <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
            <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0 min-w-[240px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fddd009ff5792fce86ef31defd8ace7e48ca792e51dd23fd6ce9f957a6c6815?apiKey=ac8d84f3191644fbac37f90f1063bf65&" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
              <label htmlFor="search" className="sr-only">Tìm kiếm khoá học</label>
              <input
                type="search"
                id="search"
                placeholder="Tìm kiếm khoá học"
                className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar2;