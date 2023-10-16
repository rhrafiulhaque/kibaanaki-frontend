import { useSelector } from "react-redux";

const PaymentMethod = () => {
    const cartProducts = useSelector((state) => state.cart.cart)
    const subTotalPrice = cartProducts.reduce((acc, product) => {
        // Calculate the subtotal for each product
        const subtotal = product.quantity * product.price;

        // Add the subtotal to the accumulator
        return acc + subtotal;
    }, 0);

    return (
        <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-4">
            <div className="col-span-8 border border-gray-200 p-4 rounded">
                <h3 className="text-lg font-medium capitalize mb-4 bg-[#E9E4E4] p-4 text-gray-600 rounded w-full">Billing Details</h3>

            </div>

            {/* checkout total item start  */}
            <div className="col-span-4 lg:mt-24 border border-gray-200 p-4 rounded">
                <h3 className="text-lg font-medium capitalize mb-4 bg-[#E9E4E4] p-4 text-gray-600 rounded w-full">Your Orders</h3>
                <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summery</h4>
                <div className="  space-y-2 divide-y-2">
                    {
                        cartProducts.map((products) => (
                            <div className="flex justify-between pt-2 space-x-7">
                                <div>
                                    <h5 className="text-gray-800 font-normal">{products?.product_name}</h5>
                                </div>
                                <p className="text-gray-600">
                                    x{products?.quantity}
                                </p>
                                <p className="text-gray-800 font-medium">${products?.price}</p>
                            </div>
                        ))
                    }

                    <div>
                        {/* Total and Subtotal Section Start  */}
                        <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                            <p className="font-semibold">Total</p>
                            <p>${subTotalPrice}</p>
                        </div>

                        <button className="w-full border border-primary px-8 py-2 bg-primary text-white rounded  hover:bg-transparent hover:text-primary transition">Checkout</button>
                    </div>
                    {/* Total and Subtotal Section End  */}

                </div>
            </div>
            {/* checkout total item end  */}

        </div>
    );
};

export default PaymentMethod;