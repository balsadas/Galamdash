import React from 'react';
import { useState } from 'react';
import '../input.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const flag = [
  { id: 1, img: "./image/russia.png" },
  { id: 2, img: './image/turkmenistan.png' }
]


function Nav() {
  const [click, setClick] = useState(0)
  const [dclick, setDclick] = useState(false)


  var showdate = new Date();
  var displaytodaysdate = `${showdate.getDate()}.${showdate.getMonth() + 1}.${showdate.getFullYear()}`;

  return (
    <div className='flex md:justify-center columns-3'>
      <div className='md:w-[20%] hidden md:block'></div>
      <div className='md:w-[60%] md:shadow-lg md:rounded-[15px]'>
        <div className=' bg-slate-100 h-auto w-full flex justify-between items-center md:p-5 p-3 shadow-xl'>
          <div className=' font-semibold select-none text-[3vw] md:text-[1.2vw]'>
            {displaytodaysdate}
          </div>
          <div className='flex '>
            {/* {flag.map((flag, index) => (
              <div className='mr-2' key={index} >

                <img onClick={() => setClick(click => click = index)} className='h-[2vw] w-[2vw] select-none cursor-pointer' src={flag.img} />

                {click == index ? <div className='h-1 bg-[green] rounded-lg '></div> : <div></div>}
              </div>
            ))} */}
            <Link to='/Register'>
              <div onClick={() => setDclick(!dclick)} className='flex select-none items-center group md:mr-2 pr-3  cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
                <img src='./image/user1.png' className='md:w-[1.8vw] md:h-[1.8vw] w-[4vw] h-[4vw]' />
                <h4 className='group-hover:block hidden md:text-[1.1vw] text-[3vw] ml-2 font-bold'>Içeri gir</h4>
              </div>
            </Link>

          </div>
        </div>




        {/* dropdown registrasiya bolanda ulanmaly */}
        {/* <div className={dclick ? 'block z-[999]' : 'hidden'}>
          <Dropdown />
        </div> */}





        <div className='md:p-0 p-4 bg-[white]'>
          <img src='./image/Galamdas.jpg' className='select-none' />
        </div>
        <div  >
          <Navbar />
        </div>
      </div>
      <div className='w-[20%] hidden md:block'></div>
    </div>
  );
}

export default Nav;
