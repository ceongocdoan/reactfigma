import React from "react";

function MethodItem({ title, description, alignment }) {
  return (
    <div className={`flex flex-col min-w-[240px] ${alignment === "right" ? "mt-52 ml-3 max-md:mt-10 max-md:ml-2.5" : "mt-52 max-md:mt-10"}`}>
      <div className="flex flex-col w-full">
        <h3 className="text-xl font-semibold leading-8 text-gray-900">{title}</h3>
        <p className="mt-2 text-base leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export default MethodItem;