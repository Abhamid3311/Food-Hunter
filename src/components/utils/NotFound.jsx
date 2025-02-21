import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-bgClr h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-primaryRed text-4xl font-bold mb-5">404 || Not Found</h1>
            <Link to={"/"}><button className=" bg-primaryRed px-5 lg:px-8 py-1 lg:py-2  rounded-md font-bold text-TextWhite text-center">Back To Home</button></Link>

        </div>
    );
};

export default NotFound;