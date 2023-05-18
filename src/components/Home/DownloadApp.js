import React from 'react';
import mobile from '../../img/mobileApp.png'

const DownloadApp = () => {
    return (
        <div className='container my-24 bg-[#F3F3F3] py-24'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-24'>
                <img src={mobile} alt="" className=' img-contain' />

                <div className='flex  justify-center items-center'>
                    <div className=' space-y-7'>
                        <h1 className=' text-3xl font-semibold'>Download KINBAA<span className='text-primary'>NAKI?</span> App Now!</h1>
                        <p className='pr-24'>Shopping fastly and easily mnore with our app. Get a link to <br /> download the app on your phone</p>

                        <div className='w-full max-w-md relative flex'>
                            <input type="text" placeholder='Email address' className='w-full border border-primary pl-3 py-3 rounded-l-md focus:outline-none' />
                            <button className=' bg-primary text-white px-8 rounded-r-md border border-primary hover:bg-transparent hover:text-primary transition'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DownloadApp;