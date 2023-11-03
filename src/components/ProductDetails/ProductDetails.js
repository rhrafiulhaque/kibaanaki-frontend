import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ProductRatings from '../../Utilities/ProductRatings';
import { addCart } from '../../features/cart/cartSlice';
import RelatedProducts from './RelatedProducts';

const ProductDetails = ({ product }) => {
    const { _id, productName, price, old_price, brand, model, description, color, imageUrl, imgThree, availibility, category, ratings = 0, size } = product;
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const handleAddToCart = (_id, productName, quantity, price, img) => {
        dispatch(addCart({ _id, productName, price, quantity, img }));
        toast.success(`${productName} added to cart`)
    }
    return (
        <div className='container'>
            <div className=' grid grid-cols-2 gap-6 mt-10'>
                {imgThree ? <div className={`w-full c-viewer `}><iframe title="chair" className="c-viewer__iframe" src={imgThree} ></iframe></div> : <div className={`w-full`}> <img src={imageUrl} className="object-fill" alt='' /></div>}




                <div className='space-y-2'>
                    <h1 className='uppercase text-2xl font-medium'>{productName}</h1>
                    <div className='flex items-center space-x-2'>
                        <ProductRatings ratings={ratings} />
                        {/* <span className='flex items-center justify-center text-sm text-gray-500'>50 reviews</span> */}
                    </div>

                    <div className='space-y-3 '>
                        <h2 className='font-semibold'>Availability: <span className='text-green-700 font-normal'>In Stock</span></h2>
                        <h2 className='font-semibold'>Brand: <span className='text-gray-800 font-normal'>{brand}</span></h2>
                        <h2 className='font-semibold'>Category: <span className='text-gray-800 font-normal'>{category}</span></h2>
                        <h2 className='font-semibold'>SKU: <span className='text-gray-800 font-normal'>{model}</span></h2>
                        <h1 className='text-primary text-xl font-semibold '>${price} <span className='text-gray-500 line-through text-base'>${old_price}</span></h1>

                        {/* <p>{description}</p> */}
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>



                        {/* Product Size Start */}
                        <div className='pt-4'>
                            <h3 className='text-base text-gray-800 mb-3 uppercase font-medium'>Size</h3>
                            <div className='flex items-center gap-2'>
                                {
                                    size.map((s) =>
                                        <div className='size-selector'>
                                            <input type="radio" value={s} name='size' className='hidden' id={`size-${s}`} />
                                            <label htmlFor={`size-${s}`} className='text-sm border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                                {s}
                                            </label>
                                        </div>)
                                }


                            </div>
                        </div>
                        {/* Product Size End */}

                        {/* Product Quantity Start */}
                        <div className='mt-8'>
                            <h1 className='text-normal text-base uppercase '>Quantity</h1>
                            <div className='flex border border-gray-300 divide-x divide-gray-300 w-max'>
                                <button className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                                <span className='h-8 w-8 text-base flex items-center justify-center cursor-pointer select-none'>{quantity}</span>
                                <button className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none' onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>
                        {/* Product Quantity End */}

                        {/* Cart and Buythings Start  */}
                        <div className='flex  gap-6'>
                            <button className='text-uppercase px-8 py-3 border border-gray-800 text-gray-800 rounded hover:border-primary hover:text-primary transition'> <FontAwesomeIcon icon={faHeart} />  Buy Now</button>
                            <button className=' flex justify-center items-center text-uppercase px-8 py-3 border-primary border bg-primary text-white rounded-md hover:bg-white hover:text-primary transition' onClick={() => handleAddToCart(_id, productName, quantity, price, imageUrl)}> <FontAwesomeIcon icon={faCartShopping} className="mr-2" /> Add to Cart</button>


                        </div>
                        {/* Cart and Buythings End  */}
                    </div>


                </div>

            </div>
            <RelatedProducts />
        </div>
    );
};

export default ProductDetails;