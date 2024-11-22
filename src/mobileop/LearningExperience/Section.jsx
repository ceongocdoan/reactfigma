import React from "react";

function Section({ title }) {
  return (
    <header className="flex flex-col px-4 w-full text-3xl font-semibold leading-10 text-center text-gray-900">
      <h1>{title}</h1>
    </header>
  );
}

export default Section;