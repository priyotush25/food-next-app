"use client";
import ReviewCard from "@/component/ReviewCard";
import ReviewSkeleton from "@/component/ReviewSkeleton";
import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json()) 
      .then((data) => {
        setReviews(data.reviews); 
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <ReviewSkeleton/>
  }

  return (
    <div>
      <h1>Review : {reviews.length}</h1>
     <div className="grid grid-cols-3 gap-5 mt-5">
         {reviews.map((review) => <ReviewCard key={review.id} review={review}/> )}
     </div>
    </div>
  );
};

export default Review;
