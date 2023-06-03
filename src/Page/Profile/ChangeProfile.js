import React from 'react';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { cookie_get } from '../../cookie';

function ChangeProfile({ change, setChange }) {

    return (
        <div className='flex justify-center xl:mt-[-4rem] md:mt-[-2rem] lg:mt-[-3rem] '>
            <div className='md:w-[55%] w-[85%] bg-[#fff] shadow-lg rounded-lg z-20 p-8'>
                <div>
                    <div className='flex justify-between items-center  select-none '>
                        <img onClick={() => setChange(!change)} src='./image/arrowl.png' className='md:w-[2vw] w-[6vw] h-[6vw] cursor-pointer md:h-[2vw] ' />
                        <h3 className='md:text-[1.5vw]  text-[#514f4f] text-[5vw] font-bold'>Profili üýtget</h3>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <img src='./photo/photo11.jpg' className='md:w-[10vw] object-cover md:h-[10vw] rounded-full w-[20vw] h-[20vw]' />
                        <input type="file" name=""  id="Surat" accept='image/*'  hidden/>
                    </div>
                    <div className='md:h-[8px] h-[5px] mt-8 rounded-sm w-full bg-slate-300'></div>

                    <div className='md:flex w-full mt-3'>


                        <div className='md:w-[50%]'>
                            <div className='md:mb-3 mb-4'>
                                <p className='mb-1 text-[#514f4f] font-bold ml-2 text-[4vw] md:text-[1.2vw]'>At</p>
                                <input type='text' className='border rounded-md p-2 bg-gray-200 md:w-[90%] w-full' placeholder='Atamyrat' />
                            </div>
                            <div className='md:mb-3 mb-4'>
                                <p className='text-[#514f4f] font-bold ml-2 mb-1 text-[4vw] md:text-[1.2vw]'>Familiýa</p>
                                <input type='text' className='border rounded-md p-2 bg-gray-200 md:w-[90%] w-full' placeholder='Atamyradow' />
                            </div>
                        </div>


                        <div className='md:w-[50%]'>
                            <div className='md:mb-3 mb-4'>
                                <p className='mb-1 text-[#514f4f] font-bold ml-2 text-[4vw] md:text-[1.2vw]'>Ulanyjy ady</p>
                                <input type='text' className='border rounded-md p-2 bg-gray-200 md:w-[90%] w-full' placeholder='@Atamyrat' />
                            </div>
                            <div >
                                <p className='text-[#514f4f] font-bold ml-2 mb-1 text-[4vw] md:text-[1.2vw]'>E-poçta</p>
                                <input type='email' className='border rounded-md p-2 bg-gray-200 md:w-[90%] w-full' placeholder='atamyrat@gmail.com' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <p className='md:text-[1.1vw] font-bold ml-2 mb-1  text-[#514f4f] text-[4vw]'>Men barada</p>
                        <textarea className='w-[100%] border  rounded-md md:min-h-[10vw] min-h-[30vw] p-2 md:text-[1.2vw] text-[3.5vw]' placeholder='TITU talyp. Voleyboll oynamany halayaryn!' />
                    </div>

                    <div className='mt-4'>
                        <button type='submit' className='p-2 border rounded-md mr-4 md:w-[10vw] w-[35vw] font-[500] md:text-[1vw] text-[3vw]  hover:bg-slate-300' >Öňki halyna getir</button>
                        <button type='submit' className='p-2 border rounded-md mr-4 md:w-[10vw] w-[25vw] font-[500] md:text-[1vw] text-[3vw] bg-[green] hover:bg-slate-300'>Sakla</button>
                    </div>
                </div>
            </div>
            {/* <div>
                    <Footer/>
                </div> */}
        </div>
    );
}

export default ChangeProfile;
