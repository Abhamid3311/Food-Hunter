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









            <div className="my-5 w-full">
                <div role="tablist" className="tabs tabs-lifted">

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-primaryRed bg-bgClr text-lg" aria-label="BREAKFAST" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-bgClr border-primaryRed rounded-box p-6">
                        BREAKFAST
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-primaryRed bg-bgClr  text-lg" aria-label="LUNCH" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-bgClr border-primaryRed rounded-box p-6">
                        LUNCH
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-primaryRed bg-bgClr text-lg" aria-label="DINNER" />
                    <div role="tabpanel" className="tab-content bg-bgClr border-primaryRed rounded-box p-6">
                        DINNER
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-primaryRed bg-bgClr text-lg" aria-label="STARTERS" />
                    <div role="tabpanel" className="tab-content bg-bgClr border-primaryRed rounded-box p-6">
                        STARTERS
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-primaryRed bg-bgClr text-lg" aria-label="BEVERAGES" />
                    <div role="tabpanel" className="tab-content bg-bgClr border-primaryRed rounded-box p-6">
                        BEVERAGES
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SpecialsMenu;