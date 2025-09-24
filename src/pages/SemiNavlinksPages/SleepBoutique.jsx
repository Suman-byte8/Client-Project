import React from "react";
import HeroSection from "../../components/SemiNavlinksPages/sleepBoutique/HeroSection";
import IntroText from "../../components/SemiNavlinksPages/sleepBoutique/IntroText";
import Offerings from "../../components/SemiNavlinksPages/sleepBoutique/Offerings";
import AdditionalOfferings from "../../components/SemiNavlinksPages/sleepBoutique/AdditionalOfferings";
import ExclusiveOutlets from "../../components/SemiNavlinksPages/sleepBoutique/ExclusiveOutlets";

const SleepBoutique = () => {
  return (
    <div className="font-sans text-gray-800 max-w-7xl mx-auto px-6 py-12">
      <HeroSection />
      <IntroText />
      <Offerings />
      {/* <AdditionalOfferings /> */}
      <ExclusiveOutlets />
    </div>
  );
};

export default SleepBoutique;
