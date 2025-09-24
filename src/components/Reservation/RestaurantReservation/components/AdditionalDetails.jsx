import React from 'react';
import { FaInfoCircle } from "react-icons/fa";

export const AdditionalDetails = ({ additionalDetails, setAdditionalDetails }) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        ADDITIONAL DETAILS
      </label>
      <div className="flex items-start border border-gray-300 rounded-lg px-3 py-3">
        <FaInfoCircle className="text-gray-500 mr-2 mt-1" />
        <textarea
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          placeholder="Any additional information? (Optional)"
          className="flex-1 outline-none bg-transparent min-h-[80px] resize-none"
        />
      </div>
    </div>
  );
};