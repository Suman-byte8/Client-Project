import React, { useState } from "react";

const Details = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription =
    description?.length > 100 ? description.slice(0, 200) + "..." : description;

  const shouldShowToggle = description?.length > 100;

  return (
    <div
      className="_subDetails 
      w-[90vw] max-w-[450px]
      sm:max-w-[500px] 
      md:w-[500px] md:max-w-[500px] 
      lg:w-[500px] lg:max-w-[600px]
      min-h-[150px] sm:min-h-[120px] 
      bg-white p-4 sm:p-5 md:p-6 
      text-center flex flex-col items-center justify-center 
      rounded-lg shadow-lg gap-2 sm:gap-3 z-50"
    >
      <h2 className="text-base sm:text-lg md:text-xl font-light">{title}</h2>
      <p className="text-xs sm:text-sm text-gray-600">
        {isExpanded ? description : truncatedDescription}
      </p>
      {shouldShowToggle && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs sm:text-sm text-blue-500 hover:text-blue-700 transition-colors"
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default Details;
