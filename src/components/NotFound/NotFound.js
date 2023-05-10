import React from 'react';
import notFound from '../../img/404.jpg'
const NotFound = () => {
    return (
        <div>
            <div className="container">
                <img src={notFound} alt="404" className='w-full' />
            </div>
        </div>
    );
};

export default NotFound;