import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { logout } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboardLayout = () => {
  //   const { cuUser } = useContext(AuthContext);

  return (
    <div>
      <div className="w-full">
        <Header />

        <div className="flex flex-col lg:flex-row items-start gap-5  bg-TextWhite px-5 lg:px-20 my-10">
          <div className="w-80  ">
            {" "}
            <SideBar />
          </div>
          <div className="w-full bg-bgClr">
            {" "}
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboardLayout;

const SideBar = () => {
  const { cuUser, signOutUser } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    try {
      signOutUser();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-bgClr text-primaryRed flex flex-col items-center justify-center p-5 rounded-md">
        <img
          src={cuUser?.photoURL || user?.image}
          className="w-32 h-32 rounded-full border border-primaryRed"
        />
        <h1 className="text-2xl text-secondaryGray font-bold">
          {`${user?.name?.firstName} ${user?.name?.lastName} `}
        </h1>
        <p>{user?.role}</p>
      </div>

      <div className="mt-5 ">
        <ul className="menu menu-vertical ">
          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/admin-dashboard/overview"}>Overview</NavLink>
          </li>

          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/admin-dashboard/user-managment"}>Users</NavLink>
          </li>
          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/admin-dashboard/product-managment"}>
              Products
            </NavLink>
          </li>
          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/admin-dashboard/order-managment"}>Orders</NavLink>
          </li>

          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/admin-dashboard/blog-managment"}>Blogs</NavLink>
          </li>
          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/admin-dashboard/admin-profile"}>Profile</NavLink>
          </li>

          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <button onClick={handleSignOut}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
