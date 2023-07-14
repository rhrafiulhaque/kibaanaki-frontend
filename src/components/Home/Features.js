import React from 'react';
import { faTruck, faMoneyBill1Wave, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {
    return (
        <div className='container py-16'>
            <div className='w-10/12 grid lg:grid-cols-3 md:grid-cols-2  gap-6 mx-auto justify-center'>
                <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <FontAwesomeIcon className='w-12 h-12 object-contain text-primary' icon={faTruck} />
                    <div>
                        <h4 className='font-medium capitalize text-lg'>Free Shipping</h4>
                        <p className='text-gray-500 text-sm'>Order Over $200</p>
                    </div>
                </div>
                <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <FontAwesomeIcon className='w-12 h-12 object-contain text-primary' icon={faMoneyBill1Wave} />
                    <div>
                        <h4 className='font-medium capitalize text-lg'>Money Returns</h4>
                        <p className='text-gray-500 text-sm'>30 days Money Back Gurantee</p>
                    </div>
                </div>
                <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <FontAwesomeIcon className='w-12 h-12 object-contain text-primary' icon={faClock} />
                    <div>
                        <h4 className='font-medium capitalize text-lg'>24/7 Support</h4>
                        <p className='text-gray-500 text-sm'>Customer Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;