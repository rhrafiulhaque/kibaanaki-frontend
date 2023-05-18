import React, { useState } from 'react';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import TestSidebar from '../components/Sidebar/TestSidebar';

const AdminDashboardLayout = ({children}) => {
    return (
        <div className='container grid grid-cols-12 items-start gap-6 pt-4 pb-16'>
            <AdminSidebar/>
            {children}
            
        </div>
    );
};

export default AdminDashboardLayout;