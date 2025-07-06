/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useSelector((state) => state.auth.auth);
  return (
    <div>
      <div className="min-h-screen bg-bgClr flex items-center justify-center px-4">
        <div className="bg-TextWhite rounded-2xl shadow-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            My Profile
          </h2>

          <div className="space-y-4">
            <ProfileField
              label="Name"
              value={`${user.name.firstName} ${user.name.lastName}`}
            />
            <ProfileField label="Email" value={user.email} />
            <ProfileField label="Designation" value={user.designation} />
            <ProfileField label="Role" value={user.role} />
            <ProfileField label="Phone Number" value={user.phoneNumber} />
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/dashboard/profile/edit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="font-semibold text-gray-600">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default MyProfile;
