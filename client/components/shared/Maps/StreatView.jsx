"use client";

/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ParticularPlacesSearch() {
  const [place, setPlace] = useState("Manipal University Jaipur");
  const [show, setShow] = useState("Manipal University Jaipur");
  const [id, setId] = useState([
    "CAoSLEFGMVFpcE5jMW5rN21LOU8zYzkwRkxHdFl1eFdxdFhTUUd0Q05xYXFPVDJ0",
  ]);
  const Data = [
    {
      name: "Manipal University Jaipur",
      params_id:
        "CAoSLEFGMVFpcE5jMW5rN21LOU8zYzkwRkxHdFl1eFdxdFhTUUd0Q05xYXFPVDJ0",
    },
    { name: "AMER FORT", params_id: "rySzVU_fD4V2eKzhyi88Ug" },
    { name: "HAWA MAHAL", params_id: "ZYsTem4c3584X0_-Sl5okg" },
    { name: "JANTAR MANTAR", params_id: "gAjFYrLKrkTDsQNbg89Fiw" },
    { name: "CITY PALACE", params_id: "G6IWSAmyLx6HEXseZs_dSA" },
    { name: "BIRLA MANDIR", params_id: "1jnNXMiVelsMSyeqHa64Lg" },
    { name: "NAHARGARH FORT", params_id: "miAseWuvLp-WwEIdcICoRA" },
    { name: "JAL MAHAL", params_id: "2YWrMvDqX8mKKL9CpO0XTQ" },
    { name: "ALBERT HALL MUSEUM", params_id: "oosgFMT4COaldeLHtPbaqA" },
    { name: "MOTI DUNGARI TEMPLE", params_id: "uorEA9mVXiQMHVdLKHUDaA" },
    { name: "AKSHARDHAM TEMPLE", params_id: "NtI_L0fidOFUQORpPXafJg" },
    { name: "WORLD TRADE PARK", params_id: "W6eaAFyWkltK5eqOLp2q9w" },
    { name: "KHOKE KE HANUMAN JI TEMPLE", params_id: "hJoPcnMDmjP7a_7mEKJkXw" },
    { name: "JAIPUR CHAUPATI", params_id: "ZnWtcvKLH6hZcriiksAahQ" },
    { name: "AJMERI GATE", params_id: "LZ09nzSYf3HkOVFAdLTZDA" },
    {
      name: "BADA PADAMPURA",
      params_id: "AF1QipNa5-w0sYx3zy68vKaLSHjc1iDNVRevNjvMn6ys",
    },
    { name: "TEETRIYA", params_id: "x1l_FBILedSc6K47a9nlQw" },
    { name: "BAGRU", params_id: "amJtGOia-_5Hkj_u8U5yYw" },
    { name: "GONER", params_id: "GTElVAex6c17ShmVYCeUbw" },
    { name: "VATIKA", params_id: "dwe0kMw7kbnkLljqfoBzlw" },
    { name: "RENWAL", params_id: "3bXxX_3UP4s1en_51P_8XQ" },
    { name: "BADI CHAUPAR", params_id: "56K99k3TM67uGxTqUO9w2w" },
    { name: "RAMGANJ BAZAR", params_id: "sMyLj6E_uvduBRzn_5OaDg" },
    { name: "JDA COLONY", params_id: "k4BkDH1xtzVNrjm5QRgJSg" },
    { name: "KUKAS", params_id: "OxFmsvSRKu26YAOv-muf2w" },
    { name: "SANGANER", params_id: "KOCIA8tbJCIxqcdBNY64YQ" },
    { name: "JOSHI MARG", params_id: "kDgmrnZLmNmBnYUUZ76XcQ" },
    { name: "CHOMU PULIYA", params_id: "JVwQmf9EmTGW7_6Yd4mqDg" },
    { name: "CHOTI CHAUPAR", params_id: "EJhb8-cZVv8EvK3cha806A" },
    { name: "BHAIRU KHEJDA", params_id: "DCgie50vjb4pi1JTbh0MRQ" },
    { name: "KHOLE KE HANUMAN JI", params_id: "y5iiha5WstSSvrie6zWgjg" },
    { name: "VKI NO. 17", params_id: "ik2b_z0xE3il3JQOK4JD3w" },
    { name: "KANOTA", params_id: "PaDW5ahQMSkTmO4dvFpwxg" },
    { name: "DWARKA PURI", params_id: "1cu4I5gW6k6o2QHTeB-KOQ" },
    { name: "TRANSPORT NGR", params_id: "kaDWIbtBLRSmX6sqGqvLrg" },
    { name: "NAYLA", params_id: "bAKeRN63TFiXN6z0k4xJIQ" },
    { name: "AIRPORT", params_id: "eF8yC6YBT6rFxXD9qmDEXQ" },
    { name: "AGARWAL FARM", params_id: "KNKysaefpjqWvw59poeYgw" },
    { name: "GALTA", params_id: "xAdZdmR0B9ZhZnFbA8x6WQ" },
    { name: "NIWARU", params_id: "N7apEDtac9bMYiBeAwgyWw" },
    { name: "BASSI", params_id: "9fAeywbdMM4vAcl-U7TfcA" },
    { name: "CHANDPOLE", params_id: "Uucgku0GKlMuPzlK1SeO8w" },
    { name: "CHAKSU", params_id: "SHr8efm1WK2T7qq1aCeoyQ" },
  ];

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };
  const handleShow = (event) => {
    setShow(place);
    Data.map((place) => {
      if (place.name === show) {
        setId(place.params_id);
      }
    });
  };

  return (
    <div className="flex flex-col items-center text-black text-center relative">
      <div className="m-4 flex items-center gap-1 md:gap-5">
        <label htmlFor="place-search" className="block  text-[10px] md:text-xl">
          Search Place:
        </label>
        <input
          id="place-search"
          type="text"
          value={place}
          onChange={handlePlaceChange}
          placeholder="Enter place"
          className="border px-2 py-1 rounded-md pd-3 text-[10px] md:text-xl"
          list="placesStreet"
        />
        <datalist id="placesStreet">
          <option value="Manipal University Jaipur" />
          <option value="AMER FORT" />
          <option value="HAWA MAHAL" />
          <option value="JANTAR MANTAR" />
          <option value="CITY PALACE" />
          <option value="BIRLA MANDIR" />
          <option value="NAHARGARH FORT" />
          <option value="JAL MAHAL" />
          <option value="ALBERT HALL MUSEUM" />
          <option value="MOTI DUNGARI TEMPLE" />
          <option value="AKSHARDHAM TEMPLE" />
          <option value="WORLD TRADE PARK" />
          <option value="KHOKE KE HANUMAN JI TEMPLE" />
          <option value="JAIPUR CHAUPATI" />
          <option value="AJMERI GATE" />
          <option value="BADA PADAMPURA" />
          <option value="TEETRIYA" />
          <option value="BAGRU" />
          <option value="GONER" />
          <option value="VATIKA" />
          <option value="RENWAL" />
          <option value="BADI CHAUPAR" />
          <option value="RAMGANJ BAZAR" />
          <option value="JDA COLONY" />
          <option value="KUKAS" />
          <option value="SANGANER" />
          <option value="JOSHI MARG" />
          <option value="CHOMU PULIYA" />
          <option value="CHOTI CHAUPAR" />
          <option value="BHAIRU KHEJDA" />
          <option value="KHOLE KE HANUMAN JI" />
          <option value="VKI NO. 17" />
          <option value="KANOTA" />
          <option value="DWARKA PURI" />
          <option value="TRANSPORT NGR" />
          <option value="NAYLA" />
          <option value="AIRPORT" />
          <option value="AGARWAL FARM" />
          <option value="GALTA" />
          <option value="NIWARU" />
          <option value="BASSI" />
          <option value="CHANDPOLE" />
          <option value="CHAKSU" />
        </datalist>

        <button
          onClick={handleShow}
          className="bg-green-500 py-1 px-2 rounded-md text-[6px] md:text-xl"
        >
          Search
        </button>
      </div>
      <div className="w-full flex justify-center text-black place-content-center my-5">
        <iframe
          className="w-[300px] h-[300px] inset-0 mx-auto md:w-[500px] md:h-[500px]  "
          style={{ border: "none" }}
          src={`https://www.google.com/maps/embed/v1/streetview?pano=${encodeURIComponent(
            id
          )}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          allowFullScreen
          title="Google Map Search"
        ></iframe>
      </div>
    </div>
  );
}

export default ParticularPlacesSearch;

