import React from "react";

const AdditionalOfferings = () => {
  return (
    <section className="mb-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {/* Spa & Wellness */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <img
          src="../../../assets/SleepBonquite/banquite.jpg"
          alt="Spa & Wellness"
          className="rounded-lg mb-4 object-cover w-full h-56 mx-auto"
        />
        <h4 className="font-semibold mb-2">Spa & Wellness</h4>
        <p className="text-gray-600 text-sm mb-4">
          Rejuvenate your senses with our premium spa therapies and wellness programs, designed to balance mind, body, and soul.
        </p>
        {/* <button className="text-sm border border-gray-400 rounded-full px-4 py-1 hover:bg-gray-100 transition">
          KNOW MORE
        </button> */}
      </div>

      {/* Dining */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <img
          src="../../../assets/SleepBonquite/dine.jpg"
          alt="Dining"
          className="rounded-lg mb-4 object-cover w-full h-56 mx-auto"
        />
        <h4 className="font-semibold mb-2">Fine Dining</h4>
        <p className="text-gray-600 text-sm mb-4">
          Indulge in our world-class dining experiences. From global cuisines to local specialties, each meal is a masterpiece.
        </p>
        <button className="text-sm border border-gray-400 rounded-full px-4 py-1 hover:bg-gray-100 transition">
          KNOW MORE
        </button>
      </div>
    </section>
  );
};

export default AdditionalOfferings;
