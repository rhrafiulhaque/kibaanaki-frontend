import RelatedSingleProduct from './RelatedSingleProduct';

const RelatedProducts = () => {
    return (
        <div className='container'>
            <h1 className='text-3xl my-5 font-medium '>Related Product</h1>
            <div className='grid lg:grid-cols-4 grid-cols-3 lg:gap-6 gap-2'>
                <RelatedSingleProduct />
                <RelatedSingleProduct />
                <RelatedSingleProduct />
                <RelatedSingleProduct />
            </div>
        </div>
    );
};

export default RelatedProducts;