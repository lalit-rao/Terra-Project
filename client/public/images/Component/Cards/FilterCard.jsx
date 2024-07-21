import React from "react";

function FilterCard({ variableFunc, Name, variable, label }) {
  return (
    <div
      className="bg-[#191A23] md:px-5 border md:text-lg text-[10px] px-2 py-[1px] flex items-center place-content-center rounded-lg border-black text-[#F3F3F3] md:rounded-2xl  md:py-2
      "
    >
      <input
        type="checkbox"
        name={Name}
        id={Name}
        className="md:mr-4 accent-green-500 md:p-3 my-[2px]"
        checked={variable}
        onChange={(e) => variableFunc(e.target.checked)}
      />
      <label htmlFor={Name}>{label}</label>
    </div>
  );
}

export default FilterCard;
