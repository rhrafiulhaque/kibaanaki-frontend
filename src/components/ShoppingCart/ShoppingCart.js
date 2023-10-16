import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQuantity, increaseQuantity, removeCart } from "../../features/cart/cartSlice";

const ShoppingCart = () => {
    const cartProducts = useSelector((state) => state.cart.cart)
    const subTotalPrice = cartProducts.reduce((acc, product) => {
        // Calculate the subtotal for each product
        const subtotal = product.quantity * product.price;

        // Add the subtotal to the accumulator
        return acc + subtotal;
    }, 0);
    const dispatch = useDispatch()

    return (
        <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-4">
            <div className="col-span-8  p-4 rounded ">
                {
                    cartProducts.length > 0 ? <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th className="px-2 py-3"></th>
                                <th className="px-2 py-3">Product</th>
                                <th className="px-2 py-3">Quanity</th>
                                <th className="px-2 py-3">Price</th>
                                <th className="px-2 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartProducts.map((product) => (
                                    <tr className="border" >
                                        <td className="px-2 py-3">
                                            <img src={product.img} className="w-20 h-20" alt="" />
                                        </td>
                                        <td className="px-2 py-3">{product.product_name} </td>
                                        <td className="px-2 py-3">
                                            <div className='flex border border-gray-300 divide-x divide-gray-300 w-max'>
                                                <button className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none' onClick={() => product?.quantity > 1 && dispatch(decreaseQuantity(product?.product_name))}>-</button>
                                                <span className='h-8 w-8 text-base flex items-center justify-center cursor-pointer select-none'>{product?.quantity}</span>
                                                <button className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none' onClick={() => dispatch(increaseQuantity(product?.product_name))}>+</button>
                                            </div>
                                        </td>
                                        <td className="px-2 py-3">
                                            {product.price * product.quantity}
                                        </td>
                                        <td className="px-2 py-3">
                                            <FontAwesomeIcon className="cursor-pointer hover:text-primary duration-300" onClick={() => dispatch(removeCart(product.product_name))} icon={faTrash} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> : <h1 className="text-2xl text-center py-5 font-semibold "> Carts Not Found</h1>
                }
            </div>

            {
                cartProducts.length > 0 && <div className="col-span-4 lg:mt-24 border border-gray-200 p-4 rounded">
                    <h1 className="text-2xl uppercase py-3">Order Summery </h1>
                    <h1 className="text-xl flex justify-between">Subtotal: <span>${subTotalPrice}</span> </h1>
                    <h1 className="text-xl flex justify-between">Delivery: <span>$0</span> </h1>
                    <h1 className="text-xl flex justify-between">Tax: <span>$0</span> </h1>
                    <div className="border border-zinc-300"></div>
                    <h1 className="text-xl uppercase font-bold flex justify-between">Total: <span>{subTotalPrice}</span> </h1>
                    <Link to={'/checkout'} className="text-center align-middle mx-auto justify-center flex mt-[30px] px-6 py-4 bg-primary text-white hover:text-primary hover:bg-white duration-300 uppercase border border-primary">Proceed to checkout</Link>
                </div>
            }

        </div>
    );
};

export default ShoppingCart;