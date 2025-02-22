// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';


const BannerData = [
    {
        id: 1,
        subTitle: "Best In Town",
        title: "ENJOY OUR CHICKEN BURGER FAST FOOD",
        price: "$10.50",
        img: "/assets/home_img/image1.png"
    },
    {
        id: 2,
        subTitle: "Hot & Spicy",
        title: "TASTE OUR DELICIOUS PEPPERONI PIZZA",
        price: "$15.99",
        img: "/assets/home_img/slider/pizz-2-removebg-preview.png"
    },
    {
        id: 3,
        subTitle: "Crispy & Crunchy",
        title: "TRY OUR SPECIAL FRIED CHICKEN BUCKET",
        price: "$18.75",
        img: "/assets/home_img/slider/chicken-1-removebg-preview.png"
    },
    {
        id: 4,
        subTitle: "Refreshing & Sweet",
        title: "ENJOY OUR SIGNATURE CHOCOLATE MILKSHAKE",
        price: "$6.99",
        img: "/assets/home_img/slider/chocolate-2-removebg-preview.png"
    }
];



const CarouselBanner = () => {

    return (
        <div className='mt-2 z-0'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    BannerData.map(data => <SwiperSlide key={data.id}>
                        <div className='bg-bgClr text-primaryRed py-5 '>

                            <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
                                <div className='w-full lg:w-3/5'>
                                    <h3 className='font-bold'>{data.subTitle}</h3>
                                    <h1 className='text-secondaryGray text-3xl lg:text-5xl'>{data.title}</h1>

                                    <div className='flex items-center justify-start gap-5 my-5 lg:my-10'>
                                        <a className=" bg-primaryRed px-5 lg:px-8 py-1 lg:py-2  rounded-md font-bold text-TextWhite text-center">
                                            <button>Order Now</button>
                                        </a>
                                        <p className='text-base lg:text-lg font-bold text-secondaryGray'>
                                            Price: {data.price}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-5 mr-10 text-secondaryGray">
                                        <div className="flex items-center gap-5 mr-10 text-primaryRed text-2xl">
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaFacebook /></a>
                                            <a href="#"><FaInstagramSquare /></a>
                                            <a href="#"> <FaLinkedin /></a>
                                        </div>

                                        <div className="text-base ">
                                            <p className="font-bold">Delivery Order</p>
                                            <p className="text-xs">+880 1630 225 015</p>
                                        </div>
                                        <img src="/assets/food 1.png" alt="food-delivery" className="w-[35px] h-[35px]" />


                                    </div>
                                </div>

                                <div className='w-full lg:w-2/5'>
                                    <img src={data.img} alt={data.title} className='w-full lg:w-[428px] h-[300px] object-contain' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default CarouselBanner;





