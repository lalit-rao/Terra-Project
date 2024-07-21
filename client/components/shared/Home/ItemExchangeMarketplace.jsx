"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { mImg4 } from "../../../public/images";
import Link from "next/link";

function ItemExchangeMarketplace() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add("slide-in-from-left");
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add("slide-in-from-right");
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
    <div className="flex flex-col lg:flex-row items-center justify-center p-6 lg:p-20 m-6 lg:m-10">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        <div ref={textRef} className="flex flex-col gap-6 lg:gap-8 lg:mr-11 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-black">
            Recycle Item Finder
          </h1>
          <p className="text-base lg:text-lg text-[#8A868C]">
            Connect with a community to exchange unused items through our
            user-friendly marketplace. Facilitate the reuse of materials,
            reduce waste, and support a circular economy by listing and
            discovering items for exchange.
          </p>
          <Link href="/eco-swap" passHref>
            <button className="bg-[#2F373D] text-[#FFFFFF] px-6 py-3 rounded-md text-base lg:text-lg">
              Go
            </button>
          </Link>
        </div>
        <div ref={imageRef} className="w-full lg:w-auto">
          <Image src={mImg4} alt="Item Exchange Marketplace" className="rounded-3xl w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default ItemExchangeMarketplace;
