import React from "react";
import bed from "../../../assets/SleepBonquite/bed.webp";
import bath from "../../../assets/SleepBonquite/bath.webp";
import suites from "../../../assets/SleepBonquite/suite.webp";

const offeringsData = [
  {
    id: 1,
    title: "Bedding",
    img: bed,
    desc: "Premium linens and duvets crafted for absolute comfort and elegance, ensuring you drift into peaceful slumber every night.",
  },
  {
    id: 2,
    title: "Bath",
    img: bath,
    desc: "Transform your bathing into a luxurious ritual with our plush towels, robes, and bath accessories.",
  },
  {
    id: 3,
    title: "Suites Collection",
    img: suites,
    desc: "Explore our range of luxury suites, each designed with bespoke interiors, plush amenities, and ultimate sophistication.",
  },
];

const Offerings = () => {
  return (
    <section className="mb-16">
      <h3 className="text-center text-2xl font-serif font-bold mb-6 tracking-wide">
        Our Offerings
      </h3>
      <p className="text-center text-gray-500 mb-12 italic">
        Specially Curated For Silver Arcade Premier Guests
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {offeringsData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-lg mb-4 object-cover w-full h-48 mx-auto"
            />
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
