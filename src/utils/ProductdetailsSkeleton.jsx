const ProductDetailsSkeleton = () => {
  return (
    <div>
      <div className="item-header flex flex-col items-center justify-center text-TextWhite">
        <div className="h-6 lg:h-10 w-2/3 bg-gray-300 animate-pulse rounded mb-2"></div>
      </div>

      <div className="bg-bgClr py-10 px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-5">
          {/* Left: Image Skeleton */}
          <div className="w-full lg:w-2/5">
            <div className="w-full h-[250px] lg:h-[360px] bg-gray-300 animate-pulse rounded-md"></div>
          </div>

          {/* Right: Details Skeleton */}
          <div className="w-full lg:w-3/5 space-y-4">
            <div className="h-6 w-20 bg-gray-300 animate-pulse rounded-full"></div>

            <div className="h-8 lg:h-10 w-2/3 bg-gray-300 animate-pulse rounded"></div>

            <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>

            <div className="h-6 w-1/3 bg-gray-300 animate-pulse rounded"></div>

            <div className="flex items-center gap-2">
              <div className="h-6 w-16 bg-gray-300 animate-pulse rounded"></div>
              <div className="flex gap-2 text-xl text-primaryRed">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-6 w-6 bg-gray-300 animate-pulse rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>

            <div className="h-20 w-full bg-gray-300 animate-pulse rounded"></div>

            <div className="flex gap-4 mt-4">
              <div className="h-10 w-28 bg-gray-300 animate-pulse rounded-md"></div>
              <div className="h-10 w-28 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
