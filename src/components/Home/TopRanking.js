import ProductRatings from '../../Utilities/ProductRatings';
import { useGetTopProductSoldQuery } from '../../features/product/productApi';
import Loading from '../Loading/Loading';

const TopRanking = () => {
    const { data: topProduct, isLoading } = useGetTopProductSoldQuery()
    const { products } = topProduct || {}
    let content = ''
    if (isLoading) {
        return <Loading />
    }

    if (!isLoading && products.length > 0) {
        content = products.map((product, i) => (<div className='flex my-1'>
            <div className='relative'>
                <img src={product.imageUrl} className=" object-contain h-24 w-24 " alt="" />
                <span className='absolute -top-0 right-2 bg-primary w-6 h-6 text-sm flex justify-center items-center text-white font-medium rounded-tr-md rounded-bl-md '>{i + 1}</span>
            </div>
            <div className='pl-5'>
                <h1 className='text-lg font-medium'>{product?.productName?.slice(0, 12)}...</h1>
                <p className='text-lg font-medium text-primary'>${product.price}</p>
                <div className='flex  items-center'>
                    <ProductRatings ratings={product.ratings} />
                    <span className='flex items-center justify-center text-xs'>({product.ratingsQuantity})</span>
                </div>
            </div>
        </div>))
    }

    return (
        <div className='container'>
            <h1 className=' text-2xl uppercase text-gray-800 pb-8 font-medium '>Top Ranking</h1>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 lg:gap-6 md:grid md:justify-center md:items-center'>

                {
                    content
                }



                {/* all over  */}



            </div>

        </div>
    );
};

export default TopRanking;