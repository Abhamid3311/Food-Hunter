import { useMemo } from "react";
import { useGetOrdersByUserQuery } from "../../redux/api/api";
import ReusableTable from "../utils/table/ReusableTable";
import { format } from "date-fns";

const MyOrders = () => {
  const { data: ordersData, isLoading, error } = useGetOrdersByUserQuery();

  console.log("API Response:", { ordersData, isLoading, error }); // Debug API

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
      // "pending" | "confirmed" | "delivered" | "cancelled"
      /*  {
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
      }, */
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
