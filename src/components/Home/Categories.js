import React from 'react';
import category1 from './../../img/category/category-1.jpg'
import category2 from './../../img/category/category-2.jpg'
import category3 from './../../img/category/category-3.jpg'
import category4 from './../../img/category/category-4.jpg'
import category5 from './../../img/category/category-5.jpg'
import category6 from './../../img/category/category-6.jpg'

const Categories = () => {
    return (
        <div className='container my-10'>
            <h1 className='text-2xl font-medium uppercase py-5'>shop by category</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                <div className=' relative cursor-pointer group'>
                    <img src={category1} alt="" />
                    <div className='absolute bg-black bg-opacity-40 inset-0 flex justify-center items-center'>
                        <h1 className='text-xl text-white group-hover:scale-125 transition'>Bedroom </h1>
                    </div>
                </div>
                <div className=' relative cursor-pointer group'>
                    <img src={category2} alt="" />
                    <div className='absolute bg-black bg-opacity-40 inset-0 flex justify-center items-center'>
                        <h1 className='text-xl text-white group-hover:scale-125 transition'>Mattresses </h1>
                    </div>
                </div>
                <div className=' relative cursor-pointer group'>
                    <img src={category3} alt="" />
                    <div className='absolute bg-black bg-opacity-40 inset-0 flex justify-center items-center'>
                        <h1 className='text-xl text-white group-hover:scale-125 transition'>Office </h1>
                    </div>
                </div>
                <div className=' relative cursor-pointer group'>
                    <img src={category4} alt="" />
                    <div className='absolute bg-black bg-opacity-40 inset-0 flex justify-center items-center'>
                        <h1 className='text-xl text-white group-hover:scale-125 transition'>Outdoor </h1>
                    </div>
                </div>
                <div className=' relative cursor-pointer group'>
                    <img src={category5} alt="" />
                    <div className='absolute bg-black bg-opacity-40 inset-0 flex justify-center items-center'>
                        <h1 className='text-xl text-white group-hover:scale-125 transition'>Lounges & Sofas </h1>
                    </div>
                </div>
                <div className=' relative cursor-pointer group'>
                    <img src={category6} alt="" />
                    <div className='absolute bg-black bg-opacity-40 inset-0 flex justify-center items-center'>
                        <h1 className='text-xl text-white group-hover:scale-125 transition'>Living & Dining </h1>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Categories;