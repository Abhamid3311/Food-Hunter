import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../Layouts/Layouts";
import { FaStar } from "react-icons/fa";

const FoodDetails = () => {
    const { id } = useParams();
    const food = useContext(FoodContext);
    const [getFood, setFood] = useState({});


    useEffect(() => {
        const findFood = food?.find((item) => item.id == id);
        setFood(findFood)

    }, [id, food])

    console.log(getFood);


    return (
        <div>
            <div className="item-header flex flex-col items-center justify-center text-TextWhite">
                <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">{getFood?.name}</h1>
            </div>

            <div className=' bg-bgClr py-10 px-5 lg:px-20'>

                <div className='flex flex-col lg:flex-row items-start justify-center gap-5'>


                    <div className='w-full lg:w-2/5'>
                        <img src={getFood?.img} alt={"delivery"} className='w-full h-[250px] lg:h-[360px] rounded-md' />
                    </div>


                    <div className='w-full lg:w-3/5'>
                        <span className='font-bold  mb-2 lg:mb-4 bg-primaryRed text-TextWhite px-3 rounded-full'>{getFood?.category}</span>

                        <h1 className='text-primaryRed text-2xl lg:text-4xl mb-4 mt-2'>{getFood?.name}</h1>

                        <p className='text-secondaryGray text-sm lg:text-base '> Type: {getFood?.type}</p>
                        <p className='text-secondaryGray text-sm lg:text-base my-2'> Price: <span className="text-primaryRed font-bold text-xl">{getFood?.price}</span></p>

                        <div className='text-secondaryGray text-sm lg:text-base my-2 flex items-center gap-3'> Ratings:
                            <div className="text-primaryRed font-bold text-xl flex items-center gap-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>

                        <p className='text-secondaryGray text-sm lg:text-base my-2'>Ingredients: {getFood?.ingredients}</p>


                        <p className='text-secondaryGray text-sm lg:text-base'>Food Khan is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon&apos;s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.</p>


                        <div className='flex items-center justify-start gap-8 my-4'>

                            <a href="#">
                                <button className="border border-primaryRed px-5 lg:px-10 py-2 lg:py-3  rounded-md font-bold text-primaryRed text-center">Add To Cart</button>
                            </a>

                            <a href="#">
                                <button className="border border-primaryRed bg-primaryRed px-5 lg:px-10 py-2 lg:py-3  rounded-md font-bold text-TextWhite text-center">Order Now </button>
                            </a>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default FoodDetails;