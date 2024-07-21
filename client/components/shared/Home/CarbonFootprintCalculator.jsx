"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { mImg1 } from "../../../public/images";
import Link from "next/link";

function CarbonFootprintCalculator() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add('slide-in-from-left');
            } else if (entry.target === textRef.current) {
              entry.target.classList.add('slide-in-from-right');
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div id="CarbonId" className="flex flex-col lg:flex-row items-center justify-center p-6 md:p-10 lg:p-20 m-4 lg:m-10">
      <div className="flex flex-col lg:flex-row items-center lg:gap-20">
        <div ref={imageRef} className="flex-shrink-0 opacity-0">
          <Image
            src={mImg1}
            alt="Carbon Footprint Calculator"
            className="rounded-3xl w-full h-auto sm:mb-6 mb-0"
            width={600} // Provide a default width for better responsiveness
            height={400} // Provide a default height for better responsiveness
          />
        </div>
        <div ref={textRef} className="flex flex-col gap-6 lg:gap-8 lg:ml-11 text-center lg:text-left sm:mt-8 mt-0 pt-8 opacity-0">
          <div className="text-black gap-4 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold">
              EcoScore
            </h1>
            <p className="text-[#8A868C] text-sm md:text-base">
              Effortlessly understand and measure your carbon emissions with
              our intuitive tool. By analyzing your activities and inputs, it
              provides clear insights to help you reduce your environmental
              impact effectively.
            </p>
          </div>
          <div>
            <Link href="/eco-score" passHref>
              <button className="bg-[#2F373D] text-[#FFFFFF] px-5 py-2 md:px-7 md:py-3 rounded-md">
                Calculate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonFootprintCalculator;
