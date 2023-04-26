import React from 'react';
import { useState } from 'react';
import '../input.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const flag = [
  { id: 1, img: "./image/russia.png" },
  { id: 2, img: './image/turkmenistan.png' }
]


function Nav() {
  const [click, setClick] = useState(0)



  var showdate = new Date();
  var displaytodaysdate = `${showdate.getDate()}.${showdate.getMonth() + 1}.${showdate.getFullYear()}`;

  return (
    <div className='flex justify-center columns-3'>
      <div className='w-[20%]'></div>
      <div className='w-[60%] shadow-lg rounded-[15px]'>
        <div className=' bg-slate-100 h-auto w-full flex justify-between items-center p-5 shadow-xl'>
          <div className=' font-semibold select-none'>
            {displaytodaysdate}
          </div>
          <div className='flex '>
            {/* {flag.map((flag, index) => (
              <div className='mr-2' key={index} >

                <img onClick={() => setClick(click => click = index)} className='h-[2vw] w-[2vw] select-none cursor-pointer' src={flag.img} />

                {click == index ? <div className='h-1 bg-[green] rounded-lg '></div> : <div></div>}
              </div>
            ))} */}
            <Link to="/Profile">
              <div className='flex items-center group ml-4 cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
                <img src='./image/user1.png' className='w-[1.8vw] h-[1.8vw]' />
                <h4 className='group-hover:block hidden md:text-[1.1vw] ml-2 font-bold'>Içeri gir</h4>
              </div>
            </Link>
          </div>
        </div>
        <img src='./image/Galamdas.jpg' className='select-none' />
        <div className='sticky top-0 z-50'>
          <Navbar />
        </div>
      </div>
      <div className='w-[20%]'></div>
    </div>
  );
}

export default Nav;
