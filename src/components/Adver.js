import React, { useEffect, useRef, useState } from 'react';


// import { Splide, SplideSlide } from '@splidejs/react-splide';
// // Default theme
// import '@splidejs/react-splide/css';


// // // or other themes
// // import '@splidejs/react-splide/css/skyblue';
// // import '@splidejs/react-splide/css/sea-green';


// // or only core styles
// import '@splidejs/react-splide/css/core';
import SwiperCore, { A11y, Scrollbar, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";

const ad = [
    { id: 1, img: './photo/photo23.jpg' },
    { id: 2, img: './photo/photo21.jpg' },
    { id: 3, img: './photo/photo22.jpg' },
    { id: 4, img: './photo/photo24.jpg' }
]


function Adver() {

    return (
        <div className='bg-slate-500 xl:w-[15rem] mt-[3rem] shadow-lg xl:h-[40rem] lg:w-[15rem] rounded-lg flex'>
            <Swiper
            
                modules={{ Autoplay }}
                loop={true}
               
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src='./photo/photo5.jpg' className='w-full h-[40rem] object-cover rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./photo/photo2.jpg' className='w-full h-[40rem] object-cover rounded-lg' />
                </SwiperSlide><SwiperSlide>
                    <img src='./photo/photo6.jpg' className='w-full h-[40rem] object-cover rounded-lg' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Adver;
