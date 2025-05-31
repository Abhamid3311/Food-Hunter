import { Link, useLocation } from "react-router-dom";
import {
  useGetCartItemsQuery,
  useRemoveCartItemMutation,
} from "../../redux/api/api";
import { FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from "../utils/alerts";

const Cart = () => {
  const location = useLocation();
  const { data: cartProduct, isLoading } = useGetCartItemsQuery();
  const [deleteItem] = useRemoveCartItemMutation();

  const isMyCartPage = location.pathname === "/dashboard/my-cart";

  // console.log(cartProduct, isError);

  const calculateTotal = () => {
    if (!cartProduct || cartProduct.length === 0) return "0.00";

    const total = cartProduct.reduce((sum, item) => {
      const price = typeof item.price === "number" ? item.price : 0;
      return sum + price;
    }, 0);

    return total.toFixed(2);
  };

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

  const handelItemRemove = async (productId) => {
    const isConfirmed = await confirmAlert("You want to delete this item?");
    if (isConfirmed) {
      deleteItem(productId);
    }
  };

  return (
    <div>
      {!isMyCartPage && (
        <div className="item-header flex flex-col items-center justify-center text-TextWhite">
          <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">
            Cart
          </h1>
          <p className="w-2/3 text-center">Your Cart Items</p>
        </div>
      )}

      <div className="px-5 lg:px-20 bg-bgClr text-primaryRed ">
        <div className="max-w-6xl mx-auto  py-8">
          <h2 className="text-lg lg:text-2xl font-semibold mb-6">
            Shopping Cart
          </h2>

          <div className="overflow-x-auto">
            <table className="table w-full text-center">
              <thead className="bg-base-200">
                <tr>
                  <th className="text-start">IMAGE</th>
                  <th className="text-start">PRODUCT NAME</th>
                  <th>QUANTITY</th>
                  <th>REMOVE</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cartProduct?.map((item) => (
                  <tr key={item.productId._id}>
                    <td>
                      <img
                        src={item.productId.image}
                        alt={item.productId.name}
                        className="w-20 h-14 object-cover rounded"
                      />
                    </td>
                    <td className="text-start">{item.productId.name}</td>

                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <button className="btn btn-xs btn-success text-white font-bold">
                          +
                        </button>
                        <p>{item.quantity}</p>
                        <button className="btn btn-xs btn-info text-white font-bold">
                          -
                        </button>
                      </div>
                    </td>

                    <td>
                      <button
                        onClick={() => handelItemRemove(item.productId._id)}
                        className="btn btn-xs btn-error text-white"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td>{item.productId.price * item.quantity} $</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Link to={"/all-foods"}>
              <button className=" bg-secondaryGray px-5 lg:px-8 py-1 lg:py-2  rounded-md font-bold text-TextWhite text-center">
                Continue Shopping
              </button>
            </Link>

            <div className="text-right">
              <p className="text-xl font-bold text-red-600 text-start">
                Total: {calculateTotal()} $
              </p>
              <Link to={"/checkout"}>
                <button className="mt-2 bg-primaryRed px-5 lg:px-8 py-1 lg:py-2  rounded-md font-bold text-TextWhite text-center">
                  Confirm Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
