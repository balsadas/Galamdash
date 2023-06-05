import React, { useEffect, useState } from 'react';

import PostContent from '../components/MainPostContent.js'
import axios from 'axios';
import setting from '../setting.json'
import time from '../time'
import MainPostContent from '../components/MainPostContent.js';
import { Link } from 'react-router-dom';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import "swiper/swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/autoplay';
import MainPostContentMob from './MainPostContentMob.js';


const ShortWord = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
        return <>{text}</>
    }

    const shortWord = `${text.slice(0, maxLength)}...`
    return <>{shortWord}</>
}

function Post() {

    const [fix, setFix] = useState(false)
    const [Post, setPost] = useState([])

    function SidebarLeft() {
        if (window.scrollY >= 100) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener('scroll', SidebarLeft)


    useEffect(() => {
        fetchnewposts()
    }, [])

    const fetchnewposts = async () => {
        await axios.get(`${setting.SERVER}/api/post`).then((res) => {
            setPost(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }







    SwiperCore.use([Autoplay])


    return (
        <div className='flex justify-center mt-[1rem] md:mt-[3rem]   '>
            <div className='w-[90%]' >
                <div className='shadow-lg bg-[#fff] rounded-lg p-2 '>
                    <h3 className='pl-2 font-bold text-[#19a056] md:text-[1.2vw]'>Soňky Postlar</h3>
                </div>
                <ul className='  w-full flex justify-center '>
                    <div className='md:block hidden'>
                        {Post.map((post, index) => (
                            <Link key={index} to={`/IntoPaper/${post.id}`}>
                                <MainPostContent post={post} />
                            </Link>
                        ))}
                    </div>
                    <div className='md:hidden block w-[95%]  mt-4'>
                        <SwiperComponent

                            modules={{ Autoplay }}
                            loop={true}

                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                        >
                            {Post.map((post, i) => (
                                <SwiperSlide key={i} >
                                    <Link to={`/IntoPaper/${post.id}`}>
                                        <li
                                            className="p-2 bg-[#ffffffe0] md:hover:scale-110 md:hover:mt-[2rem] duration-300 ease-in-out transition-all md:hover:mb-[2rem] w-[100%] group cursor-pointer rounded-lg shadow-lg mt-3">
                                            <div className='flex justify-center relative  '>
                                                <div className='absolute top-0 flex rounded-b-md   items-center px-4 py-1 bg-[#fefefe] '>
                                                    <ul className='flex justify-center'>

                                                        <li className='flex mr-2 items-center select-none'>
                                                            <img src={'./photo/heart.png'} className='w-[5vw] h-[5vw] ' />
                                                            <p className='text-[#6B7280] ml-1 text-[3vw]'>{post.view}</p>
                                                        </li>
                                                        <li className='flex mr-2 items-center select-none'>
                                                            <img src={'./photo/comment.png'} className='w-[5vw] h-[5vw] ' />
                                                            <p className='text-[#6B7280] ml-1 text-[3vw]'>{post.like}</p>
                                                        </li>
                                                        <li className='flex mr-2 items-center select-none'>
                                                            <img src={'./photo/bar-chart.png'} className='w-[5vw] h-[5vw] ' />
                                                            <p className='text-[#6B7280] ml-1 text-[3vw]'>{post.comment}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img src={post.img ? `${setting.SERVER}/${post.img}` : './image/Galamdas1.png'} className='object-cover w-[100%] h-[40vw] rounded-lg select-none' />
                                            </div>
                                            <p className='font-[600] text-[4.5vw] mt-2 ml-[.7vw] select-none'><ShortWord text={post.title} maxLength={20} /></p>
                                            <div className='flex items-center justify-between mt-3'>
                                                <div className='flex items-center  select-none'>
                                                    <img src={post.img ? `${setting.SERVER}/${post.User.img}` : './image/user (1).png'} className='w-[8vw] h-[8vw] rounded-full object-cover' />
                                                    <p className='pl-1 text-[4vw]'>{post.User.nick} </p>
                                                    <p className='pl-1 text-[2.5vw]'><span>.</span> {time(post.time)}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </SwiperComponent>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Post;
