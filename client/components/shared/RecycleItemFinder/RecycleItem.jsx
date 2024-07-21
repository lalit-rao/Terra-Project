"use client";

import { useState } from "react";
import DataItemFinder from "./DataItemFinder";
import CardItemFinder from "./CardItemFinder";

function RecycleItem() {
  const [searchItem, setSearchItem] = useState("bottle");

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-20">
      <div className="flex justify-center mb-6">
        <div className="relative w-80">
          <input
            type="text"
            className="border-2 border-gray-300 text-gray-700 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Search Item..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11 2a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 014.712 12.712l4.283 4.283a1 1 0 01-1.414 1.414l-4.283-4.283A7 7 0 1111 4zm0 2a5 5 0 100 10A5 5 0 0011 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {DataItemFinder.filter((val) => {
          if (searchItem === "") {
            return true;
          } else if (
            val.name.toLowerCase().includes(searchItem.toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        }).map((val) => (
          <div key={val.id}>
            <CardItemFinder
              name={val.name}
              img={val.img}
              recyclability={val.recyclability ? "Yes" : "No"}
              materialComposition={val.materialComposition}
              recyclingInstructions={val.recyclingInstructions}
              typeOfMaterial={val.typeOfMaterial}
              localRecyclingGuidelines={val.localRecyclingGuidelines}
              environmentalImpact={val.environmentalImpact}
              alternativeDisposalOptions={val.alternativeDisposalOptions}
              upcyclingAndReuseIdeas={val.upcyclingAndReuseIdeas}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecycleItem;
