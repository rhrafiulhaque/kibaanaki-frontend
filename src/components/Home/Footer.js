import React from 'react';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bankcard from '../../img/methods.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#F3F3F3] mt-14 pt-20 px-7'>
                <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-center items-center gap-6'>
                    <div className='space-y-3 max-w-sm'>
                        <h1 className='uppercase text-3xl font-semibold'>Kinbaa<span className='text-primary'>Naki?</span></h1>
                        <p>We are the best E-commerce in Bangladesh.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

                    </div>
                    <div>
                        <h1 className='uppercase text-xl py-3'>My account</h1>
                        <ul className='space-y-2'>
                            <li><Link to={'/comingsoon'}>Orders</Link></li>
                            <li><Link to={'/comingsoon'}>Wishlist</Link></li>
                            <li><Link to={'/comingsoon'}>Track Order</Link></li>
                            <li><Link to={'/comingsoon'}>Manage Account</Link></li>
                            <li><Link to={'/comingsoon'}>Return Order</Link></li>
                        </ul>

                    </div>
                    <div>
                        <h1 className='uppercase text-xl py-3'>Information</h1>
                        <ul className='space-y-2'>
                            <li><Link to={'/comingsoon'}>About Us</Link></li>
                            <li><Link to={'/comingsoon'}>Return Policy</Link></li>
                            <li><Link to={'/comingsoon'}>Terms & Condition</Link></li>
                            <li><Link to={'/comingsoon'}>Privacy Policy</Link></li>
                            <li><Link to={'/comingsoon'}>FAQ</Link></li>
                        </ul>

                    </div>

                    <div className='space-y-2'>
                        <h1 className='uppercase text-xl'>Contact</h1>
                        <p><FontAwesomeIcon className='pr-2' icon={faLocation} /> Dhaka Badda Trade International  1208 </p>
                        <p><FontAwesomeIcon className='pr-2' icon={faPhone} /> +5888 5589 555 </p>
                        <p><FontAwesomeIcon className='pr-2' icon={faEnvelope} /> info@kinbaanaki.com </p>
                        <div className='flex gap-2 mt-2'>
                            <FontAwesomeIcon className='p-3  rounded-full bg-[#3B5998] text-white  flex justify-center items-center' icon={faFacebookF} />
                            <FontAwesomeIcon className='p-3 rounded-full bg-[#18B3EF] text-white  flex justify-center items-center' icon={faTwitter} />
                            <FontAwesomeIcon className='p-3  rounded-full bg-[#D53982] text-white  flex justify-center items-center' icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#2B2D42] text-center py-5 w-full mt-3 px-8 flex justify-between items-center'>
                <p className='text-white'><span className=' uppercase text-white'>kinbaanaki</span>- All rights Reserved @2023</p>
                <img src={bankcard} className="w-1/5" alt="" />
            </div>
        </div>
    );
};

export default Footer;