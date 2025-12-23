import React from "react";

const ReviewSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {[...Array(12)].map((_, idx) => (
        <div key={idx} className="border p-4 rounded-md shadow-md max-w-md animate-pulse">
          {/* User Info Skeleton */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>

          {/* Rating Skeleton */}
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>

          {/* Review Text Skeleton */}
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6 mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3 mb-4"></div>

          {/* Like Button Skeleton */}
          <div className="h-8 bg-gray-300 rounded w-20"></div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSkeleton;
