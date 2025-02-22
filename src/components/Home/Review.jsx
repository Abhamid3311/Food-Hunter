// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from "react";



const testimonials = [
    {
        id: 1,
        name: "Bernadette R. Martin",
        review: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
        star: 4,
        img: "/assets/home_img/image_guests_1.png"
    },
    {
        id: 2,
        name: "R. Downy Junior",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia soluta nam praesentium dolorum nobis illo, laborum obcaecati cumque nulla esse itaque temporibus totam,",
        star: 5,
        img: "/assets/home_img/image_guests_1.png"
    },
    {
        id: 3,
        name: "Ab Hamid",
        review: "at velit magnam tenetur, quisquam cupiditate sequi! scallops which was awesome. My wife had a burger over greens ...",
        star: 5,
        img: "/assets/home_img/3.png"
    },
    {
        id: 4,
        name: "Talukder A. Khalek",
        review: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
        star: 4,
        img: "/assets/home_img/image_guests_1.png"
    },
    {
        id: 5,
        name: "Tom David",
        review: "ALorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia soluta nam praesentium dolorum nobis illo",
        star: 5,
        img: "/assets/home_img/3.png"
    },
];


const Review = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='mt-16'>
            <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold ">Testimonial</h3>
                <h1 className="text-2xl lg:text-4xl font-bold"><span className='text-secondaryGray'>Review</span> form our guests</h1>
            </div>


            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                modules={[Autoplay, Pagination]}
                className="mySwiper my-10"
                breakpoints={{
                    440: { slidesPerView: 1, spaceBetween: 5 },
                    768: { slidesPerView: 2, spaceBetween: 10 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                }}>

                {testimonials.map((data, index) => (
                    <SwiperSlide key={data.id} className="text-center py-10">
                        <div className={`transition-all duration-500 ease-in-out transform ${index === activeIndex ? "scale-110 opacity-100" : "scale-90 opacity-50"}`}>
                            <div className="flex items-center justify-center">
                                <img src={data.img} alt={data.name} className="h-[80px] w-[80px] rounded-full" />
                            </div>
                            <div className="text-secondaryGray mt-4">
                                <h1 className="font-bold text-center">{data.name}</h1>
                                <p className="text-sm mt-3 w-full">{data.review}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            <div>
            </div>
        </div>
    );
};

export default Review;