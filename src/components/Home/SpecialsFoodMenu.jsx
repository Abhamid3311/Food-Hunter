import { useContext } from "react";
import { FoodContext } from "../Layouts/Layouts";

const SpecialsMenu = () => {
    const allFoods = useContext(FoodContext);


    console.log(allFoods)


    return (
        <div className="mt-16">
            <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold ">SPECIALS</h3>
                <h1 className="text-2xl lg:text-4xl font-bold text-secondaryGray mb-2">Check out our menu</h1>
                <p className="text-secondaryGray">Demoralized by the charms of pleasure of the moment so blinded except to some advantage.</p>


            </div>
        </div>
    );
};

export default SpecialsMenu;