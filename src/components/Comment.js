import React from 'react';
import img1 from './photo12.jpg'
import img2 from '../img/reply.png'



const Com = [
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: '', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
  { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavnkdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
]

function Comment() {
  return (
    <div className='flex justify-center bg-[#fff]'>
      <div className=' md:w-[70%] w-[95%]'>
        <div>
          <ul>
            {Com.map((com, i) => (
              <li key={i} className='m-4'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center' >
                    <img src={img1} className='md:w-[2.5vw] md:h-[2.5vw] w-[9vw] h-[9vw] object-cover rounded-full' />
                    <div className='ml-2 font-bold md:text-[1.4vw] text-[4.5vw] '>{com.title}</div>
                  </div>
                  <div className='md:text-[.8vw] text-[2.5vw]'>{com.date}</div>
                </div>
                <div className='flex justify-center'>
                  <div className='md:w-[91%] py-4 md:text-[1vw] text-[4vw] indent-8 '>
                    <p>{com.comment}</p>
                  </div>
                </div>
                <div className='flex justify-end '>
                  <img src={img2} className='md:w-[1.2vw] w-[4vw] md:h-[1.2vw] h-[4vw]'/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Comment;
