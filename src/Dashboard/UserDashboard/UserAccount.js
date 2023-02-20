import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import avatar from '../../img/avatar.png'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/Sidebar/Sidebar';
import DashboardLayout from '../DashboardLayout';

const UserAccount = () => {
    return (
        <DashboardLayout>
            {/* Profile Info Start  */}
            <div className='col-span-9 grid grid-cols-3 gap-4'>
                {/* single card start  */}
                <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='font-medium text-gray-800 text-lg'>Personal Profile</h3>
                        <a href="" className='text-primary'>Edit</a>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-gray-700 font-medium'>Alexa</h4>
                        <p className='text-gray-800'>example@gmail.com</p>
                        <p className='text-gray-800'>123 456 789</p>

                    </div>

                </div>
                {/* single card End  */}
                {/* single card start  */}
                <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='font-medium text-gray-800 text-lg'>Personal Profile</h3>
                        <a href="" className='text-primary'>Edit</a>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-gray-700 font-medium'>Alexa</h4>
                        <p className='text-gray-800'>example@gmail.com</p>
                        <p className='text-gray-800'>123 456 789</p>

                    </div>

                </div>
                {/* single card End  */}
                {/* single card start  */}
                <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='font-medium text-gray-800 text-lg'>Personal Profile</h3>
                        <a href="" className='text-primary'>Edit</a>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-gray-700 font-medium'>Alexa</h4>
                        <p className='text-gray-800'>example@gmail.com</p>
                        <p className='text-gray-800'>123 456 789</p>

                    </div>

                </div>
                {/* single card End  */}

            </div>
            {/* Profile Info End  */}
        </DashboardLayout>
    );
};

export default UserAccount;