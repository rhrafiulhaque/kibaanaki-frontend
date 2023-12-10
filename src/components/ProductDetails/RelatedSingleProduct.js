import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tv from './../../img/tv.png';

const RelatedSingleProduct = () => {
    return (
        <div className='bg-white shadow rounded '>
            <div className='relative group'>
                <img src={tv} alt="TV" />
            </div>
            <div className='py-3 px-4 space-y-1'>
                <h1 className='lg:text-base text-xs  font-semibold text-gray-500'>SAMSUNG 27" Class Curved</h1>
                <p className='text-base text-primary font-medium'> $45.00</p>
                <div className='flex items-center'>
                    <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                    <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                    <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                    <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                    <FontAwesomeIcon className=' text-sm text-yellow-400' icon={faStar} />
                    <span className='flex items-center justify-center text-xs'>(150)</span>
                </div>
            </div>
        </div>
    );
};

export default RelatedSingleProduct;