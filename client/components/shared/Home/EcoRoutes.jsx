"use client";

import { useEffect, useRef } from "react";

const EcoRoutes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-slide-up');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div id="TravelId" className="w-full h-[80vh] bg-amber-200 eco-finder-container">
      <div ref={containerRef} className="flex flex-col justify-center align-middle items-center h-full opacity-0">
        <p className="text-2xl md:text-6xl text-black font-bold">Eco Travel Planner</p>
        <p className="text-lg md:text-xl max-w-[60%] mx-auto text-center mt-8 text-black font-semibold">
          Plan your trips with our tool that provides routes, timings, and information on sustainable travel options and local transport.
        </p>
        <button className="bg-blue-600 text-white font-semibold px-12 py-3 rounded-3xl mt-8">
          Plan
        </button>
      </div>
    </div>
  );
};

export default EcoRoutes;
