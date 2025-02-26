import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const PrivateRoutes = ({ children }) => {
    const { cuUser, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Loading.....</p>
    };

    if (cuUser) {
        return children
    };


    return (
        <Navigate to={"/"}></Navigate>
    );
};

export default PrivateRoutes;