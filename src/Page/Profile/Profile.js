import React, { useState } from 'react';
import PaperProfile from '../../components/PaperProfile';
import ChangeProfile from './ChangeProfile';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import setting from '../../setting.json'
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";
import { Navigation } from 'swiper';


const pos = [
    { id: 1, title: "Postlarym" },
    { id: 2, title: "Halanlarym" },
    { id: 3, title: "Gorenlerim" }
    // { id: 3, title: "Garalamalarym" },

]

function Profile() {
    const [click, setClick] = useState(0)
    const [change, setChange] = useState(false)
    const [data, setData] = useState(null)
    const [list, setList] = useState('Postlarym')
    const cookie = new Cookies()
    const fetchProfile = async () => {
        try {
            const Profile = await axios.get(`${setting.SERVER}/api/user/my`, {
                headers: {
                    Authorization:cookie.get('token') 
                }
            })
            setData(Profile.data)
        }
        catch (err) {
            console.log(err)
        }
    }




    const [Kat, setKat] = useState([])


    useEffect(() => {
        fetchProfile()
        fetch()
    }, [list])

    const fetch = async () => {
        let link = `${setting.SERVER}/api/post?my=true`
        if (list == "Postlarym") {
            link = (`${setting.SERVER}/api/post?my=true`)
        } else if (list == "Halanlarym") {
            link = (`${setting.SERVER}/api/like`)
        } else if (list == "Gorenlerim") {
            link = (`${setting.SERVER}/api/view`)
        }
        let result = []

        result = await axios.get(link, {
            headers: {
                Authorization: cookie.get('token')
            }
        })
        result = result.data
        setKat(result)
    }



    return (Kat && data &&
        <>
            <div >
                <div >
                    <div className='relative   '>
                        <div className='bg-center bg-cover'>
                            <span className='h-full w-full backdrop-blur-[5px] bg-black/5 absolute'></span>
                            <img src='./image/Galamdas.jpg' />
                        </div>
                    </div>

                    <div className={change ? "block" : "hidden"}>
                        <ChangeProfile change={change} setChange={setChange} data={data} />
                    </div>

                    <div className={change ? "hidden " : 'justify-center flex xl:mt-[-5rem] md:mt-[-2rem] lg:mt-[-3rem] '}>
                        <div className='w-[80%] shadow-lg rounded-lg bg-[#fff] z-20'>

                            <div className='flex justify-center'>
                                <div className='flex justify-between my-5 w-[85%]'>
                                    <div className='w-[30%]   '>
                                        <Link to='/'>
                                            <img src='./image/tazepng.png' className='md:w-[15vw] md:h-[5vw] w-[20vw] h-[8vw] ' />
                                        </Link>
                                    </div>
                                    <div className='w-[40%] justify-center flex'>
                                        <div className='md:mt-[-5rem] mt-[-2rem]  z-20 '>
                                            <img src={data.img ? `${setting.SERVER}/${data.img}` : './image/user (1).png'} className='md:w-[10vw] w-[15vw] h-[15vw] object-cover md:h-[10vw] rounded-full' />
                                        </div>
                                    </div>
                                    <div className='w-[30%] flex justify-end xl:mt-7 lg:mt-5 md:mt-3'>
                                        <button onClick={() => { setChange(!change)}} type='submit'
                                            className='border border-[green] text-white md:w-[9vw] md:h-[3vw] rounded-lg p-2 items-center flex justify-center text-[2.5vw] md:text-[1vw] bg-[green] font-bold hover:scale-110 transition-all ease-in-out'>
                                            Profili üýtget
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className='flex justify-center mt-[3rem]'>
                                <div className='select-none'>
                                    <h3 className='md:text-[1.8vw] text-[6vw] font-bold text-[#514f4f]'>{data.name} {data.surname}</h3>
                                    <p className='text-center md:text-[1.2vw]  text-[4vw] text-gray-500 '>@{data.nick}</p>
                                </div>
                            </div>


                            <div className='flex justify-center mt-6 '>
                                <div className='w-[70%] flex justify-center select-none'>
                                    <p className='text-center md:text-[1vw] text-[3.5vw] text-[#5e5d5d] '>
                                        {data.info}
                                    </p>
                                </div>
                            </div>



                            <div className='flex justify-center mt-[3rem]'>
                                <div className='w-[90%]'>
                                    <ul className='flex justify-center md:justify-center w-[90%] mb-2 '>
                                        <Swiper

                                            modules={[Navigation]}
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
                                                    slidesPerView: 3,
                                                },
                                                1400: {
                                                    slidesPerView: 3,
                                                },
                                            }}
                                        >
                                            {pos.map((pos, i) => (
                                                <SwiperSlide key={i}>
                                                    <li onClick={() => { setClick(!click); setList(pos.title) }} className=' w-full md:text-[1.2vw] text-[4.5vw] font-bold text-[#514f4f] md:justify-between justify-center mx-5 flex select-none cursor-pointer '>
                                                        <p click={click} className={click === i ? "text-[green]" : ""}>{pos.title}(2)</p>
                                                    </li>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </ul>
                                    <div className='flex justify-center'>
                                        <div className='h-[.8px] w-[90%] mb-4   bg-gray-300'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <div className='w-[90%]'>
                                    <PaperProfile Kat={Kat} list={list} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[3rem] '>
                <Footer />
            </div>
        </>
    );
}

export default Profile;
