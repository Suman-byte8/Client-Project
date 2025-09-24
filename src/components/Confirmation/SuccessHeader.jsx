import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessHeader = ({ bookingType }) => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <FaCheckCircle className="text-green-500 text-6xl" />
      </div>
      <h1 className="text-2xl text-center text-gray-800 mb-6 font-light">
        Your {bookingType} booking is confirmed!
      </h1>
    </>
  );
};

export default SuccessHeader;
