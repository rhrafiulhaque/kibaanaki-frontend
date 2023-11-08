import { faBars, faBed, faChair, faPhone, faShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetKeyword } from '../../features/filter/filterSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <nav className='bg-gray-800 lg:block hidden'>
            <div className='container flex '>
                <div className=' text-white px-8 py-4 bg-primary flex items-center justify-center cursor-pointer relative group'>
                    <span className=''>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                    <span className='capitalize ml-2'>All Categories</span>

                    <div className='absolute bg-white w-full left-0 top-full shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-10 '>
                        <Link to={'/comingsoon'} className='px-6 py-3 flex items-center hover:bg-gray-100 transition'>
                            <FontAwesomeIcon className='w-5 h-5 object-contain text-primary' icon={faChair} />
                            <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
                        </Link>
                        <Link to={'/comingsoon'} className='px-6 py-3 flex items-center hover:bg-gray-100 transition'>
                            <FontAwesomeIcon className='w-5 h-5 object-contain text-primary' icon={faBed} />
                            <span className='ml-6 text-gray-600 text-sm'>Bed</span>
                        </Link>
                        <Link to={'/comingsoon'} className='px-6 py-3 flex items-center hover:bg-gray-100 transition'>
                            <FontAwesomeIcon className='w-5 h-5 object-contain text-primary' icon={faPhone} />
                            <span className='ml-6 text-gray-600 text-sm'>Phone</span>
                        </Link>
                        <Link to={'/comingsoon'} className='px-6 py-3 flex items-center hover:bg-gray-100 transition'>
                            <FontAwesomeIcon className='w-5 h-5 object-contain text-primary' icon={faShirt} />
                            <span className='ml-6 text-gray-600 text-sm'>Shirt</span>
                        </Link>

                    </div>
                </div>

                <div className='flex items-center justify-center flex-grow pl-12'>
                    <div className='flex items-center space-x-6 capitalize'>
                        <Link to={'/'} onClick={() => dispatch(resetKeyword())} className='text-gray-200 hover:text-white transition'>Home</Link>
                        <Link to={'/comingsoon'} className='text-gray-200 hover:text-white transition'>Shop</Link>
                        <Link to={'/comingsoon'} className='text-gray-200 hover:text-white transition'>About Us</Link>
                        <Link to={'/comingsoon'} className='text-gray-200 hover:text-white transition'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;