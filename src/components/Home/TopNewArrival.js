import React from 'react';
import Product from './Product';

import Loading from '../Loading/Loading';
import { useGetProductsQuery } from '../../features/product/productApi';

const TopNewArrival = () => {
    const {data:products, isLoading, isError, error} = useGetProductsQuery();
    let content=null;
    if(isLoading){
        content = <Loading/>
    }
    if(!isLoading && isError){
        content = <p className='text-red-500'>{error}</p>
    }
    if(!isLoading && !isError && products.length>0){
        content = products.map((product)=><Product key={product.id} product={product}/>)
    }
    if(!isLoading && !isError && products.length===0){
        content = <p className='text-red-500'>There have no Products</p>
    }


    return (
        <div className='container my-5'>
            <h2 className='uppercase text-2xl font-medium text-gray-800 mb-6'>Products</h2>
            <div className='grid grid-cols-4 gap-6'>
                {content}
            </div>

        </div>
    );
};

export default TopNewArrival;