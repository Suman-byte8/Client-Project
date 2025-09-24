import React, { useState, useEffect, useContext } from "react";
import FullLogo from "../../FullLogo";
import DescLayout from "./DescLayout";
import { fetchDistinctives } from "../../../services/distinctive"; // Import the fetch function
import { UserContext } from "../../../context/UserContext";
import Loader from "../../Loader";

const Distinctive = () => {
  const [distinctives, setDistinctives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  const { getToken } = useContext(UserContext);

  useEffect(() => {
    const token = getToken();
    const getDistinctives = async () => {
      try {
        const data = await fetchDistinctives(token);
        const features = data.data || []; // Ensure features is an array
        setDistinctives(features);
        if (features.length > 0) {
          setSelectedLink(features[0]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getDistinctives();
  }, [getToken]);

  if (loading) return (
    <div className="w-full flex items-center justify-center py-12">
      <Loader text="Loading distinctive features" />
    </div>
  );
  if (error) return (
    <div className="w-full flex items-center justify-center py-12 text-sm text-red-600">
      Unable to load distinctive features
    </div>
  );
  if (!distinctives.length) return (
    <div className="w-full flex items-center justify-center py-12 text-sm text-gray-500">
      No distinctive features found
    </div>
  );

  // Prepare the props for DescLayout from the selected feature data
  const descLayoutProps = selectedLink ? {
    name: selectedLink.title,
    desc: selectedLink.description,
    img: selectedLink.images,
  } : null;

  return (
    <section className="w-full py-12 mt-18 md:mt-2 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
      <FullLogo isFlex />

      <div className="w-full sm:w-[90%] md:w-[70%] text-center">
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
        Silver Arcade Premier stands as Malda’s most refined destination for discerning travelers. A perfect blend of modern design, timeless hospitality, and world-class amenities, the hotel offers an exceptional stay for business executives, leisure seekers, and families looking for comfort, luxury, and memorable experiences.
        </p>
      </div>

      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        <h1 className="font-helvetica-neue font-light text-gray-800">
          Distinctive, distinguished brands
        </h1>
      </div>

      {/* Links (horiz scroll if overflow) */}
      <div className="overflow-x-auto flex flex-wrap  items-center justify-center sm:justify-center gap-3 sm:gap-4 md:gap-6 pb-2">
        {distinctives.map((d) => (
          <button
            key={d._id}
            className={`whitespace-nowrap px-2 py-1 text-sm transition-all duration-300 border-b-2 ${
              selectedLink?._id === d._id
                ? "border-gray-700 font-semibold text-gray-800"
                : "border-transparent hover:border-gray-300 text-gray-600"
            }`}
            onClick={() => setSelectedLink(d)}
          >
            {d.title}
          </button>
        ))}
      </div>

      <div className="w-full">
        {descLayoutProps && <DescLayout desc={descLayoutProps} />}
      </div>
    </section>
  );
};

export default Distinctive;