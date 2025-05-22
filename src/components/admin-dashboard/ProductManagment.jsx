/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useGetProductsQuery } from "../../redux/api/api";
import ReusableTable from "../utils/table/ReusableTable";

const ProductManagment = () => {
  const { data: productData, isLoading, error } = useGetProductsQuery();
  // console.log("API Response:", { productData, isLoading, error }); // Debug API

  const productsColumns = useMemo(
    () => [
      { accessorKey: "id", header: "No.", size: 100 },
      { accessorKey: "name", header: "Name", size: 200, filterFn: "contains" },
      {
        accessorKey: "category",
        header: "Category",
        size: 200,
        filterFn: "contains",
      },
      {
        accessorKey: "price",
        header: "Price",
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        Cell: ({ cell }) => (
          <span
            className={`badge ${
              cell.getValue() === "active" ? "badge-success" : "badge-error"
            }`}
          >
            {cell.getValue()}
          </span>
        ),
      },
    ],
    []
  );

  // Transform API data to match column structure
  const tableData = useMemo(() => {
    if (productData?.data) {
      return productData.data.map((item, index) => ({
        id: index + 1,
        name: item.name,
        category: item.category,
        price: item.price,
        status: item.isActive || "Unknown",
      }));
    }
  }, [productData]);

  return (
    <div className="w-full h-full bg-bgClr flex flex-col">
      <h1 className="text-2xl font-bold mb-4 px-4 pt-4">Products</h1>
      <div className="flex-1 w-full">
        <ReusableTable
          columns={productsColumns}
          data={tableData}
          searchPlaceholder="Search users..."
          isLoading={isLoading}
          error={error}
          // onRowClick={(row) => console.log("Row clicked:", row)}
          // enableExport={true}
        />
      </div>
    </div>
  );
};

export default ProductManagment;
