import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth.auth);

  console.log(user);

  // Handle Login Form
  const handleLoginForm = (e) => {
    e.preventDefault();
    signInUser(email, pass)
      .then((res) => {
        if (res.user) {
          dispatch(login(res.user.email));
          // navigate("/dashboard/profile");
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handle ggogle SignIn Button
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
    if (user) {
      if (user.role === "admin") {
        navigate("/admin-dashboard/overview");
      } else {
        navigate("/dashboard/profile");
      }
    }
  }, [user, navigate]);

  return (
    <div>
      <div className="item-header flex flex-col items-center justify-center text-TextWhite">
        <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">
          My Account || Login
        </h1>
        <p className="w-2/3 text-center">Login To Your Account !!</p>
      </div>

      <div className="px-5 lg:px-20 bg-bgClr text-primaryRed  p-10 py-20">
        <div className="flex items-center justify-center ">
          <div className=" bg-bgClr shadow-2xl w-full lg:w-[550px] p-5">
            <form className="card-body" onSubmit={handleLoginForm}>
              <h1 className="text-3xl font-bold text-center">Login</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onBlur={(e) => setPass(e.target.value)}
                />

                <label className="label">
                  <Link
                    to={"/register"}
                    className="label-text-alt link link-hover text-primaryRed"
                  >
                    Forgot Passowrd?
                  </Link>
                </label>
              </div>

              <div className="form-control mt-4">
                <button
                  type="submit"
                  className="bg-primaryRed px-5 lg:px-8 py-1 lg:py-2 w-full rounded-md font-bold text-TextWhite text-center"
                >
                  Login
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

export default Login;

/* // Handle View Order
  const handleViewOrder = (orderId) => {
    navigate(`/order/${orderId}`); // Navigate to order details page (adjust path as needed)
  };

  // Handle Cancel Order
  const handleCancelOrder = async (orderId) => {
    try {
      await cancelOrder(orderId).unwrap();
      toast.success("Order canceled successfully!");
    } catch (err) {
      toast.error("Failed to cancel order: " + err.message);
    }
  }; 
  
  
  
   {
        accessorKey: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ row }) => {
          const orderStatus = row.original.orderStatus;
          const orderId = row.original._id; // Assuming _id is the actual order ID from API
          return orderStatus === "pending" ? (
            <div className="flex space-x-2">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => handleViewOrder(orderId)}
              >
                View
              </button>
              <button
                className="btn btn-sm btn-error"
                onClick={() => handleCancelOrder(orderId)}
                disabled={isCancelLoading}
              >
                {isCancelLoading ? "Canceling..." : "Cancel"}
              </button>
            </div>
          ) : (
            <span>-</span> // Display dash if not pending
          );
        },
      },
  
  
  
  */
