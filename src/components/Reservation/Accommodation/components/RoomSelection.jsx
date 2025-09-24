import React from 'react';
import { FaBed, FaUser, FaInfoCircle, FaChevronUp, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";

export const RoomSelection = ({
  rooms,
  showRoomSelection,
  onToggleRoomSelection,
  onUpdateCount,
  onAddRoom,
  onRemoveRoom,
  getTotalAdults,
  getTotalChildren
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-6">
      <div className="flex-1 relative">
        <div
          className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer hover:border-gray-400"
          onClick={onToggleRoomSelection}
        >
          <FaBed className="text-gray-500 mr-2" />
          <span className="text-gray-700">
            {rooms.length} Room{rooms.length > 1 ? "s" : ""}
          </span>
          {showRoomSelection ? (
            <FaChevronUp className="ml-auto text-gray-400" />
          ) : (
            <FaChevronDown className="ml-auto text-gray-400" />
          )}
        </div>
        {showRoomSelection && (
          <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-2 p-4 w-full max-w-md shadow-lg flex flex-col items-start justify-center">
            {rooms.map((room, index) => (
              <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Room {index + 1}</span>
                  {rooms.length > 1 && (
                    <button
                      onClick={() => onRemoveRoom(index)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Remove room ${index + 1}`}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="flex items-baseline gap-4 flex-col">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    <span>Adults</span>
                    <button
                      onClick={() => onUpdateCount(index, 'adults', -1)}
                      disabled={room.adults <= 1}
                      className="p-1 border rounded disabled:opacity-50"
                      aria-label={`Decrease adults in room ${index + 1}`}
                    >
                      <FaMinus />
                    </button>
                    <span>{room.adults}</span>
                    <button
                      onClick={() => onUpdateCount(index, 'adults', 1)}
                      disabled={room.adults >= 4}
                      className="p-1 border rounded disabled:opacity-50"
                      aria-label={`Increase adults in room ${index + 1}`}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    <span>Children</span>
                    <button
                      onClick={() => onUpdateCount(index, 'children', -1)}
                      disabled={room.children <= 0}
                      className="p-1 border rounded disabled:opacity-50"
                      aria-label={`Decrease children in room ${index + 1}`}
                    >
                      <FaMinus />
                    </button>
                    <span>{room.children}</span>
                    <button
                      onClick={() => onUpdateCount(index, 'children', 1)}
                      disabled={room.children >= 4}
                      className="p-1 border rounded disabled:opacity-50"
                      aria-label={`Increase children in room ${index + 1}`}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={onAddRoom}
              className="w-full bg-[#4a5565] text-white py-2 rounded hover:bg-[#738094]"
              aria-label="Add room"
            >
              Add Room
            </button>
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
          <FaUser className="text-gray-500 mr-2" />
          <span className="text-gray-700">
            {getTotalAdults()} Adult{getTotalAdults() > 1 ? "s" : ""},{" "}
            {getTotalChildren()} Child{getTotalChildren() !== 1 ? "ren" : ""}
          </span>
          <FaInfoCircle className="text-gray-400 ml-2" />
        </div>
      </div>
    </div>
  );
};