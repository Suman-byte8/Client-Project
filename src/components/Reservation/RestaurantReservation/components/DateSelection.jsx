import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "../../Calender";

export const DateSelection = ({ selectedDate, showCalendar, setShowCalendar, onDateSelect }) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        DATE
      </label>
      <div
        className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <FaCalendarAlt className="text-gray-500 mr-2" />
        <span className="flex-1 outline-none bg-transparent">
          {selectedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        {/* ... Chevron icon ... */}
      </div>
      {showCalendar && (
        <Calendar
          selectedDate={selectedDate}
          onDateSelect={onDateSelect}
          minDate={new Date()}
        />
      )}
    </div>
  );
};