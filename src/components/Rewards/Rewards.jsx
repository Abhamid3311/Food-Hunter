import { Link, useLoaderData } from "react-router-dom";

const Rewards = () => {
    const post = useLoaderData();
    // console.log(post);


    return (
        <div>

            <div className="about-header flex flex-col items-center justify-center text-TextWhite">
                <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">Blogs </h1>
                <p className="w-2/3 text-center">Buy & Gain Premium Cuppon on our Products</p>
            </div>

            <div className='px-5 lg:px-20 bg-bgClr text-primaryRed '>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 py-10">
                    {
                        post?.map((blog => <div key={blog?.id}>
                            <div className="bg-bgClr shadow-xl h-72 p-5">
                                <div className="">
                                    <h2 className=" text-secondaryGray font-bold text-xl mb-3">{blog?.title.slice(0, 30)}</h2>
                                    <p>{blog?.body.slice(0, 100)}</p>

                                    <div className="card-actions justify-end">
                                        <Link to={`/rewards/${blog?.id}`}><button className="badge badge-outline">Read More</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Rewards;