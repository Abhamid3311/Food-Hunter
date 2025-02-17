import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

export const FoodContext = createContext(null)

const Layouts = () => {

    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch("mealItems.json")
            .then((res) => res.json())
            .then((data) => setAllFoods(data))

    }, [])

    // console.log(allFoods);

    return (
        <FoodContext.Provider value={allFoods}>
            <div className='w-full'>
                <Header />

                <div>
                    <Outlet />
                </div>

                <Footer />
            </div>
        </FoodContext.Provider>
    );
};

export default Layouts;