import React from 'react';
import { useState } from 'react';
import '../input.css'
import Navbar from './Navbar';

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
          <div className=' font-semibold'>
            {displaytodaysdate}
          </div>
          <div className='flex '>
            {flag.map((flag, index) => (
              <div className='mr-2' key={index} >

                <img onClick={() => setClick(click => click = index)} className='h-[2vw] w-[2vw] ' src={flag.img} />

                {click == index ? <div className='h-1 bg-[green] rounded-lg '></div> : <div></div>}
              </div>
            ))}
          </div>
        </div>
        <img src='./image/Galamdas.jpg' />
        <div>
          <Navbar />
        </div>
      </div>
      <div className='w-[20%]'></div>
    </div>
  );
}

export default Nav;
