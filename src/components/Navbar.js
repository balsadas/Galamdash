import React, { useEffect } from 'react';
import { useState } from 'react';
import Category from './Category';
import Search from './Search';
import setting from '../setting.json'
import { error } from 'console';

function Navbar() {
  const [data,setData]=useState([])

  const fetchCat = async() =>{
      try{
        const cat =await axios.get(`${setting.SERVER}/api/catergory`)
        console.log(cat,'cat')
        setData(cat)
      }
      catch{
        
      }
  }
 
  const kat = [
    { id: 1, text: "Şahyrlar" },
    { id: 2, text: 'Poema' },
    { id: 3, text: 'Makala' }
  ]

  const [click, setClick] = useState(false)
  const [click1, setClick1] = useState(false)

  return (
    <>
    <div >
      <div className='md:p-4 p-2 md:rounded-b-[15px] bg-[green] flex justify-between select-none relative '>
        <div className='flex'>
          <div className={click ? 'group flex items-center  mt-[-.8] select-none  scale-125 mr-6  ml-3 transition-all delay-150 duration-500 ease-in-out cursor-pointer' : 'group flex items-center hover:scale-125 hover:mr-6 hover:ml-3 transition-all delay-150 duration-500 ease-in-out cursor-pointer'}
            onClick={() => setClick(!click)}
          >
            <img src='./image/hamburger.png' className='text-[white] mr-2 md:w-[2vw] md:h-[2vw] w-[5vw] h-[5vw]'  />
            <h4 className={click ? 'p-1 font-[500] md:text-[1vw] text-[2vw] text-[white]' : 'text-[white] md:text-[1vw] text-[2.5vw] font-bold'}>Ähli Bölümler</h4>
          </div>

        </div>
        <div className='flex '>
          <div className='flex  items-center cursor-pointer  hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
            <img src='./image/layer.png' className=' md:w-[1.8vw] md:h-[1.8vw] w-[4.5vw] h-[4.5vw]' />
            <h4 className='  text-[white] ml-2 font-bold md:text-[1vw] text-[3vw] '>Bildiriş goş</h4>
          </div>
          <div
            className={click1 ? 'flex items-center   ml-4 mb-[-1rem] cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in' : 'flex items-center group ml-4 cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'}
            onClick={() => setClick1(!click1)}
          >
            {click1 ? <img src='./image/loupe1.png' className='md:w-[1.8vw] md:h-[1.8vw] w-[4vw] h-[4vw]' /> : <img src='./image/loupe.png' className='md:w-[1.8vw] md:h-[1.8vw] w-[4.5vw] h-[4.5vw]' />}
            <h4 className={click1 ? '  ml-2 md:text-[1vw] font-bold text-[3vw]' : ' text-[white] md:text-[1vw] ml-2 font-bold text-[3vw]'}>Gözleg</h4>
          </div>
         
        </div>
      </div>
      { click ? <div className=' shadow-md bg-[white] rounded-xl absolute'><Category  /></div> : <div></div>}
      {click1 ? <div className=' w-full shadow-md bg-[#ffffffe0] rounded-xl p-4'><Search /></div> : <div></div>}
      </div>
    </>
  );
}

export default Navbar;
