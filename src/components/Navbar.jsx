import React, { useState, useLayoutEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { gsap } from "gsap";


// Define the navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Reservation", path: "/reservation" },
  { name: "Our Rooms", path: "/our-rooms" },
  { name: "Our Facilities", path: "/our-facilities" },
  // { name: "Our Wings", path: "/our-offers" },
  { name: "About Us", path: "/about-us" },
  { name: "Gallery", path: "/gallery" },
  { name: "Our Heart Malda", path: "/heart-malda" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useLayoutEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#5C5E60] h-[40px] flex items-center p-[20px] w-full justify-between relative z-100">
      {/* menu and logo */}
      <div className="text-white  flex items-center justify-between gap-4">
        <FaBars className="text-xl cursor-pointer md:hidden" onClick={toggleMenu} />
        <Link to="/" className="font-semibold uppercase">Silver arcade premier</Link>
      </div>

      {/* navigation links for desktop */}
      <div className="hidden md:block">
        <ul className="">
          {navLinks.map((link, index) => (
            <li key={index} className="inline-block mx-2">
              <Link to={link.path} className="text-white hover:text-gray-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="absolute top-[40px] left-0 w-full bg-[#5C5E60] md:hidden">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="p-4 text-center border-b border-gray-700">
                <Link to={link.path} className="text-white hover:text-gray-300" onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
