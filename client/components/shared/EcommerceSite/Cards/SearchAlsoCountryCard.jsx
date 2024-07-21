import React from "react";
import CountryData from "../CountryData/CountryData";

function SearchAlsoCountryCard({ setCountryCode }) {
  return (
    <div className="">
      <form>
        <select
          defaultValue="IN"
          onChange={(e) => setCountryCode(e.target.value)}
          className="w-full p-2 border bg-[#D9D9D9] rounded-lg font-semibold text-[10px] md:text-xl"
        >
          {CountryData.map((country) => (
            <option
              key={country["Country code"]}
              value={country["Country code"]}
            >
              {country["Country code"]}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default SearchAlsoCountryCard;
