import React from 'react';
import { FaWifi, FaTv, FaWind, FaThermometerHalf, FaUtensils } from 'react-icons/fa';

const Amenities = () => {
  const amenities = [
    { icon: <FaWifi />, text: 'Complimentary WiFi' },
    { icon: <FaTv />, text: 'Flat-screen TV' },
    { icon: <FaWind />, text: 'Air Conditioning' },
    { icon: <FaThermometerHalf />, text: 'Mini-bar' },
    { icon: <FaUtensils />, text: '24-Hour Room Service' },
  ];

  return (
    <>
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center gap-4 bg-white px-4 min-h-14">
          <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-10">
            {amenity.icon}
          </div>
          <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
            {amenity.text}
          </p>
        </div>
      ))}
    </>
  );
};

export default Amenities;
