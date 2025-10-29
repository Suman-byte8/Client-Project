import React from "react";

const AddInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 mb-12">
      <div className="bg-gray-50 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-normal mb-4">Additional Information</h2>
        <p className="mb-2 text-sm text-gray-500">
          Check-in time is 11:00 AM, and check-out time is 9:00 AM. Early
          check-in and late check-out may be available upon request and subject
          to availability. Please contact the front desk for more information.
        </p>
        <p className=" text-sm text-gray-500">
          Our hotel offers a variety of amenities, including a fitness center,
          swimming pool, and on-site restaurant. Please visit our amenities page
          for more details.
        </p>
      </div>
    </div>
  );
};

export default AddInfo;
