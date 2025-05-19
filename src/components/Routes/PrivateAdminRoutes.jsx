import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const PrivateAdminRoutes = ({ children }) => {
  const { cuUser, loading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth.auth);

  console.log(cuUser);

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (user?.role === "admin") {
    return children;
  }

  return <Navigate to={"/"}></Navigate>;
};

export default PrivateAdminRoutes;
