import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function NavSearch() {
    const [click1, setClick1] = useState(false)

    return (
        <>
            <div className='flex justify-center bg-[#fcfcfcf5] items-center py-3 shadow-lg rounded-b-lg fixed top-0 w-full z-10'>
                <div className='md:w-[70%] w-[90%] flex justify-between items-center'>
                    <Link to='/'>
                        <div className='flex items-center justify-center  hover:scale-110 transition-all duration-500 ease-in select-none cursor-pointer '>
                            <img src='./image/tazepng.png' className='md:w-[9vw] object-cover md:h-[3vw] w-[30vw] ' />

                        </div>
                    </Link>
                    <div
                        className='flex items-center  cursor-pointer'
                        onClick={() => setClick1(!click1)}
                    >
                    <img src='./image/loupe1.png' className='md:w-[1.8vw] md:h-[1.8vw] w-[4vw] h-[4vw]' /> 
                       
                    </div>
                    <div className='flex'>
                        <div className='flex items-center  hover:scale-110 transition-all duration-500 ease-in'>
                            <img src='./image/plus.png' className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] ' />
                            <p className='ml-2 md:text-[1vw] text-[3vw] font-[500] select-none'>Post ýaz</p>
                        </div>
                        <div className='ml-4'>
                            <img src='./photo/photo20.jpg' className='md:w-[2.5vw] md:h-[2.5vw] w-[7vw] h-[7vw] md:mr-0 mr-3 rounded-full object-cover ' />
                        </div>
                    </div>
                </div>
            </div>
            {click1 ? <div className=' w-full shadow-md bg-[#ffffffe0] rounded-xl fixed top-[4rem] p-4'><Search /></div> : <div></div>}
        </>
    );
}

export default NavSearch;
