import React from 'react'
import FullLogo from '../../FullLogo'
import { Link } from 'react-router-dom'
import img from "../../../assets/Membership/beAmember.webp"
import ImageWithSkeleton from '../../ImageWithSkeleton'

const BeAMember = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col-reverse md:flex-row border-2 border-gray-200 m-8  ">
    {/* Left Section */}
    <div className="flex-1 p-6 flex flex-col justify-center gap-4">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <FullLogo isFlex={true} />
      </div>

      {/* Subtitle */}
      <h1 className="text-gray-800 text-2xl font-medium leading-relaxed ">
      Premier Privileges
      </h1>

      {/* Highlight Text */}
      <p className="text-gray-600 text-sm leading-relaxed py-3 rounded-md">
      Silver Arcade Premier brings you a world of exclusive privileges, thoughtfully designed for our most valued guests. With unmatched simplicity and flexibility, enjoy earning and redeeming rewards that elevate every stay. From complimentary room upgrades and curated dining experiences to wellness indulgences and personalized services, our loyalty offerings ensure that each visit to Silver Arcade Premier is not just a stay, but a memorable journey.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link to={"/membership-area"} className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 text-sm hover:bg-gray-100">
          NOT A MEMBER? – JOIN NOW
        </Link>

      </div>
    </div>

    {/* Right Section - Image */}
    <div className="flex-1 h-[400px] md:h-auto relative">
      <ImageWithSkeleton
        src={img}
        alt="Premier Privileges"
        className="absolute inset-0"
        imgClassName="w-full h-full object-cover rounded-r-xl"
        eager
      />
    </div>
  </div>
  )
}

export default BeAMember