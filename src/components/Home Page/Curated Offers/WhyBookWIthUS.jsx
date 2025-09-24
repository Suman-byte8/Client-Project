import React, { useState } from "react";
import { FaRupeeSign, FaUser, FaTags, FaWifi } from "react-icons/fa";
import FullLogo from "../../FullLogo";

const WhyBookWithUs = () => {


  return (
    <div
      className={"w-[90%] md:w-[80%] lg:w-[70%] rounded-xl p-4 transition-all duration-500 ease-in-out overflow-hidden h-auto shadow-2xl"}
    >
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="italic text-gray-500">
            Why Book With Us{" "}
          </p>
          <span className="h-8 w-[1px] bg-gray-300 hidden md:block" />
          <FullLogo isFlex={true}/>
        </div>

          <div className="w-full flex items-center gap-6 text-[10px] md:text-sm text-gray-700">
            <div className="flex items-center gap-1 flex-col justify-center text-center w-1/4">
              <FaRupeeSign /> Best Rates Guaranteed*
            </div>
            <div className="flex items-center gap-1 flex-col justify-center text-center w-1/4">
              <FaUser /> Member Rates
            </div>
            <div className="flex items-center gap-1 flex-col justify-center text-center w-1/4">
              <FaTags /> Special Offers
            </div>
            <div className="flex items-center gap-1 flex-col justify-center text-center w-1/4">
              <FaWifi /> Wi-Fi
            </div>
          </div>

      </div>

    </div>
  );
};

export default WhyBookWithUs;
