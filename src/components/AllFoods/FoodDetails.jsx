import { Link, useParams } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useGetProductsByIdQuery } from "../../redux/api/api";
import ProductDetailsSkeleton from "../../utils/ProductdetailsSkeleton";

const FoodDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductsByIdQuery(id);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  const {
    name,
    image,
    category,
    type,
    price,
    rating,
    ingredients,
    description,
  } = product.data;

  console.log(product);

  return (
    <div>
      <div className="item-header flex flex-col items-center justify-center text-TextWhite">
        <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">
          {name}
        </h1>
      </div>

      <div className=" bg-bgClr py-10 px-5 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-5">
          <div className="w-full lg:w-2/4">
            <img
              src={image}
              alt={"delivery"}
              className="max-w-[550px] w-full h-[250px] lg:h-[360px] rounded-md"
            />
          </div>

          <div className="w-full lg:w-2/4">
            <span className="font-bold  mb-2 lg:mb-4 bg-primaryRed text-TextWhite px-3 rounded-full">
              {type}
            </span>

            <h1 className="text-primaryRed text-2xl lg:text-4xl mb-4 mt-2">
              {name}
            </h1>

            <p className="text-secondaryGray text-sm lg:text-base ">
              {" "}
              Category: {category}
            </p>
            <p className="text-secondaryGray text-sm lg:text-base my-2">
              {" "}
              Price:{" "}
              <span className="text-primaryRed font-bold text-xl">
                {price} $
              </span>
            </p>

            <div className="flex items-center gap-2">
              Ratings:
              <div className="text-primaryRed font-bold text-xl flex items-center gap-2">
                <RatingStars rating={rating} />
              </div>
            </div>

            <p className="text-secondaryGray text-sm lg:text-base my-2">
              Ingredients: {ingredients}
            </p>

            <p className="text-secondaryGray text-sm lg:text-base">
              {description}
            </p>

            <div className="flex items-center justify-start gap-8 my-4">
              <a href="#">
                <button className="border border-primaryRed px-5 lg:px-10 py-2 lg:py-3  rounded-md font-bold text-primaryRed text-center">
                  Add To Cart
                </button>
              </a>

              <Link to="/checkout">
                <button className="border border-primaryRed bg-primaryRed px-5 lg:px-10 py-2 lg:py-3  rounded-md font-bold text-TextWhite text-center">
                  Order Now{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

// eslint-disable-next-line react/prop-types
export const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}

      {hasHalfStar && <FaStarHalfAlt key="half" />}

      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
    </>
  );
};
