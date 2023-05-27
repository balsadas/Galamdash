import React from 'react';


function Comment() {
  return (
    <div className='flex justify-center bg-[#fff]'>
      <div className=' md:w-[70%]'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center' >
            <img src='./photo/photo13.jpg' className='md:w-[3.5vw] md:h-[3.5vw] object-cover rounded-full' />
            <div className='md:ml-2 font-bold md:text-[1.6vw]'>Myrat Balshayev</div>
          </div>
          <div className='md:text-[1vw]'>23 hour ago</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Comment;
