import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();


    // Handle register User Form
    const handleRegisterForm = (e) => {
        e.preventDefault();

        createUser(email, password)
            .then((res) => {
                console.log(res.user);
                navigate("/dashboard/profile");
                e.target.reset();
            })
            .catch((err) => {
                console.log(err)
            });
    };


    // Handle ggogle SignIn Button
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((res) => {
                console.log(res.user);
                navigate("/dashboard/profile");
            })
            .catch((err) => {
                console.log(err)
            })
    };


    return (
        <div>

            <div className="about-header flex flex-col items-center justify-center text-TextWhite">
                <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">My Account || Register</h1>
            </div>

            <div className='px-5 lg:px-20 bg-bgClr text-primaryRed  p-10 py-20'>


                <div className="flex items-center justify-center ">

                    <div className=" bg-bgClr shadow-2xl w-full lg:w-[550px] p-5">
                        <form className="card-body" onSubmit={handleRegisterForm}>

                            <h1 className="text-3xl font-bold text-center">Register</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="full name" className="input input-bordered" required onBlur={(e) => setName(e.target.value)} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required onBlur={(e) => setEmail(e.target.value)} />
                            </div>

                            {/*   <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="address" className="input input-bordered" required />
                            </div> */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required onBlur={(e) => setPassword(e.target.value)} />

                                <label className="label">
                                    <Link to={"/login"} className="label-text-alt link link-hover text-primaryRed">Already Have an account?  Login Now</Link>
                                </label>
                            </div>

                            <div className="form-control mt-4">
                                <button type="submit" className="bg-primaryRed px-5 lg:px-8 py-1 lg:py-2 w-full rounded-md font-bold text-TextWhite text-center">Register</button>
                            </div>

                            <button type="button" onClick={handleGoogleLogin} className="bg-TextWhite px-5 lg:px-8 py-1 lg:py-2 w-full rounded-md font-bold text-primaryRed text-center shadow-lg border border-primaryRed">Google Signin</button>
                        </form>


                    </div>


                </div>



            </div>
        </div>
    );
};

export default Register;