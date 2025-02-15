const whyWeBest = [
    {
        id: 1,
        title: "Passionate Chefs",
        desc: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
        img: "/src/assets/home_img/cooking 1.png"
    },
    {
        id: 2,
        title: "100 % Fresh Foods",
        desc: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
        img: "/src/assets/home_img/diet 1.png"
    },
    {
        id: 3,
        title: "Memorable Ambience",
        desc: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
        img: "/src/assets/home_img/candle 1.png"
    },
];


const WhyWeBest = () => {
    return (
        <div className="mt-16">
            <h3 className='font-bold text-center text-xl mb-5'>Why We are the best</h3>


            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10 my-10">
                {
                    whyWeBest.map((data) => <div key={data.id} className="shodow hover:shadow-lg p-2 lg:p-4">
                        <div className="flex items-center justify-center">
                            <img src={data.img} alt={data.title} className="w-[80px] h-[80px]" />
                            <p className="p-5 h-7 w-7 flex items-center justify-center rounded-full border-2 border-primaryRed bg-primaryRed text-TextWhite">{data.id}</p>
                        </div>

                        <div className="text-secondaryGray mt-4">
                            <h1 className="text-center font-bold">{data.title}</h1>
                            <p className="text-md py-4">{data.desc}</p>

                        </div>

                        <div className="flex justify-end">
                            <a href="#" > <button className="my-1 bg-bgClr hover:bg-primaryRed text-primaryRed py-[2px] px-2 text-sm rounded-full font-bold hover:text-TextWhite text-center">Read More</button></a>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default WhyWeBest;