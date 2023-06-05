import { motion } from "framer-motion";
import setting from '../setting.json'
import time from '../time'
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import "swiper/swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/autoplay';
import { Link } from "react-router-dom";


const ShortWord = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
        return <>{text}</>
    }

    const shortWord = `${text.slice(0, maxLength)}...`
    return <>{shortWord}</>
}
const MainPostContentMob = ({ Post }) => {

    return (
        <div>
            <SwiperComponent
                style={{ dislpay: 'flex' }}
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                breakpoints={{
                    0: {

                        slidesPerView: 1,
                    },
                    1000: {
                        slidesPerView: 2,
                    },
                    1400: {
                        slidesPerView: 2,
                    },
                }}>
                {Post.map((post, i) => (
                    <SwiperSlide key={i} >
                        <Link to={`/IntoPaper/${post.id}`}>
                            <motion.li
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 },
                                }}

                                className="p-4 bg-[#ffffffe0] md:hover:scale-110 md:hover:mt-[2rem] duration-300 ease-in-out transition-all md:hover:mb-[2rem] w-full group cursor-pointer rounded-lg shadow-lg mt-3">
                                <div className='flex justify-center relative  '>
                                    <div className='absolute top-0 hidden   group-hover:flex rounded-b-md h-[2vw]  items-center px-4  bg-[#fefefe] '>
                                        <ul className='flex justify-center'>

                                            <li className='flex mr-2 items-center select-none'>
                                                <img src={'./photo/heart.png'} className='w-[.7vw] h-[.7vw] ' />
                                                <p className='text-[#6B7280] ml-1 text-[.6vw]'>{Post.view}</p>
                                            </li>
                                            <li className='flex mr-2 items-center select-none'>
                                                <img src={'./photo/comment.png'} className='w-[.7vw] h-[.7vw] ' />
                                                <p className='text-[#6B7280] ml-1 text-[.6vw]'>{Post.like}</p>
                                            </li>
                                            <li className='flex mr-2 items-center select-none'>
                                                <img src={'./photo/bar-chart.png'} className='w-[.7vw] h-[.7vw] ' />
                                                <p className='text-[#6B7280] ml-1 text-[.6vw]'>{Post.comment}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <img src={post.img ? `${setting.SERVER}/${post.img}` : './image/Galamdas1.png'} className='object-cover w-[13vw] h-[12vw] rounded-lg select-none' />
                                </div>
                                <p className='font-[600] text-[1.2vw] mt-2 ml-[.7vw] select-none bg-orange-300'><ShortWord text={post.title} maxLength={20} /></p>
                                <div className='flex items-center justify-between mt-3'>
                                    <div className='flex items-center select-none'>
                                        <img src={post.img ? `${setting.SERVER}/${post.User.img}` : './image/user (1).png'} className='w-[1.5vw] h-[1.5vw] rounded-full object-cover' />
                                        <p className='pl-1 text-[.7vw]'>{post.User.nick} </p>
                                        <p className='pl-1 text-[.7vw]'><span>.</span> {time(post.time)}</p>
                                    </div>
                                </div>
                            </motion.li>
                        </Link>
                    </SwiperSlide>
                ))}
            </SwiperComponent>



        </div>


    )
}

export default MainPostContentMob