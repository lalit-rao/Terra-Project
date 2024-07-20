import React from "react";
import bg from "../public/images/bg.png";
import img1 from "../public/images/img1.png";
import img2 from "../public/images/img2.png";
import img3 from "../public/images/img3.png";
import img4 from "../public/images/img4.png";
import img5 from "../public/images/img5.png";
import img6 from "../public/images/img6.png";
import Link from "next/link";
import Image from "next/image";

function HomeSection() {
  return (
    <div className="relative">
      <div className="w-full h-[88vh] grid place-content-center relative mb-5 py-10">
        <Image
          src={bg}
          alt="Background"
          className="object-cover w-[80vw] h-[75vh] rounded-3xl"
        />
        <div className="">
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
            TERRA
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 p-28">
        <div className="bg-[#F3F3F3] flex items-center p-4">
          <div className="flex content-between flex-col">
            <h1 className="text-3xl">Carbon Footprint Analyzer</h1>
            <h2>
              <Link to="" href="">
                <span>↗</span> learn more
              </Link>
            </h2>
          </div>
          <Image src={img1} alt="Description" className="ml-4" />
        </div>
        <div className="bg-[#B9FF66] flex items-center p-4">
          <div>
            <h1 className="text-3xl">Carbon Footprint Analyzer</h1>
            <h2>
              <Link to="" href="">
                <span>↗</span> learn more
              </Link>
            </h2>
          </div>
          <Image src={img2} alt="Description" className="ml-4" />
        </div>
        <div className="bg-[#B9FF66] flex items-center p-4">
          <div>
            <h1 className="text-3xl">Carbon Footprint Analyzer</h1>
            <h2>
              <Link to="" href="">
                <span>↗</span> learn more
              </Link>
            </h2>
          </div>
          <Image src={img3} alt="Description" className="ml-4" />
        </div>
        <div className="bg-[#191A23] flex items-center p-4">
          <div>
            <h1 className="text-3xl">Carbon Footprint Analyzer</h1>
            <h2>
              <Link to="" href="">
                <span>↗</span> learn more
              </Link>
            </h2>
          </div>
          <Image src={img4} alt="Description" className="ml-4" />
        </div>
        <div className="bg-[#191A23] flex items-center p-4">
          <div>
            <h1 className="text-3xl bg-[#B9FF66] p-3 rounded-lg">
              Carbon Footprint Analyzer
            </h1>
            <h2>
              <Link to="" href="">
                <span>↗</span> learn more
              </Link>
            </h2>
          </div>
          <Image src={img5} alt="Description" className="ml-4" />
        </div>
        <div className="bg-[#F3F3F3] flex items-center p-4">
          <div>
            <h1 className="text-3xl">Carbon Footprint Analyzer</h1>
            <h2>
              <Link to="" href="">
                <span>↗</span> learn more
              </Link>
            </h2>
          </div>
          <Image src={img6} alt="Description" className="ml-4" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
