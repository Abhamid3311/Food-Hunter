/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import {
  useGetAllOrdersByAdminQuery,
  useGetAllUsersQuery,
  useGetProductsQuery,
} from "../../redux/api/api";

const Overview = () => {
  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useGetAllUsersQuery();
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useGetProductsQuery();
  const {
    data: orders,
    isLoading: ordersLoading,
    error: ordersError,
  } = useGetAllOrdersByAdminQuery();

  /*  const {
    data: blogs,
    isLoading: blogsLoading,
    error: blogsError,
  } = useGetBlogsQuery(); */

  if (usersError || productsError || ordersError) {
    return (
      <div className="text-red-500 p-6">
        Error loading data. Please try again.
      </div>
    );
  }
  return (
    <div className="min-h-screen text-secondaryGray">
      <div className="min-h-screen p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold  mb-6 sm:mb-8">
          Overview
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card
            title="Total Customers"
            value={usersLoading ? null : users?.data?.length}
            icon="👤"
          />
          <Card
            title="Menu Items"
            value={productsLoading ? null : products?.data?.length}
            icon="🍽️"
          />
          <Card
            title="Total Orders"
            value={ordersLoading ? null : orders?.data?.length}
            icon="📦"
          />
          <Card
            title="Blog Posts"
            // value={blogsLoading ? null : blogs?.length}
            value={0}
            icon="📝"
          />
        </div>

        {/* Table and Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <OrdersTable orders={orders}  />
          <PieChart products={products} orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default Overview;

// Card Component
const Card = ({ title, value, icon }) => (
  <div className="bg-TextWhite p-6  rounded-lg shadow-md flex items-center space-x-4 transform hover:scale-105 transition-transform">
    <div className="text-3xl ">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-primaryRed">{title}</h3>
      <p className="text-2xl font-bold ">{value ?? "Loading..."}</p>
    </div>
  </div>
);

// Orders Table Component
const OrdersTable = ({ orders}) => {
  // console.log(orders,);
  return (
    <div className="bg-TextWhite p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Recent Orders
      </h3>
      {orders?.data?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...(orders?.data || [])]
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by createdAt, newest first
                .slice(0, 5) // Take the most recent 5
                .map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order._id.slice(0, 10)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.userId?.name?.firstName || "Unknown"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.orderedProducts?.length || 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "pending"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No orders available.</p>
      )}
    </div>
  );
};

// Pie Chart Component
const PieChart = ({ products, orders }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && products?.length && orders?.length) {
      const categoryCounts = products.reduce((acc, product) => {
        const orderCount = orders.filter(
          (o) => o.productId === product.id
        ).length;
        acc[product.category] = (acc[product.category] || 0) + orderCount;
        return acc;
      }, {});
      const labels = Object.keys(categoryCounts);
      const data = Object.values(categoryCounts);

      const ctx = canvasRef.current.getContext("2d");
      if (chartRef.current) chartRef.current.destroy();
      chartRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels,
          datasets: [
            {
              data,
              backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
              borderColor: ["#ffffff"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: { color: "#1F2937", font: { size: 14 } },
            },
            tooltip: {
              backgroundColor: "#1F2937",
              titleFont: { size: 14 },
              bodyFont: { size: 12 },
            },
          },
        },
      });
    }
    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, [products, orders]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Orders by Category
      </h3>
      {products?.length && orders?.length ? (
        <canvas ref={canvasRef} className="max-w-full"></canvas>
      ) : (
        <p className="text-gray-500">No data available for chart.</p>
      )}
    </div>
  );
};
