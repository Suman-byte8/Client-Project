// src/components/About/Services.jsx
import React from "react";

export default function Services({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <div className="px-4 py-10 md:px-10 md:py-16 bg-[#27272b] w-full">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5 text-center">Signature Services</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {services.map((s) => (
          <div className="flex flex-col gap-3 pb-3" key={s._id || s.title}>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{ backgroundImage: `url("${s.image?.url || s.img}")` }}
              data-alt={s.title}
            />
            <div>
              <p className="text-[#0d131c] dark:text-white text-base font-medium leading-normal">{s.title}</p>
              <p className="text-[#49699c] dark:text-gray-400 text-sm font-normal leading-normal">{s.description || s.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
