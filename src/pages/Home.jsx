import React, { useEffect } from "react";

import Carousel from "../components/Home Page/Carousel/Carousel";
import Distinctive from "../components/Home Page/Distinctive/Distinctive";

import Offers from "../components/Home Page/Curated Offers/Offers";
import BeAMember from "../components/Home Page/Membership/BeAMember";
import Contact from "../components/Home Page/Contact Us/Contact";

import SocialHandle from "../components/Home Page/SocialHandle";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <Carousel />
      <Distinctive />
      <Offers />
      <BeAMember />
      <Contact />
      <SocialHandle />
    </div>
  );
};

export default Home;
