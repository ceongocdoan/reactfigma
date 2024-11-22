import React from 'react';

function TabButton({ label, isActive }) {
  return (
    <li>
      <button
        className={`gap-2 self-stretch px-1 pb-3 min-h-[32px] ${
          isActive ? 'text-sky-700 border-b-2 border-sky-600' : ''
        }`}
      >
        {label}
      </button>
    </li>
  );
}

export default TabButton;