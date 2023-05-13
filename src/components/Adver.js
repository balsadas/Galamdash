import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

const ad = [
    { id: 1, img: './photo/photo23.jpg' },
    { id: 2, img: './photo/photo21.jpg' },
    { id: 3, img: './photo/photo22.jpg' },
    { id: 4, img: './photo/photo24.jpg' }
]


function Adver() {
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setStickyClass('sticky');
            } else {
                setStickyClass('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={stickyClass ? 'fixed top-[-6%] w-[20%]' : 'w-[90%]'}>
            <div className='bg-slate-500 w-[90%] mt-[3.8rem] shadow-lg h-[45vw] rounded-md flex'>
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
        </div>

    );
}

export default Adver;
