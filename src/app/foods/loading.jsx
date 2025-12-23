import FoodCard from "@/component/FoodCard";
import FoodCardSkeleton from "@/component/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {[...Array(12)].map((_,index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
