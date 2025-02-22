import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";




const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className={`shadow-lg nav-simple  ${isSticky ? "nav-sticky " : ""} `} >
            <div className={`bg-primaryRed px-5 lg:px-20 py-2 text-TextWhite w-full ${isSticky ? "hidden " : "flex"} items-center justify-between text-[12px]`}>
                <div className="flex items-center gap-10">
                    <p className="flex items-center justify-center gap-2">
                        <FaClock className="text-lg" />
                        <span>7.30 AM - 9.30 PM </span>
                    </p>

                    <p className="flex items-center justify-center gap-2">
                        <FaPhoneAlt className="text-lg" />
                        <span>+880 1630 225 015 </span>
                    </p>
                </div>
                <Link to="/register"><button className="font-bold">Register</button></Link>
            </div>


            <div className="navbar bg-bgClr shadow-lg  px-5 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>

                            <li>
                                <NavLink to={"/about"}>About</NavLink>

                            </li>
                            <li><NavLink to={"/all-foods"}>All Foods</NavLink></li>
                            <li>
                                <a>Our Menu</a>
                                <ul className="p-2">
                                    <li><a>Dinner</a></li>
                                    <li><a>Lunch</a></li>
                                    <li><a>Breakfast</a></li>
                                    <li><a>fastfood</a></li>
                                    <li><a>DesiFood</a></li>
                                </ul>
                            </li>
                            <li><NavLink to={"/contacts"}>Contact</NavLink></li>
                            <li><NavLink to={"/rewards"}>Rewards</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src="/assets/logo.png" alt="logo" className="w-[90px] h-[50px]" />
                    </a>
                </div>


                <div className="navbar-center hidden lg:flex px-20  ">
                    <ul className="menu menu-horizontal ">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/all-foods"}>All Foods</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li>
                            <details>
                                <summary>Our Menu</summary>
                                <ul className="p-2">
                                    <li><a>Dinner</a></li>
                                    <li><a>Lunch</a></li>
                                    <li><a>Breakfast</a></li>
                                    <li><a>fastfood</a></li>
                                    <li><a>DesiFood</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to={"/contacts"}>Contact</NavLink></li>
                        <li><NavLink to={"/rewards"}>Rewards</NavLink></li>

                        <li><Link to={"/cart"} className="text-TextWhite bg-secondaryGray px-2 py-2 ml-2 rounded-full ">
                            <IoMdCart className="text-2xl" />
                        </Link></li>
                    </ul>
                </div>

                <div className="navbar-end">

                    <div className="hidden lg:flex items-center gap-3 mr-7 text-secondaryGray">
                        <div className="text-sm ">
                            <p className="font-bold">Delivery Order</p>
                            <p className="text-xs">01630 225 015</p>
                        </div>
                        <img src="/assets/food 1.png" alt="food-delivery" className="w-[30px] h-[30px]" />
                    </div>




                    <Link to={"/dashboard/profile"}>
                        <img src="/assets/home_img/profile.jpeg" className="w-10 h-10 rounded-full border border-primaryRed" />
                    </Link>


                    {/*    <Link to="/login"><button className=" bg-primaryRed px-8 py-2 rounded-md font-bold text-TextWhite text-center">Login</button></Link> */}


                </div>
            </div>
        </div>
    );
};

export default Header;