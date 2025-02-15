
const OurResturant = () => {
    return (
        <div className="mt-16">

            <h3 className="text-xl font-bold text-center mb-8">OUR RESTAURANT</h3>

            <div className="flex items-start justify-between gap-3">

                <div className="w-2/5">
                    <div className="flex items-start gap-1">
                        <img src="/src/assets/home_img/image_ourResturant_1.png" alt="" />
                        <img src="/src/assets/home_img/image_ourResturant_2.png" alt="" />
                    </div>
                    <img src="/src/assets/home_img/image_ourResturant_3.png" alt="" />
                </div>

                <div className="w-3/5">
                    <h1 className="text-4xl font-bold text-secondaryGray ">For every specialoccasion there’s heritaste</h1>

                    <p className=" text-secondaryGray  mt-5">Indignation and dislike men who are so beguiled demoralized by the charms of pleasure of the moment. Success Story.</p>

                    <div className="mt-5">

                        <div className="flex items-start justify-start gap-3">
                            <img src="/src/assets/home_img/growth 1.png" alt="" />
                            <div>
                                <h2 className="text-3xl font-bold">Success Story</h2>
                                <p className="text-secondaryGray">Certain circumstances and owing to the claims of duty obligations of business it will frequently.</p>
                                <a href="#" > <button className="my-1 bg-bgClr hover:bg-primaryRed text-primaryRed py-1 px-4  rounded-full font-bold hover:text-TextWhite text-center">Read More</button></a>
                            </div>
                        </div>

                        <div className="flex items-start justify-start gap-3 mt-3">
                            <img src="/src/assets/home_img/cooking 1.png" alt="" />
                            <div>
                                <h2 className="text-3xl font-bold">Passionate Chefs</h2>
                                <p className="text-secondaryGray">Duty or the obligations of business it frequently occur pleasures have to be repudiated.</p>
                                <a href="#" > <button className="my-1 bg-bgClr hover:bg-primaryRed text-primaryRed py-1 px-4  rounded-full font-bold hover:text-TextWhite text-center">Read More</button></a>
                            </div>
                        </div>




                    </div>
                </div>





            </div>


        </div>
    );
};

export default OurResturant;