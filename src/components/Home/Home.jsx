import CarouselBanner from "./CarouselBanner";
import "../Home/home.css";
import FoodItems from "./FoodItems";
import HighestQuality from "./HighestQuality";
import BigOffer from "./BigOffer";
import SpecialMenu from "./SpecialMenu";

const Home = () => {
    return (
        <div className=" w-full bg-bgClr text-primaryRed py-5 px-5 lg:px-20" >

            <CarouselBanner />
            <FoodItems />
            <HighestQuality />
            <BigOffer />
            <SpecialMenu />



        </div>
    );
};

export default Home;