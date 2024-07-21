"use client";

/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BusTimingsTable from "./busTable";

function GoogleMapEmbed() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("Manipal Jaipur");
  const [mapUrl, setMapUrl] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    // Function to get the current location and set the origin state
    const fetchCurrentLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const URL_Location = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=0d7e0434effa4ea3825e16245d95ba24`;

          try {
            let response_Location = await fetch(URL_Location);
            let data_Location = await response_Location.json();
            const address = data_Location.features[0].properties.formatted;

            setCurrentLocation(address);
            setOrigin(address);
            updateMapUrl(address, destination);
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        });
      }
    };

    fetchCurrentLocation();
  }, []); // Run only once when the component mounts

  const updateMapUrl = (origin, destination) => {
    setMapUrl(
      `https://www.google.com/maps/embed/v1/directions?origin=${encodeURIComponent(
        origin
      )}&destination=${encodeURIComponent(
        destination
      )}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
    );
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMapUrl(origin, destination);
  };
  return (
    <div className="relative h-[80vh] w-screen overflow-hidden px-6 text-black">
      <iframe
        title="Google Map"
        className="absolute inset-0 h-[80vh] w-[95vw] mx-auto z-0"
        style={{ border: "none" }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
      <form
        className=" flex md:gap-3 md:p-2 flex-col md:flex-row place-content-end md:place-content-center"
        onSubmit={handleSubmit}
      >
        <div className="z-10 bg-[#F3F3F3] text-center md:rounded-xl w-max overflow-hidden">
          <label
            htmlFor="origin"
            className="block font-bold text-[10px] md:text-xl"
          >
            From:
          </label>
          <input
            id="origin"
            type="text"
            value={origin}
            onChange={handleOriginChange}
            placeholder="Enter origin"
            className="border md:p-1 text-[10px] md:text-xl"
            list="placesRoot"
          />
        </div>

        <div className="z-10 bg-[#F3F3F3] text-center w-max rounded-xl overflow-hidden">
          <label
            htmlFor="destination"
            className="block font-bold text-[10px] md:text-xl"
          >
            To:
          </label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter destination"
            className="border md:p-1 text-[10px] md:text-xl"
            list="placesRoot"
          />
        </div>
        <datalist id="placesRoot" className="absolute">
          <option value={currentLocation}>Current Location</option>
          <option value="AMER FORT">AMER FORT</option>
          <option value="HAWA MAHAL">HAWA MAHAL</option>
          <option value="JANTAR MANTAR">JANTAR MANTAR</option>
          <option value="CITY PALACE">CITY PALACE</option>
          <option value="BIRLA MANDIR">BIRLA MANDIR</option>
          <option value="NAHARGARH FORT">NAHARGARH FORT</option>
          <option value="JAL MAHAL">JAL MAHAL</option>
          <option value="ALBERT HALL MUSEUM">ALBERT HALL MUSEUM</option>
          <option value="MOTI DUNGARI TEMPLE">MOTI DUNGARI TEMPLE</option>
          <option value="AKSHARDHAM TEMPLE">AKSHARDHAM TEMPLE</option>
          <option value="WORLD TRADE PARK">WORLD TRADE PARK</option>
          <option value="KHOKE KE HANUMAN JI TEMPLE">
            KHOKE KE HANUMAN JI TEMPLE
          </option>
          <option value="JAIPUR CHAUPATI">JAIPUR CHAUPATI</option>
          <option value="AJMERI GATE">AJMERI GATE</option>
          <option value="BADA PADAMPURA">BADA PADAMPURA</option>
          <option value="TEETRIYA">TEETRIYA</option>
          <option value="BAGRU">BAGRU</option>
          <option value="GONER">GONER</option>
          <option value="VATIKA">VATIKA</option>
          <option value="RENWAL">RENWAL</option>
          <option value="BADI CHAUPAR">BADI CHAUPAR</option>
          <option value="RAMGANJ BAZAR">RAMGANJ BAZAR</option>
          <option value="ANANDAM MANGLAM">ANANDAM MANGLAM</option>
          <option value="JDA COLONY">JDA COLONY</option>
          <option value="KUKAS">KUKAS</option>
          <option value="SANGANER">SANGANER</option>
          <option value="MGH">MGH</option>
          <option value="JOSHI MARG">JOSHI MARG</option>
          <option value="CHOMU PULIYA">CHOMU PULIYA</option>
          <option value="DANTLI PHATAK">DANTLI PHATAK</option>
          <option value="CHOTI CHAUPAR">CHOTI CHAUPAR</option>
          <option value="BHAIRU KHEJDA">BHAIRU KHEJDA</option>
          <option value="KHOLE KE HANUMAN JI">KHOLE KE HANUMAN JI</option>
          <option value="VKI NO. 17">VKI NO. 17</option>
          <option value="KANOTA">KANOTA</option>
          <option value="DWARKA PURI">DWARKA PURI</option>
          <option value="TRANSPORT NGR">TRANSPORT NGR</option>
          <option value="RSBTDA BUS TERMINAL HEERAPURA">
            RSBTDA BUS TERMINAL HEERAPURA
          </option>
          <option value="NAYLA">NAYLA</option>
          <option value="AIRPORT">AIRPORT</option>
          <option value="KHIRNI PHATAK PULIYA">KHIRNI PHATAK PULIYA</option>
          <option value="AGARWAL FARM">AGARWAL FARM</option>
          <option value="DADI KA PHATAK">DADI KA PHATAK</option>
          <option value="GALTA">GALTA</option>
          <option value="NIWARU">NIWARU</option>
          <option value="BASSI">BASSI</option>
          <option value="CHANDPOLE">CHANDPOLE</option>
          <option value="CHAKSU">CHAKSU</option>
          <option value="PATRAKAR COLONY">PATRAKAR COLONY</option>
          <option value="KALWAR">KALWAR</option>
        </datalist>

        <button
          type="submit"
          className="border-0 md:p-2 z-10 bg-green-500 rounded-lg text-[10px] w-max md:text-xl px-5"
        >
          Search
        </button>
      </form>

      <div className="absolute bottom-[9px] right-3 place-content-center  md:bottom-1 md:right-24">
        <BusTimingsTable />
      </div>
    </div>
  );
}

export default GoogleMapEmbed;
