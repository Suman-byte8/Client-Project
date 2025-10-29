// src/components/About/Amenities.jsx
import React from "react";

export default function Amenities({ amenities }) {
  if (!amenities || amenities.length === 0) return null;

  return (
    <div className="px-4 py-10 md:px-10 md:py-16 bg-white dark:bg-background-dark/50">
      <h2 className="text-[#0d131c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5 text-center">Unparalleled Amenities</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {amenities.map((a) => (
          <div key={a._id || a.title} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{ backgroundImage: `url("${a.image?.url || a.img}")` }}
              data-alt={a.title}
            ></div>
            <div>
              <p className="text-[#0d131c]  text-base font-medium leading-normal">{a.title}</p>
              <p className="text-gray-400 text-sm font-normal leading-normal">{a.description || a.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
