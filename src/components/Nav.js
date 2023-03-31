import React from 'react';
import '../input.css'


function Nav() {

    var showdate = new Date();
    var displaytodaysdate = `${showdate.getDate()}.${showdate.getMonth() + 1}.${showdate.getFullYear()}`;

  return (
    <div>
        <div className='bg-[#227a22] h-auto w-full flex justify-between items-center p-5 shadow-xl'>
            <div className='text-white font-semibold'>
                {displaytodaysdate}
            </div>
            <div>
                
            </div>
        </div>
        <img src='./image/Galamdas.jpg'/>
    </div>
  );
}

export default Nav;
