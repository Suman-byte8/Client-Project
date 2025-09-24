import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[40vh] rounded-lg overflow-hidden mb-12">
      <img
        src="../../../assets/SleepBonquite/head.jpg"
        alt="Silver Arcade Premier Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-purple-900 bg-opacity-60 flex flex-col justify-center items-start px-12">
        <h1 className="text-white text-4xl font-serif font-bold mb-2 tracking-wide">
          Silver Arcade Premier
        </h1>
        <p className="text-white text-lg italic">Festival of Elegance</p>
        <p className="text-white mt-2 text-sm">#WakeUpInLuxury</p>
      </div>
    </section>
  );
};

export default HeroSection;
