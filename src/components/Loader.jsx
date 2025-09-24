import React from "react";

const Loader = ({ className = "", size = 40, text = "Loading..." }) => {
  const borderSize = Math.max(2, Math.floor(size / 10));
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className="animate-spin rounded-full border-gray-200 border-t-gray-700"
        style={{ width: size, height: size, borderWidth: borderSize }}
      />
      {text ? (
        <div className="mt-3 text-sm text-gray-600">
          {text}
        </div>
      ) : null}
    </div>
  );
};

export default Loader;


