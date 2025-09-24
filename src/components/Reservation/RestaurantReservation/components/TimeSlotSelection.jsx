import React from 'react';
import { FaClock } from "react-icons/fa";

export const TimeSlotSelection = ({ timeSlot, setTimeSlot }) => {
  const timeSlots = ['Breakfast', 'Lunch', 'Dinner'];

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        TIME SLOT
      </label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
        <FaClock className="text-gray-500 mr-2" />
        <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="flex-1 outline-none bg-transparent"
          required
        >
          <option value="">Select a time slot</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};