import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function NavSearch() {
    return (
        <div className='flex justify-center bg-[#fcfcfcf5] items-center py-3 shadow-lg rounded-b-lg fixed top-0 w-full z-10'>
            <div className='w-[70%] flex justify-between items-center'>
                <Link to='/'>
                    <div className='flex items-center justify-center  hover:scale-110 transition-all duration-500 ease-in select-none cursor-pointer '>
                        <img src='./image/tazepng.png' className='w-[9vw] object-cover h-[3vw] ' />

                    </div>
                </Link>
                <div className='w-[40%] flex justify-center '>
                    <Search />
                </div>
                <div className='flex'>
                    <div className='flex items-center  hover:scale-110 transition-all duration-500 ease-in'>
                        <img src='./image/plus.png' className='w-[1vw] h-[1vw] ' />
                        <p className='ml-2 text-[1vw] font-[500] select-none'>Post ýaz</p>
                    </div>
                    <div className='ml-4'>
                        <img src='./photo/photo20.jpg' className='w-[2.5vw] h-[2.5vw] rounded-full object-cover ' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavSearch;
