import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Rewards from './components/Rewards/Rewards.jsx';
import AllFoods from './components/AllFoods/AllFoods.jsx';
import Login from './components/Authentication/Login.jsx';
import Register from './components/Authentication/Register.jsx';
import Cart from './components/Cart/Cart.jsx';
import FoodDetails from './components/AllFoods/FoodDetails.jsx';
import NotFound from './components/utils/NotFound.jsx';
import DashboardLayout from './components/Layouts/DashboardLayout.jsx';
import MyProfile from './components/Dashboard/MyProfile.jsx';
import Wishlist from './components/Dashboard/Wishlist.jsx';
import RewardDetails from './components/Rewards/RewardDetails.jsx';
import PrivateRoutes from './components/Routes/PrivateRoutes.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "rewards",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Rewards />
      },
      {
        path: "rewards/:rewardId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.rewardId}`),
        element: <RewardDetails />
      },
      {
        path: "all-foods",
        element: <AllFoods />
      },
      {
        path: "all-foods/:id",
        element: <FoodDetails />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ]
  },

  {
    path: '/dashboard',
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    children: [
      {
        path: "/dashboard/profile",
        element: <MyProfile />
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist />
      },
      {
        path: "/dashboard/my-cart",
        element: <Cart />
      },
      {
        path: "/dashboard/help-desk",
        element: <Contacts />
      },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </StrictMode >,
)
