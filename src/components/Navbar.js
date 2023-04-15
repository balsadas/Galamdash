import React, { useEffect } from 'react';
import { useState } from 'react';
import Category from './Category';
import Search from './Search';

function Navbar() {
  // const [users, setUsers] = useState(false)



  // const addPost = data => {


  // const headers = new Headers()
  // //headers.append('Content-type', 'application/json;charset-utf8')
  // headers.append('Authorization', 'efjklerlfkdr')


  // const formData= new FormData()
  // formData.append('userId',  data.userId)
  // formData.append('title', data.title)
  // formData.append('body', data.body)

  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'Post',
  //     body: formData,
  //     headers
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => {
  //       if (res.ok && res.status === 200) {
  //         return res.json()
  //       }
  //     })
  //     .then(data => setUsers(data))
  //     .catch(err => console.log(err))

  //   addPost({
  //     userId: 1,
  //     title: 'new Project',
  //     body: 'psot'
  //   })
  // }, [])
  const kat = [
    { id: 1, text: "Şahyrlar" },
    { id: 2, text: 'Poema' },
    { id: 3, text: 'Makala' }
  ]

  const [click, setClick] = useState(false)
  const [click1, setClick1] = useState(false)

  return (
    <>
      <div className='p-4 rounded-b-[15px] bg-[green] flex justify-between'>
        <div className='flex'>
          <div className={click ? 'group flex items-center  mt-[-.8] select-none  scale-125 mr-6  ml-3 transition-all delay-150 duration-500 ease-in-out cursor-pointer' : 'group flex items-center hover:scale-125 hover:mr-6 hover:ml-3 transition-all delay-150 duration-500 ease-in-out cursor-pointer'}
            onClick={() => setClick(!click)}
          >
            <img src='./image/hamburger.png' className='text-[white] mr-2 w-[2vw] h-[2vw]' />
            <h4 className={click ? 'p-1 font-[500] text-[white]' : 'text-[white] text-[1vw] font-bold'}>Ähli Bölümler</h4>
          </div>
          <div className='flex items-center'>
            <ul className='flex ml-3'>
              {kat.map((kat, index) => (
                <li
                  key={index}
                  className='mr-2 text-[white] font-bold cursor-pointer md:hidden lg:block hover:underline hover:scale-125 hover:mr-6 hover:ml-3 transition-all delay-150 duration-500 ease-in-out text-[1vw]'>
                  {kat.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex '>
          <div className='flex group items-center cursor-pointer  hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
            <img src='./image/layer.png' className=' w-[1.8vw] h-[1.8vw]' />
            <h4 className='group-hover:block hidden text-[white] ml-2 font-bold '>Bildiriş goş</h4>
          </div>
          <div
            className={click1 ? 'flex items-center  group ml-4 mb-[-1rem] cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in' : 'flex items-center group ml-4 cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'}
            onClick={() => setClick1(!click1)}
          >
            {click1 ? <img src='./image/loupe1.png' className='w-[1.8vw] h-[1.8vw]' /> : <img src='./image/loupe.png' className='w-[1.8vw] h-[1.8vw]' />}
            <h4 className={click1 ? 'group-hover:block hidden  ml-2 font-bold ' : 'group-hover:block hidden text-[white] ml-2 font-bold '}>Gözleg</h4>
          </div>
          <div className='flex items-center group ml-4 cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
            <img src='./image/user.png' className='w-[1.8vw] h-[1.8vw]' />
            <h4 className='group-hover:block hidden text-[white] ml-2 font-bold'>Içeri gir</h4>
          </div>
        </div>
      </div>
      {click ? <div className=' shadow-md bg-[white] rounded-xl absolute'><Category /></div> : <div></div>}
      {click1 ? <div className=' w-full shadow-md bg-[#ffffffe0] rounded-xl '><Search /></div> : <div></div>}
    </>
  );
}

export default Navbar;
