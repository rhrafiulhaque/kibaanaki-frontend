import React, { useState } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TestSidebar = () => {
    const  [open, setOpen] = useState(true);

    return (
        <div className={`bg-indigo-500 h-screen p-5 pt-8 ${open?'w-72':'w-20'} relative duration-300`}>
            <FontAwesomeIcon onClick={()=>setOpen(!open)} icon={faArrowLeft} className={`bg-white ${!open && "rotate-180"} px-[8px] py-[7px] border border-indigo-400 cursor-pointer text-indigo-400 text-3xl rounded-full absolute -right-9 top-5`}/>
            <div className="inline-flex">
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} className={`bg-amber-300 text-2xl rounded-full cursor-pointer p-2 mr-2 duration-500 ${open&& "rotate-[360deg]"}`}/>
                <h1 className={`text-white text-2xl origin-left font-medium duration-300 mt-1 ${!open&&"scale-0"}`}>Khela Hobe! </h1>
            </div>

            <div className={`flex items-center rounded-md bg-[#344C5E] mt-6 px-4 py-4 ${!open &&'scale-0'} duration-300 `}>
                <FontAwesomeIcon className='text-white text-lg block float-left cursor-pointer mr-2' icon={faSearch}/>
                <input type="text"  placeholder='Search' className='text-base bg-transparent text-white  w-full focus:outline-none' />
            </div>

            <div>
                <ul className='pt-2'>
                    <li className={`text-gray-300 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-200 hover:text-gray-800 duration-300 rounded-md `}>
                        <span><FontAwesomeIcon className='text-2xl block float-left' icon={faDashboard}/></span>
                        <span className={`font-medium flex-1 duration-200 ${!open&&'hidden'}`}>Dashboard</span>
                    </li>
                    <li className={`text-gray-300 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-200 hover:text-gray-800 duration-300 rounded-md `}>
                        <span><FontAwesomeIcon className='text-2xl block float-left' icon={faDashboard}/></span>
                        <span className={`font-medium flex-1 duration-200 ${!open&&'hidden'}`}>Pages</span>
                    </li>
                    <li className={`text-gray-300 text-lg mt-10  flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-200 hover:text-gray-800 duration-300 rounded-md `}>
                        <span><FontAwesomeIcon className='text-2xl block float-left' icon={faDashboard}/></span>
                        <span className={`font-medium flex-1 duration-200 ${!open&&'hidden'}`}>Products</span>
                        <span>
                            <FontAwesomeIcon icon={faArrowDown}/>
                        </span>
                    </li>
                    <ul>
                        <li className={`text-gray-300 flex text-lg items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-200 rounded-md duration-300 hover:text-gray-600 `}>Add Product</li>
                    </ul>
                    <li className={`text-gray-300 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-200 hover:text-gray-800 duration-300 rounded-md `}>
                        <span><FontAwesomeIcon className='text-2xl block float-left' icon={faDashboard}/></span>
                        <span className={`font-medium flex-1 duration-200 ${!open&&'hidden'}`}>Inbox</span>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default TestSidebar;