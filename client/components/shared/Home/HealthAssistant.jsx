"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { mImg6 } from "../../../public/images";
import Link from "next/link";

function HealthAssistant() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add("slide-in-from-left");
            } else if (entry.target === textRef.current) {
              entry.target.classList.add("slide-in-from-right");
            }
            observer.unobserve(entry.target); // Unobserve once the animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div id="HealthAssistantId" className="flex flex-col lg:flex-row items-center justify-center p-6 md:p-10 lg:p-20 m-4 lg:m-10">
      <div className="flex flex-col lg:flex-row items-center lg:gap-20">
        <div ref={imageRef} className="flex-shrink-0 mb-6 lg:mb-0">
          <Image
            src={mImg6}
            alt="Health Assistant"
            className="rounded-3xl w-full h-auto"
            width={600}
            height={400}
          />
        </div>
        <div ref={textRef} className="flex flex-col gap-6 lg:gap-8 lg:ml-11 text-center lg:text-left">
          <div className="text-black gap-4 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold">
              Health Assistant
            </h1>
            <p className="text-[#8A868C] text-sm md:text-base">
              Your all-in-one virtual guide for navigating our features and managing mental well-being. Get clear instructions on using our tools and compassionate support for stress and emotional health, all in one place.
            </p>
          </div>
          <div>
            <Link passHref href="/health-assistant">
              <button className="bg-[#2F373D] text-[#FFFFFF] px-5 py-2 md:px-7 md:py-3 rounded-md">
                Get
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthAssistant;
