import React from 'react';
import { FaCheck } from "react-icons/fa";

export const TermsAndConditions = ({ agreeToTnC, setAgreeToTnC }) => {
  return (
    <div className="flex items-start space-x-2">
      <div
        className={`flex items-center justify-center w-5 h-5 border rounded cursor-pointer ${
          agreeToTnC ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
        }`}
        onClick={() => setAgreeToTnC(!agreeToTnC)}
      >
        {agreeToTnC && <FaCheck className="text-white text-sm" />}
      </div>
      <label className="text-sm text-gray-600 cursor-pointer" onClick={() => setAgreeToTnC(!agreeToTnC)}>
        I agree to the terms and conditions for restaurant reservation, including the cancellation
        policy and any applicable fees.
      </label>
    </div>
  );
};