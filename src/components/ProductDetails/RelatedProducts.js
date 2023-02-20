import React from 'react';
import RelatedSingleProduct from './RelatedSingleProduct';

const RelatedProducts = () => {
    return (
        <div className='container'>
            <h1 className='text-3xl my-5 font-medium '>Related Product</h1>
            <div className='grid grid-cols-4 gap-6'>
                <RelatedSingleProduct />
                <RelatedSingleProduct />
                <RelatedSingleProduct />
                <RelatedSingleProduct />
            </div>
        </div>
    );
};

export default RelatedProducts;