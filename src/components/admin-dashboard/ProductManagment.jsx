/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useGetProductsQuery } from "../../redux/api/api";
import ReusableTable from "../utils/table/ReusableTable";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import AddProductForm from "./AddProductForm";

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
        Cell: ({ row }) => {
          const isActive = row.original.status;
          return (
            <span
              className={
                isActive === "active" ? "text-green-600" : "text-red-600"
              }
            >
              {isActive === "active" ? "In Stock" : "Out of Stock"}
            </span>
          );
        },
      },
      {
        accessorKey: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ row }) => {
          // const orderStatus = row.original.orderStatus;
          // const orderId = row.original._id;
          return (
            <div className="flex space-x-2">
              <button
                className="bg-green-600 px-2 py-1.5 rounded-full text-TextWhite"
                // onClick={() => handleViewOrder(orderId)}
              >
                <MdOutlineRemoveRedEye className="text-base" />
              </button>

              <button
                className="bg-blue-400 px-2 py-1.5 rounded-full text-TextWhite"
                // onClick={() => handleCancelOrder(orderId)}
                // disabled={isCancelLoading}
              >
                <FaRegEdit className="text-base" />
              </button>

              <button
                className="bg-primaryRed px-2 py-1.5 rounded-full text-TextWhite"
                // onClick={() => handleCancelOrder(orderId)}
                // disabled={isCancelLoading}
              >
                <FaRegTrashCan className="text-base" />
              </button>
            </div>
          );
        },
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
      
      <div className="flex justify-between items-center mb-4 px-4">
        <h1 className="text-2xl font-bold mb-4 px-4 pt-4">Products</h1>
        <AddProductForm />
      </div>

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
