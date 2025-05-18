import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Drinks",
    img: "/assets/home_img/image_Dishes_1.png",
    link: "#",
  },
  {
    id: 2,
    name: "Kabab",
    img: "/assets/home_img/image_Dishes_2.png",
    link: "#",
  },
  {
    id: 3,
    name: "Pizza",
    img: "/assets/home_img/image_Dishes_3.png",
    link: "#",
  },
  {
    id: 4,
    name: "Burgers",
    img: "/assets/home_img/image_Dishes_4.png",
    link: "#",
  },
  {
    id: 5,
    name: "Hot dogs",
    img: "/assets/home_img/image_Dishes_5.png",
    link: "#",
  },
];

const FoodItems = () => {
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-xl font-bold text-secondaryGray">Food Items</h3>
        <h1 className="text-3xl font-bold">Popular Dishes</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-5">
        {items.map((data) => (
          <Link to={`all-foods?type=${data.name}`} key={data.id} href="">
            <div className="card">
              <img src={data.img} alt={data.name} />
              <div className="overlay">
                <h1>{data.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
