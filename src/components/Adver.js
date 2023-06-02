import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

const ad = [
    { id: 1, img: './photo/photo23.jpg' },
    { id: 2, img: './photo/photo21.jpg' },
    { id: 3, img: './photo/photo22.jpg' },
    { id: 4, img: './photo/photo24.jpg' }
]


function Adver() {
    const [fix,setFix]=useState(false)

    function sidebarRight () {
        if(window.scrollY >= 500){
            setFix(true)
        }else{
            setFix(false)
        }
    } 

    return (
        <div className={fix ? 'top-[6%] fixed mt-[2rem] w-[90%] h-[45vw]' : 'bg-slate-500 w-[90%] mt-[3.8rem] shadow-lg h-[45vw] rounded-md flex'}>
            Adver
            {/* <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                className='flex'
            >
                
                    <SwiperSlide>
                        <div className='h-[45vw] w-full flex' >
                            <img src='./photo/photo22.jpg' className='object-cover'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[45vw] w-full flex' >
                            <img src='./photo/photo23.jpg' className='object-cover'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[45vw] w-full flex' >
                            <img src='./photo/photo24.jpg' className='object-cover'/>
                        </div>
                    </SwiperSlide>
              
            </Swiper> */}
        </div>
    );
}

export default Adver;
