"use client"

import GoogleMapEmbed from "./GoogleMapEmbed";
import PartiularPlacesSearch from "./partiularPlacesSearch";
import StreatMapList from "./StreetMapList";
import StreatView from "./StreatView";
import BusTimingsTable from "./busTable";
import React, { useState } from "react";

function Map() {
  const [activeTab, setActiveTab] = useState("section1");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="text-center text-xl md:text-4xl font-bold text-green-500 md:my-4 my-2">
            EcoTravel
          </h1>
        </div>

        <div className="">
          <ul className="list-none p-0 m-0 border-b border-gray-300 flex justify-center text-[10px]">
            <li className="">
              <button
                className={`py-1 md:py-2.5 text-[10px] md:text-xl px-2 md:px-5 border-none cursor-pointer font-bold text-black transition-colors text-black duration-300 ${
                  activeTab === "section1"
                    ? "bg-green-500 text-white"
                    : "bg-transparent"
                }`}
                onClick={() => handleTabClick("section1")}
              >
                Public Transport
              </button>
            </li>
            <li>
              <button
                className={`py-1 md:py-2.5 text-[10px] md:text-xl px-2 md:px-5 border-none cursor-pointer font-bold text-black transition-colors duration-300 ${
                  activeTab === "section2"
                    ? "bg-green-500 text-white"
                    : "bg-transparent"
                }`}
                onClick={() => handleTabClick("section2")}
              >
                Routes
              </button>
            </li>
            <li>
              <button
                className={`py-1 md:py-2.5 px-2 text-[10px] md:text-xl md:px-5 border-none cursor-pointer font-bold text-black transition-colors duration-300 ${
                  activeTab === "section3"
                    ? "bg-green-500 text-white"
                    : "bg-transparent"
                }`}
                onClick={() => handleTabClick("section3")}
              >
                Famous Places
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <section
              id="section1"
              className={`${activeTab === "section1" ? "block" : "hidden"}`}
            >
              <div className="">
                <PartiularPlacesSearch />
              </div>
            </section>
          </div>

          <div className="">
            <section
              id="section2"
              className={`${activeTab === "section2" ? "block" : "hidden"}`}
            >
              <div className="">
                <GoogleMapEmbed />
              </div>
            </section>
          </div>

          <div className="">
            <section
              id="section3"
              className={`${activeTab === "section3" ? "block" : "hidden"}`}
            >
              <div className="flex justify-around flex-wrap items-center">
                <StreatMapList />
                <StreatView />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
