
const OurResturant = () => {
    return (
        <>
            <div className="mt-16">



                <div className="flex items-start justify-between gap-2">

                    <div className="w-2/5">

                        <div className="flex items-start gap-1">
                            <img src="/src/assets/home_img/image_ourResturant_1.png" alt="" />
                            <img src="/src/assets/home_img/image_ourResturant_2.png" alt="" />
                        </div>
                        <img src="/src/assets/home_img/image_ourResturant_3.png" alt="" />
                    </div>

                    <div className="w-3/5">
                        <h3 className="text-xl font-bold text-start mb-4">OUR RESTAURANT</h3>
                        <h1 className="text-4xl font-bold text-secondaryGray ">For every specialoccasion there’s heritaste</h1>

                        <p className=" text-secondaryGray  mt-4">Indignation and dislike men who are so beguiled demoralized by the charms of pleasure of the moment. Success Story.</p>

                        <div className="mt-5">

                            <div className="flex items-start justify-start gap-4">
                                <div className="p-3 rounded-full border-2 border-primaryRed">
                                    <img src="/src/assets/home_img/growth 1.png" alt="" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">Success Story</h2>
                                    <p className="text-secondaryGray">Certain circumstances and owing to the claims of duty obligations of business it will frequently.</p>
                                    <a href="#" > <button className="my-1 bg-bgClr hover:bg-primaryRed text-primaryRed py-[2px] px-2  rounded-full font-bold hover:text-TextWhite text-center">Read More</button></a>
                                </div>
                            </div>

                            <div className="flex items-start justify-start gap-4">
                                <div className="p-3 rounded-full border-2 border-primaryRed">
                                    <img src="/src/assets/home_img/cooking 1.png" alt="" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">Passionate Chefs</h2>
                                    <p className="text-secondaryGray">Duty or the obligations of business it frequently occur pleasures have to be repudiated.</p>
                                    <a href="#" > <button className="my-1 bg-bgClr hover:bg-primaryRed text-primaryRed py-[2px] px-2  rounded-full font-bold hover:text-TextWhite text-center">Read More</button></a>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

            <Delivery />
        </>
    );
};

export default OurResturant;


const Delivery = () => {
    return (
        <>
            <div className='mt-16 '>

                <div className='flex items-center justify-center gap-5'>
                    <div className='w-3/5'>
                        <h3 className='font-bold  text-xl mb-4'>Delivery</h3>
                        <h1 className='text-secondaryGray text-4xl mb-4'>A Moments Of <br /><span className='text-primaryRed'>Delivered On Right Time & Place</span></h1>


                        <p className='text-secondaryGray '>Food Khan is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon&apos;s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.</p>

                        <div className='flex items-center justify-start gap-8 my-4'>
                            <div className="hidden lg:flex items-center gap-5 mr-10 text-secondaryGray">
                                <div className="text-md ">
                                    <p className="font-bold">Delivery Order</p>
                                    <p className="text-md">+880 1630 225 015</p>
                                </div>
                                <img src="/src/assets/food 1.png" alt="food-delivery" className="w-[35px] h-[35px]" />
                            </div>


                            <a href="#">
                                <button className=" bg-primaryRed px-10 py-3  rounded-md font-bold text-TextWhite text-center">Order Now</button>
                            </a>
                        </div>
                    </div>

                    <div className='w-2/5'>
                        <img src='/src/assets/home_img/image_delivery.png' alt={"delivery"} className='w-[458px] h-[320px] object-contain' />
                    </div>
                </div>
            </div>
        </>
    )
}