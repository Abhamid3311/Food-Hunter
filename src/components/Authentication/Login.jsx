import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleLoginForm = e => {
        e.preventDefault();

        const userInfo = { email, pass }

        console.log(userInfo)

    };

    return (
        <div>

            <div className="item-header flex flex-col items-center justify-center text-TextWhite">
                <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">My Account || Login</h1>
                <p className="w-2/3 text-center">Login To Your Account</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between bg-bgClr text-primaryRed  gap-5  p-10 py-20 ">
                <div className="w-full lg:w-1/2">

                    <div className=" bg-bgClr w-full  shadow-2xl">
                        <form className="card-body" onSubmit={handleLoginForm}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required onBlur={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required onBlur={(e) => setPass(e.target.value)} />

                                <label className="label">
                                    <Link to={"/register"} className="label-text-alt link link-hover text-primaryRed">Forgot password?</Link>
                                </label>
                            </div>

                            <div className="form-control mt-4">
                                <button type="submit" className="bg-primaryRed px-5 lg:px-8 py-1 lg:py-2 w-full rounded-md font-bold text-TextWhite text-center">Login</button>
                            </div>
                        </form>
                    </div>


                </div>

                <div className="w-full lg:w-1/2">
                    <img src='/assets/home_img/register.jpg' alt={"delivery"} className='w-full h-[350px] rounded-md' />
                </div>
            </div>
        </div>
    );
};

export default Login;