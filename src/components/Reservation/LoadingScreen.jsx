import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingScreen = ({ message = "We're reserving your room..." }) => {
  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-2xl flex flex-col items-center">
        <FaSpinner className="text-4xl text-gray-600 animate-spin mb-4" />
        <p className="text-lg font-medium text-gray-700">{message}</p>
        <div className="w-64 h-1 bg-gray-200 rounded-full mt-4">
          <div className="h-1 bg-gray-600 rounded-full animate-pulse" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
