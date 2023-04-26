import React from 'react';

const fot = [
  { id: 1, text: 'Biz barada' },
  { id: 2, text: 'Şert we düzgünler' },
  { id: 3, text: 'Gizlinlik Syýasaty' },
  { id: 4, text: 'Habarlaşyň' }
]

function Footer() {
  return (
    <div className='  w-full flex justify-center '>
      <div className=' w-[70%] flex justify-center shadow-lg rounded-lg bg-[#ffffffe0]'>
        <div className='w-[80%] justify-center flex'>
          <div className='w-full py-6'>
            <div className='w-full flex justify-center'>
              <ul className='flex'>
                {fot.map((fot, i) => (
                  <li className='px-4'>
                    <p className='text-[0.9vw] text-gray-500 hover:underline hover:scale-110 hover:translate-y-1  '>{fot.text}</p>
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
                <img src='./image/tazepng.png' className='w-[10vw] h-[3vw]'/>
                {/* <p className='mt-[0.35rem] border-b-2 border-green-500 text-[1.5vw] text-[#018353] font-[500]'> Galamdaş</p> */}
                </div>
                <div className='flex justify-center mt-3'>
                  <p className='text-gray-500 text-[1vw]' >© 2023 galamdaş™. Ähli hukuklary goralan.</p>
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
