import React from 'react';
import product1 from '../../img/products/product1.jpg';
import product2 from '../../img/products/product2.jpg';
import product3 from '../../img/products/product3.jpg';
import product4 from '../../img/products/product4.jpg';
import product5 from '../../img/products/product5.jpg';
import product6 from '../../img/products/product6.jpg';
import product7 from '../../img/products/product7.jpg';
import product8 from '../../img/products/product8.jpg';
import product9 from '../../img/products/product9.jpg';
import product10 from '../../img/products/product10.jpg';
import product11 from '../../img/products/product11.jpg';
import product12 from '../../img/products/product12.jpg';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopRanking = () => {
    return (
        <div className='container'>
            <h1 className=' text-2xl uppercase text-gray-800 pb-8 font-medium '>Top Ranking</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 md:grid md:justify-center md:items-center'>
                <div>

                    <div className='grid gap-6'>
                        <div className='flex'>
                            <div className='relative'>
                                <img src={product1} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Italian Sofa</h1>
                                <p className='text-lg font-medium text-primary'>$700</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='relative'>
                                <img src={product2} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Mervel Bed</h1>
                                <p className='text-lg font-medium text-primary'>$200</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative'>
                                <img src={product3} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Rest Chair</h1>
                                <p className='text-lg font-medium text-primary'>$342</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className='grid gap-6'>
                        <div className='flex'>
                            <div className='relative'>
                                <img src={product4} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Single Sofa</h1>
                                <p className='text-lg font-medium text-primary'>$29</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='relative'>
                                <img src={product5} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Two Bed Sofa</h1>
                                <p className='text-lg font-medium text-primary'>$460</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative'>
                                <img src={product6} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Dinging 7th Chair</h1>
                                <p className='text-lg font-medium text-primary'>$980</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className='grid gap-6'>
                        <div className='flex'>
                            <div className='relative'>
                                <img src={product7} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Single Bed</h1>
                                <p className='text-lg font-medium text-primary'>$450</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='relative'>
                                <img src={product8} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Toshak</h1>
                                <p className='text-lg font-medium text-primary'>$34</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative'>
                                <img src={product9} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Easy Chair</h1>
                                <p className='text-lg font-medium text-primary'>$200</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className='grid gap-6'>
                        <div className='flex'>
                            <div className='relative'>
                                <img src={product10} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Single Sofa easy</h1>
                                <p className='text-lg font-medium text-primary'>$34</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='relative'>
                                <img src={product11} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Apple Watch</h1>
                                <p className='text-lg font-medium text-primary'>$200</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative'>
                                <img src={product12} className=" object-contain h-24 w-24 " alt="" />
                                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>1</span>
                            </div>
                            <div className='pl-5'>
                                <h1 className='text-lg font-medium'>Apple Watch</h1>
                                <p className='text-lg font-medium text-primary'>$200</p>
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                                    <span className='flex items-center justify-center text-xs'>(150)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* all over  */}



            </div>

        </div>
    );
};

export default TopRanking;