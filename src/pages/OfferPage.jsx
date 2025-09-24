import React from "react";
import Offers from "../components/Home Page/Curated Offers/Offers";

const OfferPage = () => {
  return (
    <div className="py-12">
      <Offers showAll={true} />
    </div>
  );
};

export default OfferPage;