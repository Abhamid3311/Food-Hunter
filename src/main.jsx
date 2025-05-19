import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./components/Layouts/Layouts.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Rewards from "./components/Rewards/Rewards.jsx";
import AllFoods from "./components/AllFoods/AllFoods.jsx";
import Login from "./components/Authentication/Login.jsx";
import Register from "./components/Authentication/Register.jsx";
import Cart from "./components/Cart/Cart.jsx";
import FoodDetails from "./components/AllFoods/FoodDetails.jsx";
import NotFound from "./components/utils/NotFound.jsx";
import DashboardLayout from "./components/Layouts/DashboardLayout.jsx";
import MyProfile from "./components/Dashboard/MyProfile.jsx";
import Wishlist from "./components/Dashboard/Wishlist.jsx";
import RewardDetails from "./components/Rewards/RewardDetails.jsx";
import PrivateRoutes from "./components/Routes/PrivateRoutes.jsx";
import AuthProvider from "./components/Providers/AuthProvider.jsx";
import AdminDashboardLayout from "./components/Layouts/AdminDashboardLayout.jsx";
import Overview from "./components/admin-dashboard/Overview.jsx";
import UserManagment from "./components/admin-dashboard/UserManagment.jsx";
import ProductManagment from "./components/admin-dashboard/ProductManagment.jsx";
import OrderManagement from "./components/admin-dashboard/OrderManagement.jsx";
import BlogMangment from "./components/admin-dashboard/BlogMangment.jsx";
import AdminProfile from "./components/admin-dashboard/AdminProfile.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import CheckoutPage from "./components/Checkout/CheckoutPage.jsx";
import PrivateAdminRoutes from "./components/Routes/PrivateAdminRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "rewards",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Rewards />,
      },
      {
        path: "rewards/:rewardId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.rewardId}`
          ),
        element: <RewardDetails />,
      },
      {
        path: "all-foods",
        element: <AllFoods />,
      },
      {
        path: "all-foods/:id",
        element: <FoodDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/profile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/dashboard/my-cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/help-desk",
        element: <Contacts />,
      },
    ],
  },

  {
    path: "/admin-dashboard",
    element: (
      <PrivateAdminRoutes>
        <AdminDashboardLayout />
      </PrivateAdminRoutes>
    ),
    children: [
      {
        path: "/admin-dashboard/overview",
        element: <Overview />,
      },
      {
        path: "/admin-dashboard/user-managment",
        element: <UserManagment />,
      },
      {
        path: "/admin-dashboard/product-managment",
        element: <ProductManagment />,
      },
      {
        path: "/admin-dashboard/order-managment",
        element: <OrderManagement />,
      },
      {
        path: "/admin-dashboard/blog-managment",
        element: <BlogMangment />,
      },
      {
        path: "/admin-dashboard/admin-profile",
        element: <AdminProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </Provider>
  </>
);
