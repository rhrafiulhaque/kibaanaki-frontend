import { faArrowDown, faArrowLeft, faBarsProgress, faBoxOpen, faChartBar, faComment, faPeopleGroup, faPowerOff, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { removeAuth } from '../../features/auth/authSlice';
import avatar from '../../img/avatar.png';

const AdminSidebar = () => {
    const user = useSelector((state) => state.auth.userDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const logout = () => {
        dispatch(removeAuth())
        localStorage.removeItem('accessToken');
        navigate('/');
    };
    const [flipPrdouct, setFlipProduct] = useState(false);
    const [flipCategory, setFlipCategory] = useState(false);
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
                    <h4 className='text-gray-800 font-medium'>{user?.name.toUpperCase()} </h4>
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
                        <Link to={'/admin/userlist'} className={`flex-1 duration-300 ${!open && 'scale-0'}`}>Customer</Link>
                    </div>
                </div>


                <div className='py-2 px-4 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <div className='flex gap-x-4 font-medium capitalize cursor-pointer duration-300' onClick={() => setFlipCategory(!flipCategory)}>
                        <span className=' text-base'><FontAwesomeIcon icon={faBarsProgress} /></span>
                        <span className={`flex-1 duration-300 ${!open && 'scale-0'}`}>Categories</span>
                        <span className={`text-base ${!open && 'scale-0'}`}><FontAwesomeIcon icon={faArrowDown} /></span>

                    </div>
                </div>
                {(flipCategory && open) && <>
                    <NavLink to={'/admin/addcategory'} className='relative rounded hover:bg-slate-400 hover:text-white  duration-300 block capitalize py-2 px-2 border-t-gray-400 transition'> Add New Category</NavLink>
                    <NavLink to={'/admin/categorylist'} className='relative rounded hover:bg-slate-400 hover:text-white  duration-300 block capitalize py-2 px-2  transition'> Category List</NavLink>
                </>}

                <div className='py-2 px-4 rounded block w-full hover:bg-slate-400 hover:text-white transition duration-300'>
                    <Link to={'/admin/orderlist'} className='flex gap-x-4 font-medium capitalize cursor-pointer'>
                        <span className=' text-base'><FontAwesomeIcon icon={faBoxOpen} /></span>
                        <span className={`flex-1 duration-300 ${!open && 'scale-0'}`}>Order</span>
                    </Link>
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