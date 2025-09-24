import React from "react";
import { Img } from "react-image";
import {
  FaMapMarkerAlt,
  FaHistory,
  FaLeaf,
  FaWater,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import MaldaTownVideo from "../assets/Videos/MaldaTown.mp4";
import { Link } from "react-router-dom";

export default function OurHeartMalda() {
  const features = [
    {
      icon: <FaHistory className="text-4xl text-yellow-600" />,
      title: "Historic Monuments",
      description:
        "Discover Adina Mosque, Gour, and other heritage gems that tell the tales of Malda's glorious past.",
      image:
        "https://t4.ftcdn.net/jpg/00/44/62/05/360_F_44620573_DZvel9D2YSZMgEdDBaeo0nGjHSlxyy91.webp",
      highlights: [
        "Ancient Architecture",
        "Cultural Heritage",
        "Historical Significance",
      ],
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Famous Mangoes",
      description:
        "Savor the sweetness of Malda's legendary mango varieties, a treat for every visitor.",
      image:
        "https://t4.ftcdn.net/jpg/02/21/24/05/240_F_221240514_f99S0HrrPieAMRUbgeRHYvcFRMsEeJOA.jpg",
      highlights: ["World-Famous", "Multiple Varieties", "Seasonal Delights"],
    },
    {
      icon: <FaWater className="text-4xl text-blue-600" />,
      title: "Serene Rivers",
      description:
        "Relax along the banks of the Mahananda River, soaking in the peaceful ambiance.",
      image:
        "https://www.shutterstock.com/image-photo/body-water-bridge-clouds-sky-260nw-2660151107.jpg",
      highlights: ["River Views", "Peaceful Environment", "Natural Beauty"],
    },
  ];

  const stats = [
    { number: "500+", label: "Years of History" },
    { number: "50+", label: "Mango Varieties" },
    { number: "100+", label: "Heritage Sites" },
    { number: "24/7", label: "Warm Hospitality" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        {/* Commented out gradient background - keeping for reference */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600"></div> */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/80 to-orange-600/80"></div> */}

        {/* Video Background */}
        <video
          src={MaldaTownVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error("Video failed to load:", e);
            // Fallback to gradient background if video fails
            e.target.style.display = "none";
          }}
        >
          Your browser does not support the video tag.
        </video>

        {/* Fallback gradient background in case video doesn't load */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600"
          style={{ display: "none" }}
          id="fallback-bg"
        ></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-3xl mr-3 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight">
                Our Heart Malda
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-thin mb-6 max-w-3xl mx-auto leading-relaxed">
              Where History Meets Hospitality, Culture Meets Cuisine, and Every
              Moment Creates Memories
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://malda.gov.in/history/"
                className="bg-white text-yellow-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Heritage
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-yellow-700 transition-all duration-300 transform hover:scale-105">
                <Link to="/reservation">Plan Your Visit</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-medium text-yellow-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Discover the Magic of Malda
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Nestled in the historic heart of West Bengal, Malda is a blend of
              cultural heritage, lush landscapes, and warm hospitality. Explore
              the vibrant bazaars, taste the world-famous mangoes, and step back
              in time with our ancient monuments.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">{feature.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 min-h-[300px] max-h-[400px]">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <FaStar className="text-yellow-400 mr-2 text-xs" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl font-thin p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl  mb-4">
              Ready to Experience Malda?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto ">
              Book your stay with us and immerse yourself in the rich culture,
              delicious cuisine, and warm hospitality of our beloved city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservation"
                className="bg-white text-yellow-700 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Your Stay
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-yellow-700 transition-all duration-300 transform hover:scale-105">
                View Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
