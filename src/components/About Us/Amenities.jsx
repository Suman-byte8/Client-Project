import React from "react";
import Card from "./Card";

const Amenities = ({ amenities }) => {
  // Filter out amenities that don't have proper data structure
  const validAmenities = amenities?.filter(amenity => 
    amenity.title && 
    amenity.description && 
    amenity.image?.url
  ) || [];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="w-full mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl mb-10 text-center text-gray-800 font-light tracking-wide">
          Our Amenities
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {validAmenities.length > 0 ? (
            validAmenities.map((amenity, index) => (
              <Card key={amenity._id || index} obj={amenity} index={index} />
            ))
          ) : (
            <p className="text-gray-500 text-center">No amenities available at the moment.</p>
          )}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-600 mt-12 text-sm font-light leading-relaxed text-center max-w-4xl mx-auto">
          Indulge in our world-class amenities designed to cater to your every
          need. Take a refreshing dip in our expansive swimming pool, savor
          exquisite culinary creations at our award-winning restaurants,
          rejuvenate your senses at our luxurious spa, or maintain your fitness
          regime at our state-of-the-art fitness center. At Silver Arcade Premier, we
          ensure that every moment of your stay is filled with comfort and
          delight.
        </p>
      </div>
    </div>
  );
};

export default Amenities;