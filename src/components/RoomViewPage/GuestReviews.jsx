import React from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const GuestReviews = () => {
  const reviews = [
    {
      name: 'Sophia Bennett',
      date: 'May 15, 2024',
      rating: 5,
      text: '"The Deluxe Room at The Grand Retreat exceeded all my expectations. The room was spacious, beautifully decorated, and offered stunning views. The staff was incredibly attentive, and the amenities were top-notch. I highly recommend this room for a luxurious and comfortable stay."',
      likes: 12,
      dislikes: 2,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDshGWrdcnj2O5A4345szdkWChWJtbi2CRWrfK6grlxlTyDCqMYKOVsHwpvfPwRhXStrQLhUh9Uu908YRV8TfQnusV5J4BIflDwBdzsSvOvfluTOyAoNb8q85pkXJLkQgQI7OwzsGVa6FN0MA5p2lYpIL835AE2HHx0sl6ty8KGtw0V9_6TaBNHEUJx_e93J5CQzh3D7_k86mk0z1ykNauLNtKcWQByZ_DaOCQXJlY4JwhDGdljOGA6p0sdFUHzEellybcGVRiQ--l',
    },
    {
      name: 'Ethan Carter',
      date: 'April 22, 2024',
      rating: 4,
      text: '"I had a pleasant stay in the Deluxe Room. The room was well-appointed and clean, with a comfortable bed and modern facilities. The only minor issue was the noise from the nearby street, but overall, it was a great experience and I would consider staying here again."',
      likes: 8,
      dislikes: 1,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKwpueXnyW6qLusj7Soy6gZvdUni26M71rxrMA2XRtDm-CsZj5qaiyomupyoLl5Ah_1PkJOrgpohDZ5kMnUfm4hC4l9yGoylwEHcdmEl1lW2itaU2_4zM45exkjbDi5VakFa4IKxltXuzbMuzD8oHd3mUTOu6-eMAb3CvuxMhFj7sRKh_1LD8WPKtrGUVN2Uh2Isc7dCYv1WvMeUTPy3zGyi2GwswXFN97oUOmFrMPZWGPAPMWHcLI5bqW-kjmwqEE_er0WDqYTVW9',
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < rating ? 'text-[#111418]' : 'text-[#bac4cf]'} />
    ));
  };

  return (
    <>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Guest Reviews
      </h2>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: `url(${review.avatar})` }}
              ></div>
              <div className="flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal">{review.name}</p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">{review.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {renderStars(review.rating)}
            </div>
            <p className="text-[#111418] text-base font-normal leading-normal">{review.text}</p>
            <div className="flex gap-9 text-[#60758a]">
              <button className="flex items-center gap-2">
                <FaThumbsUp />
                <p>{review.likes}</p>
              </button>
              <button className="flex items-center gap-2">
                <FaThumbsDown />
                <p>{review.dislikes}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GuestReviews;
