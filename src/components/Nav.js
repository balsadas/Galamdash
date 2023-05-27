import React, { useContext } from 'react';
import { useState } from 'react';
import '../input.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import setting from '../setting.json'
import Cookies from 'universal-cookie';


const cookies = new Cookies()
console.log(cookies.get('token'))
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

            {!cookies.get('token') && <Link to='/Register'>
              <div  className='flex select-none items-center group md:mr-2 pr-3  cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
                <img src='./image/user1.png' className='md:w-[1.8vw] md:h-[1.8vw] w-[4vw] h-[4vw]' />
                <h4 className='group-hover:block hidden md:text-[1.1vw] text-[3vw] ml-2 font-bold'>Içeri gir</h4>
              </div>
            </Link>}
            {cookies.get('token') &&
            <div onClick={() => setDclick(!dclick)} className='flex select-none items-center group md:mr-2 pr-3  cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
              <img src={ `${setting.SERVER}/${cookies.get('image')}`  } className='md:w-[1.8vw] md:h-[1.8vw] w-[4vw] h-[4vw]'/>
            </div>}
          </div>
        </div>




        {/* dropdown registrasiya bolanda ulanmaly */}
          <div className={dclick ? 'block z-[999]' : 'hidden'}>
          <div className=' flex justify-end select-none '>
          <div className=' bg-white md:w-[11vw] w-[35vw] absolute  shadow-lg rounded-lg'>
              <div className='flex items-center pl-3 p-2 lg:mt-2 cursor-pointer hover:bg-slate-300 w-full'>
                  <img src='./image/userd.png' className='md:w-[1vw] md:h-[1vw] w-[3vw] h-[3vw]' />
                  <p className='ml-2 md:text-[1vw] text-[3vw] '>{cookies.get('nick')}</p>
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
  
        </div>





        <div className='md:p-0 p-4 bg-[white]'>
          <img src='./image/Galamdas.jpg' className='select-none' />
        </div>
        <div  >
          <Navbar change={change} setChange={setChange} />
        </div>
      </div>
      <div className='w-[20%] hidden md:block'></div>
    </div>
  );
}

export default Nav;
