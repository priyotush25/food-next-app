import FoodCard from "@/component/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods || [];
};

const Foods = async () => {
  const foods = await getFoods();

  return (
    <div>
      <h1 className="text-4xl font-bold mt-5">
        Total <span className="text-amber-600">{foods.length}</span> Food Found
      </h1>

      <div className="grid grid-cols-3 my-10 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
