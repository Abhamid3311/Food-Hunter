import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import AuthProvider from "../Providers/AuthProvider";

export const FoodContext = createContext(null);

const Layouts = () => {
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    fetch("mealItems.json")
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, []);

  // console.log(allFoods);

  return (
    <AuthProvider>
      <FoodContext.Provider value={allFoods}>
        <div className="w-full bg-bgClr">
          <Header />

          <div className=" ">
            <Outlet />
          </div>

          <Footer />
        </div>
      </FoodContext.Provider>
    </AuthProvider>
  );
};

export default Layouts;
