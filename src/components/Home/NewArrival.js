import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import tv from '../../img/tv.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Product from './Product';
const NewArrival = () => {
    return (
        <div className='container mt-8'>
            <div className='flex justify-between py-8'>
                <h1 className='text-3xl font-semibold'>New Arrivals</h1>

                <a href="" className='text-lg text-primary text-lg font-semibold'>See More </a>
            </div>

            <div className='grid grid-cols-4 gap-6'>
                <Product/>
                <Product/>
                <Product/>
            </div>

        </div>
    );
};

export default NewArrival;