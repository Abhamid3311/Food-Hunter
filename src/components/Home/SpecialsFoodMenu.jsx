/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";

const SpecialsMenu = () => {
  const [activeTab, setActiveTab] = useState("Lunch");
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({ category: activeTab });

  const tabs = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Beverage",
    "Starter",
    "Desert",
  ];

  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-lg lg:text-xl font-bold">SPECIALS</h3>
        <h1 className="text-2xl lg:text-4xl font-bold text-secondaryGray mb-2">
          Check out our menu
        </h1>
        <p className="text-secondaryGray">
          Demoralized by the charms of pleasure of the moment so blinded except
          to some advantage.
        </p>
      </div>

      <div className="my-10 w-full">
        <div className="flex flex-row flex-wrap justify-start gap-2 mb-4 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-2 lg:px-4 py-1 lg:py-1.5 rounded-lg text-sm lg:text-lg ${
                activeTab === tab
                  ? "bg-primaryRed text-TextWhite"
                  : "bg-bgClr text-primaryRed"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`p-3 lg:p-6 border border-primaryRed rounded-lg bg-bgClr ${
                activeTab === tab ? "block" : "hidden"
              }`}
            >
              {isLoading && (
                <div className="flex justify-center">
                  <span className="loading loading-spinner text-primaryRed"></span>
                </div>
              )}
              {error && (
                <div className="alert alert-error shadow-lg p-4">
                  <span>
                    Error: {error.message || "Failed to load products"}
                  </span>
                </div>
              )}

              {!isLoading && !error && products?.data?.length > 0 ? (
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Static Image */}
                  <div className="flex-shrink-0 w-full lg:w-2/5">
                    <img
                      src={
                        tab === "Lunch"
                          ? "https://i.ibb.co/qMpNSxYN/suchandra-varma-dugs7-v-Nbh-Q-unsplash.jpg"
                          : tab === "Dinner"
                          ? "https://i.ibb.co/8ngVJN2s/odiseo-castrejon-1-SPu0-KT-Ejg-unsplash.jpg "
                          : tab === "Desert"
                          ? "https://i.ibb.co/DD3RYMc7/slnc-FRChhr-MEbn-A-unsplash.jpg"
                          : tab === "Beverage"
                          ? "https://i.ibb.co/zCm5kwV/helen-van-r-JWJLd-Og-Lz-A-unsplash.jpg"
                          : tab === "Breakfast"
                          ? "https://i.ibb.co/Y434fhpf/joao-marcelo-martins-p-DC7v-Qr-W-EM-unsplash.jpg"
                          : tab === "Starter"
                          ? "https://i.ibb.co/8ngVJN2s/odiseo-castrejon-1-SPu0-KT-Ejg-unsplash.jpg"
                          : "https://i.ibb.co/qMpNSxYN/suchandra-varma-dugs7-v-Nbh-Q-unsplash.jpg"
                      }
                      alt={`${tab} Illustration`}
                      className="w-full h-[300px] lg:h-[550px] object-cover rounded-lg shadow"
                    />
                  </div>

                  {/* Right Product Grid */}
                  <div className="w-full lg:w-3/5 flex flex-col  gap-3">
                    {products.data.slice(0, 4).map((product) => (
                      <SpecialProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </div>
              ) : (
                !isLoading &&
                !error && (
                  <div className="alert alert-info shadow-lg p-4">
                    <span>No products found for {activeTab}.</span>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialsMenu;

const SpecialProductCard = ({ product }) => {
  const { _id, image, name, ingredients, price, rating } = product;

  return (
    <Link to={`all-foods/${_id}`}>
      <div className=" flex items-start gap-3 bg-bgClr shadow hover:shadow-lg h-32 w-full">
        <img
          src={image || "https://via.placeholder.com/80"}
          alt={name}
          className="w-40 h-32 object-cover rounded"
        />

        <div className="flex flex-col  justify-between">
          <h3 className="text-base lg:text-lg font-bold">{name}</h3>

          <p>Price: ${price}</p>
          <p>Rating: {rating}/5</p>
          <p className="text-sm text-secondaryGray mt-2">
            {" "}
            Ingredients: {ingredients || "N/A"}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};
