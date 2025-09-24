import React from "react";
import Card from "./Card";

const Service = ({ services }) => {
  // Filter out services that don't have proper data structure
  const validServices = services?.filter(service => 
    service.title && 
    service.description && 
    service.image?.url
  ) || [];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-10 text-center text-gray-800">
          Our Exceptional Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {validServices.length > 0 ? (
            validServices.map((service, index) => (
              <Card key={service._id || index} obj={service} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-gray-500">No services available at the moment.</p>
            </div>
          )}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-600 mt-12 text-sm font-light leading-relaxed text-center max-w-4xl mx-auto">
          Experience our exceptional services designed to exceed your expectations. 
          From personalized concierge assistance to luxury spa treatments, our dedicated 
          team ensures every aspect of your stay is meticulously crafted for your comfort 
          and satisfaction. At Silver Arcade Premier, we believe in delivering service 
          that goes beyond the ordinary.
        </p>
      </div>
    </div>
  );
};

export default Service;