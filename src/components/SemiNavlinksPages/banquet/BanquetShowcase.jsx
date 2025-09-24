import React from "react";
import img from '../../../assets/MeetingPage/_DSC4779.jpg'

const BanquetShowcase = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Perfect Event Starts Here</h2>
          <button className="bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BanquetShowcase;
