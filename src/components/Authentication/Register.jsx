import { Link, useNavigate } from "react-router-dom";
import { use, useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useCreateUserOnDBMutation } from "../../redux/api/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [createNewUser, { data, isLoading, isSuccess, isError }] =
    useCreateUserOnDBMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(data, isLoading, isError);

  // Handle User register  Form
  const onSubmit = (data, e) => {
    e.preventDefault();
    // console.log(data);
    const { email, password, firstName, lastName, designation, phoneNumber } =
      data;

    const user = {
      name: { firstName, lastName },
      email,
      designation,
      phoneNumber,
      isActive: "active",
      isDeleted: false,
    };

    // Firebase Authentication
    createUser(email, password)
      .then((res) => {
        createNewUser({ user });
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //* Handle goggle SignIn Button
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate("/dashboard/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data?.data))
      navigate("/dashboard/profile");
    }
  }, [data, isSuccess])

  return (
    <div>
      <div className="about-header flex flex-col items-center justify-center text-TextWhite">
        <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">
          My Account || Register
        </h1>
      </div>

      <div className="px-5 lg:px-20 bg-bgClr text-primaryRed  p-10 py-20">
        <div className="flex items-center justify-center ">
          <div className=" bg-bgClr shadow-2xl w-full max-w-[600px] p-5">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-3xl font-bold text-center">Register</h1>

              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && <span>This field is required</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && <span>This field is required</span>}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Designation</span>
                </label>
                <input
                  type="text"
                  placeholder="Designation"
                  className="input input-bordered"
                  {...register("designation", { required: true })}
                />
                {errors.designation && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="phoneNumber"
                  className="input input-bordered"
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />

                <label className="label">
                  <Link
                    to={"/login"}
                    className="label-text-alt link link-hover text-primaryRed"
                  >
                    Already Have an account? Login Now
                  </Link>
                </label>
              </div>

              <div className="form-control mt-4">
                <button
                  type="submit"
                  className="bg-primaryRed px-5 lg:px-8 py-1 lg:py-2 w-full rounded-md font-bold text-TextWhite text-center"
                >
                  Register
                </button>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="bg-TextWhite px-5 lg:px-8 py-1 lg:py-2 w-full rounded-md font-bold text-primaryRed text-center shadow-lg border border-primaryRed"
              >
                Google Signin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
