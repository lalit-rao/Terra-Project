import React from "react";
import Amazon from "../Images/Amazon.webp";
import {amazon} from "../Images";
import Image from "next/image";

function Card({
  title,
  product_photo,
  star_rating = "no rating",
  price,
  delivery,
  product_url,
  num_ratings,
}) {
  return (
    <div className="flex flex-col md:p-4 p-1 md:w-72  w-44 hover:scale-95 h-full bg-[#e7e7e7] gap-3 md:gap-10 shadow-md">
      <img
        alt={title}
        src={product_photo}
        className="object-contain md:h-36 h-20 w-full mb-2"
      />
      <div className="flex flex-col gap-1 text-left ">
        <div className="text-[8px] mb-2 md:text-sm h-10 overflow-hidden text-black">
          {title}
        </div>
        <div className="text-[8px] md:text-sm text-gray-600">
          Price: <b>{price}</b>
        </div>
        <div className="text-[8px] md:text-sm text-gray-600">
          ⭐{star_rating}
        </div>
        <div className="text-[8px] md:text-sm text-gray-600">
          Reviews: {num_ratings}
        </div>
        <div className="text-[8px] md:text-sm text-gray-600 flex justify-between items-end h-10 overflow-hidden">
          <div className="text-[8px] md:text-sm">Delivery: {delivery}</div>
          <div className="flex-shrink-0">
            <a href={product_url} target="_blank" rel="noopener noreferrer">
              <Image
                src={amazon}
                alt="Amazon"
                className="w-3 h-3 md:w-7 md:h-7 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
