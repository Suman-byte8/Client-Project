import React from 'react';
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

export const GuestInformation = ({
  guestName,
  guestPhoneNumber,
  guestEmail,
  onGuestNameChange,
  onPhoneNumberChange,
  onEmailChange
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-4">
        GUEST INFORMATION
      </label>
      <div className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUser className="text-gray-500" />
          </div>
          <input
            type="text"
            value={guestName}
            onChange={onGuestNameChange}
            placeholder="Full Name"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="text-gray-500" />
          </div>
          <input
            type="email"
            value={guestEmail}
            onChange={onEmailChange}
            placeholder="Email Address"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </div>

          {/* Phone Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaPhone className="text-gray-500" />
          </div>
          <input
            type="tel"
            value={guestPhoneNumber}
            onChange={onPhoneNumberChange}
            placeholder="Phone Number"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            pattern="[0-9]{10}"
          />
          
        </div>


      </div>

      <p className="text-xs text-gray-500 mt-4">
        * All fields are required for booking confirmation
      </p>
    </div>
  );
};

export default GuestInformation;