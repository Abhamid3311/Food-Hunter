import { useParams } from "react-router-dom";
import {
  useGetSingelOrderByAdminIdQuery,
  useUpdateStatusByAdminMutation,
} from "../../redux/api/api";
import { format } from "date-fns";
import { successAlert } from "../utils/alerts";

const OrderDetailsAdmin = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } =
    useGetSingelOrderByAdminIdQuery(id);

  const [updateOrderStatus, { isLoading: isUpdateLoading }] =
    useUpdateStatusByAdminMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Order not found</p>;
  }

  const orderData = data?.data?.order;
  const userData = data?.data?.user;
  //   console.log(orderData, userData);

  // Handle Update Status
  const handleUpdateStatus = async (e) => {
    const status = e.target.value;
    try {
      await updateOrderStatus({ orderId: orderData?._id, status }).unwrap();
      await refetch(); 
      successAlert("Order status updated successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details:</h1>
      <div className="space-y-4">
        {/* User Details */}
        <div>
          <p>
            <strong>User name:</strong>{" "}
            {`${userData?.name?.firstName} ${userData?.name?.lastName}`}
          </p>
          <p>
            <strong>Email:</strong> {userData?.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {userData?.phoneNumber}
          </p>
          <p>
            <strong>Order ID:</strong> {orderData?.transactionId}
          </p>

          <p>
            <strong>Ordered At:</strong>{" "}
            {format(new Date(orderData?.createdAt), "hh:mm a, MMM dd, yyyy")}
          </p>
        </div>

        {/* Order Details */}
        <div>
          <p>
            <strong>Total Items:</strong> {orderData?.orderedProducts.length}
          </p>
          <p>
            <strong>Total Price:</strong> ${orderData?.totalCost}
          </p>
          <p>
            <strong>Payment Method:</strong> {orderData?.paymentMethod}
          </p>
          <p>
            <strong>Payment Status:</strong>{" "}
            <span
              className={
                orderData?.paymentStatus === "paid"
                  ? "bg-green-400 rounded-md px-2 "
                  : "bg-red-400 rounded-md px-2 "
              }
            >
              {orderData?.paymentStatus}
            </span>
          </p>
          <p>
            <strong>Order Status:</strong>{" "}
            <span className={getStatusBadge(orderData?.status)}>
              {orderData?.status}
            </span>
          </p>

          <p>
            <strong>Shipping Address: </strong> {orderData?.deliveryAddress}
          </p>
          <p>
            <strong>Delivery Taker Number: </strong> {orderData?.number}
          </p>
          <p>
            <strong>Delivery Charge: </strong> {orderData?.deliveryCharge}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-start gap-5">
          <select
            className="select select-bordered w-full max-w-xs mt-4"
            value={orderData?.status || "pending"}
            onChange={handleUpdateStatus}
            disabled={isUpdateLoading}
          >
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
            <option value="confirmed">Confirmed</option>
            <option value="delivered">Delivered</option>
          </select>
          {/* <button
            className="btn btn-success mt-4"
            onClick={() =>
              handleUpdateStatus({ target: { value: orderData?.status } })
            }
            disabled={isUpdateLoading}
          >
            Update Status
          </button> */}
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Order Items</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Product</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.orderedProducts.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item?.productId?.name}</td>
                  <td className="border p-2">{item?.quantity}</td>
                  <td className="border p-2">${item?.productId?.price}</td>
                  <td className="border p-2">
                    ${item?.quantity * item?.productId?.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const getStatusBadge = (status) => {
  switch (status) {
    case "pending":
      return "bg-yellow-400 rounded-md px-2 ";
    case "confirmed":
      return "bg-blue-400 rounded-md px-2 ";
    case "delivered":
      return "bg-green-400 rounded-md px-2 ";
    case "cancelled":
      return "bg-red-400 rounded-md px-2 ";
    default:
      return "badge-ghost";
  }
};

export default OrderDetailsAdmin;
