"use client";

import { img1, img2, img3, img4, img5, img6 } from "../../../public/images";
import Link from "next/link";
import Image from "next/image";

const wrapWordsWithSpan = (text, bgColor) => {
  return text.split(" ").map((word, index) => (
    <span key={index} className={`bg-[${bgColor}] p-1 mx-1 rounded-lg`}>
      {word}
    </span>
  ));
};

function FeatureCards() {
  const handleScroll1 = () => {
        const nextSection = document.getElementById("HealthAssistantId");

        if (nextSection) {
            nextSection.scrollIntoView({behavior: "smooth"});
        }
    };

  const handleScroll2 = () => {
        const nextSection = document.getElementById("MarketplaceId");

        if (nextSection) {
            nextSection.scrollIntoView({behavior: "smooth"});
        }
    };

  const handleScroll3 = () => {
        const nextSection = document.getElementById("QuizId");

        if (nextSection) {
            nextSection.scrollIntoView({behavior: "smooth"});
        }
    };

  const handleScroll4 = () => {
        const nextSection = document.getElementById("CarbonId");

        if (nextSection) {
            nextSection.scrollIntoView({behavior: "smooth"});
        }
    };

  const handleScroll5 = () => {
        const nextSection = document.getElementById("RecycleId");

        if (nextSection) {
            nextSection.scrollIntoView({behavior: "smooth"});
        }
    };

  const handleScroll6 = () => {
        const nextSection = document.getElementById("TravelId");

        if (nextSection) {
            nextSection.scrollIntoView({behavior: "smooth"});
        }
    };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6 md:p-10 lg:p-28 max-w-[80%] mx-auto">
      <div className="bg-[#F3F3F3] flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-[20px] border border-[#191A23] shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex-1 flex flex-col md:flex-wrap justify-between gap-4 md:gap-6">
          <h1 className="text-black text-3xl md:text-2xl font-bold">
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("EcoScore", "#B9FF66")}
            </div>
          </h1>
          <h2>
              <div className="flex items-center cursor-pointer text-black">
                <span className="text-[#B9FF66] bg-[#191A23] text-2xl md:text-2xl rounded-full w-12 md:w-10 h-12 md:h-10 flex items-center justify-center">
                  ↗
                </span>
                <p className="text-lg md:text-xl ml-4" onClick={handleScroll4}>Learn more</p>
              </div>
          </h2>
        </div>
        <div className="flex-shrink-0 flex-1 flex justify-end">
          <Image src={img1} alt="Carbon Footprint Analyzer" className="w-full rounded-lg" />
        </div>
      </div>

      <div className="bg-[#B9FF66] flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-[20px] border border-[#191A23] shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex-1 flex flex-col md:flex-wrap justify-between gap-4 md:gap-6">
          <h1 className="text-black text-3xl md:text-2xl font-bold">
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("EcoRoutes", "#F3F3F3")}
            </div>
          </h1>
          <h2>
              <div className="flex items-center cursor-pointer text-black">
                <span className="text-[#B9FF66] bg-[#191A23] text-2xl md:text-2xl rounded-full w-12 md:w-10 h-12 md:h-10 flex items-center justify-center">
                  ↗
                </span>
                <p className="text-lg md:text-xl ml-4" onClick={handleScroll6}>Learn more</p>
              </div>
          </h2>
        </div>
        <div className="flex-shrink-0 flex-1 flex justify-end">
          <Image src={img2} alt="Eco Travel Planner" className="w-full rounded-lg" />
        </div>
      </div>

      <div className="bg-[#B9FF66] flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-[20px] border border-[#191A23] shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex-1 flex flex-col md:flex-wrap justify-between gap-4 md:gap-6">
          <h1 className="text-black text-3xl md:text-2xl font-bold">
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("Marketplace", "#F3F3F3")}
            </div>
          </h1>
          <h2>
              <div className="flex items-center cursor-pointer text-black">
                <span className="text-[#B9FF66] bg-[#191A23] text-2xl md:text-2xl rounded-full w-12 md:w-10 h-12 md:h-10 flex items-center justify-center">
                  ↗
                </span>
                <p className="text-lg md:text-xl ml-4" onClick={handleScroll2}>Learn more</p>
              </div>
          </h2>
        </div>
        <div className="flex-shrink-0 flex-1 flex justify-end">
          <Image src={img3} alt="Eco Friendly Product Selector" className="w-full rounded-lg" />
        </div>
      </div>

      <div className="bg-[#191A23] flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-[20px] border border-[#191A23] shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex-1 flex flex-col md:flex-wrap justify-between gap-4 md:gap-6">
          <h1 className="text-black text-3xl md:text-2xl font-bold">
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("Recycle Item", "#F3F3F3")}
            </div>
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("Finder", "#F3F3F3")}
            </div>
          </h1>
          <h2>
              <div className="flex items-center cursor-pointer text-white">
                <span className="text-[#B9FF66] bg-[#fff] text-2xl md:text-2xl rounded-full w-12 md:w-10 h-12 md:h-10 flex items-center justify-center">
                  ↗
                </span>
                <p className="text-lg md:text-xl ml-4" onClick={handleScroll5}>Learn more</p>
              </div>
          </h2>
        </div>
        <div className="flex-shrink-0 flex-1 flex justify-end">
          <Image src={img4} alt="Recycle Item Finder" className="w-full rounded-lg" />
        </div>
      </div>

      <div className="bg-[#191A23] flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-[20px] border border-[#191A23] shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex-1 flex flex-col md:flex-wrap justify-between gap-4 md:gap-6">
          <h1 className="text-black text-3xl md:text-2xl font-bold">
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("Sustainability Awareness", "#B9FF66")}
            </div>
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("Quiz", "#B9FF66")}
            </div>
          </h1>
          <h2>
              <div className="flex items-center cursor-pointer text-white">
                <span className="text-[#B9FF66] bg-[#fff] text-2xl md:text-2xl rounded-full w-12 md:w-10 h-12 md:h-10 flex items-center justify-center">
                  ↗
                </span>
                <p className="text-lg md:text-xl ml-4" onClick={handleScroll3}>Learn more</p>
              </div>
          </h2>
        </div>
        <div className="flex-shrink-0 flex-1 flex justify-end">
          <Image src={img5} alt="Sustainability Awareness Quiz" className="w-full rounded-lg" />
        </div>
      </div>

      <div className="bg-[#F3F3F3] flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-[20px] border border-[#191A23] shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex-1 flex flex-col md:flex-wrap justify-between gap-4 md:gap-6">
          <h1 className="text-black text-3xl md:text-2xl font-bold">
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("Health", "#B9FF66")}
            </div>
            <div className="flex flex-wrap">
              {wrapWordsWithSpan("Assistant", "#B9FF66")}
            </div>
          </h1>
          <h2>
              <div className="flex items-center cursor-pointer text-black">
                <span className="text-[#B9FF66] bg-[#191A23] text-2xl md:text-2xl rounded-full w-12 md:w-10 h-12 md:h-10 flex items-center justify-center">
                  ↗
                </span>
                <p className="text-lg md:text-xl ml-4" onClick={handleScroll1}>Learn more</p>
              </div>
          </h2>
        </div>
        <div className="flex-shrink-0 flex-1 flex justify-end">
          <Image src={img6} alt="Health Assistant" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
