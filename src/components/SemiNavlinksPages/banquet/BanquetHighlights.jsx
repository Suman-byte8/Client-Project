import React from "react";

const highlights = [
  { title: "Spacious Halls", desc: "Multiple venues with capacity from 50–1000 guests." },
  { title: "Custom Menus", desc: "Curated gourmet dining options by master chefs." },
  { title: "Event Planning", desc: "Dedicated planners ensuring seamless coordination." },
  { title: "Decor & Ambience", desc: "Elegant themes, lighting, and floral artistry." },
  { title: "Luxury Comforts", desc: "Premium rooms and suites for your guests." },
];

const BanquetHighlights = () => {
  return (
    <section className="grid md:grid-cols-3 gap-6 px-6 py-12 max-w-6xl mx-auto">
      {highlights.map((item, idx) => (
        <div key={idx} className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="font-bold text-xl mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default BanquetHighlights;
