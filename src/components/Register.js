import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setting from '../setting.json'




function Register() {
    const [click, setClick] = useState(false)
    const [visibility, setVisibility] = useState(false)
    const [selection, setSelection] = useState('')



    const Enter = (e) => {
        var key = e.keyCode || e.which;
        if (key === 13) { // Клавиша Enter
            if (e.target.id === 'sign_email' || e.target.id === 'sign_pass') {
                login()
            } else if (e.target.id === 'sign_up-name' || e.target.id === 'sign_up-surname' || e.target.id === 'sign_up-email' || e.target.id === 'sign_up_user' || e.target.id === 'sign_up-pass-1' || e.target.id === 'sign_up-pass-2') {
                signIn()
            } else {
                console.log('Enter', e.target.id)
            }
        }
    }











    const login = async () => {
        let body = {
            email: "",
            password: ""
        }

        const url2 = `${setting.SERVER}/api/user/login`




        body['email'] = document.getElementById('sign_email').value
        body['password'] = document.getElementById('sign_pass').value
        if (body['email'] !== '' && body['password'] !== '') {
            axios.post(url2, {
                email: body.email,
                password: body.password
            }).then(res => {
                console.log('respons geldi', res)
                if (res.status === 200) {
                    const link = document.location.pathname = '/';
                    const cookies = new Cookies();
                    cookies.set('token', `${res.data.token}`, (link()));
                    console.log('-------', cookies)

                }
            })
                .catch(er => {
                    console.log('error1', er.request)
                    if (er.request.status === 404) {
                        console.log('email tapylmady')
                        toast.error('email tapylmady', {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    } else if (er.request.status === 400) {
                        toast.error('password yalnysh', {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }
                })



        }
    }

console.log('value', selection)


    const signIn = async () => {
        let body = {
            email: "",
            password1: [],
            name: "",
            surname: "",
            nick: "",
            password2: [],
            type: selection
        }

        const url = `${setting.SERVER}/api/user/registry`


        console.log('geldi', body.selection)

        body['email'] = document.getElementById('sign_up-email').value
        body['password1'] = document.getElementById('sign_up-pass-1').value
        body['password2'] = document.getElementById('sign_up-pass-2').value
        body['name'] = document.getElementById('sign_up-name').value
        body['surname'] = document.getElementById('sign_up-surname').value
        body['nick'] = document.getElementById('sign_up_user').value
        if (body['email'] !== '' && body['password1'] !== '' && body['name'] !== '' && body['surname'] !== '' && body['nick'] !== '' && body['password2'] !== '') {
            axios.post(url, {
                email: body.email,
                password1: body.password1,
                name: body.name,
                surname: body.surname,
                nick: body.nick,
                password2: body.password2,
                type: body.type,
                
            })
                .then(res => {
                    console.log('respons geldi', res.body)
                    if (res.status === 200) {
                        const link = document.location.pathname = '/';
                        const cookies = new Cookies();
                        cookies.set('token', `${res.data.token}`, (link()));
                        console.log('-------', cookies.get('token'))
                    }
                })
                .catch(er => {
                    console.log('error', er)
                    if (er.request.response === "{\"msg\":\"Number of letters in less than 8\"}") {
                        console.log('email tapylmady')
                        toast.error('parol azyndan 8 sifir bolmaly', {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    } else if (er.request.response === "{\"msg\":\"This nick is have\"}") {
                        toast.error('bu ulanyjy ady bar', {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    } else if (er.request.response === "{\"msg\":\"Passwords not equal\"}") {
                        toast.error('parol den dal', {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }
                })

        } else if (body['name'] === '') {
            toast.error('at yazylyan yeri doldurun', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (body['surname'] === '') {
            toast.error('familiya yazylyan yeri doldurun', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (body['email'] === '') {
            toast.error('email yazylyan yeri doldurun', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (body['nick'] === '') {
            toast.error('ulanyjy ady doldur', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }



    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className='w-full bg-[#fff] '>
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
                                    <div className='md:mb-2 mb-4'>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>At</p>
                                        <input
                                            required
                                            type='text'
                                            onKeyPress={(e) => { Enter(e) }}
                                            placeholder='Atamyrat'
                                            id='sign_up-name'
                                            className='border  rounded-md px-2 py-1 md:w-full w-[100%] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Familiýa</p>
                                        <input
                                            required
                                            type='text'
                                            onKeyPress={(e) => { Enter(e) }}
                                            placeholder='Atamyradow'
                                            id='sign_up-surname'
                                            className='border  rounded-md py-1 px-2 md:w-[100%] w-[100%] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Email</p>
                                        <input
                                            required
                                            type='email'
                                            onKeyPress={(e) => { Enter(e) }}
                                            placeholder='atamyrat@gmail.com'
                                            id='sign_up-email'
                                            className='border  rounded-md py-1 px-2 md:w-full w-[100%] focus:bg-[#E8F8F5]'
                                        />
                                    </div>
                                    <div className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>
                                        <p className='font-bold md:text-[1vw] mb-1'>Ulanyjy ady</p>
                                        <input type='text' placeholder='@atamyradow' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div className='flex mb-2'>

                                        <input type='password' placeholder='Açar sözi' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <select onChange={(e)=>setSelection(e.target.value)} required name='sayla' className='md:w-full w-full px-2 py-1 border-slate-300 rounded-md border font-bold mb-2'>
                                            <option  value='error'>Sayla</option>
                                            <option value='0'>Awtor</option>
                                            <option value='1'>okayjy</option>

                                        </select>
                                    </div>
                                    <div className='flex'>
                                        <input type='checkbox' className='ml-2' />
                                        <p className='md:text-[.8vw] text-[3vw] ml-2'>Düzgünnamany okadym we kabul etdim</p>
                                    </div>
                                    <div className='w-full flex justify-center' >
                                        <button type='submit' onClick={() => { signIn() }} className='border md:w-[80%] w-full mt-3 p-1 rounded-md md:text-[1.2vw] text-[4.5vw] bg-[#19a056] text-[#fff] font-bold'>Hasap döret</button>
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
                                            <h3 className='font-bold md:text-[1.5vw] text-[5.5vw] flex justify-center'>Hasap döret</h3>
                                        </div>
                                    </div>
                                    <div className='md:mb-2 mb-4'>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'> email  </p>
                                        <input type='text' onKeyPress={(e) => { Enter(e) }} placeholder='Atamyrat' id='sign_email' className='border  rounded-md px-2 py-1 md:w-full w-[100%] focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div  className='md:mb-2 mb-4'>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Parol</p>
                                        <div className='flex'>
                                            <input type={visibility ? 'text' : 'password'} onKeyPress={(e) => { Enter(e) }} placeholder='Açar sözi' id='sign_pass' className='border-l border-b border-t  rounded-l-md px-2 py-1 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                            <div className='border-r border-b border-t  rounded-r-md flex items-center border-l' onClick={() => { setVisibility(!visibility) }}> {visibility ? <img src='./image/visibility.png' className='  md:p-1 p-2  w-[13vw] h-[13vw]  md:w-[3vw] md:h-[3vw] ' /> : <img src='./image/visible.png' className='md:w-[3vw] w-[13vw] h-[13vw] md:p-1  p-2 md:h-[3vw] ' />}</div>
                                        </div>
                                    </div>
                                    {/* <div className='flex'>
                                 <input type='checkbox' className='ml-2' />
                                 <p className='md:text-[.8vw] ml-2'>Düzgünnamany okadym we kabul etdim</p>    </div> */}
                                    <div className='w-full flex justify-center' >
                                        <button type='submit' onClick={() => { login() }} className='border md:w-[80%] w-[90%] mt-3 p-1 rounded-md md:text-[1.2vw] text-[4.5vw] bg-[#19a056] text-[#fff] font-bold'>Gir</button>
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
            </div>
        </>
    );
}

export default Register;
