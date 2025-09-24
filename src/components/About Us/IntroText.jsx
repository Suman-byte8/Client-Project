import React from "react";

const IntroText = ({ aboutData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-gray-800 space-y-12 md:space-y-20">
      {/* Intro */}
      <div className="max-w-full mx-auto text-justify">
        <p className="text-base sm:text-lg font-light leading-relaxed mb-6">
          {aboutData?.aboutUsSection?.description}
        </p>
      </div>

      {/* Dynamic Content Blocks */}
      {aboutData?.contentBlocks?.map((block, index) => (
        <div
          key={block._id}
          className="flex flex-col md:flex-row items-center border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Image Section */}
          <div
            className={`w-full md:w-1/2 h-64 md:h-80 ${
              index % 2 === 0 ? "order-last" : "order-last md:order-first"
            }`}
          >
            {block.image?.url ? (
              <img
                src={block.image.url}
                alt={block.title}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-normal mb-4">
              {block.title}
            </h2>
            <p className="text-md font-light leading-relaxed">
              {block.description}
            </p>
          </div>
        </div>
      ))}

      {/* Closing */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-md font-light leading-relaxed">
          Book your stay today at Silver Arcade Premier and experience the
          perfect combination of business convenience and boutique-style comfort
          in Malda.
        </p>
      </div>
    </div>
  );
};

export default IntroText;