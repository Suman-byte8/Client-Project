import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Details from "./Details";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageWithSkeleton from "../../ImageWithSkeleton";
import Loader from "../../Loader";

const Slider = ({ slides, showDetails, classes }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Show loading state if no slides
  if (slides.length === 0) {
    return (
      <div className={`relative w-full h-full ${classes} bg-gray-100 flex items-center justify-center`}>
        <Loader text="Loading experiences" size={48} />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${classes}`}>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        onSlideChange={handleSlideChange}
        onInit={(swiper) => {
          // Ensure activeIndex is set correctly on initialization
          setActiveIndex(swiper.realIndex);
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            {slide.content || (
              <ImageWithSkeleton
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full"
                imgClassName="w-full h-full object-cover"
                eager={index === 0}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {showDetails && slides.length > 0 && slides[activeIndex] && (
        <div className="absolute top-[50vh] 
        
        left-1/2 transform -translate-x-1/2 md:left-20 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50">
          <Details
            title={slides[activeIndex].details.title}
            description={slides[activeIndex].details.description}
          />
        </div>
      )}

      <div className="custom-prev absolute left-2 md:left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full cursor-pointer">
        <FaChevronLeft className="text-gray-700 text-sm md:text-base" />
      </div>
      <div className="custom-next absolute right-2 md:right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full cursor-pointer">
        <FaChevronRight className="text-gray-700 text-sm md:text-base" />
      </div>
    </div>
  );
};

export default Slider;
