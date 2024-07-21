"use client";

import { useState } from "react";
import BusTimingsTable from "./busTable";

function ParticularPlacesSearch() {
  const [place, setPlace] = useState("Bus Stops");
  const [show, setShow] = useState("Bus Stops");

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleShow = () => {
    setShow(place);
  };

  return (
    <div className="relative h-[80vh] w-screen overflow-hidden px-6">
      {/* Fullscreen background iframe */}
      <iframe
        className="absolute inset-0 h-[100vh] mx-auto w-[92vw] z-0"
        style={{ border: "none" }}
        src={`https://www.google.com/maps/embed/v1/search?q=${encodeURIComponent(
          show
        )}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
        allowFullScreen
        title="Google Map Search"
      />

      <div className="relative p-1 md:p-4 z-10 flex flex-row text-black items-center place-content-center">
        <div className="mb-4 flex items-center gap-1 md:gap-5 bg-[#F3F3F3] px-[2px] md:px-2 py-[2px] md:py-1 rounded-sm md:rounded-xl">
          <input
            id="place-search"
            type="text"
            value={place}
            onChange={handlePlaceChange}
            placeholder="Enter place.."
            className="md:p-1 text-[10px] md:text-xl border md:rounded-lg"
            list="places"
          />
          <datalist id="places">
            <option value="Bus Stop" />
            <option value="Metro" />
            <option value="Railways" />
            <option value="Gardens" />
            <option value="Temples" />
            <option value="Hospitals" />
          </datalist>

          <button
            onClick={handleShow}
            className="bg-green-500 px-1 md:px-2 py-1 md:rounded-md text-[10px] md:text-lg text-white"
          >
            Search
          </button>
        </div>
      </div>
      <div className="absolute bottom-2 place-content-center md:bottom-4 md:left-24">
        <BusTimingsTable />
      </div>
    </div>
  );
}

export default ParticularPlacesSearch;
