import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const DashboardLayout = () => {
    return (
        <div>
            <div className='w-full'>
                <Header />

                <div className="flex flex-col lg:flex-row items-start gap-5  bg-TextWhite px-5 lg:px-20 my-10">
                    <div className="w-80  "> <SideBar /></div>
                    <div className="w-full bg-bgClr"> <Outlet /></div>
                </div>


                <Footer />
            </div>
        </div>
    );
};

export default DashboardLayout;


const SideBar = () => {
    return (
        <div >

            <div className="bg-bgClr text-primaryRed flex flex-col items-center justify-center p-5 rounded-md">
                <img src="/src/assets/home_img/profile.jpeg" className="w-32 h-32 rounded-full border border-primaryRed" />
                <h1 className="text-2xl text-secondaryGray font-bold">Ab Hamid</h1>
                <p >Fullstack Developer</p>
            </div>

            <div className="mt-5 ">
                <ul className="menu menu-vertical ">
                    <li className="border-b border-primaryRed mb-2 bg-bgClr"><NavLink to={"/dashboard/profile"}>Profile</NavLink></li>
                    <li className="border-b border-primaryRed mb-2 bg-bgClr"><NavLink to={"/dashboard/my-cart"}>My Cart</NavLink></li>
                    <li className="border-b border-primaryRed mb-2 bg-bgClr"><NavLink to={"/dashboard/wishlist"}>Wishlist</NavLink></li>

                    <li className="border-b border-primaryRed mb-2 bg-bgClr"><NavLink to={"/dashboard/help-desk"}>Help Desk</NavLink></li>
                    <li className="border-b border-primaryRed mb-2 bg-bgClr"><button>Logout</button></li>
                </ul>
            </div>

        </div>
    )
}