import React from 'react';
import {faPersonDigging} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ComingSoon = () => {
    return (
        <div>
            <div className="container flex items-center justify-center my-10">
                <h1 className='text-red-600 font-extrabold text-6xl text-center'>This Feature is Coming Soon. <br/> Wait for it!! <span><FontAwesomeIcon className='text-gray-600' icon={faPersonDigging}></FontAwesomeIcon></span></h1>
                
            </div>
        </div>
    );
};

export default ComingSoon;