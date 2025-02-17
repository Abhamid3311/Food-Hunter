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

                {
                    allFoods.length !== 0 ?
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            {
                                allFoods.map((food) => <div key={food?.id} className=" w-full h-full bg-TextWhite shadow-xl rounded-md object-cover">

                                    <img src={food.img || "https://via.placeholder.com/300"} alt={food.name} className="w-full h-[250px] rounded-t-md" />

                                    <div className="card-body p-4 text-start text-secondaryGray">
                                        <h1 className="text-2xl font-bold "> {food?.name}</h1>
                                        <p>Category: {food?.category}</p>
                                        <p className="text-primaryRed font-bold">Price: {food?.price}</p>

                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">View Details</div>
                                            <div className="badge badge-outline">Add To Cart</div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div> : "Loading...."
                }
            </div>
        </div>
    );
};

export default SpecialsMenu;