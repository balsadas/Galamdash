import React from 'react';
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";
import 'swiper/css/autoplay';

const ad = [
    { id: 1, img: './photo/photo23.jpg' },
    { id: 2, img: './photo/photo21.jpg' },
    { id: 3, img: './photo/photo22.jpg' },
    { id: 4, img: './photo/photo24.jpg' }
]


function Adver1() {
    SwiperCore.use([Autoplay])

    return (

        <div className='bg-slate-500 w-[100%] mb-[2rem] mt-[3rem] shadow-lg h-[10rem] rounded-lg flex'>
            <Swiper

                loop={true}


                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={{ Autoplay }}
            >
                <SwiperSlide>
                    <img src='./image/ad2.gif' className='w-full h-full object-cover rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./image/ad1.gif' className='w-full h-full object-cover rounded-lg' />
               </SwiperSlide>
              {/*   <SwiperSlide>
                    <img src='./photo/photo6.jpg' className='w-full h-full object-cover rounded-lg' />
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
}

export default Adver1;
