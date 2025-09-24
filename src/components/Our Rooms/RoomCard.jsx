import React from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/our-rooms/room-tour/${room._id}`)}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-60 overflow-hidden relative">
        <ImageWithSkeleton
          src={room.image}
          alt={room.name}
          className="w-full h-full"
          imgClassName="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 mb-1">
          {room.roomType}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
          {room.description}
        </p>

        {/* <div className="mt-3 text-gray-700 font-medium flex items-center gap-1">
          <FaRupeeSign /> {room.roomPrice?.toLocaleString() || "—"}
        </div> */}

        <button
          className="mt-4 bg-[#5c5e60] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/our-rooms/room-tour/${room._id}`);
          }}
        >
          View Room
        </button>
      </div>
    </div>
  );
};

export default RoomCard;