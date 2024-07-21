import React from "react";

function CardItemFinder({
  img,
  name,
  materialComposition,
  recyclability,
  recyclingInstructions,
  typeOfMaterial,
  localRecyclingGuidelines,
  environmentalImpact,
  alternativeDisposalOptions,
  upcyclingAndReuseIdeas,
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-80 h-96 p-6 flex flex-col transition-transform transform hover:scale-105">
      <div className="flex justify-center mb-4">
        <img
          className="w-32 h-32 object-cover rounded-full shadow-md"
          src={img}
          alt={name}
        />
      </div>
      <div className="text-center flex-1 text-black overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">{name}</h2>
        <div className="text-left space-y-2">
          <p><b>Material Composition:</b> {materialComposition}</p>
          <p><b>Recyclability:</b> {recyclability}</p>
          <p><b>Recycling Instructions:</b> {recyclingInstructions}</p>
          <p><b>Type Of Material:</b> {typeOfMaterial}</p>
          <p><b>Local Recycling Guidelines:</b> {localRecyclingGuidelines}</p>
          <p><b>Environmental Impact:</b> {environmentalImpact}</p>
          <p><b>Alternative Disposal Options:</b> {alternativeDisposalOptions}</p>
          <p><b>Upcycling And Reuse Ideas:</b> {upcyclingAndReuseIdeas}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItemFinder;
