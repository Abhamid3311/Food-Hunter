/* eslint-disable react/prop-types */
import { useMemo } from "react";
import {
  useCancelOrderByUserMutation,
  useGetOrdersByUserQuery,
} from "../../redux/api/api";
import ReusableTable from "../utils/table/ReusableTable";
import { format } from "date-fns";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "../utils/alerts";

const MyOrders = () => {
  const { data: ordersData, isLoading, error } = useGetOrdersByUserQuery();
  const [cancelOrder, { isLoading: isCancelLoading }] =
    useCancelOrderByUserMutation();
  const navigate = useNavigate();

  // Handle View Order
  const handleViewOrder = (orderId) => {
    navigate(`/dashboard/order/${orderId}`);
  };

  // Handle Cancel Order
  const handleCancelOrder = async (orderId) => {
    const isConfirmed = await confirmAlert("You want to Cancel this Order?");
    if (isConfirmed) {
      await cancelOrder(orderId).unwrap();
    }
  };

  const ordersColumns = useMemo(
    () => [
      { accessorKey: "id", header: "No.", size: 100 },
      {
        accessorKey: "orderTime",
        header: "Ordered At",
        size: 200,
        filterFn: "contains",
      },
      {
        accessorKey: "totalItems",
        header: "Items",
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
                : "badge-ghost" // ✅ default class if no match
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
          const orderStatus = row.original.orderStatus;
          const orderId = row.original._id; // Assuming _id is the actual order ID from API
          return (
            <div className="flex space-x-2">
              <button
                className="bg-green-600 px-2 py-1.5 rounded-full text-TextWhite"
                onClick={() => handleViewOrder(orderId)}
              >
                <MdOutlineRemoveRedEye className="text-base" />
              </button>

              {orderStatus === "pending" ? (
                <button
                  className="bg-primaryRed px-2 py-1.5 rounded-full text-TextWhite"
                  onClick={() => handleCancelOrder(orderId)}
                  disabled={isCancelLoading}
                >
                  {/* {isCancelLoading ? "Canceling..." : "Cancel"} */}
                  <FaRegTrashCan className="text-base" />
                </button>
              ) : (
                " "
              )}
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
        _id: item._id,
      }));
    }
  }, [ordersData]);

  return (
    <div className="w-full h-full bg-bgClr flex flex-col">
      <h1 className="text-2xl font-bold mb-4 px-4 pt-4">My Orders</h1>
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

export default MyOrders;
