import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='container grid grid-cols-12 items-start gap-6 pt-4 pb-16'>
            <Sidebar/>
            {children}
            
        </div>
    );
};

export default DashboardLayout;