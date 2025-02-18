
const Cart = () => {
    return (
        <div>

            <div className="item-header flex flex-col items-center justify-center text-TextWhite">
                <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">Cart</h1>
                <p className="w-2/3 text-center">Your Cart Items</p>
            </div>

            <div className='px-5 lg:px-20 bg-bgClr text-primaryRed h-[100vh]'>
                Cart
            </div>
        </div>
    );
};

export default Cart;
