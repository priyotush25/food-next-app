const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-200" />

      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-200 rounded" />

        {/* Category */}
        <div className="h-4 w-1/3 bg-gray-200 rounded" />

        {/* Price */}
        <div className="h-5 w-1/4 bg-gray-200 rounded" />

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <div className="h-9 flex-1 bg-gray-200 rounded-lg" />
          <div className="h-9 flex-1 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
