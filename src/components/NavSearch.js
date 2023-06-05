import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import img from './img/tazepng.png'
import img1 from './img/plus.png'
import img2 from './img/user (1).png'
import Cookies from 'universal-cookie';
import setting from '../setting.json'


const cookies = new Cookies()


function NavSearch() {
    const [click1, setClick1] = useState(false)

    return (
        <>
            <div className='flex justify-center bg-[#fcfcfcf5] items-center py-3 shadow-lg rounded-b-lg fixed top-0 w-full z-10'>
                <div className='md:w-[70%] w-[90%] flex justify-between items-center'>
                    <Link to='/'>
                        <div className='flex items-center justify-center  hover:scale-110 transition-all duration-500 ease-in select-none cursor-pointer '>
                            <img src={img} className='md:w-[9vw] object-cover md:h-[3vw] w-[30vw] ' />

                        </div>
                    </Link>

                    <div className='flex items-center'>
                        <Link to='/CreatePost'>
                            <div className='flex items-center  hover:scale-110 transition-all duration-500 ease-in'>
                                <img src={img1} className='md:w-[1vw] md:h-[1vw] w-[4vw] h-[4vw] ' />
                                <p className='ml-2 md:text-[1vw] text-[3vw] font-[500] select-none'>Post ýaz</p>
                            </div>
                        </Link>
                        <Link to='/Profile'>
                            <div className='ml-4'>
                                {cookies.get('image')
                                    ?
                                    <img src={cookies.get('image')} className='md:w-[2.5vw] md:h-[2.5vw] w-[7vw] h-[7vw] md:mr-0 mr-3 rounded-full object-cover ' />
                                    :
                                    <img src={img2} className='md:w-[2.5vw] md:h-[2.5vw] w-[7vw] h-[7vw] md:mr-0 mr-3 rounded-full object-cover ' />
                                }

                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {click1 ? <div className=' w-full shadow-md bg-[#ffffffe0] rounded-xl fixed top-[4rem] p-4'><Search /></div> : <div></div>}
        </>
    );
}

export default NavSearch;
