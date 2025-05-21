import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useGetCartItemsQuery } from "../../redux/api/api";
import { useSelector } from "react-redux";
import { successAlert } from "../utils/alerts";

function CheckoutPage() {
  const { data: products, isLoading, isError } = useGetCartItemsQuery();
  const { user } = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();
  // console.log(products);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [deliveryCharge, setDeliveryCharge] = useState(60);
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const total = () => {
    return products
      ?.reduce((acc, pro) => acc + pro.productId.price * pro.quantity, 0)
      .toFixed(2);
  };

  const totalPayable = (parseFloat(total()) + parseInt(deliveryCharge)).toFixed(
    2
  );

  // console.log(totalPayable);

  //Handle Submit Checkout Form
  const onSubmit = (data) => {
    data.userId = user._id;
    data.paymentMethod = paymentMethod;
    data.deliveryCharge = deliveryCharge;
    data.totalCost = totalPayable;
    data.orderedProducts = products;
    const orderInfo = data;
    console.log(orderInfo);

    if (paymentMethod === "cashOnDelivery") {
      successAlert("Order Placed Succesfully!");
      navigate("/all-foods");
    }
  };

  return (
    <div className="bg-lightBg text-secondaryGray min-h-screen">
      <div className="max-w-7xl mx-auto px-3 lg:px-0 py-10">
        <div className="p-2 px-2">
          <h1 className="text-xl lg:text-2xl mb-5">Checkout</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row items-start gap-4 min-h-screen">
              <div className="w-full lg:w-1/3 bg-white shadow-sm rounded-md p-4">
                <div className="flex items-center gap-2">
                  <span className="bg-[#FEECEB] w-9 h-9 rounded-full px-3 py-2 text-primaryRed font-bold flex items-center justify-center">
                    1
                  </span>
                  <h1 className="text-base lg:text-lg font-bold">
                    Customer Information
                  </h1>
                </div>
                <hr className="my-3" />

                {/* Customer Information */}
                {/*   <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder={`${user?.name?.firstName} ${user?.name?.lastName}`}
                    className="input input-bordered w-full"
                    defaultValue={`${user?.name?.firstName} ${user?.name?.lastName}`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-error text-sm mt-1">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder={user?.email}
                    className="input input-bordered w-full"
                    defaultValue={user?.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-error text-sm mt-1">
                      This field is required
                    </span>
                  )}
                </div> */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered w-full"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <span className="text-error text-sm mt-1">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                    {...register("number", { required: true })}
                  />
                  {errors.number && (
                    <span className="text-error text-sm mt-1">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-2/3 min-h-screen">
                {/* Payment Method, Delivery System */}
                <div className="flex flex-col lg:flex-row items-start gap-4 w-full">
                  <div className="bg-white shadow-sm rounded-md p-4 w-full h-full lg:h-[300px]">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#FEECEB] w-9 h-9 rounded-full px-3 py-2 text-primaryRed font-bold flex items-center justify-center">
                        2
                      </span>
                      <h1 className="text-base lg:text-lg font-bold">
                        Payment Method
                      </h1>
                    </div>
                    <hr className="my-3" />

                    <div>
                      <fieldset
                        className="flex flex-col gap-2"
                        id="radio"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      >
                        <legend className="mb-4 text-sm font-semibold">
                          Select a payment method
                        </legend>

                        <div className="form-control">
                          <label className="label cursor-pointer flex items-center gap-2">
                            <input
                              type="radio"
                              name="payments"
                              value="cashOnDelivery"
                              className="radio radio-error"
                              defaultChecked
                            />
                            <span className="label-text">Cash on Delivery</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label cursor-pointer flex items-center gap-2">
                            <input
                              type="radio"
                              name="payments"
                              value="POS"
                              className="radio radio-error"
                            />
                            <span className="label-text">POS on Delivery</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label cursor-pointer flex items-center gap-2">
                            <input
                              type="radio"
                              name="payments"
                              value="Online"
                              className="radio radio-error"
                            />
                            <span className="label-text">Online Payment</span>
                          </label>
                        </div>
                      </fieldset>

                      <div className="mt-3">
                        <h1 className="text-sm font-bold mb-2">We Accept:</h1>
                        <img
                          src="/assets/payment-methods.png"
                          alt="payments"
                          className="w-full max-w-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white shadow-sm rounded-md p-4 w-full h-full lg:h-[300px]">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#FEECEB] w-9 h-9 rounded-full px-3 py-2 text-primaryRed font-bold flex items-center justify-center">
                        3
                      </span>
                      <h1 className="text-base lg:text-lg font-bold">
                        Delivery Method
                      </h1>
                    </div>
                    <hr className="my-3" />

                    <div>
                      <fieldset
                        className="flex flex-col gap-2"
                        id="radio"
                        onChange={(e) => setDeliveryCharge(e.target.value)}
                      >
                        <legend className="mb-4 text-sm font-semibold">
                          Select a delivery method
                        </legend>

                        <div className="form-control">
                          <label className="label cursor-pointer flex items-center gap-2">
                            <input
                              type="radio"
                              name="deliveryCharge"
                              value="60"
                              className="radio radio-error"
                              defaultChecked
                            />
                            <span className="label-text">
                              Home Delivery - 60৳
                            </span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label cursor-pointer flex items-center gap-2">
                            <input
                              type="radio"
                              name="deliveryCharge"
                              value="0"
                              className="radio radio-error"
                            />
                            <span className="label-text">
                              Store Pickup - 0৳
                            </span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label cursor-pointer flex items-center gap-2">
                            <input
                              type="radio"
                              name="deliveryCharge"
                              value="120"
                              className="radio radio-error"
                            />
                            <span className="label-text">
                              Request Express - 120৳
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="w-full bg-white shadow-sm rounded-md p-4 flex flex-col lg:flex-row items-center gap-5 my-4">
                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="text"
                      placeholder="Gift Voucher"
                      className="input input-bordered w-2/3"
                      {...register("giftVoucher")}
                    />
                    <button
                      type="button"
                      className="btn btn-outline btn-error w-1/2"
                    >
                      Apply Voucher
                    </button>
                  </div>

                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="text"
                      placeholder="Promo/Coupon Code"
                      className="input input-bordered w-2/3"
                      {...register("promoCode")}
                    />
                    <button
                      type="button"
                      className="btn btn-outline btn-error w-1/2"
                    >
                      Apply Coupon
                    </button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="w-full bg-white shadow-sm rounded-md p-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#FEECEB] w-9 h-9 rounded-full px-3 py-2 text-primaryRed font-bold flex items-center justify-center">
                      4
                    </span>
                    <h1 className="text-base lg:text-lg font-bold">
                      Order Overview
                    </h1>
                  </div>
                  <hr className="my-3" />

                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products?.map((pro) => (
                          <tr key={pro?.productId?._id} className="hover">
                            <td>{pro?.productId?.name}</td>
                            <td>
                              <span></span>
                              {pro?.productId?.price} x {pro?.quantity}
                            </td>
                            <td>{pro?.productId?.price * pro?.quantity} $</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-end w-full px-5">
                    <hr className="my-3" />
                    <h1 className="text-sm lg:text-base">
                      Total:{" "}
                      <span className="text-primaryRed">{total()} Tk</span>
                    </h1>
                    <hr className="my-3" />
                  </div>

                  <div className="text-end w-full px-5">
                    <h1 className="text-sm lg:text-base">
                      Delivery Charge:{" "}
                      <span className="text-primaryRed">
                        {deliveryCharge} Tk
                      </span>
                    </h1>
                    <hr className="my-3" />
                  </div>

                  <div className="text-end w-full px-5">
                    <h1 className="text-sm lg:text-base">
                      Total Payable:{" "}
                      <span className="text-primaryRed font-bold">
                        {totalPayable} Tk
                      </span>
                    </h1>
                    <hr className="my-3" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-3" />

            <div className="w-full flex flex-col lg:flex-row gap-3 items-center ">
              <div className="flex w-full flex-col gap-4">
                <div className="form-control">
                  <label className="label cursor-pointer flex items-center justify-start gap-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-error"
                    />
                    <span className="label-text text-xs lg:text-base">
                      I have read and agree to the
                      <Link to="/" className="text-primaryRed hover:underline">
                        {" "}
                        Terms and Conditions
                      </Link>
                      ,
                      <Link to="/" className="text-primaryRed hover:underline">
                        {" "}
                        Privacy Policy
                      </Link>{" "}
                      and
                      <Link to="/" className="text-primaryRed hover:underline">
                        {" "}
                        Refund and Return Policy
                      </Link>
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <button
                  disabled={products?.length === 0}
                  type="submit"
                  className=" bg-primaryRed px-5 lg:px-8 py-1 lg:py-2  rounded-md font-bold text-TextWhite text-center"
                >
                  Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
