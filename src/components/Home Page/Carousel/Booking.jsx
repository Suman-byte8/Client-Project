import React,{useEffect, useState} from "react";
import { FaBed, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Booking = () => {
    // function for getting current date
    const [date, setDate] = useState()
    const getCurrentDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        // return `${dd}/${mm}/${yyyy}`;
        setDate(`${dd}/${mm}/${yyyy}`);
    };
    useEffect(() => {
        getCurrentDate();
    }, []);
  return (
    <div className="w-full max-w-4xl  p-2 md:bg-transparent border border-gray-300 rounded-lg">
      <Link to="/reservation" className="w-full bg-white/10 backdrop-blur-md  flex items-center justify-between p-5 md:p-3 rounded-lg border-[1px] border-gray-500 md:border-0">
        <div className="_search flex items-center">
          <FaSearch className=" mr-2" />
          <span className="outline-none ">
            Reserve Your Room..
          </span>
        </div>

        <div className="_date md:flex items-center hidden">
          <FaCalendarAlt className=" mr-2" />
          <span className="outline-none ">
           {date}
          </span>
        </div>

        <div className="_room md:flex items-center hidden">
          <FaBed className=" mr-2" />
          <span className="outline-none ">1 Room</span>
        </div>

        <div className="_People md:flex items-center hidden">
          <IoPeopleSharp className=" mr-2" />
          <span className="outline-none ">
            2 Adults, 0 Children
          </span>
        </div>

        <div className="_bookingButton">
          <button className="bg-[#5c5e60] text-white rounded-lg px-2 md:px-4">
            Book Now
          </button>
        </div>

      </Link>
    </div>
  );
};

export default Booking;
