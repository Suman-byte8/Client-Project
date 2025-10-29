import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { generateCalendarDays } from '../../utils/generateCalendarDays';

const Calendar = ({ selectedDate, onDateSelect, minDate, maxDate }) => {
    const getSafeDate = (date) => {
      if (!date) return new Date();
      return date instanceof Date ? date : new Date(date);
    };

    const safeSelectedDate = getSafeDate(selectedDate);
    const [currentMonth, setCurrentMonth] = useState(safeSelectedDate.getMonth());
    const [currentYear, setCurrentYear] = useState(safeSelectedDate.getFullYear());
    
    const days = generateCalendarDays(currentYear, currentMonth);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const isDateDisabled = (date) => {
      if (!date) return true;

      const dateObj = date instanceof Date ? date : new Date(date);
      const minDateObj = minDate ? (minDate instanceof Date ? minDate : new Date(minDate)) : null;
      const maxDateObj = maxDate ? (maxDate instanceof Date ? maxDate : new Date(maxDate)) : null;

      if (minDateObj) {
        const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
        const dateOnly = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
        if (dateOnly < minDateOnly) return true;
      }
      if (maxDateObj) {
        const maxDateOnly = new Date(maxDateObj.getFullYear(), maxDateObj.getMonth(), maxDateObj.getDate());
        const dateOnly = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
        if (dateOnly > maxDateOnly) return true;
      }
      return false;
    };

    const isDateSelected = (date) => {
      if (!date || !selectedDate) return false;
      
      const dateObj = date instanceof Date ? date : new Date(date);
      const selectedDateObj = selectedDate instanceof Date ? selectedDate : new Date(selectedDate);
      
      return dateObj.toDateString() === selectedDateObj.toDateString();
    };

    return (
      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 w-80">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => {
                if (currentMonth === 0) {
                  setCurrentMonth(11);
                  setCurrentYear(currentYear - 1);
                } else {
                  setCurrentMonth(currentMonth - 1);
                }
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <FaChevronDown className="transform rotate-90" />
            </button>
            <span className="font-medium">
              {monthNames[currentMonth]} {currentYear}
            </span>
            <button
              onClick={() => {
                if (currentMonth === 11) {
                  setCurrentMonth(0);
                  setCurrentYear(currentYear + 1);
                } else {
                  setCurrentMonth(currentMonth + 1);
                }
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <FaChevronDown className="transform -rotate-90" />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-xs">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="p-2 text-center font-medium text-gray-500">
                {day}
              </div>
            ))}
            
            {days.map((day, index) => (
              <div key={index} className="p-1">
                {day ? (
                  <button
                    onClick={() => !isDateDisabled(day) && onDateSelect(day)}
                    disabled={isDateDisabled(day)}
                    className={`w-full p-2 text-sm rounded ${
                      isDateSelected(day)
                        ? 'bg-gray-600 text-white'
                        : isDateDisabled(day)
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {day.getDate()}
                  </button>
                ) : (
                  <div className="p-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default Calendar

