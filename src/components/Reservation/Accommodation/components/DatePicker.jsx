import React from 'react';
import { FaCalendarAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Calendar from "../../Calender";

export const DatePicker = ({ 
  label, 
  selectedDate, 
  showCalendar, 
  onToggleCalendar, 
  onDateSelect,
  minDate,
  formatDate 
}) => {
  return (
    <div className="flex-1 relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div
        className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer hover:border-gray-400"
        onClick={onToggleCalendar}
      >
        <FaCalendarAlt className="text-gray-500 mr-2" />
        <span className="text-gray-700">{formatDate(selectedDate)}</span>
        {showCalendar ? (
          <FaChevronUp className="ml-auto text-gray-400" />
        ) : (
          <FaChevronDown className="ml-auto text-gray-400" />
        )}
      </div>
      {showCalendar && (
        <Calendar
          selectedDate={selectedDate}
          onDateSelect={onDateSelect}
          minDate={minDate}
        />
      )}
    </div>
  );
};