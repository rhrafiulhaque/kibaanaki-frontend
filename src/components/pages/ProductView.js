import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ProductDetails from '../ProductDetails/ProductDetails';
import { useGetProductQuery } from '../../features/product/productApi';

const ProductView = () => {
    const { id } = useParams();
    console.log(id);
    const { data: product, isLoading, isError, error } = useGetProductQuery(id);
    let content = null;
    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = <p className='text-red-500'>{error}</p>
    }
    if (!isLoading && !isError && product?._id) {
        content =  <ProductDetails product={product}/> 
    }
    if (!isLoading && !isError && !product?._id) {
        content = <p className='text-red-500'>There have no Product</p>
    }
    
    return (
        <div>
            {content}
        </div>
    );
};

export default ProductView;