import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import avatar from '../../img/avatar.png'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AdminSidebar = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(true);
    const logout = () => {
        signOut(auth);
        Navigate('/');
    };
    const [flipPrdouct, setFlipProduct] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className={`col-span-3  bg-[#F9F9FB] h-screen z-20 relative duration-300  ${!open ? 'w-[77px]' : 'w-[220px]'}`} >
            <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faArrowLeft} className={`bg-white ${!open && "rotate-180"} px-[3px] py-[3px] border border-indigo-400 cursor-pointer text-indigo-400 text-2xl rounded-full absolute -right-3 top-5`} />
            {/* account profile Start  */}
            <div className='px py-3 shadow flex items-center gap-4'>
                <div className='flex-shrink-0'>
                    <img className='rounded-full ml-2 w-14 h-14 border border-gray-200 p-1 object-cover' src={avatar} alt="" />
                </div>
                <div className={`flex-grow ${!open && 'scale-0'} duration-300`}>
                    <p className='text-gray-600'>Hello,</p>
                    <h4 className='text-gray-800 font-medium'>{user?.displayName.toUpperCase()} </h4>
                </div>
            </div>
            {/* account profile End */}

            {/* Profile Link Start  */}
            <div className=' shadow rounded px-4 py-2 divide-y divide-gray-200  text-gray-600'>
                {/* single link start  */}
                <NavLink to={'/admin/dashboard'} className='py-2 px-4 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <div className='flex gap-x-4 font-medium capitalize cursor-pointer' >
                        <span className=' text-base'><FontAwesomeIcon icon={faChartBar} /></span>
                        <span className={`flex-1 duration-300 ${!open && 'scale-0'} `}>Dashboard</span>

                    </div>
                </NavLink>



                <div className='py-2 px-4 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <div className='flex gap-x-4 font-medium capitalize cursor-pointer duration-300' onClick={() => setFlipProduct(!flipPrdouct)}>
                        <span className=' text-base'><FontAwesomeIcon icon={faShoppingBag} /></span>
                        <span className={`flex-1 duration-300 ${!open && 'scale-0'}`}>Product</span>
                        <span className={`text-base ${!open && 'scale-0'}`}><FontAwesomeIcon icon={faArrowDown} /></span>

                    </div>
                </div>
                {(flipPrdouct && open) && <>
                    <NavLink to={'/admin/addproduct'} className='relative rounded hover:bg-slate-400 hover:text-white  duration-300 block capitalize py-2 px-2 border-t-gray-400 transition'> Add New Product</NavLink>
                    <NavLink to={'/admin/productlist'} className='relative rounded hover:bg-slate-400 hover:text-white  duration-300 block capitalize py-2 px-2  transition'> Product List</NavLink>
                </>}





                <div className='py-2 px-4 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <div className='flex gap-x-4 font-medium capitalize cursor-pointer'>
                        <span className=' text-base'><FontAwesomeIcon icon={faPeopleGroup} /></span>
                        <span className={`flex-1 duration-300 ${!open && 'scale-0'}`}>Customer</span>
                    </div>
                </div>


                <div className='py-2 px-4 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <div className='flex gap-x-4 font-medium capitalize cursor-pointer'>
                        <span className=' text-base'><FontAwesomeIcon icon={faBoxOpen} /></span>
                        <span className={`flex-1 duration-300 ${!open && 'scale-0'}`}>Order</span>
                    </div>
                </div>
                <div className='py-2 px-4 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <div className='flex gap-x-4 font-medium capitalize cursor-pointer'>
                        <span className=' text-base'><FontAwesomeIcon icon={faComment} /></span>
                        <span className={`flex-1 duration-300 ${!open && 'scale-0'}`}>Reviews</span>
                    </div>
                </div>
                {/* single link end  */}


                {/* single link start  */}
                <div className='py-2 px-4 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300' onClick={logout}>
                    <div className='flex gap-x-4 font-medium capitalize cursor-pointer'>
                        <span className=' text-base'><FontAwesomeIcon icon={faPowerOff} /></span>
                        <span className={`flex-1 duration-300 ${!open && 'scale-0'}`}>Log Out</span>
                    </div>
                </div>
                {/* single link end  */}

            </div>
            {/* Profile Link End */}
        </div>
    );
};

export default AdminSidebar;