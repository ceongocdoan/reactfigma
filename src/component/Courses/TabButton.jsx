import React from 'react';

function TabButton({ label, active = false }) {
  return (
    <button
      data-layername="tabButtonBase"
      className={`gap-2 self-stretch px-1 pb-3 min-h-[32px] ${
        active ? 'text-sky-700 border-b-2 border-sky-600' : ''
      }`}
    >
      {label}
    </button>
  );
}

export default TabButton;