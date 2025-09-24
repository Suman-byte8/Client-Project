import React from "react";
import { FaRupeeSign, FaCheck, FaTag, FaWifi } from "react-icons/fa";

export default function InfoPanel() {
  return (
    <div className="w-full lg:w-80 bg-gray-50 p-6 border-l border-gray-300">
      <h2 className="text-xl font-light text-gray-600 mb-6">Why book with us?</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaRupeeSign className="text-gray-500" size={20} />
          <span className="text-gray-700">Best Rates Guaranteed</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCheck className="text-gray-500" size={20} />
          <span className="text-gray-700">Member Rates</span>
        </div>
        <div className="flex items-center gap-3">
          <FaTag className="text-gray-500" size={20} />
          <span className="text-gray-700">Special Offers</span>
        </div>
        <div className="flex items-center gap-3">
          <FaWifi className="text-gray-500" size={20} />
          <span className="text-gray-700">Wi-Fi</span>
        </div>
      </div>
    </div>
  );
}