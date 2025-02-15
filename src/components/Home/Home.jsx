import CarouselBanner from "./CarouselBanner";
import "../Home/home.css";
import FoodItems from "./FoodItems";
import HighestQuality from "./HighestQuality";
import BigOffer from "./BigOffer";

const Home = () => {
    return (
        <div className=" w-full bg-bgClr text-primaryRed py-5 px-5 lg:px-20" >

            <CarouselBanner />
            <FoodItems />
            <HighestQuality />
            <BigOffer />



        </div>
    );
};

export default Home;