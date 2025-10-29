// src/components/About/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection({ title, description, backgroundImage }) {
  const heroBg = `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${backgroundImage}")`;

  return (
    <div className="@container">
      <div className="p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4 text-center"
          style={{ backgroundImage: heroBg }}
          data-alt="Elegant interior lobby of the Silver Arcade Premier hotel"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal md:text-base lg:text-lg max-w-2xl mx-auto">
              {description}
            </h2>
          </div>

          <Link to="/our-rooms" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
            <span className="truncate">Explore Rooms &amp; Suites</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
