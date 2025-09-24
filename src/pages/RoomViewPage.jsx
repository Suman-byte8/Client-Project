import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getRoomById } from "../services/roomsApi";
import RoomHero from "../components/RoomViewPage/RoomHero";
import RoomGallery from "../components/RoomViewPage/RoomGallery";
import RoomDescription from "../components/RoomViewPage/RoomDescription";
import ExploreOtherRooms from "../components/RoomViewPage/ExploreOtherRooms";

const RoomViewPage = () => {
  const { id } = useParams();
  const { getToken } = useContext(UserContext);
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchRoom = async () => {
      try {
        const token = getToken();
        const data = await getRoomById(id, token);
        setRoom(data);
      } catch {
        setError("Failed to fetch room details");
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [id, getToken]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!room) return <p className="text-gray-500 text-center">No room found.</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <RoomHero heroImage={room.heroImage} roomName={room.roomName} />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Layout: Gallery Left, Details Right */}
        <div className="grid lg:grid-cols-2 gap-10">
          <RoomGallery roomImages={room.roomImages} />
          <RoomDescription
            roomDescription={room.roomDescription}
            roomCapacity={room.roomCapacity}
            roomType={room.roomType}
          />
        </div>

        <ExploreOtherRooms currentRoomId={room._id} />
      </div>
    </div>
  );
};

export default RoomViewPage;