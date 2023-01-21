import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import tv from '../../img/tv.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';
const NewArrival = () => {
    return (
        <div className='container mt-8'>
            <div className='flex justify-between py-8'>
                <h1 className='text-3xl font-semibold'>New Arrivals</h1>

                <a href="" className='text-lg text-primary text-lg font-semibold'>See More </a>
            </div>

            <div className='grid grid-cols-4 gap-6'>
                <div className='border border-gray-300 border-dashed rounded-sm h-78 w-64 relative '>
                    <img src={tv} className=' w-full object-contain' alt="" />
                    <div className='py-3 px-4 space-y-1'>
                        <h1 className=' text-base font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                        <p className='text-base text-primary font-medium'> $45.00</p>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <span className='flex items-center justify-center text-xs'>(150)</span>
                        </div>
                    </div>
                    <span className='absolute w-12 h-10 bg-[#ED0020] -top-0 left-0 flex text-white justify-center items-center rounded-tl-sm rounded-br-md'>Hot</span>
                </div>
                <div className='border border-gray-300 border-dashed rounded-sm h-78 w-64 '>
                    <img src={tv} className=' w-full object-contain' alt="" />
                    <div className='py-3 px-4 space-y-1'>
                        <h1 className=' text-base font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                        <p className='text-base text-primary font-medium'> $45.00</p>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <span className='flex items-center justify-center text-xs'>(150)</span>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300 border-dashed rounded-sm h-78 w-64 '>
                    <img src={tv} className=' w-full object-contain' alt="" />
                    <div className='py-3 px-4 space-y-1'>
                        <h1 className=' text-base font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                        <p className='text-base text-primary font-medium'> $45.00</p>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className=' text-yellow-400' icon={faStar} />
                            <span className='flex items-center justify-center text-xs'>(150)</span>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300 border-dashed rounded-sm h-78 w-64 '>
                    <img src={tv} className=' w-full object-contain' alt="" />
                    <div className='py-3 px-4 space-y-1'>
                        <h1 className=' text-base font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                        <p className='text-base text-primary font-medium'> $45.00</p>
                        <div className='flex items-center'>
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
    );
};

export default NewArrival;