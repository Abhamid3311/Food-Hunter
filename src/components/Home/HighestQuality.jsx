import { FaStar } from "react-icons/fa";




const HighestQuality = () => {
    return (
        <div className="mt-16">
            <div className="text-center">
                <h3 className="text-xl font-bold text-secondaryGray">RICH & HEALTHY</h3>
            </div>

            <div className="flex items-start justify-between gap-3">

                <div>
                    <img src="/src/assets/home_img/image_richHealthy_1.png" alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold ">Highest quality artisangrains, proteins & <br /> seasonal ingredients</h1>

                    <p className=" text-secondaryGray  mt-5">Righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desires, that they cannot foresee.</p>

                    <div className="flex items-center justify-between   gap-3">
                        <div className="text-secondaryGray text-lg gap-3">
                            <p className="flex items-center justify-start gap-2">
                                <FaStar className="text-primaryRed text-lg font-bold" />
                                <span> Simple and easy to distinguish</span>
                            </p>
                            <p className="flex items-center justify-start gap-2 py-3">
                                <FaStar className="text-primaryRed text-lg font-bold" />
                                <span> Pleasure of the momentblinded desire</span>
                            </p>
                            <p className="flex items-center justify-start gap-2">
                                <FaStar className="text-primaryRed text-lg font-bold" />
                                <span> Able to do what we like best</span>
                            </p>
                            <p className="flex items-center justify-start gap-2 py-3">
                                <FaStar className="text-primaryRed text-lg font-bold" />
                                <span> Able to do what we like best</span>
                            </p>
                            <p className="flex items-center justify-start gap-2">
                                <FaStar className="text-primaryRed text-lg font-bold" />
                                <span> Able to do what we like best</span>
                            </p>
                        </div>

                        <img src="/src/assets/home_img/image_richHealthy_2.png" alt="" />

                    </div>

                </div>





            </div>


        </div>
    );
};

export default HighestQuality;




