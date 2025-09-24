import React from "react";

const ErrorState = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-red-600 text-center">
        <p className="text-xl mb-2">Error</p>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default ErrorState;
