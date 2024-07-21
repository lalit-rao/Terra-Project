"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {mImg3, mImg5} from "../../../public/images";
import Link from "next/link";

function EcoSwap() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add('slide-in-from-left');
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add('slide-in-from-right');
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div id="MarketplaceId" className="flex flex-col lg:flex-row items-center justify-center p-6 md:p-10 lg:p-20 m-4 lg:m-10">
      <div className="flex flex-col lg:flex-row items-center lg:gap-20">
        <div ref={textRef} className="flex flex-col gap-6 lg:gap-8 lg:mr-11 text-center lg:text-left opacity-0">
          <div className="text-black gap-4 flex flex-col sm:pb-8 pb-0">
            <h1 className="text-3xl md:text-4xl font-bold">
              Eco Swap
            </h1>
            <p className="text-[#8A868C] text-sm md:text-base">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
EcoSwap is a feature on our website designed to promote sustainable living by enabling users to exchange eco-friendly products. Users can easily list items by providing details like name, contact information, item description, price, and images. Items are displayed in attractive product cards, and detailed information is accessible via popups when the 'Buy' button is clicked.
            </p>
          </div>
          <div>
            <Link href="/eco-swap" passHref>
              <button className="bg-[#2F373D] text-[#FFFFFF] px-5 py-2 md:px-7 md:py-3 rounded-md">
                Go
              </button>
            </Link>
          </div>
        </div>
        <div ref={imageRef} className="flex-shrink-0 mt-6 lg:mt-0 opacity-0">
          <Image
            src={mImg5}
            alt="Eco-Friendly Product Selector"
            className="rounded-3xl w-full h-auto"
            width={600} // Provide a default width for better responsiveness
            height={400} // Provide a default height for better responsiveness
          />
        </div>
      </div>
    </div>
  );
}

export default EcoSwap;
