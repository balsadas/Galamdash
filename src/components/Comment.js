import React from 'react';
import img1 from './photo12.jpg'
import img2 from '../img/reply.png'
import { useState } from 'react';
import img3 from './reply (3).png'



const Com = [
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: '', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavnkdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
]

const Comarea = () => {
  return (
    <div className='z-[99] fixed w-full bottom-0 right-2'>
      <div className=' flex justify-center'>
        <div className='shadow-xl rounded-t-lg md:px-4 py-3 flex bg-[#E8F8F5] w-full md:w-[80%]'>
          <img className='rounded-full object-cover md:h-[3vw] md:w-[3vw]  h-[10vw] w-[10vw]' src={img1} />
          <div className='md:w-[80%] ml-3'>
            <input className='md:w-full px-4 py-2  md:text-[1.1vw] text-[3vw] border rounded-lg' placeholder='Teswirinizi yazyn!' />
          </div>
          <div className='md:w-[10%] ml-3'>
            <button className='border py-2 rounded-lg font-[600] select-none cursor-pointer hover:bg-green-400 hover:text-[#fff] bg-[#fff] w-full'>Paylas</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ReplyCom = () => {
  const [click, setClick] = useState(false)
  return (
    <div className='flex justify-center bg-[#E8F8F5] rounded-lg'>
      <div className=' md:w-[85%] w-[95%]'>
        <div>
          <ul>
            {Com.map((com, i) => (
              <li key={i} className='m-4'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center' >
                    <img src={img1} className='md:w-[2.5vw] md:h-[2.5vw] cursor-pointer w-[9vw] h-[9vw] object-cover rounded-full' />
                    <div className='ml-2 font-bold md:text-[1.4vw] text-[4.5vw]  select-none'>{com.title}</div>
                  </div>
                  <div className='md:text-[.8vw] text-[2.5vw] select-none'>{com.date}</div>
                </div>
                <div className='flex justify-center'>
                  <div className='md:w-[91%] select-none py-4 md:text-[1vw] text-[4vw] md:indent-3 indent-8 '>
                    <p>{com.comment}</p>
                  </div>
                </div>
                <div className='flex justify-end mb-2' onClick={()=> setClick(!click)}>
                  <img src={click ? img3 : img2} className='md:w-[1.2vw] w-[4vw] md:h-[1.2vw] h-[4vw]' />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  )
}

function Comment() {
  const [click, setClick] = useState(false)
  return (
    <div className='flex justify-center bg-[#fff]'>
      <div className=' md:w-[70%] w-[95%]'>
        <div>
          <ul>
            {Com.map((com, i) => (
              <li key={i} className='m-4'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center' >
                    <img src={img1} className='md:w-[2.5vw] md:h-[2.5vw] cursor-pointer w-[9vw] h-[9vw] object-cover rounded-full' />
                    <div className='ml-2 font-bold md:text-[1.4vw] text-[4.5vw]  select-none'>{com.title}</div>
                  </div>
                  <div className='md:text-[.8vw] text-[2.5vw] select-none'>{com.date}</div>
                </div>
                <div className='flex justify-center'>
                  <div className='md:w-[91%] select-none py-4 md:text-[1vw] text-[4vw] indent-8 md:indent-0 '>
                    <p>{com.comment}</p>
                  </div>
                </div>
                <div className='flex justify-end mb-2 ' onClick={()=> setClick(!click)}>
                  <img src={click ? img3 : img2} className='md:w-[1.2vw] w-[4vw] md:h-[1.2vw] h-[4vw]' />
                </div>
                <ReplyCom/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Comarea />
    </div>
  );
}

export default Comment;
