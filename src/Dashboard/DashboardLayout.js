import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
    const [active, setActive] = useState(false);

    return (
        <div className='container grid grid-cols-12 items-start gap-6 pt-4 pb-16'>
            <FontAwesomeIcon icon={faBars} className='cursor-pointer lg:hidden block' onClick={() => setActive(!active)} />
            <div className={active ? 'lg:col-span-3 col-span-12 lg:block bg-white' : 'lg:col-span-3 col-span-12 lg:block hidden bg-white'}>
                <Sidebar />
            </div>
            {children}

        </div>
    );
};

export default DashboardLayout;