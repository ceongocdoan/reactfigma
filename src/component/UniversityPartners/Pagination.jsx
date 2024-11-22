import React from 'react';

function Pagination() {
  return (
    <nav className="flex gap-2 items-center self-center mt-6" aria-label="Partner pagination">
      <button className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-sky-600 rounded-full" aria-current="true" aria-label="Current page" />
      <button className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-gray-300 rounded-full" aria-label="Go to page 2" />
    </nav>
  );
}

export default Pagination;