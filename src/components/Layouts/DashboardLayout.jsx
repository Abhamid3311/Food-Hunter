import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  // const { cuUser } = useContext(AuthContext);

  return (
    <div>
      <div className="w-full">
        <Header />

        <div className="flex flex-col lg:flex-row items-start gap-5  bg-TextWhite px-5 lg:px-20 my-10">
          <div className=" w-full lg:w-1/6">
            {" "}
            <SideBar />
          </div>
          <div className=" w-full lg:w-5/6 bg-bgClr">
            {" "}
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;

const SideBar = () => {
  const { cuUser, signOutUser } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth.auth);
  return (
    <div>
      <div className="bg-bgClr text-primaryRed flex flex-col items-center justify-center p-5 rounded-md">
        <img
          src={cuUser?.photoURL}
          className="w-32 h-32 rounded-full border border-primaryRed"
        />
        <h1 className="text-2xl text-secondaryGray font-bold">
          {`${user?.name?.firstName} ${user?.name?.lastName} `}
        </h1>
        {/* <p>Designation: {user?.designation}</p> */}
        <p className="text-xl">Role : {user?.role}</p>
      </div>

      <div className="mt-5 ">
        <ul className="menu menu-vertical ">
          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/dashboard/profile"}>Profile</NavLink>
          </li>
          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/dashboard/my-cart"}>My Cart</NavLink>
          </li>
          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/dashboard/myOrders"}>My Orders</NavLink>
          </li>

          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <NavLink to={"/dashboard/help-desk"}>Help Desk</NavLink>
          </li>
          <li className="border-b border-primaryRed mb-2 bg-bgClr">
            <button onClick={() => signOutUser()}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
