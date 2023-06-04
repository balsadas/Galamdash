import React from 'react';
import img1 from './img/tazepng.png'

const fot = [
  { id: 1, text: 'Biz barada' },
  { id: 2, text: 'Şert we düzgünler' },
  { id: 3, text: 'Gizlinlik Syýasaty' },
  { id: 4, text: 'Habarlaşyň' }
]

function Footer() {
  return (
    <div className='  w-full flex justify-center '>
      <div className=' md:w-[70%] w-full flex justify-center shadow-lg  md:rounded-lg bg-[#ffffffe0]'>
        <div className='md:w-[80%]  justify-center flex'>
          <div className='w-full py-6'>
            <div className='w-full flex justify-center'>
              <ul className='flex'>
                {fot.map((fot, i) => (
                  <li key={i} className='px-4 flex items-center'>
                    <p className='md:text-[0.9vw] text-[2.5vw] select-none text-center text-gray-500 hover:underline hover:scale-110 hover:translate-y-1  '>{fot.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex justify-center'>
              <div className='h-[0.7px] bg-gray-300 mt-[1.5rem] w-[90%] '></div>
            </div>
            <div>
              <div>
                <div className='flex items-center justify-center mt-4'>
                <img src={img1} className='md:w-[10vw] md:h-[3vw] w-[50vw] h-[20vw]'/>
                {/* <p className='mt-[0.35rem] border-b-2 border-green-500 text-[1.5vw] text-[#018353] font-[500]'> Galamdaş</p> */}
                </div>
                <div className='flex justify-center mt-3'>
                  <p className='text-gray-500 md:text-[1vw] text-[2.5vw]' >© 2023 galamdaş™. Ähli hukuklary goralan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
