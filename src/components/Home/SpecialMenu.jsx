const specialMenu = [
    {
        id: 1,
        name: "Burger",
        img: "/assets/home_img/special MEnu/image_specialManu_1.png",
        link: "#"
    },
    {
        id: 2,
        name: "Fried chicken",
        img: "/assets/home_img/special MEnu/image (1).png",
        link: "#"
    },
    {
        id: 3,
        name: "Doner with Grilled Chicken",
        img: "/assets/home_img/special MEnu/image_specialManu_3.png",
        link: "#"
    },
    {
        id: 4,
        name: "Pizza",
        img: "/assets/home_img/special MEnu/image_specialManu_4.png",
        link: "#"
    },
    {
        id: 5,
        name: "Hot Dogs",
        img: "/assets/home_img/special MEnu/image_specialManu_5.png",
        link: "#"
    },
    {
        id: 6,
        name: "Chicken Skewers",
        img: "/assets/home_img/special MEnu/image_specialManu_6.png",
        link: "#"
    },
    {
        id: 7,
        name: "Greek Salad",
        img: "/assets/home_img/special MEnu/image_specialManu_7.png",
        link: "#"
    },
    {
        id: 8,
        name: "Dahi Puri",
        img: "/assets/home_img/special MEnu/image_specialManu_8.png",
        link: "#"
    },
    {
        id: 9,
        name: "Ice cream with Chocolate",
        img: "/assets/home_img/special MEnu/9.png",
        link: "#"
    },
    {
        id: 1,
        name: "Cocktail Glasses",
        img: "/assets/home_img/special MEnu/image_specialManu_10.png",
        link: "#"
    }
];




const SpecialMenu = () => {
    return (
        <div className="my-16">
            <h1 className="text-2xl lg:text-4xl font-bold text-center "> SPECIALS MENU FOR ALL TIME</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-center my-10">
                {
                    specialMenu.map((data) => <div key={data.id} className="special-Item-card ">
                        <img src={data.img} alt={data.name} />
                        <h3 className="text-center font-bold mt-2">{data.name}</h3>
                    </div>)
                }
            </div>


        </div>
    );
};

export default SpecialMenu;