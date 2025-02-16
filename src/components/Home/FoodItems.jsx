


const items = [
    {
        id: 1,
        name: "Drinks",
        img: "/src/assets/home_img/image_Dishes_1.png",
        link: "#"
    },
    {
        id: 2,
        name: "Kabab",
        img: "/src/assets/home_img/image_Dishes_2.png",
        link: "#"
    },
    {
        id: 3,
        name: "Pizza",
        img: "/src/assets/home_img/image_Dishes_3.png",
        link: "#"
    },
    {
        id: 4,
        name: "Burgers",
        img: "/src/assets/home_img/image_Dishes_4.png",
        link: "#"
    },
    {
        id: 5,
        name: "Nachos",
        img: "/src/assets/home_img/image_Dishes_5.png",
        link: "#"
    },
];






const FoodItems = () => {

    
    return (
        <div className="mt-16">
            <div className="text-center">
                <h3 className="text-xl font-bold text-secondaryGray">Food Items</h3>
                <h1 className="text-3xl font-bold">Popular Dishes</h1>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 items-center justify-between gap-1 mt-5">
                {
                    items.map(data => <a key={data.id} href=""><div className="card">
                        <img src={data.img} alt={data.name} />
                        <div className="overlay">
                            <h1>{data.name}</h1>
                        </div>
                    </div></a>)
                }

            </div>
        </div>
    );
};

export default FoodItems;