import React from "react";

const BookingButton = ({ text, onSubmit, isLoading }) => {
  return (
    <button
      type="button" // ✅ prevents unwanted form submission
      onClick={onSubmit} // ✅ cleaner call
      disabled={isLoading}
      className={`bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium w-full lg:w-[40%] ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "Processing..." : text}
    </button>
  );
};

export default BookingButton;
