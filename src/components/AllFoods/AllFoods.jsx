import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/api";
import { RatingStars } from "./FoodDetails";

const AllFoods = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="item-header flex flex-col items-center justify-center text-TextWhite">
        <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">
          Our All Food Items
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          mod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div className="px-5 lg:px-20 bg-bgClr text-primaryRed">
        {products?.data.length !== 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-5 py-10">
            {products?.data.map((food) => (
              <div
                key={food?._id}
                className=" w-full h-full shadow-xl rounded-md object-cover max-w-[320px]"
              >
                <img
                  src={food.image || "https://via.placeholder.com/300"}
                  alt={food.name}
                  className="w-full h-[250px] rounded-t-md object-cover"
                />

                <div className="card-body p-4 text-start text-secondaryGray">
                  <h1 className="text-base lg:text-xl font-bold ">
                    {" "}
                    {food?.name}
                  </h1>
                  <p>Category: {food?.category}</p>
                  <p className="text-primaryRed font-bold">
                    Price: {food?.price} $
                  </p>
                  <p className="flex items-center gap-2">
                    Ratings:{" "}
                    <span className="text-primaryRed font-bold flex items-center gap-2">
                      <RatingStars rating={food?.rating} />
                    </span>
                  </p>

                  <div className="card-actions justify-end items-center">
                    <Link to={`/all-foods/${food?._id}`}>
                      <button className="badge badge-outline">
                        View Details
                      </button>
                    </Link>

                    <button className="badge bg-primaryRed text-TextWhite p-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "Loading...."
        )}
      </div>
    </div>
  );
};

export default AllFoods;
