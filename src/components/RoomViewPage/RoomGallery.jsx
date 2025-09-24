import React from "react";

const RoomGallery = ({ roomImages }) => {
  const images = roomImages?.map((img) => img.url) || [];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Gallery</h2>
      {images.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((src, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Room ${idx}`}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No additional images available.</p>
      )}
    </section>
  );
};

export default RoomGallery;