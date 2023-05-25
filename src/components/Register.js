import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import setting from '../setting.json'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Register() {
    const [click, setClick] = useState(false)
    const [selection, setSelection] = useState('')
    const [visibility, setVisibility] = useState(false)

    const Enter = (e) => {
        var key = e.keyCode || e.which;
        if (key === 13) { // Клавиша Enter
            if (e.target.id === 'sign_email' || e.target.id === 'sign_pass') {
                fetchLogIn()
            } else if (e.target.id === 'signUp_email' || e.target.id === 'signUp_pass1' || e.target.id === "signUp_pass2" || e.target.id === 'signUp_user' || e.target.id === "signUp_name" || e.target.id === 'signUp_surname') {
                fetchSignUp()
            } else {
                console.log('Enter', e.target.id)
            }
        }
    }


    const [data, setData] = useState({
        email: '',
        password1: '',
        password2: '',
        name: '',
        surname: '',
        nick: '',
        type: selection
    })

    const handleChange1 = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const fetchSignUp = async () => {
        const userData = {
            email: data.email,
            password1: data.password1,
            password2: data.password2,
            name: data.name,
            nick: data.nick,
            surname: data.surname,
            type: data.type

        }
        if (data.email !== '' || data.name !== '' || data.nick !== '' || data.password1 !== '' || data.password2 !== '' || data.surname !== '' || data.type !== '') {
            axios.post(`${setting.SERVER}/api/user/registry`, userData)
                .then(res => {
                    console.log('res geldi', res)
                    if (res.status === 200) {
                        const link = document.location.pathname = '/'
                        const Cookies = new Cookies
                        Cookies.set('token', `${res.data.token}`, link())
                        console.log('---', Cookies)
                    }

                })
                .catch(err => {
                    console.log(err, 'err')
                    if (err.request.status === 404) {
                        toast.error('password dendal', {
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
        } else if (data.name === '') {
            toast.error('ady doldur', {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (data.surname === '') {
            toast.error('familyany doldur', {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (data.email === '') {
            toast.error('email doldur', {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (data.nick === '') {
            toast.error('ulanyjy adyny doldur', {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (data.password1 === '') {
            toast.error('passwordy doldur', {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (data.password2 === '') {
            toast.error('password  doldur', {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (data.type === '') {
            toast.error('sayla ', {
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
        if (data2.email !== '' && data2.password !== '') {
            axios.post(`${setting.SERVER}/api/user/login`, userData)
                .then(res => {
                    console.log(res, 'res')
                    if (res.status === 200) {
                        const link = document.location.pathname = '/'
                        const Cookies = new Cookies
                        Cookies.set('token', `${res.data.token}`, link())
                        console.log('----', Cookies)
                    }
                }).catch(err => {
                    console.log(err, 'err')
                    if (err.request.status === 404) {
                        console.log('email tapylmady')
                        toast.error('user tapylmady', {

                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    } else if (err.request.status === 400) {
                        console.log('email tapylmady')
                        toast.error('kod yalnysh', {

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
        else if (data2.email === '') {
            toast.error('email doldur ', {

                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (data2.password === '') {
            toast.error('password doldur ', {

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
            <div className='md:hidden block'>
                <ToastContainer
                    position="top-center"
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
            </div>
            <div className='md:block hidden'>
                <ToastContainer
                    position="bottom-left"
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
            </div>
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
                                        <input name='name' value={data.name} onChange={handleChange1} id='signUp_name' type='text' placeholder='Atamyrat' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[100%] w-full focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Familiýa</p>
                                        <input type='text' name='surname' value={data.surname} onChange={handleChange1} id='signUp_surname' placeholder='Atamyradow' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[100%] w-full focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Email</p>
                                        <input type='email' name='email' value={data.email} onChange={handleChange1} id='signUp_email' placeholder='atamyrat@gmail.com' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[100%] w-full focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 '>
                                        <p className='font-bold md:text-[1vw] mb-1'>Ulanyjy ady</p>
                                        <div className='flex md:mb-2 mb-4'>
                                            <p className='border-l border-t border-b p-2 bg-[#868d9ad8] rounded-l-md flex justify-center items-center'>@</p>
                                            <input type='text' name='nick' value={data.nick} onChange={handleChange1} id='signUp_user' placeholder='@atamyradow' className='border-r border-t border-b  rounded-r-md p-2 md:w-[100%] w-full focus:bg-[#E8F8F5]' />
                                        </div>
                                    </div>
                                    <div className='flex md:mb-2 mb-4'>
                                        <input name='password1' value={data.password1} onChange={handleChange1} id='signUp_pass1' type={visibility ? 'text' : 'password'} placeholder='Açar sözi tassykla' className='border-t border-l border-b  rounded-l-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                        <div className='border-r border-b border-t  rounded-r-md flex items-center border-l' onClick={() => { setVisibility(!visibility) }}> {visibility ? <img src='./image/visibility.png' className='  md:p-1 p-2  w-[13vw] h-[13vw]  md:w-[3vw] md:h-[3vw] ' /> : <img src='./image/visible.png' className='md:w-[3vw] w-[13vw] h-[13vw] md:p-1  p-2 md:h-[3vw] ' />}</div>
                                    </div>
                                    <div className='flex md:mb-2 mb-4'>
                                        <input name='password2' value={data.password2} onChange={handleChange1} id='signUp_pass2' type={visibility ? 'text' : 'password'} placeholder='Açar sözi tassykla' className='border-t border-l border-b  rounded-l-md p-2 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                        <div className='border-r border-b border-t  rounded-r-md flex items-center border-l' onClick={() => { setVisibility(!visibility) }}> {visibility ? <img src='./image/visibility.png' className='  md:p-1 p-2  w-[13vw] h-[13vw]  md:w-[3vw] md:h-[3vw] ' /> : <img src='./image/visible.png' className='md:w-[3vw] w-[13vw] h-[13vw] md:p-1  p-2 md:h-[3vw] ' />}</div>
                                    </div>
                                    <div>
                                        <select onChange={(e) => setSelection(e.target.value)} required name='nick' className='md:w-full w-full px-2 py-1 border-slate-300 rounded-md border font-bold mb-2'>
                                            <option >Sayla</option>
                                            <option value='0'>Awtor</option>
                                            <option value='1'>okayjy</option>

                                        </select>
                                    </div>
                                    <div className='flex'>
                                        <input type='checkbox' className='ml-2' />
                                        <p className='md:text-[.8vw] text-[3vw] ml-2'>Düzgünnamany okadym we kabul etdim</p>
                                    </div>
                                    <div className='w-full flex justify-center' >
                                        <button type='submit' onKeyPress={() => Enter()} onClick={() => fetchSignUp()} className='border md:w-[80%] w-full mt-3 p-1 rounded-md md:text-[1.2vw] text-[4.5vw] bg-[#19a056] text-[#fff] font-bold'>Hasap döret</button>
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
                                        <input type='text' name='email' onChange={handleChange} value={data2.email} id='sign_email' placeholder='Atamyrat' className='border md:mb-2 mb-4 rounded-md p-2 md:w-[100%] w-full focus:bg-[#E8F8F5]' />
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-[1vw] text-[4vw] md:mb-1 mb-2 ml-2'>Parol</p>
                                        <div className='flex'>
                                            <input type={visibility ? 'text' : 'password'} name='password' onChange={handleChange} value={data2.password} id='sign_pass' onKeyPress={(e) => { Enter(e) }} placeholder='Açar sözi' className='border-l border-b border-t  rounded-l-md px-2 py-1 md:w-[25vw] w-[80vw] focus:bg-[#E8F8F5]' />
                                            <div className='border-r border-b border-t  rounded-r-md flex items-center border-l' onClick={() => { setVisibility(!visibility) }}> {visibility ? <img src='./image/visibility.png' className='  md:p-1 p-2  w-[13vw] h-[13vw]  md:w-[3vw] md:h-[3vw] ' /> : <img src='./image/visible.png' className='md:w-[3vw] w-[13vw] h-[13vw] md:p-1  p-2 md:h-[3vw] ' />}</div>
                                        </div>
                                    </div>

                                    {/* <div className='flex'>
                                 <input type='checkbox' className='ml-2' />
                                 <p className='md:text-[.8vw] ml-2'>Düzgünnamany okadym we kabul etdim</p>    </div> */}
                                    <div className='w-full flex justify-center' >
                                        <button type='submit' onKeyPress={() => Enter()} onClick={() => fetchLogIn()} className='border md:w-[80%] w-[90%] mt-3 p-1 rounded-md md:text-[1.2vw] text-[4.5vw] bg-[#19a056] text-[#fff] font-bold'>Gir</button>
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
