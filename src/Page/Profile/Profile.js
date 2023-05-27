import React, { useState } from 'react';
import Paper from '../../components/Paper';
import ChangeProfile from './ChangeProfile';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import setting from '../../setting.json'
import { useEffect } from 'react';
import Cookies from 'universal-cookie';


const pos = [
    { id: 1, title: "Postlarym" },
    { id: 2, title: "Halanlarym" },
    { id: 3, title: "Garalamalarym" },

]

function Profile() {
    const [click, setClick] = useState(0)
    const [change, setChange] = useState(false)
    const [data,setData] = useState([])
    const  cookie = new Cookies() 
    const fetchProfile = async () =>{
        
      try{
        const Profile = await axios.get(`${setting.SERVER}/api/user/my`,{
            headers:{
                Authorization : cookie.get('token')
            }
        })
        setData(Profile.data)
      }
      catch(err){}
    }
    useEffect(()=>{
        fetchProfile()
    },[])
    console.log(data)
    return (
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
                        <ChangeProfile change={change} setChange={setChange} />
                    </div>

                    <div  className={change ? "hidden " : 'justify-center flex xl:mt-[-5rem] md:mt-[-2rem] lg:mt-[-3rem] '}>
                        <div className='w-[80%] shadow-lg rounded-lg bg-[#fff] z-20'>

                            <div className='flex justify-center'>
                                <div className='flex justify-between my-5 w-[85%]'>
                                    <div className='w-[30%]   '>
                                        <Link to='/'>
                                            <img src='./image/tazepng.png' className='md:w-[15vw] md:h-[5vw] ' />
                                        </Link>
                                    </div>
                                    <div className='w-[40%] justify-center flex'>
                                        <div className='mt-[-5rem] z-20 '>
                                            <img src={`${setting.SERVER}/${data.img}`} className='md:w-[10vw] object-cover md:h-[10vw] rounded-full' />
                                        </div>
                                    </div>
                                    <div className='w-[30%] flex justify-end xl:mt-7 lg:mt-5 md:mt-3'>
                                        <button onClick={() => setChange(!change)} type='submit'
                                            className='border border-[green] text-white md:w-[9vw] md:h-[3vw] rounded-lg p-2 items-center flex justify-center md:text-[1vw] bg-[green] font-bold hover:scale-110 transition-all ease-in-out'>
                                            Profili üýtget
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className='flex justify-center mt-[3rem]'>
                                <div className='select-none'>
                                    <h3 className='md:text-[1.8vw] font-bold text-[#514f4f]'>{data.name} {data.surname}</h3>
                                    <p className='text-center md:text-[1.2vw] text-gray-500 '>@{data.nick}</p>
                                </div>
                            </div>


                            <div className='flex justify-center mt-6 '>
                                <div className='w-[70%] flex justify-center select-none'>
                                    <p className='text-center md:text-[1vw] text-[#5e5d5d] '>
                                        {data.info}
                                    </p>
                                </div>
                            </div>



                            <div className='flex justify-center mt-[3rem]'>
                                <div className='w-[90%]'>
                                    <ul className='flex justify-center mb-2'>
                                        {pos.map((pos, i) => (
                                            <li key={i} onClick={() => setClick(!click)} className='mx-8 md:text-[1.2vw] font-bold text-[#514f4f] select-none cursor-pointer '>
                                                <p click={click} className={click == i ? "text-[green]" : ""}>{pos.title}(2)</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='flex justify-center'>
                                        <div className='h-[.8px] w-[90%] mb-4   bg-gray-300'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <div className='w-[90%]'>
                                    <Paper />
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
