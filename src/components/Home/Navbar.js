import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChair } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className='bg-gray-800'>
            <div className='container flex '>
                <div className=' text-white px-8 py-4 bg-primary flex items-center justify-center cursor-pointer relative group'>
                    <span className=''>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                    <span className='capitalize ml-2'>All Categories</span>

                    <div className='absolute bg-white w-full left-0 top-full shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-10 '>
                        <a href="" className='px-6 py-3 flex items-center hover:bg-gray-100 transition'>
                            <FontAwesomeIcon className='w-5 h-5 object-contain text-primary' icon={faChair}/>
                            <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
                        </a>
                        <a href="" className='px-6 py-3 flex items-center hover:bg-gray-100 transition'>
                            <FontAwesomeIcon className='w-5 h-5 object-contain text-primary' icon={faChair}/>
                            <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
                        </a>
                        <a href="" className='px-6 py-3 flex items-center hover:bg-gray-100 transition'>
                            <FontAwesomeIcon className='w-5 h-5 object-contain text-primary' icon={faChair}/>
                            <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
                        </a>
                        <a href="" className='px-6 py-3 flex items-center hover:bg-gray-100 transition'>
                            <FontAwesomeIcon className='w-5 h-5 object-contain text-primary' icon={faChair}/>
                            <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
                        </a>

                    </div>
                </div>

                <div className='flex items-center justify-between flex-grow pl-12'>
                    <div className='flex items-center space-x-6 capitalize'>
                        <a href="" className='text-gray-200 hover:text-white transition'>Home</a>
                        <a href="" className='text-gray-200 hover:text-white transition'>Shop</a>
                        <a href="" className='text-gray-200 hover:text-white transition'>About Us</a>
                        <a href="" className='text-gray-200 hover:text-white transition'>Contact Us</a>
                    </div>
                    <a href="" className='text-gray-200 hover:text-white transition'>Login/Register</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;