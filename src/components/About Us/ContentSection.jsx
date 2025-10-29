import React from "react";

const ContentSection = ({ contentBlocks }) => {
  if (!contentBlocks || contentBlocks.length === 0) return null;

  return (
    <div className="px-4 py-10 md:px-10 md:py-16 space-y-16">
      {contentBlocks.map((block, index) => {
        const isEven = index % 2 === 0;
        const imageUrl = block.image?.url || "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800";

        return (
          <div
            key={block._id || index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Image */}
            <div
              className={`w-full h-60 rounded-xl bg-cover bg-center ${
                !isEven ? "md:order-last" : ""
              }`}
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            {/* Text */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#0d131c]  text-3xl font-bold leading-tight tracking-[-0.015em]">
                {block.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">
                {block.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
