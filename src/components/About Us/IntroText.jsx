import React from 'react';

const IntroText = ({ text }) => {
  return (
    <h2 className="text-white text-sm font-normal leading-normal md:text-base lg:text-lg max-w-2xl mx-auto">
      {text}
    </h2>
  );
};

export default IntroText;
