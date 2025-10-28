import React from 'react';

export const NightsDisplay = ({ nights }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        NIGHTS*
      </label>
      <div className="flex items-center border border-gray-200 rounded-lg px-3 py-3">
        <span className="text-gray-400">{nights}</span>
      </div>
    </div>
  );
};
