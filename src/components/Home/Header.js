import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetKeyword, setKeyword } from '../../features/filter/filterSlice';
import AccountFlip from './AccountFlip';

const Header = () => {
    const [flip, setFlip] = useState(false);
    const cartProducts = useSelector((state) => state.cart.cart)
    const user = useSelector((state) => state.auth.userDetails);

    const dispatch = useDispatch()


    const handleFlip = () => {
        setFlip(!flip);
    }

    return (
        <header className='py-4 shadow-sm bg-white lg:block hidden '>
            <div className='container flex justify-between items-center '>
                <Link to={'/'} onClick={() => dispatch(resetKeyword())} className=' uppercase font-semibold text-2xl'>Kinbaa<span className=' text-primary'>Naki?</span></Link>
                <div className='w-full max-w-xl relative flex'>
                    <span className='absolute left-4 top-3 text-lg text-gray-400'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input type="text" onChange={(e) => dispatch(setKeyword(e.target.value))} placeholder='Search' className='w-full border border-primary pl-12 py-3 pr-3 rounded-1-md focus:outline-none' />
                    <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-[#FD3D57] transition'>Search</button>
                </div>
                <div className='flex  space-x-8'>
                    <Link to={'/cart'} className='text-center text-gray-500  transition relative'>
                        <span className='text-2xl'>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                        <div className='text-xs leading-3'>Cart</div>
                        <span className='absolute right-0 -top-1 w-5 h-5 rounded-full bg-[#FD3D57] flex items-center justify-center text-white text-xs'>{cartProducts.length}</span>

                    </Link>

                    <Link className='text-center text-gray-500 hover:text-[#FD3D57] transition relative duration-300' onClick={handleFlip}>
                        <span className='text-2xl'>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <div className='text-xs leading-3'>{user ? user.name : 'Account'}</div>
                        {flip && <AccountFlip />}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;