import React from "react";
import { FaWifi, FaTv, FaAirFreshener } from "react-icons/fa";
import { MdOutlineWineBar, MdOutlineRoomService } from "react-icons/md";

const RoomDescription = ({ roomDescription, roomCapacity, roomType }) => {
  const amenities = [
    { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
    { icon: <FaTv />, label: "Flat-Screen TV" },
    { icon: <FaAirFreshener />, label: "Air Conditioning" },
    { icon: <MdOutlineWineBar />, label: "Mini Bar" },
    { icon: <MdOutlineRoomService />, label: "24/7 Room Service" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Room Details</h2>
      <p className="text-gray-600 mb-4">{roomDescription}</p>
      <p className="text-sm text-gray-700 mb-6">
        <strong>Type:</strong> {roomType} | <strong>Capacity:</strong> {roomCapacity} guests
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {amenities.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200"
          >
            <div className="text-blue-600 text-lg">{a.icon}</div>
            <span className="text-gray-800">{a.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomDescription;