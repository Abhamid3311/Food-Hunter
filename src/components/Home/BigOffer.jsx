// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from 'swiper/modules';



const BigOffer = () => {
    return (
        <div className="mt-16 ">
            <div className="text-center">
                <h1 className="text-2xl lg:text-3xl font-bold"> <i>Bigg Offer</i></h1>
                <h3 className="text-md lg:text-xl font-bold text-secondaryGray">For in this week, take your food, buy your best one.</h3>
            </div>


            <Swiper
                watchSlidesProgress={true}
                slidesPerView={3}
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}

                breakpoints={{
                    430: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper my-5 lg:my-10">
                <SwiperSlide>
                    <img src="/src/assets/home_img/image_bigOffer_1.png" alt="" className="h-[200px] w-[560px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/home_img/image_bigOffer_2.png" alt="" className="h-[200px] w-[560px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/home_img/image_bigOffer_3.png" alt="" className="h-[200px] w-[560px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/home_img/image_bigOffer_1.png" alt="" className="h-[200px] w-[560px]" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/src/assets/home_img/image_bigOffer_3.png" alt="" className="h-[200px] w-[560px]" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/src/assets/home_img/image_bigOffer_2.png" alt="" className="h-[200px] w-[560px]" />
                </SwiperSlide>

            </Swiper>




        </div>
    );
};

export default BigOffer;