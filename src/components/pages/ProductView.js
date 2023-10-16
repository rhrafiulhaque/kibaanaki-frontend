import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/product/productApi';
import Loading from '../Loading/Loading';
import ProductDetails from '../ProductDetails/ProductDetails';

const ProductView = () => {
    const { id } = useParams();
    const { data: getProduct, isLoading, isError, error } = useGetProductQuery(id);
    const { product } = getProduct || {}
    let content = null;
    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = <p className='text-red-500'>{error}</p>
    }
    if (!isLoading && !isError && product?._id) {
        content = <ProductDetails product={product} />
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