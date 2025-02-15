import CarouselBanner from "./CarouselBanner";
import "../Home/home.css";
import FoodItems from "./FoodItems";
import HighestQuality from "./HighestQuality";
import BigOffer from "./BigOffer";
import SpecialMenu from "./SpecialMenu";
import OurResturant from "./OurResturant";
import WhyWeBest from "./WhyWeBest";
import Review from "./Review";

const Home = () => {
    return (
        <div className=" w-full bg-bgClr text-primaryRed py-5 px-5 lg:px-20" >

            <CarouselBanner />
            <FoodItems />
            <HighestQuality />
            <BigOffer />
            <SpecialMenu />
            <OurResturant />
            <WhyWeBest />
            <Review />



        </div>
    );
};

export default Home;