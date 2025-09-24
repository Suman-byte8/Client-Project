import React from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactDetails = ({ bookingData }) => {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6">
      <h2 className="text-lg font-normal mb-4">Contact Details</h2>
      {bookingData.guestInfo?.name && (
        <div className="flex items-center gap-3 mb-2">
          <FaUser className="text-gray-500" />
          <p>{bookingData.guestInfo.name}</p>
        </div>
      )}
      {bookingData.guestInfo?.email && (
        <div className="flex items-center gap-3 mb-2">
          <FaEnvelope className="text-gray-500" />
          <p>{bookingData.guestInfo.email}</p>
        </div>
      )}
      {bookingData.guestInfo?.phoneNumber && (
        <div className="flex items-center gap-3">
          <FaPhone className="text-gray-500" />
          <p>{bookingData.guestInfo.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
