import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <p className="text-[#0d131c] dark:text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-[#49699c] dark:text-gray-400 text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;