import React from 'react';
import Cookies from 'universal-cookie';
const cookie = new Cookies()
const cookieRemove = new Cookies()

function Dropdown() {
    return (
    
            <div className=' flex justify-end select-none '>
                <div className=' bg-white md:w-[11vw] w-[35vw] absolute  shadow-lg rounded-lg'>
                    <div className='flex items-center pl-3 p-2 lg:mt-2 cursor-pointer hover:bg-slate-300 w-full'>
                        <img src='./image/userd.png' className='md:w-[1vw] md:h-[1vw] w-[3vw] h-[3vw]' />
                        <p className='ml-2 md:text-[1vw] text-[3vw] '>{cookie.get('nick')}</p>
                    </div>
                    <div className='flex items-center lg:mt-2 p-2 cursor-pointer hover:bg-slate-300 w-full'>
                        <img src='./image/key.png' className='md:w-[1vw] md:h-[1vw] w-[3vw] h-[3vw]' />
                        <p className='ml-2 md:text-[1vw] text-[3vw] '>Paroly üýtget</p>
                    </div>
                    <div className='border mt-1 mb-1'></div>
                    <div  className='flex items-center cursor-pointer  lg:mt-2 pl-3 p-2 lg:mb-3 md:mb-1 hover:bg-slate-300 w-full'>
                        <img src='./image/logout.png' className='md:w-[1vw] md:h-[1vw] w-[3vw] h-[3vw]'/>
                        <p  className='ml-4 md:text-[1vw] text-[3vw]' >Çyk</p>
                    </div>
                </div>
            </div>
        
    );
}

export default Dropdown;
