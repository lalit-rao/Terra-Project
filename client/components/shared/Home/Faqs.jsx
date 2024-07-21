"use client";

import { useState } from "react";

export default function Faqs() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="my-20 flex justify-center items-center flex-col space-y-7 bg-[#191A23] py-10 text-[#F3F3F3]">
      <div className="text-4xl font-bold">FAQs</div>

      {/* General info */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-20 h-1 bg-[#B9FF66] rounded-md"></div>
        <h1 className="font-semibold text-2xl">General questions</h1>
        <div className="w-20 h-1 bg-[#B9FF66] rounded-md"></div>
      </div>
      <div className="w-full md:max-w-xl max-w-[90%] mx-auto rounded-3xl overflow-hidden border border-[#c9c8c8]">
        {/* 1st */}
        <div className="bg-[#191A23]">
          <button
            onClick={() => toggleSection(1)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>What is Terra&apos;s mission?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 1 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 1 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                Terra&apos;s mission is to empower individuals to embrace a
                sustainable lifestyle by providing accessible tools and
                resources. We believe everyone can make a positive impact on the
                planet.
              </p>
            </div>
          )}
        </div>

        {/* 2nd */}
        <div className="bg-[#191A23]">
          <button
            onClick={() => toggleSection(2)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>Who can use Terra?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 2 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 2 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                Terra is open to anyone interested in adopting more sustainable
                practices, from individuals to businesses looking to reduce
                their environmental footprint.
              </p>
            </div>
          )}
        </div>

        {/* 3rd */}
        <div className="bg-[#191A23]">
          <button
            onClick={() => toggleSection(3)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>Who is Terra for?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 3 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 3 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                Terra is designed for anyone interested in living a more
                sustainable lifestyle, regardless of their current knowledge or
                experience. Whether you&apos;re a seasoned eco-warrior or just
                starting your sustainability journey, Terra offers tools and
                resources to empower you to make a difference.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-20 h-1 bg-[#B9FF66] rounded-md"></div>
        <h1 className="font-semibold text-2xl">Features</h1>
        <div className="w-20 h-1 bg-[#B9FF66] rounded-md"></div>
      </div>
      <div className="w-full md:max-w-xl max-w-[90%] mx-auto rounded-3xl overflow-hidden border border-[#c9c8c8]">
        {/* 4th */}
        <div className="bg-[#191A23]">
          <button
            onClick={() => toggleSection(4)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>How accurate is the EcoScore?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 4 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 4 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                The accuracy of the EcoScore depends on the accuracy of the
                information you provide. Terra strives to use up-to-date
                emissions factors and methodologies, but estimates may vary
                based on individual circumstances.
              </p>
            </div>
          )}
        </div>

        {/* 5th */}
        <div className="bg-[#191A23]">
          <button
            onClick={() => toggleSection(5)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>What types of products can I find on the Marketplace?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 5 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 5 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                Terra offers a curated selection of eco-friendly products across
                various categories. This might include sustainable clothing,
                home goods, beauty products, and more, with options from
                different countries.
              </p>
            </div>
          )}
        </div>

        {/* 6th */}
        <div className="bg-[#191A23]">
          <button
            onClick={() => toggleSection(6)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>How does the Recycle Item Search Bar work?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 6 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 6 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                The Recycle Item Search Bar helps you find recycling facilities
                and guidelines for specific items in your local area. Just enter
                the item you want to recycle, and Terra will provide relevant
                information.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
