import { useParams } from "react-router-dom";
import {
  useCancelOrderByUserMutation,
  useGetSingelOrderByIdQuery,
} from "../../redux/api/api";
import { format } from "date-fns";
import { confirmAlert } from "../utils/alerts";

const OrderDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingelOrderByIdQuery(id);

  const [cancelOrder, { isLoading: isCancelLoading }] =
    useCancelOrderByUserMutation();

  console.log(data);

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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details:</h1>
      <div className="space-y-4">
        <div>
          <p>
            <strong>Order ID:</strong> {data?.data?._id}
          </p>
          <p>
            <strong>Ordered At:</strong>{" "}
            {format(new Date(data?.data?.createdAt), "hh:mm a, MMM dd, yyyy")}
          </p>
        </div>
        <div>
          <p>
            <strong>Total Items:</strong> {data?.data?.orderedProducts.length}
          </p>
          <p>
            <strong>Total Price:</strong> ${data?.data?.totalCost}
          </p>
          <p>
            <strong>Payment Status:</strong>{" "}
            <span
              className={
                data?.data?.paymentStatus === "paid"
                  ? "badge-success"
                  : "badge-error"
              }
            >
              {data?.data?.paymentStatus}
            </span>
          </p>
          <p>
            <strong>Order Status:</strong>{" "}
            <span className={getStatusBadge(data?.data?.status)}>
              {data?.data?.status}
            </span>
          </p>

          <p>
            <strong>Shipping Address: </strong> {data?.data?.deliveryAddress}
          </p>
        </div>
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
              {data?.data?.orderedProducts.map((item, index) => (
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

        {data?.data?.status === "pending" && (
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

export default OrderDetails;
