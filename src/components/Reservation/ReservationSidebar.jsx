import React from "react";
import { FaBed, FaUtensils, FaUsers } from "react-icons/fa";

export default function ReservationSidebar({ activeSection, setActiveSection }) {
  return (
    <div className="w-full md:w-64 bg-gray-50 border-r border-gray-300 p-6 space-y-8">
      <h1 className="text-3xl font-light text-gray-600 border-b border-gray-300 pb-2">Reservation</h1>
      <div className="space-y-6">
        <button
          onClick={() => setActiveSection("accommodation")}
          className={`flex items-center gap-3 w-full text-left transition-colors ${
            activeSection === "accommodation" 
              ? "font-medium text-black" 
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <FaBed size={22} /> Accommodation
        </button>
        <button
          onClick={() => setActiveSection("restaurant")}
          className={`flex items-center gap-3 w-full text-left transition-colors ${
            activeSection === "restaurant" 
              ? "font-medium text-black" 
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <FaUtensils size={22} /> Restaurant Reservation Requests
        </button>
        <button
          onClick={() => setActiveSection("meeting")}
          className={`flex items-center gap-3 w-full text-left transition-colors ${
            activeSection === "meeting" 
              ? "font-medium text-black" 
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <FaUsers size={22} /> Meeting & Wedding Requests
        </button>
      </div>
    </div>
  );
} 