import React from 'react';

const FoodCard = ({food}) => {
      
    const { id, title, foodImg, price, category } = food;

    return (
         <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {category}
        </p>

        <p className="text-base font-bold text-gray-900">
          ৳ {price}
        </p>

        <div className="flex gap-3 pt-2">
          <button
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium transition"
          >
            Add to Cart
          </button>

          <button
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
    );
};

export default FoodCard;