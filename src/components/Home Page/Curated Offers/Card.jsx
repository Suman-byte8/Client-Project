import React, { useEffect } from 'react'
import { Img } from 'react-image';

const Card = ({offers, className}) => {
  useEffect(() => {
    console.log("Offer data in Card component:", offers);
  }, [offers]);
    
  return (
    <div className={`w-[360px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 ${className}`}>
    {/* Image */}
    <div className="w-full h-64 overflow-hidden">
      <img
        src={offers.image}
        alt={offers.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800">{offers.title}</h2>
      <p className="text-gray-500 text-sm mt-2">
        {offers.description}
      </p>

      {/* List */}
      <ul className="text-gray-600 text-sm mt-4 space-y-1 px-2">
        {
            offers.details && offers.details.length > 0 && offers.details.map((point) => {
                return <li key={point} className='list-disc text-left my-2 mt-1'>{point}</li>
            })
        }
      </ul>


    </div>

  </div>
  )
}

export default Card