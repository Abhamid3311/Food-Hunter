import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {


    return (
        <Navigate to={"/"}></Navigate>
    );
};

export default PrivateRoutes;