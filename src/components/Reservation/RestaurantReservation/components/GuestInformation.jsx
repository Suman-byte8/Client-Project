import React from 'react';
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

export const GuestInformation = ({
  guestName,
  guestPhoneNumber,
  guestEmail,
  setGuestName,
  setGuestPhoneNumber,
  setGuestEmail
}) => {
  return (
    <div className="space-y-4 mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        GUEST INFORMATION
      </label>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FaUser className="text-gray-500" />
        </div>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Full Name"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FaPhone className="text-gray-500" />
        </div>
        <input
          type="tel"
          value={guestPhoneNumber}
          onChange={(e) => setGuestPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FaEnvelope className="text-gray-500" />
        </div>
        <input
          type="email"
          value={guestEmail}
          onChange={(e) => setGuestEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
    </div>
  );
};