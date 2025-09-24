import React from "react";

const rooms = [
  { title: "Executive Rooms", desc: "Stylish comfort for business travelers." },
  { title: "Premier Suites", desc: "Spacious living with elegant décor." },
  { title: "Royal Suite", desc: "Luxury redefined with personalized services." },
];

const BanquetRooms = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Rooms for Every Occasion</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
            <p className="text-gray-600">{room.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BanquetRooms;

