"use client";

/* eslint-disable no-unused-vars */
import { useState } from "react";
import busTimings from "./busTableData";

const BusTimingsTable = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Place copied to clipboard");
    setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
  };
  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  const getRouteLabel = (bus) => `${bus.origin} to ${bus.destination}`;

  const selectedBus = busTimings.find(
    (bus) => getRouteLabel(bus) === selectedRoute
  );
  return (
    <>
      <div className=" w-min rounded-xl overflow-hidden text-black">
        <h1 className="block text-center font-bold text-[12px] md:text-2xl text-black text-[#1e7e34] bg-white">
          Bus Routes
        </h1>

        {copyMessage && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-black py-2 px-4 rounded shadow-lg">
            {copyMessage}
          </div>
        )}
        <div className="overflow-y-auto max-h-[150px] md:max-h-[400px] ">
          {/* Adjust max-h value to fit 10 rows height */}
          <div className="overflow-x-auto">
            <table className=" bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="text-[8px] md:text-sm md:py-1 md:px-2 border-b">
                    Bus No.
                  </th>
                  <th className="text-[8px] md:text-sm md:py-1 md:px-2 border-b">
                    Origin
                  </th>
                  <th className="text-[8px] md:text-sm md:py-1 md:px-2 border-b">
                    Destination
                  </th>
                  <th className="text-[8px] md:text-sm md:py-1 md:px-2 border-b">
                    Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                {busTimings.map((bus, busIndex) => (
                  <tr key={busIndex} className="text-[8px] md:text-sm">
                    <td className="md:py-1 md:px-2 border-b">
                      {bus.busNumber}
                    </td>
                    <td
                      className="md:py-2 md:px-4 border-b cursor-pointer text-black-600"
                      onClick={() => handleCopy(bus.origin)}
                      title="Click to copy"
                    >
                      {bus.origin}
                    </td>
                    <td
                      className="md:py-2 md:px-4 border-b cursor-pointer text-black-600"
                      onClick={() => handleCopy(bus.destination)}
                      title="Click to copy"
                    >
                      {bus.destination}
                    </td>
                    <td className="md:py-2 md:px-4 border-b">
                      <select className="bg-white border border-gray-300 rounded p-1">
                        {bus.timings.map((time, timeIndex) => (
                          <option key={timeIndex} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusTimingsTable;
