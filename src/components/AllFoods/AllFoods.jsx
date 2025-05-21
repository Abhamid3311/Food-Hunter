import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/api";
import { ProductCard } from "./FoodCard";

const AllFoods = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const category = searchParams.get("category");
  const type = searchParams.get("type");
  const query = category ? { category } : type ? { type } : {};

  const { data: products, isLoading, error } = useGetProductsQuery(query);

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  // Memoize productData to prevent unnecessary re-renders
  const productData = useMemo(
    () => (products?.data ? [...products.data] : []),
    [products?.data]
  );

  // Get unique categories for filter dropdown
  const categories = useMemo(
    () =>
      productData ? [...new Set(productData.map((item) => item.category))] : [],
    [productData]
  );

  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    return (productData || []).filter((food) => {
      const matchesSearch = food.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter
        ? food.category === categoryFilter
        : true;

      const matchesPrice = priceFilter
        ? (() => {
            const [min, max] = priceFilter.split("-").map(Number);
            return max
              ? food.price >= min && food.price <= max
              : food.price >= min;
          })()
        : true;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [productData, searchQuery, categoryFilter, priceFilter]);

  // Handle Error
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-bgClr px-2">
        <div className="alert alert-error shadow-lg p-4">
          <span>Error: {error.message || "Failed to load products"}</span>
        </div>
      </div>
    );
  }

  // Handle Loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-bgClr px-2">
        <span className="loading loading-spinner text-primaryRed"></span>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen h-auto bg-bgClr flex flex-col">
      <div className="flex flex-1">
        <main className="flex-1 flex flex-col pl-0 sm:pl-2">
          <div className="item-header flex flex-col items-center justify-center text-TextWhite py-4 px-2 sm:px-5">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-center">
              Our All Food Items
            </h1>
            <p className="text-sm sm:text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="px-2 sm:px-5 lg:px-20 text-primaryRed mt-5">
            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4 flex-wrap ">
              <input
                type="text"
                placeholder="Search products..."
                className="input input-bordered w-full max-w-[180px] sm:max-w-[500px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="select select-bordered w-full max-w-[180px] sm:max-w-[200px]"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full max-w-[180px] sm:max-w-[200px]"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="0-10">$0 - $10</option>
                <option value="10-20">$10 - $20</option>
                <option value="20-">$20 and above</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-3 sm:gap-5 py-6 sm:py-10">
                {filteredProducts.map((food) => (
                  <ProductCard key={food._id} food={food} />
                ))}
              </div>
            ) : (
              <div className="alert alert-info shadow-lg p-2 sm:p-4">
                <span className="text-sm sm:text-base">
                  No products found matching your criteria.
                </span>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllFoods;
