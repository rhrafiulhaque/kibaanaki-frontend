import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";


const CartFlip = () => {

    const cartProducts = useSelector((state) => state.cart.cart)

    return (
        <div class="absolute w-[470px] right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            {cartProducts.length === 0 ? <div class="py-1" role="none">
                <h1>No Product</h1>
            </div> : <div>
                {cartProducts.map((product) => (
                    <div className="flex items-center justify-between p-3 border border-b-slate-300 hover:text-[#FD3D57]">
                        <img src={product.img} className="w-[45px] h-[45px]" alt="" />
                        <p>{product.product_name}</p>
                        <p className="pr-4 flex">1 <span className="pl-2">pc</span></p>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                ))}
                <button>Checkout</button>
            </div>}
        </div>




    );
};

export default CartFlip;