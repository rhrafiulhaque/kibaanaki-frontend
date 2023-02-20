import { faAddressCard, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../../img/avatar.png'
import React from 'react';
import DashboardLayout from '../DashboardLayout';

const UserProfile = () => {
    return (
        <DashboardLayout>
            <div className='col-span-9 '>
                <h2 className='font-semibold text-lg text-gray-600 py-5'>Profile Information</h2>
                <form action="">
                    <div className='space-y-4'>
                        <div>
                            <label className="text-gray-600 mb-2 block">Name <span className="text-primary">*</span></label>
                            <input type="text" className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className="text-gray-600 mb-2 block">BirthDate <span className="text-primary">*</span></label>
                                <input type="date" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Gender <span className="text-primary">*</span></label>
                                <select name="" id="" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                </select>

                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className="text-gray-600 mb-2 block">Email<span className="text-primary">*</span></label>
                                <input type="email" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Mobile Number<span className="text-primary">*</span></label>
                                <input type="number" className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                            </div>
                        </div>
                    </div>
                    <button className='bg-primary text-white px-4 py-2 rounded mt-5 border border-primary hover:bg-transparent hover:text-primary transition'>Update</button>
                </form>

            </div>

        </DashboardLayout>
    );
};

export default UserProfile;