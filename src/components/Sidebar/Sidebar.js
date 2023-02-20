import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import avatar from '../../img/avatar.png'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className='col-span-3'>
            {/* account profile Start  */}
            <div className='px-4 py-3 shadow flex items-center gap-4'>
                <div className='flex-shrink-0'>
                    <img className='rounded-full w-14 h-14 border border-gray-200 p-1 object-cover' src={avatar} alt="" />
                </div>
                <div className='flex-grow'>
                    <p className='text-gray-600'>Hello,</p>
                    <h4 className='text-gray-800 font-medium'>Alexa </h4>
                </div>
            </div>
            {/* account profile End */}

            {/* Profile Link Start  */}
            <div className='mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600'>
                {/* single link start  */}
                <div className='space-y-1 pl-8'>
                    <a href="" className='relative text-primary block font-medium capitalize' >
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                        Manage Account
                    </a>
                    <a href="" className='relative hover:text-primary block capitalize transition'> Profile Info</a>
                    <a href="" className='relative hover:text-primary block capitalize transition'> Manage Address</a>
                    <a href="" className='relative hover:text-primary block capitalize transition'> Change Password</a>
                </div>
                {/* single link end  */}
                {/* single link start  */}
                <div className='space-y-1 pl-8 pt-5'>
                    <a href="" className='relative text-primary block font-medium capitalize' >
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                        My Order History
                    </a>
                    <a href="" className='relative hover:text-primary block capitalize transition'> My Returns</a>
                    <a href="" className='relative hover:text-primary block capitalize transition'> My Cacellations</a>
                    <a href="" className='relative hover:text-primary block capitalize transition'> My Reviews</a>
                </div>
                {/* single link end  */}
                {/* single link start  */}
                <div className='space-y-1 pl-8 pt-5'>
                    <a href="" className='relative text-primary block font-medium capitalize' >
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                        My Cart History
                    </a>
                    <a href="" className='relative hover:text-primary block capitalize transition'> Cart List</a>
                </div>
                {/* single link end  */}
                {/* single link start  */}
                <div className='space-y-1 pl-8 pt-5'>
                    <a href="" className='relative text-gray-800 block font-medium capitalize' >
                        <span className=' absolute -left-8 top-0 text-base'>
                            <FontAwesomeIcon icon={faPowerOff} />
                        </span>
                        Log Out
                    </a>
                </div>
                {/* single link end  */}

            </div>
            {/* Profile Link End */}
        </div>
    );
};

export default Sidebar;