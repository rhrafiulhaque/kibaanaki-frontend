import React from 'react';
import banner from "../../img/banner-watch.png"

const AdvBanner = () => {
    return (
        <div className='container  my-24  bg-no-repeat bg-cover  py-36 '  style={{backgroundImage: `url(${banner})`}}>
            <div>
                <h1 className='text-primary z-10'>
                    SmartWatch
                </h1>
            </div>
            
        </div>
    );
};

export default AdvBanner;
