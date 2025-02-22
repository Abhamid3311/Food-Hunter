import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>

            <div className="about-header flex flex-col items-center justify-center text-TextWhite">
                <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">My Account || Register</h1>
            </div>

            <div className='px-5 lg:px-20 bg-bgClr text-primaryRed  p-10 py-20'>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 ">
                    <div className="w-full lg:w-1/2">

                        <div className=" bg-bgClr w-full  shadow-2xl">
                            <form className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="full name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="address" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />

                                    <label className="label">
                                        <Link to={"/login"} className="label-text-alt link link-hover text-primaryRed">Already Have an account?  Login Now</Link>
                                    </label>
                                </div>

                                <div className="form-control mt-4">
                                    <button className="bg-primaryRed px-5 lg:px-8 py-1 lg:py-2 w-full rounded-md font-bold text-TextWhite text-center">Register</button>
                                </div>
                            </form>
                        </div>


                    </div>

                    <div className="w-full lg:w-1/2">
                        <img src='/assets/home_img/register.jpg' alt={"delivery"} className='w-full  h-full rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;