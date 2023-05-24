import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import setting from '../setting.json'
import axios from 'axios';
import Cookies from 'universal-cookie';
import Cookies from 'universal-cookie';




function Register() {
    const [click, setClick] = useState(false)

    const Enter = (e) => {
        var key = e.keyCode || e.which;
        if (key === 13) { // Клавиша Enter
            if (e.target.id === 'sign_email' || e.target.id === 'sign_pass') {
                fetchLogIn()
            } else {
                console.log('Enter', e.target.id)
            }
        }
    }

    const [data2, setData2] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const value = e.target.value
        setData2({
            ...data2,
            [e.target.name]: value
        })
    }



    const fetchLogIn = async () => {
        const userData = {
            email: data2.email,
            password: data2.password
        }
        axios.post(`${setting.SERVER}/api/user/login`, userData)
        .then(res =>{
            console.log(res,'res')
            if(res.data.status === 200){
            const Link = document.location
            const Cookies = new Cookies
            Cookies.set('token',`${res.data.token}`,)
            }
        }).catch(err=>{console.log(err,'err')})
    }

    // const fetchLogIn = async () => {
    //     let body = {
    //         email: '',
    //         password: ''
    //     }

    //     body['email'] = document.getElementById('sign_email').value
    //     body['password'] = document.getElementById('sign_pass').value
    //     if (body['email'] !== '' || body['password'] !== '') {
    //         await axios.post(`${setting.SERVER}/api/user/login`, {
    //             email: body.email,
    //             password: body.password
    //         }).then(res => {
    //             console.log('res', res)
    //         }).catch(err => {
    //             console.log(err)
    //         })
    //     }
    // }


    return (
        <>
            <div className='w-full '>
                <div className={click ? 'hidden ' : 'block '}>
                    <div className='md:flex '>
                        <div className={click ? 'md:w-[50%] w-full flex items-center  md:h-screen bg-[#fff] translate-x-[80%]  opacity-0 duration-300 delay-300  transition-all ease-in-out' : ' translate-x-[0%] transition-all ease-in-out duration-300 delay-100 md:w-[50%] flex items-center  md:h-screen bg-[#fff]'}>
                            <img src='./image/Galamdas.png' />
                        </div>
                        <div className={click ? 'md:w-[50%] w-full flex items-center bg-[#fff] translate-x-[50%] opacity-0 transition-all duration-300 delay-100 ' : 'translate-x-[0%] transition-all duration-300 delay-100 md:w-[50%]  flex items-center bg-[#fff] '}>
                            <div className='flex justify-center w-full'>
                                <div>
                                    <div className='mb-4 flex '>
                                        <div className='w-[10%] flex items-center'>
                                            <Link to='/'>
                                                <img src='./image/arrowl.png' className='w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]' />
                                            </Link>
                                        </div>
                                        <div className='w-[90%] '>
                                            <h3 className='font-bold md:text-[1.5vw] text-[6vw] flex justify-center'>Hasap döret</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>At</p>
                                        <input type='text' placeholder='Atamyrat' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Familiýa</p>
                                        <input type='text' placeholder='Atamyradow' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Email</p>
                                        <input type='email' placeholder='atamyrat@gmail.com' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>
                                        <p className='font-bold md:text-[1vw] mb-1'>Ulanyjy ady</p>
                                        <input type='text' placeholder='@atamyradow' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>

                                        <input type='password' placeholder='Açar sözi' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <input type='password' placeholder='Açar sözi tassykla' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div className='flex'>
                                        <input type='checkbox' className='ml-2' />
                                        <p className='md:text-[.8vw] text-[3vw] ml-2'>Düzgünnamany okadym we kabul etdim</p>
                                    </div>
                                    <div className='w-full flex justify-center' >
                                        <button type='submit' className='border md:w-[80%] w-full mt-3 p-1 rounded-md md:text-[1.2vw] text-[4.5vw] bg-[#19a056] text-[#fff] font-bold'>Hasap döret</button>
                                    </div>
                                    <p className='md:text-[.8vw] text-[3.5vw] mt-2 flex justify-center select-none  text-gray-400'>hasabyňyz barmy? <span className='ml-1 cursor-pointer text-[green]' onClick={() => setClick(!click)}>hasaba giriň</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={click ? 'block' : 'hidden'}>
                    <div className='md:flex'>

                        <div className={click ? 'md:w-[50%] md:hidden items-center  md:h-screen bg-[#fff] translate-x-0 duration-300 delay-300 ease-in-out transition-all flex ' : 'md:w-[50%] translate-x-[-50%] duration-300 delay-150 ease-in-out transition-all opacity-0  items-center  md:h-screen bg-[#fff] md:hidden flex'}>
                            <img src='./image/Galamdas1.png' />
                        </div>
                        <div className={click ? 'md:w-[50%] md:pt-0 pt-8 w-full flex items-center bg-[#fff] translate-x-[0%] duration-300 delay-100 ease-in-out transition-all' : 'opacity-0 translate-x-[-50%] duration-300 delay-100 ease-in-out transition-all md:w-[50%] w-full flex items-center bg-[#fff] '}>
                            <div className='flex justify-center w-full'>
                                <div>
                                    
                                        <div className='mb-4 flex '>
                                            <div className='w-[10%] flex items-center'>
                                                <Link to='/'>
                                                    <img src='./image/arrowl.png' className=' w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]' />
                                                </Link>
                                            </div>
                                            <div className='w-[90%] '>
                                                <h3 className='font-bold md:text-[1.5vw] text-[5.5vw] flex justify-center'>Hasaba gir</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'> email</p>
                                            <input type='text' name='email' onChange={handleChange} value={data2.email} id='sign_email' placeholder='Atamyrat' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                        </div>
                                        <div>
                                            <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Parol</p>
                                            <input type='password' name='password' onChange={handleChange} value={data2.password} id='sign_pass' placeholder='Açar sözi' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                        </div>
                               
                                    {/* <div className='flex'>
                                 <input type='checkbox' className='ml-2' />
                                 <p className='md:text-[.8vw] ml-2'>Düzgünnamany okadym we kabul etdim</p>    </div> */}
                                    <div className='w-full flex justify-center' >
                                        <button type='submit' onClick={() => fetchLogIn()} className='border md:w-[80%] w-[90%] mt-3 p-1 rounded-md md:text-[1.2vw] text-[4.5vw] bg-[#19a056] text-[#fff] font-bold'>Gir</button>
                                    </div>

                                    <p className=' select-none md:text-[.8vw] text-[3.5vw] mt-2 flex justify-center text-gray-400' >hasabyňyz yokmy? <span onClick={() => setClick(!click)} className='ml-1 cursor-pointer text-[green]'>hasap aç</span></p>
                                </div>
                            </div>
                        </div>

                        <div className={click ? 'md:w-[50%] md:flex items-center  md:h-screen bg-[#fff] translate-x-0 duration-300 delay-300 ease-in-out transition-all hidden ' : 'md:w-[50%] translate-x-[-50%] duration-300 delay-150 ease-in-out transition-all opacity-0  items-center  md:h-screen bg-[#fff] md:flex hidden'}>
                            <img src='./image/Galamdas1.png' />
                        </div>
                    </div>
                </div>










                <div className='bg-[#fff]'>
                    <Footer />
                </div>
            </div >
        </>
    );
}

export default Register;
