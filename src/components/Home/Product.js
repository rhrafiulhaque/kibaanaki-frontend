import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, productName, imageUrl, ratings, price } = product;

    function productRating(ratings) {
        const stars = [];
        for (let i = 0; i < ratings; i++) {
            stars.push(<FontAwesomeIcon key={i} className='text-sm text-yellow-400' icon={faStar} />);
        }
        for (let i = ratings; i < 5; i++) {
            stars.push(<FontAwesomeIcon key={i} className='text-sm text-gray-400' icon={faStar} />);
        }
        return stars;
    }
    return (
        <div class="flex flex-col bg-white shadow rounded overflow-hidden">
            <Link to={`/products/${_id}`} className='cursor-pointer'>
                <div class="relative group flex-grow">
                    <img src={imageUrl} class="h-48 w-full object-contain" alt="product_image" />

                    <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 duration-500 opacity-0 group-hover:opacity-100 transition">

                    </div>
                </div>
            </Link>
            <div class="flex-grow py-3 px-4 space-y-1">
                <Link to={`/products/${_id}`}><h1 className="text-base font-semibold text-gray-500 hover:underline">{productName}</h1></Link>
                <p class="text-base text-primary font-medium">{price}</p>
                <div class="flex items-center">
                    {productRating(ratings)}
                    {/* <span class="flex items-center justify-center text-xs">(150)</span> */}
                </div>
            </div>

        </div>

    );
};

export default Product;