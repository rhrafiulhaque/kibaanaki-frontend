import { faAddressCard, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeAuth } from '../../features/auth/authSlice';
import avatar from '../../img/avatar.png';

const Sidebar = () => {
    const user = useSelector((state) => state.auth.userDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(removeAuth())
        localStorage.removeItem('accessToken');
        navigate('/');
    };
    return (
        <div className='col-span-3'>
            {/* account profile Start  */}
            <div className='px-4 py-3 shadow flex items-center gap-4'>
                <div className='flex-shrink-0'>
                    <img className='rounded-full w-14 h-14 border border-gray-200 p-1 object-cover' src={avatar} alt="" />
                </div>
                <div className='flex-grow'>
                    <p className='text-gray-600'>Hello,</p>
                    <h4 className='text-gray-800 font-medium'>{user?.name.toUpperCase()} </h4>
                </div>
            </div>
            {/* account profile End */}




            {/* Profile Link Start  */}
            <div className='mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600'>


                {/* single link start  */}
                <div className='space-y-1 pl-8 pt-5'>
                    <p className='relative text-primary block font-medium capitalize' >
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                        My Dashboard
                    </p>
                    <Link to={`/userdashboard/${user?.email}`} className='relative hover:text-primary block capitalize transition'> Dashboard</Link>
                </div>
                {/* single link end  */}





                {/* single link start  */}
                <div className='space-y-1 pl-8'>
                    <p className='relative text-primary block font-medium capitalize' >
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                        Manage Account
                    </p>
                    <Link to={`/profile/${user.email}`} className='relative hover:text-primary block capitalize transition'> Profile Info</Link>
                    <Link to={'/user-address'} className='relative hover:text-primary block capitalize transition'> Manage Address</Link>
                </div>
                {/* single link end  */}
                {/* single link start  */}
                <div className='space-y-1 pl-8 pt-5'>
                    <p href="" className='relative text-primary block font-medium capitalize' >
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                        My Order History
                    </p>
                    <Link to={'/getorderlist'} className='relative hover:text-primary block capitalize transition'> My Orders</Link>
                    <Link to={'/'} className='relative hover:text-primary block capitalize transition'> My Cacellations</Link>
                    <Link to={'/'} className='relative hover:text-primary block capitalize transition'> My Reviews</Link>
                </div>
                {/* single link end  */}





                {/* single link start  */}
                <div className='space-y-1 pl-8 pt-5'>
                    <Link href="" className='relative text-gray-800 block font-medium capitalize' onClick={logout} >
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faPowerOff} />
                        </span>
                        Log Out
                    </Link>
                </div>
                {/* single link end  */}

            </div>
            {/* Profile Link End */}
        </div>
    );
};

export default Sidebar;