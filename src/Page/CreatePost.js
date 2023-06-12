import React, { useEffect, useState } from 'react';
import NavSearch from '../components/NavSearch';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import setting from '../setting.json'
import axios from 'axios';
import Cookies from 'universal-cookie';




function CreatePost() {
    const [path, setPath] = useState(undefined)
    const [category, setCategory] = useState([])
    const cookie = new Cookies()

    const redirect = useNavigate()

    const fileSend = () => {
        const file1 = document.getElementById('default_btn1');
        file1.onchange = () => {
            const file = document.getElementById('default_btn1').files[0];
            const img = document.getElementById('surat')
            const img_txt = document.getElementById('file_name')
            if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                    const result = reader.result;
                    img.src = result;
                    img_txt.innerHTML = file.name
                }
                reader.readAsDataURL(file)
            }

        }
        file1.click()


    }
    const imgCancel = () => {
        const img_txt = document.getElementById('file_name')
        const img = document.getElementById('surat')
        img.src = './image/image.png';
        img_txt.innerHTML = `No file chosen, yet!`
    }


    const send = (e) => {
        e.preventDefault()
        let url = setting.SERVER
        if (path == 'post') {
            url += '/api/post'
        } else if (path == 'draft') {
            url += '/api/draft'
        }
        axios.post(url, new FormData(e.target), {
            headers: {
                Authorization: cookie.get('token')
            }
        }).then((res) => {
            console.log(res)
            redirect('/')
        }).catch((err) => {
            console.log(err)
        })

    }

    const getCatgeory = () => {
        axios.get(`${setting.SERVER}/api/category`).then((res) => {
            setCategory(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getCatgeory()
    }, [])

    return (
        <div>
            <NavSearch />
            <form onSubmit={(e) => { send(e) }}>
                <div className='flex justify-center md:mt-[4rem] mt-[2.5rem]'>
                    <div className='md:flex justify-center mb-[3rem] mt-[4rem] md:w-[70%] shadow-lg w-[90%] bg-[#fff] rounded-lg'>
                        <div className='md:w-[60%] ml-6  '>
                            <div className='md:mt-[3rem] mt-[2rem]'>
                                <input name='title' placeholder='Postyn adyny su yere yazyn' className='md:w-[90%] w-[90%] border text-[4vw] md:text-[1.2vw] rounded-lg  md:px-2 py-3 px-3 md:pt-2 font-bold' />
                            </div>
                            <div className='mt-[2rem]'>
                                <input type='text' name='info' placeholder='Posta degisli  kabir tag-ler gosun' className='w-[90%] text-[4vw] md:text-[1.2vw] py-3 px-3   rounded-lg p-2 pl-4 border ' />
                            </div>
                            <div className='mt-[2rem] mb-[1rem] md:mb-[2rem]'>
                                <textarea className='w-[90%] border rounded-lg p-4 md:min-h-[20vw] min-h-[70vw] ' name='content' placeholder='Post yazyljak yer' />
                            </div>
                            <div>
                                <select name='category'>
                                    {category.map((cat, i) => <option key={i} value={cat.id}> {cat.title}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className='md:block  flex justify-center'>
                            <div className='w-[90%] md:w-[100%]'>
                                <div className=' md:mr-4 border w-[95%] md:w-[90%] md:h-[20vw] md:mt-[3rem] rounded-lg  mb-[3rem]'>
                                    <div onClick={() => { imgCancel() }} className='flex justify-end mr-4  ' id="cancel_btn"><img className='md:w-[2.5vw] md:h-[2.5vw]  object-cover w-[5vw] h-[5vw]  absolute cursor-pointer ' src='./image/close (1).png' /></div>
                                    <img onClick={() => { fileSend() }} id='surat' accept='image/*' className=' md:h-full w-[100%] h-[80%] object-cover rounded-lg' src='./image/image.png' />
                                    <div className='absolute md:w-[21%] w-[75%] rounded-lg  py-[8px] text-center  bg-[#d1d5d4] text-[#fff] px-2' id="file_name">File ady</div>
                                    <input type="file" name='img' id="default_btn1" hidden />

                                </div>
                                <div className='md:mt-[3rem] flex justify-center  '>
                                    <button type='sumbit' className='border  md:w-[70%]  w-[80%]  font-[500] md:text-[1.2vw] p-2 rounded-lg hover:bg-[#ec695d] hover:text-[#fff] cursor-pointer select-none'>Goybolsun</button>
                                </div>
                                <div className='mt-[.5rem] flex justify-center'>
                                    <button onClick={() => { setPath('draft') }} className='border md:w-[70%] w-[80%] font-[700] md:text-[1.2vw] bg-[#d1d5d4] text-[#fff] p-2 rounded-lg hover:bg-[#fff] hover:text-[#d1d5d4] cursor-pointer select-none' type='submit'>Garalama</button>
                                </div>
                                <div className='md:mt-[.5rem] mb-[2rem] mt-3 flex justify-center'>
                                    <button onClick={() => { setPath('post') }} className='border w-[80%] md:w-[70%] font-[700] hover:bg-[#fff] hover:text-[#33c4a9] md:text-[1.2vw] p-2 rounded-lg text-[#fff] bg-[#33c4a9] cursor-pointer select-none' type='submit'>Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <Footer />
        </div>
    );
}

export default CreatePost;
