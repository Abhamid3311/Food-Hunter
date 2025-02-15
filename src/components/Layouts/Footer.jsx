import { FaClock, FaPhoneAlt } from "react-icons/fa";

const branches = [
    {
        id: 1,
        name: "Robert Food",
        address: "1986 Hilltop DriveBorger, TX 79007",
        time: "7.30 AM - 9.30 PM",
        phone: "+880 1630-225015",
        mapLink: "#"
    },
    {
        id: 2,
        name: "Mark A. Reed Food",
        address: "4877 Rose AvenueNew Orleans, LA 70112",
        time: "7.30 AM - 9.30 PM",
        phone: "+880 1630-225015",
        mapLink: "#"
    },
    {
        id: 3,
        name: "Karie K. Hill Food",
        address: "1509 Peaceful LaneCleveland, OH 44115",
        time: "7.30 AM - 9.30 PM",
        phone: "+880 1630-225015",
        mapLink: "#"
    },
]



const Footer = () => {
    return (
        <div className=" bg-bgClr ">
            <h1 className="text-4xl text-center font-bold text-secondaryGray mb-3">Our Branch</h1>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5  justify-between py-8 bg-primaryRed text-TextWhite px-5 lg:px-20">
                {
                    branches.map((data) => <div key={data.id} className="text-center">
                        <h1 className="text-xl lg:text-3xl font-bold text-TextWhite">{data.name}</h1>
                        <h3 className="text-sm lg:text-base my-2 font-bold">{data.address}</h3>

                        <div className="flex items-center gap-8  my-2">
                            <p className="flex items-center justify-center gap-2">
                                <FaClock className="text-md" />
                                <span className="text-xs">{data.time} </span>
                            </p>

                            <p className="flex items-center justify-center gap-2">
                                <FaPhoneAlt className="text-md" />
                                <span className="text-xs">{data.time} </span>
                            </p>
                        </div>

                        <p className="text-xs text-TextWhite hover:text-secondaryGray"><a href="#">Click to View Google Map</a></p>
                    </div>)
                }

            </div>

            <div className="bg-secondaryGray text-TextWhite text-center py-4">
                <p>Copyright © 2025 | Ab Hamid</p>
            </div>
        </div>
    );
};

export default Footer;