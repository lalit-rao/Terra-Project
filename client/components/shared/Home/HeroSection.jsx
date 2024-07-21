"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { bg, logoFullWhite } from "../../../public/images";

function HeroSection() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add("fade-in");
            } else if (entry.target === textRef.current) {
              entry.target.classList.add("zoom-in");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="z-10 w-full h-[80vh] grid place-content-center relative mb-5 py-10 max-w-[80%] mx-auto">
      <div ref={imageRef} className="w-[80vw] h-[75vh] rounded-3xl overflow-hidden relative">
        <Image
          src={bg}
          alt="Background"
          className="object-cover w-full h-full opacity-90"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={textRef} className="logo-animation">
            <Image
              src={logoFullWhite}
              alt="Terra"
              className="text-white text-xl font-bold"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
