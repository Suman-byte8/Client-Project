import React, { useEffect, useState, useContext } from "react";
import { fetchFacilities } from "../services/facilitiesApi";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

export default function OurFacilities() {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { getToken } = useContext(UserContext);

  useEffect(() => {
    const fetchFacilitiesData = async () => {
      try {
        const token = getToken();
        const { data, error } = await fetchFacilities(token);
        if (error) {
          setError(error);
        } else {
          setFacilities(data);
        }
      } catch (err) {
        setError("Failed to load facilities.");
      } finally {
        setLoading(false);
      }
    };

    fetchFacilitiesData();
  }, [getToken]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-12">
        <Loader text="Loading facilities..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-12 text-red-600 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-center mb-12 uppercase">
        Our Facilities
      </h1>

      {/* Section Headline */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase">
          Bar & Restaurants
        </h3>
        <p className="text-gray-600 text-lg mt-2">
          We have multiple Bars and Restaurants
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition transform flex flex-col overflow-hidden"
          >
            {/* Image Cover */}
            <div className="h-56 w-full overflow-hidden">
              <ImageWithSkeleton
                src={facility.image}
                alt={facility.title}
                className="w-full h-full"
                imgClassName="w-full h-full object-cover"
                eager={index < 3}
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 text-center space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {facility.title}
              </h2>
              {facility.subtitle && (
                <p className="text-sm text-gray-500">{facility.subtitle}</p>
              )}
              <p className="text-sm text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {facilities.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg font-medium">No facilities found</p>
          <p className="text-sm">Check back later for updates!</p>
        </div>
      )}
    </div>
  );
}