import React, { useState, useEffect } from "react";
import Amenities from "../components/About Us/Amenities";
import Service from "../components/About Us/Service";
import IntroText from "../components/About Us/IntroText";
import Gallery from "../components/Gallery/Gallery";
import { fetchAboutPage } from "../services/aboutApi"; // Correcting the import

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN; // Ensure the token is available

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const data = await fetchAboutPage(token); // Using the correct function
      setAboutData(data);
    } catch (error) {
      console.error("Error fetching About page data:", error);
      setMessage("Failed to load About page data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto min-h-screen">
        <div className="container mx-auto p-6">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col px-4 md:px-12">
      {/* Hero Section */}
      <div className="relative p-3">
        <img
          src={aboutData?.aboutUsSection?.headerImage?.url}
          alt=""
          className="rounded-lg w-full h-64 md:h-96 object-cover"
        />
        <h1 className="absolute bottom-8 left-8 text-4xl sm:text-2xl font-bold text-white text-center drop-shadow-lg">
          {aboutData?.aboutUsSection?.title || "About Us"}
        </h1>
      </div>

      {/* Intro Text with Content Blocks */}
      <IntroText aboutData={aboutData} />

      {/* Amenities */}
      <Amenities amenities={aboutData?.amenities} />

      {/* Services - Now properly passing the services prop */}
      <Service services={aboutData?.services} />

      {/* Gallery */}
      {/* <Gallery /> */}
    </div>
  );
};

export default AboutUs;