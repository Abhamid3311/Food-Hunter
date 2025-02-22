import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const DashboardLayout = () => {
    return (
        <div>
            <div className='w-full'>
                <Header />

                <div className="flex items-start h-[100vh]">
                    <div className="w-80 bg-secondaryGray text-TextWhite ">

                    </div>
                    <div className="w-full bg-bgClr "> <Outlet /></div>
                </div>


                <Footer />
            </div>
        </div>
    );
};

export default DashboardLayout;