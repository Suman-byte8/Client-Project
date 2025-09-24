import React from "react";

const RoomHero = ({ heroImage, roomName }) => {
  return (
<section className="relative w-full h-[70vh] overflow-hidden">
  <img
    src={heroImage}
    alt={roomName}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
  <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
    {/* <h1 className="text-3xl md:text-5xl font-bold">{roomName}</h1> */}
    {/* <p className="text-lg">₹{room.roomPrice.toLocaleString()} / Night</p> */}
  </div>
</section>
  );
};

export default RoomHero;