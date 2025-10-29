// src/components/About/CTA.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  const ctaBg = `linear-gradient(rgba(13, 19, 28, 0.6) 0%, rgba(13, 19, 28, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqzGaSAnzgplR_XocGJrAauzENTW_gE-A9xESwjJRMEe6WCdUivoE71Sk8qywt8fhQJXR__jN3Bif3Q_362xp2cBodPJcbWK0EmTIsK3j94PZjMNcmY7BsFxNHIFxg1Oi11Sc__Gh1dRhi18KkBVEuQ7ZmGs_0KcNAFFVbucFAzpq_NSVOhmnal_b8MeWIXlAM8z9oB_-OjtOfI1ssn4AaOSisVQPDczp4rmXlGWXccMuYKqRlLh60Pzo0RQxsGaHQ4R7TtV-qo_o")`;

  return (
    <div className="px-4 py-10 md:p-10">
      <div
        className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-10 md:p-16 text-center"
        style={{ backgroundImage: ctaBg }}
        data-alt="Luxurious hotel suite with a king-sized bed and a city view"
      >
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Begin Your Unforgettable Stay</h2>
        <p className="text-gray-300 text-base font-normal leading-normal max-w-lg">
          Discover the perfect blend of comfort, elegance, and bespoke service. Your journey into luxury starts here.
        </p>
        <Link to="/reservation" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
          <span className="truncate">Book Now</span>
        </Link>
      </div>
    </div>
  );
}
