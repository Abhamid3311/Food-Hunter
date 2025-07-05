import { useParams } from "react-router-dom";
import {
  useCancelOrderByUserMutation,
  useGetSingelOrderByAdminIdQuery,
} from "../../redux/api/api";
import { format } from "date-fns";
import { confirmAlert } from "../utils/alerts";

const OrderDetailsAdmin = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingelOrderByAdminIdQuery(id);

  const [cancelOrder, { isLoading: isCancelLoading }] =
    useCancelOrderByUserMutation();

  // Handel Cancel order
  const handleCancelOrder = async (orderId) => {
    const isConfirmed = await confirmAlert("You want to Cancel this Order?");
    if (isConfirmed) {
      await cancelOrder(orderId).unwrap();
    }
  };

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
  console.log(orderData, userData);

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
                  ? "badge-success"
                  : "badge-error"
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

        {/* Actions */}
        <div className="flex items-center justify-start gap-5">
          <button
            className="btn btn-success mt-4"
            // onClick={handleCancelOrder}
            // disabled={isCancelLoading}
          >
            Update Status
          </button>

          {orderData?.status === "pending" && (
            <button
              className="btn btn-error mt-4"
              onClick={handleCancelOrder}
              disabled={isCancelLoading}
            >
              {isCancelLoading ? "Canceling..." : "Cancel Order"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const getStatusBadge = (status) => {
  switch (status) {
    case "pending":
      return "badge-warning";
    case "confirmed":
      return "badge-info";
    case "delivered":
      return "badge-success";
    case "cancelled":
      return "badge-error";
    default:
      return "badge-ghost";
  }
};

export default OrderDetailsAdmin;
