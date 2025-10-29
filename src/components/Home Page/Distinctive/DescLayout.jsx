import React from "react";
import Slider from "../Carousel/Slider";
import FullLogo from "../../FullLogo";
import { Img } from "react-image";

const ImageComponent = ({ image, alt }) => {
  const imageUrl = typeof image === 'object' && image.original ? image.original : image;
  return (
    <Img
      src={imageUrl}
      alt={alt}
      className="w-full h-full object-cover rounded-xl"
    />
  );
};

const DescLayout = ({ desc }) => {
  if (!desc) return null;

  const renderImage = (image) => {
    return <ImageComponent image={image} alt={desc.name} />;
  };

  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-[45%] w-full p-4 flex flex-col items-center justify-center gap-4">
        <FullLogo isFlex={false} />
        <p className="text-center w-full p-2 text-sm leading-6.5 text-gray-500">
          {desc.desc}
        </p>
        {/* <button className="p-3 border-2 border-gray-300 rounded-full mt-2 px-12">
          Know More
        </button> */}
      </div>
      <div className="w-full md:w-[55%] h-[65vh]">
        <div className="_img flex items-center justify-center h-full">
          {desc.img && desc.img.length > 1 ? (
            <Slider
              slides={desc.img.map(img => ({
                content: renderImage(img)
              }))}
              showDetails={false}
              classes={"rounded-lg"}
            />
          ) : desc.img && desc.img.length === 1 ? (
            renderImage(desc.img[0])
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">No Image Available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescLayout;
