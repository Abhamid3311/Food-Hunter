/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useGetAllOrdersByAdminQuery } from "../../redux/api/api";
import ReusableTable from "../utils/table/ReusableTable";
import { format } from "date-fns";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OrderManagement = () => {
  const { data: ordersData, isLoading, error } = useGetAllOrdersByAdminQuery();
  const navigate = useNavigate();

  // console.log("API Response:", { ordersData, isLoading, error }); // Debug API

  // Handle View Order
  const handleViewOrder = (orderId) => {
    navigate(`/admin-dashboard/order/${orderId}`);
  };

  const ordersColumns = useMemo(
    () => [
      { accessorKey: "id", header: "No.", size: 100 },
      { accessorKey: "name", header: "Name", size: 100 },
      {
        accessorKey: "orderTime",
        header: "Ordered At",
        size: 200,
        filterFn: "contains",
      },

      {
        accessorKey: "totalPrice",
        header: "Price",
      },
      {
        accessorKey: "paymentStatus",
        header: "Payment",
        Cell: ({ cell }) => (
          <span
            className={`badge ${
              cell.getValue() === "paid" ? "badge-success" : "badge-error"
            }`}
          >
            {cell.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "orderStatus",
        header: "Status",
        Cell: ({ cell }) => (
          <span
            className={`badge ${
              cell.getValue() === "pending"
                ? "badge-warning"
                : cell.getValue() === "confirmed"
                ? "badge-info"
                : cell.getValue() === "delivered"
                ? "badge-success"
                : cell.getValue() === "cancelled"
                ? "badge-error"
                : "badge-ghost"
            }`}
          >
            {cell.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ row }) => {
          const orderId = row.original._id; // Assuming _id is the actual order ID from API
          return (
            <div className="flex space-x-2">
              <button
                className="btn btn-sm btn-success text-TextWhite"
                onClick={() => handleViewOrder(orderId)}
              >
                <MdOutlineRemoveRedEye />
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
    if (ordersData?.data) {
      return ordersData.data.map((item, index) => ({
        id: index + 1,
        orderTime: format(new Date(item.createdAt), "hh:mm a, MMM dd, yyyy "),
        totalItems: item.orderedProducts.length,
        totalPrice: item.totalCost,
        orderStatus: item.status || "pending",
        paymentStatus: item.paymentStatus,
        number: item.number,
        name: `${item.userId.name.firstName} ${item.userId.name.lastName}`,
        _id: item._id,
      }));
    }
  }, [ordersData]);

  return (
    <div className="w-full h-full bg-bgClr flex flex-col">
      <h1 className="text-2xl font-bold mb-4 px-4 pt-4">Order Management</h1>
      <div className="flex-1 w-full">
        <ReusableTable
          columns={ordersColumns}
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

export default OrderManagement;
