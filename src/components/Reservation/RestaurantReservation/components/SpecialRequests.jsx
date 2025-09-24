import React from 'react';
import { FaUtensils } from "react-icons/fa";

export const SpecialRequests = ({ specialRequests, setSpecialRequests }) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        SPECIAL REQUESTS
      </label>
      <div className="flex items-start border border-gray-300 rounded-lg px-3 py-3">
        <FaUtensils className="text-gray-500 mr-2 mt-1" />
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Any special requests? (Optional)"
          className="flex-1 outline-none bg-transparent min-h-[80px] resize-none"
        />
      </div>
    </div>
  );
};