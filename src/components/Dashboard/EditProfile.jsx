import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateMyProfileMutation } from "../../redux/api/api";
import { successAlert } from "../utils/alerts";
import { setUser } from "../../redux/features/auth/authSlice";

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth.auth);
  const [updateUser, { isLoading }] = useUpdateMyProfileMutation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user.name?.firstName || "",
      lastName: user.name?.lastName || "",
      email: user.email || "",
      designation: user.designation || "",
      role: user.role || "",
      phoneNumber: user.phoneNumber || "",
      image: user.image || "",
    },
  });

  // Handel Update My profile Form
  const onSubmit = async (data) => {
    try {
      const updatedData = {
        name: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
        designation: data.designation,
        phoneNumber: data.phoneNumber,
        image: data.image || null,
      };

      const response = await updateUser({
        userId: user._id,
        userData: updatedData,
      }).unwrap();

      // Update Redux store if needed
      dispatch(setUser(response.data || response));

      successAlert("Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-bgClr flex items-center justify-center px-4">
      <div className="bg-TextWhite rounded-2xl shadow-xl p-8 m-5 w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block">First Name</label>
            <input
              {...register("firstName", { required: "First name is required" })}
              className="input input-bordered w-full"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block">Last Name</label>
            <input
              {...register("lastName")}
              className="input input-bordered w-full"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label className="block">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+\.\S+$/,
              })}
              className="input input-bordered w-full"
              disabled
              value={user.email}
            />
          </div>

          <div>
            <label className="block">Designation</label>
            <input
              {...register("designation")}
              className="input input-bordered w-full"
            />
            {errors.designation && (
              <p className="text-red-500">{errors.designation.message}</p>
            )}
          </div>

          <div>
            <label className="block">Image Link</label>
            <input
              {...register("image")}
              className="input input-bordered w-full"
              placeholder="Optional image URL"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          <div>
            <label className="block">Role</label>
            <input
              {...register("role", { required: "Role is required" })}
              className="input input-bordered w-full"
              disabled
              value={user.role}
            />
          </div>

          <div>
            <label className="block">Phone Number</label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: /^[0-9]{10}$/,
              })}
              className="input input-bordered w-full"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow w-full"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
