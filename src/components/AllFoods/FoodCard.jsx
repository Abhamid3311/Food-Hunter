/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { RatingStars } from "./FoodDetails";
import { useAddToCartMutation } from "../../redux/api/api";
import { errorAlert, successAlert } from "../utils/alerts";
import { useSelector } from "react-redux";

export const ProductCard = ({ food }) => {
  const [addToCart, { data, isLoading, isSuccess, isError }] =
    useAddToCartMutation();
  const { user } = useSelector((state) => state.auth.auth);

  const { _id, name, category, price, image, rating } = food;

  const handleAddToCartButton = (id) => {
    if (!user) {
      return errorAlert("Please Login First !");
    }
    addToCart({ productId: id, quantity: 1 });
    successAlert("Added to cart!");
  };

  // console.log(data, isLoading, isSuccess, isError);

  return (
    <>
      <div className="w-full h-full shadow-xl rounded-md object-cover max-w-full sm:max-w-[300px]">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={name}
          className="w-full h-[200px] sm:h-[250px] rounded-t-md object-cover"
        />
        <div className="card-body p-2 sm:p-4 text-start text-secondaryGray">
          <h1 className="text-sm sm:text-base lg:text-xl font-bold">{name}</h1>
          <p className="text-xs sm:text-sm">Category: {category}</p>
          <p className="text-primaryRed font-bold text-xs sm:text-sm">
            Price: {price} $
          </p>
          <p className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            Ratings:{" "}
            <span className="text-primaryRed font-bold flex items-center gap-1 sm:gap-2">
              <RatingStars rating={rating} />
            </span>
          </p>
          <div className="card-actions justify-end items-center flex flex-wrap gap-1 sm:gap-2">
            <Link to={`/all-foods/${_id}`}>
              <button className="badge badge-outline text-xs sm:text-sm">
                View Details
              </button>
            </Link>

            <button
              onClick={() => handleAddToCartButton(_id)}
              className="badge bg-primaryRed text-TextWhite p-1 sm:p-2 text-xs sm:text-sm"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
