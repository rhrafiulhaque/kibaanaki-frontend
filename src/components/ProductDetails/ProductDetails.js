import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import shoe from '../../img/shoe.png';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import RelatedProducts from './RelatedProducts';
import ProductRatings from '../../Utilities/ProductRatings';

const ProductDetails = ({product}) => {
        const {product_name, price,old_price,brand ,model, description, color, img, imgThree, availibility,category,ratings,size} =product;
        
    return (
        <div className='container'>
            <div className=' grid grid-cols-2 gap-6 mt-10'>
            {imgThree? <div className={`w-full c-viewer `}><iframe title="chair" className="c-viewer__iframe" src={imgThree} ></iframe></div> :<div className={`w-full`}> <img src={img} className="object-fill" alt='' /></div>}
               
                
                    
                

                <div className='space-y-2'>
                    <h1 className='uppercase text-2xl font-medium'>{product_name}</h1>
                    <div className='flex items-center space-x-2'>
                        <ProductRatings ratings={ratings}/>
                        <span className='flex items-center justify-center text-sm text-gray-500'>50 reviews</span>
                    </div>

                    <div className='space-y-3 '>
                        <h2 className='font-semibold'>Availability: <span className='text-green-700 font-normal'>In Stock</span></h2>
                        <h2 className='font-semibold'>Brand: <span className='text-gray-800 font-normal'>{brand }</span></h2>
                        <h2 className='font-semibold'>Category: <span className='text-gray-800 font-normal'>{category}</span></h2>
                        <h2 className='font-semibold'>SKU: <span className='text-gray-800 font-normal'>{model}</span></h2>
                        <h1 className='text-primary text-xl font-semibold '>${price} <span className='text-gray-500 line-through text-base'>${old_price}</span></h1>

                        <p>{description}</p>


                        {/* Product Size Start */}
                        <div className='pt-4'>
                            <h3 className='text-base text-gray-800 mb-3 uppercase font-medium'>Size</h3>
                            <div className='flex items-center gap-2'>
                                <div className='size-selector'>
                                    <input type="radio" name='size' className='hidden' id='size-xs' />
                                    <label htmlFor="size-xs" className='text-xs border border-primary rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        {size}
                                    </label>
                                </div>
                                
                               
                            </div>
                        </div>
                        {/* Product Size End */}

                        {/* Product Quantity Start */}
                        <div className='mt-8'>
                            <h1 className='text-normal text-base uppercase '>Quantity</h1>
                            <div className='flex border border-gray-300 divide-x divide-gray-300 w-max'>
                                <span className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>-</span>
                                <span className='h-8 w-8 text-base flex items-center justify-center cursor-pointer select-none'>4</span>
                                <span className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>+</span>
                            </div>
                        </div>
                        {/* Product Quantity End */}

                        {/* Cart and Wishlist Start  */}
                        <div className='flex  gap-6'>
                            <button className=' flex justify-center items-center text-uppercase px-8 py-3 border-primary border bg-primary text-white rounded-md hover:bg-white hover:text-primary transition'> <FontAwesomeIcon icon={faCartShopping} className="mr-2" /> Add to Cart</button>
                            <button className='text-uppercase px-8 py-3 border border-gray-800 text-gray-800 rounded hover:border-primary hover:text-primary transition'> <FontAwesomeIcon icon={faHeart} />  Wishlist</button>

                        </div>
                        {/* Cart and Wishlist End  */}
                    </div>


                </div>

            </div>
            <RelatedProducts/>
        </div>
    );
};

export default ProductDetails;