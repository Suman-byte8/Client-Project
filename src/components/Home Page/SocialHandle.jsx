import React from 'react'
import { FaXTwitter, FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa6";

const SocialHandle = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
        <h3 className="text-sm font-semibold mb-3">VISIT OUR SOCIAL HANDLES</h3>
        <div className="flex gap-4 text-2xl text-gray-700">
          <FaXTwitter className="text-black cursor-pointer" />
          <FaTwitter className="text-sky-500 cursor-pointer" />
          <FaYoutube className="text-red-600 cursor-pointer" />
          <FaInstagram className="text-pink-500 cursor-pointer" />
          <FaFacebook className="text-blue-600 cursor-pointer" />
        </div>
      </div>
  )
}

export default SocialHandle