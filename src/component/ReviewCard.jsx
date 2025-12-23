import React, { useState } from 'react';

const ReviewCard = ({ review }) => {
  // Like state
  const [likes, setLikes] = useState(review.likes.length);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="border p-4 rounded-md shadow-md mb-4 max-w-md">
      {/* User Info */}
      <div className="flex items-center mb-2">
        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h2 className="font-bold">{review.user}</h2>
          <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Rating */}
      <p className="mb-2">Rating: {review.rating} ⭐</p>

      {/* Review Text */}
      <p className="mb-2">{review.review}</p>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Like ({likes})
      </button>
    </div>
  );
};

export default ReviewCard;
