import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

///Test Purpose Commit
    return (
        <Navigate to={"/"}></Navigate>
    );
};

export default PrivateRoutes;