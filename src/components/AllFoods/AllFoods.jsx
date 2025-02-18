import { useContext } from 'react';
import { FoodContext } from '../Layouts/Layouts';

const AllFoods = () => {
    const allFoods = useContext(FoodContext);


    console.log(allFoods)
    return (
        <div >

            <div className="item-header flex flex-col items-center justify-center text-TextWhite">
                <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">Our All Food  Items</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.</p>

            </div>



            <div className='px-5 lg:px-20 bg-bgClr text-primaryRed'>
                {
                    allFoods.length !== 0 ?
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-5 py-10">
                            {
                                allFoods.map((food) => <div key={food?.id} className=" w-full h-full shadow-xl rounded-md object-cover max-w-[320px]">

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

export default AllFoods;