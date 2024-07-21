"use client";

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import styles from "./tab.module.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("AirQuality");
  const [airQualityData, setAirQualityData] = useState({
    o3: "",
    no2: "",
    pm: "",
  });
  const [carbonFootprintData, setCarbonFootprintData] = useState({
    consumption: "",
    result: null,
    error: null,
  });
  const [fuelData, setFuelData] = useState({
    litres: "",
    result: null,
    error: null,
  });
  const [travelData, setTravelData] = useState({
    distance: "",
    type: "PublicTransit",
    type2: "Taxi",
    result: null,
    error: null,
  });
  const [treeData, setTreeData] = useState({
    weight: "",
    result: null,
    error: null,
  });
  const [carTravelData, setCarTravelData] = useState({
    distance: "",
    result: null,
    error: null,
  });

  const handleAirQualitySubmit = async (event) => {
    event.preventDefault();
    const url = "https://carbonfootprint1.p.rapidapi.com/AirQualityHealthIndex";
    const options = {
      method: "GET",
      url: url,
      params: {
        o3: airQualityData.o3,
        no2: airQualityData.no2,
        pm: airQualityData.pm,
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log("API Response:", response.data); // Log the entire response

      setAirQualityData((prev) => ({
        ...prev,
        result: response.data.airQualityHealthIndex,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setAirQualityData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  const handleCarbonFootprintSubmit = async (event) => {
    event.preventDefault();
    const url =
      "https://carbonfootprint1.p.rapidapi.com/CleanHydroToCarbonFootprint";
    const options = {
      method: "GET",
      url: url,
      params: {
        energy: "Solar",
        consumption: parseFloat(carbonFootprintData.consumption),
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setCarbonFootprintData((prev) => ({
        ...prev,
        result: response.data.carbonEquivalent,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setCarbonFootprintData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  const handleFuelToCO2Submit = async (event) => {
    event.preventDefault();
    const url = "https://carbonfootprint1.p.rapidapi.com/FuelToCO2e";
    const options = {
      method: "GET",
      url: url,
      params: {
        type: "Petrol",
        litres: parseFloat(fuelData.litres),
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setFuelData((prev) => ({
        ...prev,
        result: response.data.carbonEquivalent,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setFuelData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  const handleTreeEquivalentSubmit = async (event) => {
    event.preventDefault();
    const url = "https://carbonfootprint1.p.rapidapi.com/TreeEquivalent";
    const options = {
      method: "GET",
      url: url,
      params: {
        weight: parseFloat(treeData.weight),
        unit: "kg",
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setTreeData((prev) => ({
        ...prev,
        result: response.data.numberOfTrees,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setTreeData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  const handleCarTravelSubmit = async (event) => {
    event.preventDefault();
    const url =
      "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel";
    const options = {
      method: "GET",
      url: url,
      params: {
        distance: parseFloat(carTravelData.distance),
        vehicle: "SmallDieselCar",
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setCarTravelData((prev) => ({
        ...prev,
        result: response.data.carbonEquivalent,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setCarTravelData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  return (
    <>
      <h1 className={styles.tabsMainHeading}>Carbon Footprint Calculator</h1>
      <h3 className={styles.tabsMainDescription}>
        The Carbon Footprint and Air Quality Calculator is a web application
        designed to provide users with insights into their environmental impact
        and air quality health index based on various activities and metrics.
        The application calculates the carbon footprint for different modes of
        transport, fuel consumption, tree equivalents, car travel distances, and
        solar energy consumption. Additionally, it assesses the air quality
        health index based on pollutant levels. The aim is to promote
        sustainability and awareness by offering concrete data on carbon
        emissions and air quality.
      </h3>
      <div className={styles.tabsContainer}>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "AirQuality" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("AirQuality")}
          >
            Air Quality
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "CarbonFootprint" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("CarbonFootprint")}
          >
            Carbon Footprint
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "FuelToCO2" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("FuelToCO2")}
          >
            Fuel to CO2
          </button>

          <button
            className={`${styles.tabButton} ${
              activeTab === "TreeEquivalent" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("TreeEquivalent")}
          >
            Tree Equivalent
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "CarTravel" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("CarTravel")}
          >
            Car Travel
          </button>
        </div>

        {activeTab === "AirQuality" && (
          <div className={styles.tabContent}>
            <h4 className={styles.tabHeading}>
              Assesses the air quality health index based on levels of
              pollutants like ozone (O3), nitrogen dioxide (NO2), and
              particulate matter (PM). Users input the concentrations of these
              pollutants to get the air quality health index, indicating the
              potential health impacts.
            </h4>
            <form onSubmit={handleAirQualitySubmit} className={styles.tabForm}>
              <label className={styles.tabLabel}>O3 (ppm):</label>
              <input
                type="number"
                step="0.01"
                value={airQualityData.o3}
                onChange={(e) =>
                  setAirQualityData({ ...airQualityData, o3: e.target.value })
                }
                className={styles.tabInput}
              />
              <label className={styles.tabLabel}>NO2 (ppm):</label>
              <input
                type="number"
                step="0.01"
                value={airQualityData.no2}
                onChange={(e) =>
                  setAirQualityData({ ...airQualityData, no2: e.target.value })
                }
                className={styles.tabInput}
              />
              <label className={styles.tabLabel}>PM (µg/m³):</label>
              <input
                type="number"
                step="0.01"
                value={airQualityData.pm}
                onChange={(e) =>
                  setAirQualityData({ ...airQualityData, pm: e.target.value })
                }
                className={styles.tabInput}
              />
              <button type="submit" className={styles.tabButtonSubmit}>
                Submit
              </button>
              {airQualityData.result && (
                <div className={styles.tabResult}>
                  Health Index: {airQualityData.result}
                </div>
              )}
              {airQualityData.error && (
                <div className={styles.tabError}>{airQualityData.error}</div>
              )}
            </form>
          </div>
        )}

        {activeTab === "CarbonFootprint" && (
          <div className={styles.tabContent}>
            <h4 className={styles.tabHeading}>
              Calculates the carbon footprint from the consumption of solar
              energy. Users input the amount of energy consumed to receive the
              carbon equivalent emissions.
            </h4>
            <form
              onSubmit={handleCarbonFootprintSubmit}
              className={styles.tabForm}
            >
              <label className={styles.tabLabel}>
                Energy Consumption (kWh):
              </label>
              <input
                type="number"
                step="0.01"
                value={carbonFootprintData.consumption}
                onChange={(e) =>
                  setCarbonFootprintData({
                    ...carbonFootprintData,
                    consumption: e.target.value,
                  })
                }
                className={styles.tabInput}
              />
              <button type="submit" className={styles.tabButtonSubmit}>
                Submit
              </button>
              {carbonFootprintData.result && (
                <div className={styles.tabResult}>
                  Carbon Equivalent: {carbonFootprintData.result} kg CO2e
                </div>
              )}
              {carbonFootprintData.error && (
                <div className={styles.tabError}>
                  {carbonFootprintData.error}
                </div>
              )}
            </form>
          </div>
        )}

        {activeTab === "FuelToCO2" && (
          <div className={styles.tabContent}>
            <h4 className={styles.tabHeading}>
              Estimates the carbon dioxide equivalent emissions produced from
              burning a specified amount of fuel (in litres). Users input the
              type of fuel and the amount consumed to get the carbon equivalent.
            </h4>
            <form onSubmit={handleFuelToCO2Submit} className={styles.tabForm}>
              <label className={styles.tabLabel}>Fuel Type:</label>
              <select
                value="Petrol"
                onChange={(e) =>
                  setFuelData({ ...fuelData, type: e.target.value })
                }
                className={styles.tabInput}
              >
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="NaturalGas">Natural Gas</option>
              </select>
              <label className={styles.tabLabel}>Litres:</label>
              <input
                type="number"
                step="0.01"
                value={fuelData.litres}
                onChange={(e) =>
                  setFuelData({ ...fuelData, litres: e.target.value })
                }
                className={styles.tabInput}
              />
              <button type="submit" className={styles.tabButtonSubmit}>
                Submit
              </button>
              {fuelData.result && (
                <div className={styles.tabResult}>
                  Carbon Equivalent: {fuelData.result} kg CO2e
                </div>
              )}
              {fuelData.error && (
                <div className={styles.tabError}>{fuelData.error}</div>
              )}
            </form>
          </div>
        )}

        {activeTab === "TreeEquivalent" && (
          <div className={styles.tabContent}>
            <h4 className={styles.tabHeading}>
              Converts a given weight (in kg) of carbon emissions into the
              equivalent number of trees needed to offset those emissions. Users
              input the weight of emissions to see how many trees are required
              to absorb that amount of CO2.
            </h4>
            <form
              onSubmit={handleTreeEquivalentSubmit}
              className={styles.tabForm}
            >
              <label className={styles.tabLabel}>Weight (kg):</label>
              <input
                type="number"
                step="0.01"
                value={treeData.weight}
                onChange={(e) =>
                  setTreeData({ ...treeData, weight: e.target.value })
                }
                className={styles.tabInput}
              />
              <button type="submit" className={styles.tabButtonSubmit}>
                Submit
              </button>
              {treeData.result && (
                <div className={styles.tabResult}>
                  Number of Trees: {treeData.result}
                </div>
              )}
              {treeData.error && (
                <div className={styles.tabError}>{treeData.error}</div>
              )}
            </form>
          </div>
        )}

        {activeTab === "CarTravel" && (
          <div className={styles.tabContent}>
            <h4 className={styles.tabHeading}>
              Calculates the carbon footprint for a given distance traveled by
              car. Users input the distance traveled in kilometers to receive
              the carbon equivalent emissions for that journey.
            </h4>
            <form onSubmit={handleCarTravelSubmit} className={styles.tabForm}>
              <label className={styles.tabLabel}>Distance (km):</label>
              <input
                type="number"
                step="0.01"
                value={carTravelData.distance}
                onChange={(e) =>
                  setCarTravelData({
                    ...carTravelData,
                    distance: e.target.value,
                  })
                }
                className={styles.tabInput}
              />
              <button type="submit" className={styles.tabButtonSubmit}>
                Submit
              </button>
              {carTravelData.result && (
                <div className={styles.tabResult}>
                  Carbon Equivalent: {carTravelData.result} kg CO2e
                </div>
              )}
              {carTravelData.error && (
                <div className={styles.tabError}>{carTravelData.error}</div>
              )}
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Tabs;
