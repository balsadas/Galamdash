import React, { useEffect } from 'react';
import NavSearch from '../components/NavSearch';
import UnderPost from '../components/UnderPost';
import Footer from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import setting from '../setting.json'
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import Time from '../time';
import Comment from '../components/Comment';
import img1 from './comment.png'
import img2 from './like.png'
import img3 from './bar.png'
import img4 from './Galamdas1.png'
import img5 from './user (1).png'



const com = [
    { id: 1, num: '23', img: './photo/bar-chart.png', title: 'görüldi' },
    { id: 2, num: '13', title: 'halandy', img: './image/like.png' },
    { id: 3, num: '10', img: './photo/comment.png', title: 'teswir' },
    { id: 4, num: '5', img: './image/downloads.png', title: 'ýüklendi' }
]




function IntoPaper() {
    const [Post, setPost] = useState()
    const { postID } = useParams()

    useEffect(() => {
        fetch()
    }, [])

    const Token = ''

    const redirect = useNavigate()

    const fetch = async () => {
        let res = await axios.get(`${setting.SERVER}/api/post/${postID}`, { headers: { Authorization: Token } }).catch((err) => {
            redirect('/404')
        })
        setPost(res.data)


    }

    return (Post &&
        <>
            <NavSearch />
            <div className='bg-[#fff] flex justify-center md:pt-[7rem] pt-[6rem]'>
                <div className='md:w-[50%] w-[90%]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <Link to='/Profile'>
                                {Post.img ? <img className='rounded-full cursor-pointer md:w-[3vw] md:h-[3vw] w-[12vw] h-[12vw] object-cover' src={`${setting.SERVER}/${Post.img}`} /> : <img src={img5} className='rounded-full cursor-pointer md:w-[3vw] md:h-[3vw] w-[12vw] h-[12vw] object-cover' />}
                            </Link>
                            <div className='ml-3'>
                                <h3 className='md:text-[1.3vw] text-[6vw] select-none font-bold '>{Post.User.nick}</h3>
                                <p className='md:text-[0.8vw] text-[3vw] select-none text-[#6B7280]'>{Time(Post.time)}</p>
                            </div>
                        </div>

                    </div>
                    <div className='mt-5'>
                        <h3 className='font-bold md:text-[1.7vw] text-[5vw]'>
                            {Post.title}
                        </h3>
                        <div className='md:mt-7 mt-4'>
                            <ul className='flex'>
                                {Post.Tags.map((tag, i) => (
                                    <li className='mr-3 md:text-[1vw] text-[2.5vw] text-[#1F2937]  select-none bg-[#F3F4F6] py-1 px-2 rounded-md font-[500]' key={i}>
                                        {tag.TagList.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className='text-[#6B7280] text-[4vw] text-justify md:text-[1vw] mt-3'>
                            {Post.content}
                        </p>
                        <div className='flex justify-center mt-[2rem] md:mt-[3rem]'>
                            <div>
                                {Post.img ? <img src={`${setting.SERVER}/${Post.img}`} className='object-cover md:w-[40vw] ' /> : <img src={img4} className='object-cover md:w-[40vw]' />
                                }
                                <div className='h-[2vw] md:w-[40vw] bg-[#e8e8e8e0] mt-4'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[3rem]  mb-[3rem]'>
                        <ul className='flex justify-end items-end ' >

                            <li className='flex md:mr-8 mr-3 items-center '>
                                <img src={img3} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                <p className='text-[#6B7280] ml-1 text-[2.5vw] text-center md:text-[1vw] select-none'>{Post.like} {com[0].title}</p>
                            </li>
                            <li className='flex md:mr-8 mr-3 items-center '>
                                <img src={img2} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                <p className='text-[#6B7280] ml-1 text-[2.5vw] text-center md:text-[1vw] select-none'>{Post.view} {com[1].title}</p>
                            </li>
                            <li className='flex md:mr-8 mr-3 items-center '>
                                <img src={img1} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                                <p className='text-[#6B7280] ml-1 text-[2.5vw] text-center md:text-[1vw] select-none'>{Post.comment} {com[2].title}</p>
                            </li>
                            {/* <li className='flex md:mr-8 mr-3 items-center '>
                            <img src={com[3].img} className='md:w-[1vw] md:h-[1vw] w-[5vw] h-[5vw] select-none' />
                            <p className='text-[#6B7280] ml-1 text-[2.5vw] text-center md:text-[1vw] select-none'>{com.num} {com[3].title}</p>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </div>
            <Comment />
            <UnderPost />
            <div className='bg-[#fff] pt-6'>
                <Footer />
            </div>
        </>
    )
}

export default IntoPaper;
