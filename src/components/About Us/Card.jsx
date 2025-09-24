import React, { useEffect } from 'react'
import { Img } from "react-image";

const Card = ({ obj, index }) => {
  // useEffect(() => {
  //   console.log("Card component received obj:", obj);
  // }, [obj]);

  return (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-[400px] w-[280px]"
    >
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        {obj.image?.url ? (
          <Img
            src={obj.image.url}
            alt={obj.title}
            className="w-full h-full object-cover"
            loader={<div className="text-gray-400">Loading...</div>}
            unloader={<div className="text-gray-400">Image not available</div>}
          />
        ) : (
          <div className="text-gray-400">No image available</div>
        )}
      </div>

      {/* Text Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-semibold text-xl text-gray-800 mb-3">
          {obj.title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed flex-grow">
          {obj.description}
        </p>
      </div>
    </div>
  )
}

export default Card