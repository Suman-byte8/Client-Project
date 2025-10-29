import React from 'react'

const Details = ({ title, description }) => {
  return (
    <div className="_subDetails min-w-[300px] max-w-[380px] sm:min-w-[250px] sm:max-w-[300px] min-h-[150px] sm:min-h-[180px] bg-white p-3 sm:p-4 text-center flex flex-col items-center justify-center rounded-lg shadow-lg gap-2 sm:gap-3 z-50">
      <h2 className="text-lg sm:text-xl font-light">{title}</h2>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
      {/* <button className='border-2 border-gray-300 rounded-full px-3 py-1 mt-2 text-xs sm:text-sm hover:bg-gray-50 transition-colors'>
        Know More
      </button> */}
    </div>
  )
}

export default Details
