import React from 'react';
import tv from './../../img/tv.png';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const TopNewArrival = () => {
    return (
        <div className='container my-5'>
            <h2 className='uppercase text-2xl font-medium text-gray-800 mb-6'>top new arrival</h2>
            <div className='grid grid-cols-4 gap-6'>
                <div className='bg-white shadow rounded '>
                    <div className='relative group'>
                        <img src={tv} alt="TV" />

                        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40  duration-500 opacity-0 group-hover:opacity-100 transition '>
                            <div className='flex justify-center items-center gap-3'>
                                <FontAwesomeIcon icon={faSearch} className='text-white bg-primary p-2 rounded-full hover:bg-gray-800 transition duration-500 ' />
                                <FontAwesomeIcon icon={faHeart} className='text-white bg-primary p-2 rounded-full  hover:bg-gray-800 transition duration-500' />
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4 space-y-1'>
                        <h1 className=' text-base font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                        <p className='text-base text-primary font-medium'> $45.00</p>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <span className='flex items-center justify-center text-xs'>(150)</span>
                        </div>
                    </div>
                    <Link to={'/product/1'} className='block duration-150 uppercase w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'>Add to cart</Link>
                </div>
                <div className='bg-white shadow rounded '>
                    <div className='relative group'>
                        <img src={tv} alt="TV" />

                        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40  duration-500 opacity-0 group-hover:opacity-100 transition '>
                            <div className='flex justify-center items-center gap-3'>
                                <FontAwesomeIcon icon={faSearch} className='text-white bg-primary p-2 rounded-full hover:bg-gray-800 transition duration-500 ' />
                                <FontAwesomeIcon icon={faHeart} className='text-white bg-primary p-2 rounded-full  hover:bg-gray-800 transition duration-500' />
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4 space-y-1'>
                        <h1 className=' text-base font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                        <p className='text-base text-primary font-medium'> $45.00</p>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <span className='flex items-center justify-center text-xs'>(150)</span>
                        </div>
                    </div>
                    <Link to={'/product/1'} className='block duration-500 uppercase w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'>Add to cart</Link>
                </div>
                <div className='bg-white shadow rounded '>
                    <div className='relative group'>
                        <img src={tv} alt="TV" />

                        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40  duration-500 opacity-0 group-hover:opacity-100 transition '>
                            <div className='flex justify-center items-center gap-3'>
                                <FontAwesomeIcon icon={faSearch} className='text-white bg-primary p-2 rounded-full hover:bg-gray-800 transition duration-500 ' />
                                <FontAwesomeIcon icon={faHeart} className='text-white bg-primary p-2 rounded-full  hover:bg-gray-800 transition duration-500' />
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4 space-y-1'>
                        <h1 className=' text-base font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                        <p className='text-base text-primary font-medium'> $45.00</p>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <span className='flex items-center justify-center text-xs'>(150)</span>
                        </div>
                    </div>
                    <Link to={'/product/1'} className='block duration-150 uppercase w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'>Add to cart</Link>
                </div>
                <div className='bg-white shadow rounded '>
                    <div className='relative group'>
                        <img src={tv} alt="TV" />

                        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40  duration-500 opacity-0 group-hover:opacity-100 transition '>
                            <div className='flex justify-center items-center gap-3'>
                                <FontAwesomeIcon icon={faSearch} className='text-white bg-primary p-2 rounded-full hover:bg-gray-800 transition duration-500 ' />
                                <FontAwesomeIcon icon={faHeart} className='text-white bg-primary p-2 rounded-full  hover:bg-gray-800 transition duration-500' />
                            </div>
                        </div>
                    </div>
                    <div className='py-3 px-4 space-y-1'>
                        <h1 className=' text-base font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                        <p className='text-base text-primary font-medium'> $45.00</p>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                            <span className='flex items-center justify-center text-xs'>(150)</span>
                        </div>
                    </div>
                    <Link to={'/product/1'} className='block duration-150 uppercase w-full py-1  text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'>Add to cart</Link>
                </div>
            </div>

        </div>
    );
};

export default TopNewArrival;