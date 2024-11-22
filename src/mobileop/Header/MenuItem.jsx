import React from 'react';

function MenuItem({ text }) {
  return (
    <div className="flex gap-4 items-start px-4 py-3 mt-1 w-full rounded-lg hover:bg-[#f0f8ff]">
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
        <div className="flex flex-col w-full">
          <div className="gap-2 self-stretch w-full text-ellipsis">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;