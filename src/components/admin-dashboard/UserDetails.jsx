import { useGetUserByIdByAdminQuery } from "../../redux/api/api"; // Adjust path as needed
import { FaUserShield, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { errorAlert } from "../utils/alerts";

const UserDetails = () => {
  const { id } = useParams();
  const { data: user, isLoading, error } = useGetUserByIdByAdminQuery(id);

  console.log(id, user);

  const handleMakeAdmin = (id) => {
    console.log(`Make admin for user ID: ${id}`);
    errorAlert("Make Admin Button is deactivated by The Owner!");
  };

  const handleDeleteUser = (id) => {
    console.log(`Delete user ID: ${id}`);
    errorAlert("Delete button is deactivated by The Owner!");
  };

  if (isLoading)
    return <div className="p-4 text-secondaryGray">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error loading users.</div>;
  const userData = user.data.user;
  const orderData = user.data.orders;

  return (
    <div className="p-4 min-h-screen bg-bgClr">
      <h1 className="text-2xl font-bold mb-6 text-secondaryGray">
        User Details
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-2">
          <p className="text-secondaryGray">
            <strong>User ID:</strong> {userData._id}
          </p>
          <p className="text-secondaryGray">
            <strong>Name:</strong>{" "}
            {`${userData.name?.firstName} ${userData.name?.lastName}`}
          </p>
          <p className="text-secondaryGray">
            <strong>Designation:</strong> {userData?.designation}
          </p>
          <p className="text-secondaryGray">
            <strong>Phone Number:</strong> {userData?.phoneNumber}
          </p>
          <p className="text-secondaryGray">
            <strong>Email:</strong> {userData.email || "N/A"}
          </p>
          <p className="text-secondaryGray">
            <strong>Role:</strong> {userData.role || "user"}
          </p>
          <p className="text-secondaryGray">
            <strong>Created:</strong>{" "}
            {userData.createdAt
              ? new Date(userData.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
          <p className="text-secondaryGray">
            <strong>Status:</strong> {userData.isActive || "Active"}
          </p>
          <p className="text-secondaryGray">
            <strong>Total Order:</strong> {orderData.length || "0"}
          </p>
        </div>

        <div className="flex items-center justify-start gap-5 my-3">
          <button
            className="btn btn-sm btn-primary  flex items-center gap-2"
            onClick={() => handleMakeAdmin(userData._id)}
            disabled={userData.role === "admin"}
          >
            <FaUserShield />{" "}
            {userData.role === "admin" ? "Admin" : "Make Admin"}
          </button>
          <button
            className="btn btn-sm btn-error flex items-center gap-2"
            onClick={() => handleDeleteUser(userData._id)}
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>

      {/* Section 2: User Orders */}
      <div>
        <h2 className="text-xl font-bold text-secondaryGray my-4">
          User Orders
        </h2>
        {orderData && orderData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table w-full bg-gray-50 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-secondaryGray">
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Products</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-200">
                    <td className="px-4 py-2">{order._id.slice(0, 10)}</td>
                    <td className="px-4 py-2">${order.totalCost || "N/A"}</td>
                    <td className="px-4 py-2">{order.status || "Pending"}</td>
                    <td className="px-4 py-2">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      <ul className="list-disc pl-5 space-y-1">
                        {order.orderedProducts.length}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-secondaryGray">No orders available</p>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
