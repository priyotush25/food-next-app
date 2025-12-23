// app/foods/[id]/page.jsx
import Image from "next/image";
import Link from "next/link";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details;
};

const FoodDetailsPage = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="text-center mt-20 px-4">
        <h2 className="text-2xl font-semibold text-gray-700">Food Not Found</h2>
        <Link
          href="/"
          className="inline-block mt-4 text-blue-500 hover:underline"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <Image
            src={food.foodImg || "/placeholder.jpg"}
            alt={food.title || "Food Image"}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Details Card */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-900">{food.title}</h1>

            <div className="flex flex-wrap gap-4 text-gray-600 text-lg">
              <p>
                <span className="font-medium text-gray-800">Category:</span>{" "}
                {food.category}
              </p>
              <p>
                <span className="font-medium text-gray-800">Area:</span> {food.area}
              </p>
            </div>

            <p className="text-3xl font-bold text-green-600">৳ {food.price}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg font-semibold transition transform hover:scale-105">
              Add to Cart
            </button>

            <a
              href={food.video || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-lg font-semibold text-center transition transform hover:scale-105"
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
