import { FaClock, FaFacebook, FaInstagramSquare, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
    return (
        <div>

            <div className="contact-header flex flex-col items-center justify-center text-TextWhite">
                <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">Contact Us </h1>
                <p className="w-2/3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div className='px-5 lg:px-20 bg-bgClr text-primaryRed  p-10 py-20'>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 ">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-xl lg:text-3xl font-bold ">ADDRESS</h1>

                        <p className="flex items-center gap-2 mt-3 text-lg"> <FaLocationDot /><span>28 Seventh Avenue, Neew York, 10014</span></p>
                        <p className="flex items-center gap-2 mt-2 text-lg "> <FaPhoneAlt /><span>+880 1630 225 015</span></p>
                        <p className="flex items-center gap-2 mt-2 text-lg"> <MdEmail /><span>resturents@gmail.com</span></p>


                        <h1 className="text-xl lg:text-3xl font-bold mt-6">WORKING HOURS</h1>
                        <p className="flex items-center gap-2 mt-3 text-lg"> <FaClock /><span>7:30 am to 9:30pm on Weekdays</span></p>

                        <h1 className="text-xl lg:text-3xl font-bold mt-6">FOLLOW US</h1>
                        <div className="flex items-center gap-5 mt-3 text-primaryRed text-xl">
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagramSquare /></a>
                            <a href="#"> <FaLinkedin /></a>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7355.102606345222!2d89.54388329357909!3d22.819084200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff91004c6a881d%3A0x63f134b6160c5086!2sPizzaBurg%20Khulna!5e0!3m2!1sen!2sbd!4v1740067073657!5m2!1sen!2sbd" className="w-full h-[400px] rounded-md" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;