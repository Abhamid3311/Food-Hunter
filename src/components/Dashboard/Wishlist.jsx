import { useGetAllUsersQuery } from "../../redux/api/api";

const Wishlist = () => {
  const { data, isLoading } = useGetAllUsersQuery();
  //   const { email, phoneNumber, designation } = data;
  console.log(data, isLoading);

  return (
    <div className=" bg-mainBg px-3 lg:p-5">
      <h1>Hello</h1>
      {/* <h1>{(data.email, phoneNumber)}</h1> */}

      <div>
        {data?.data?.map((item) => (
          <p key={item._id}>{item.email}</p>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
