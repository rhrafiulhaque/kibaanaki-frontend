import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import avatar from '../../img/avatar.png'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AdminSidebar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        Navigate('/');
    };
    const [flipPrdouct, setFlipProduct] = useState(false);
    const handleFlipProduct = () => {
        setFlipProduct(!flipPrdouct);
    }
    return (
        <div className='col-span-3 bg-[#F9F9FB]'>
            {/* account profile Start  */}
            <div className='px-4 py-3 shadow flex items-center gap-4'>
                <div className='flex-shrink-0'>
                    <img className='rounded-full w-14 h-14 border border-gray-200 p-1 object-cover' src={avatar} alt="" />
                </div>
                <div className='flex-grow'>
                    <p className='text-gray-600'>Hello,</p>
                    <h4 className='text-gray-800 font-medium'>{user?.displayName.toUpperCase()} </h4>
                </div>
            </div>
            {/* account profile End */}

            {/* Profile Link Start  */}
            <div className=' shadow rounded px-4 py-2 divide-y divide-gray-200  text-gray-600'>
                {/* single link start  */}
                <div className=' py-2 px-10 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <Link to={'/comingsoon'} className='relative  font-medium capitalize'>
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faChartBar} />
                        </span>Dashboard
                    </Link>
                </div>



                <div className=' py-2 px-10 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <div className='relative  font-medium capitalize cursor-pointer' onClick={handleFlipProduct}>
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </span>Product <span className=' absolute right-0 top-0 text-base'>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </span>
                       
                    </div>
                    {flipPrdouct && <>
                            <Link to={'/admin/dashboard'} className='relative hover:text-primary hover:bg-white block capitalize py-2 px-2 border-t-gray-400 transition'> Add New Product</Link>
                            <Link to={'/comingsoon'} className='relative hover:text-primary  hover:bg-white block capitalize py-2 px-2  transition'> Product List</Link>
                        </>}
                </div>




                <div className=' py-2 px-10 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <Link to={'/'} className='relative  font-medium capitalize'>
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>Customer
                    </Link>
                </div>


                <div className=' py-2 px-10 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <Link to={'/'} className='relative  font-medium capitalize'>
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faBoxOpen} />
                        </span>Orders
                    </Link>
                </div>
                <div className=' py-2 px-10 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <Link to={'/'} className='relative  font-medium capitalize'>
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faComment} />
                        </span>Reviews
                    </Link>
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

export default AdminSidebar;