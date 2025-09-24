import React, { useEffect, useState } from "react";

const shimmerClass =
  "relative overflow-hidden bg-gray-200 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

// Tailwind keyframes for shimmer are assumed via arbitrary values; if purged, consider adding to CSS.

const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  imgClassName = "object-cover w-full h-full",
  fallback,
  onLoad,
  onError,
  eager = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  return (
    <div className={`w-full h-full ${className}`}>
      {!loaded && !failed && (
        <div className={`${shimmerClass} w-full h-full rounded-md`} />
      )}
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className={`${imgClassName} ${!loaded ? "invisible" : ""}`}
          loading={eager ? "eager" : "lazy"}
          onLoad={(e) => {
            setLoaded(true);
            onLoad && onLoad(e);
          }}
          onError={(e) => {
            setFailed(true);
            onError && onError(e);
          }}
        />
      ) : fallback ? (
        fallback
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          Image unavailable
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;


