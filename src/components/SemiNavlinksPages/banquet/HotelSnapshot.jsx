import React from "react";

const snapshot = [
  "Central Location in the City",
  "Fine Dining Restaurants",
  "Full-Service Spa & Wellness",
  "Rooftop Bar with City Views",
  "Ample Parking & Concierge Service",
];

const HotelSnapshot = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Why Choose Silver Arcade Premier?</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {snapshot.map((point, idx) => (
          <li key={idx} className="bg-gray-100 rounded-lg p-4">{point}</li>
        ))}
      </ul>
    </section>
  );
};

export default HotelSnapshot;
