import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-1 justify-center items-center py-[9vw]">
      <div className="flex flex-col max-w-[960px] flex-1">

        <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          Oops! Page Not Found
        </h1>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          We're sorry, but the page you were looking for could not be found. It
          may have been moved, deleted, or the URL may be incorrect.
        </p>
        <div className="flex px-4 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0d80f2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <Link to={"/"} className="truncate">
              Return to Homepage
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
