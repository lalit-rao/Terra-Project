"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { mImg2 } from "../../../public/images";
import Link from "next/link";

function RecycleItemFinder() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add("slide-in-from-right");
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add("slide-in-from-left");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div id="RecycleId" className="flex flex-col lg:flex-row items-center justify-center p-6 md:p-10 lg:p-20 m-4 lg:m-10">
      <div className="flex flex-col lg:flex-row items-center lg:gap-20">
        <div ref={imageRef} className="flex-shrink-0 mb-6 lg:mb-0">
          <Image
            src={mImg2}
            alt="Recycle Item Finder"
            className="rounded-3xl w-full h-auto"
            width={600}
            height={400}
          />
        </div>
        <div ref={textRef} className="flex flex-col gap-6 lg:gap-8 lg:ml-11 text-center lg:text-left">
          <div className="text-black gap-4 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold">
              Recycle Item Finder
            </h1>
            <p className="text-[#8A868C] text-sm md:text-base">
              Find out exactly how to recycle or repurpose various items with
              our comprehensive search tool. Tailored to your local
              guidelines, it simplifies the recycling process and promotes
              better waste management practices.
            </p>
          </div>
          <div>
            <Link href="/recycle-item-finder" passHref>
              <button className="bg-[#2F373D] text-[#FFFFFF] px-5 py-2 md:px-7 md:py-3 rounded-md">
                Find
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecycleItemFinder;
