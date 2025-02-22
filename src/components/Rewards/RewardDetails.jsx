import { useLoaderData } from "react-router-dom";

const RewardDetails = () => {
    const singlePost = useLoaderData();
    const { title, body } = singlePost
    // console.log(singlePost);


    return (
        <div>
            <div className="bg-bgClr shadow-xl  p-5 w-full h-[100vh] ">
                <div className="px-5 lg:px-20">
                    <h2 className=" text-secondaryGray font-bold text-xl mb-3">{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default RewardDetails;