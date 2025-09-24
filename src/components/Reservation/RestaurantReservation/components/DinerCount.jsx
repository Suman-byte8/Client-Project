import React from 'react';
import { FaBuilding } from "react-icons/fa";

export const DinerCount = ({ numberOfDiners, setNumberOfDiners }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        NO OF DINERS
      </label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
        <FaBuilding className="text-gray-500 mr-2" />
        <input
          type="number"
          placeholder="Enter no of diners"
          className="flex-1 outline-none bg-transparent"
          min={1}
          value={numberOfDiners}
          onChange={(e) => setNumberOfDiners(parseInt(e.target.value) || 1)}
        />
      </div>
    </div>
  );
};