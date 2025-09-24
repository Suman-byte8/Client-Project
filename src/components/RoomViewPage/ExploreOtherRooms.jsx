import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getRooms } from "../../services/roomsApi";

const ExploreOtherRooms = ({ currentRoomId }) => {
  const [rooms, setRooms] = useState([]);
  const { getToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = getToken();
      const data = await getRooms(token);
      setRooms(data.filter((r) => r._id !== currentRoomId).slice(0, 4));
    })();
  }, [currentRoomId, getToken]);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Explore Other Rooms
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <div
            key={room._id}
            onClick={() => navigate(`/our-rooms/room-tour/${room._id}`)}
            className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <img
              src={room.heroImage || room.roomImages?.[0]?.url}
              alt={room.roomName}
              className="h-32 w-full object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-gray-800 text-base">{room.roomType}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {room.roomDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreOtherRooms;