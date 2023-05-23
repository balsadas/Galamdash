import React from 'react';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


function ChangeProfile({ change, setChange }) {

    return (
        <div className='flex justify-center xl:mt-[-4rem] md:mt-[-2rem] lg:mt-[-3rem] '>
            <div className='md:w-[55%] w-[90%] bg-[#fff] shadow-lg rounded-lg z-20 p-8'>
                <div>
                    <div className='flex justify-between items-center  select-none '>
                        <img onClick={() => setChange(!change)} src='./image/arrowl.png' className='md:w-[2vw] cursor-pointer md:h-[2vw] w-[5vw] h-[5vw]' />
                        <h3 className='md:text-[1.5vw] text-[5vw]  text-[#514f4f]  font-bold'>Profili üýtget</h3>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <img src='./photo/photo11.jpg' className='md:w-[10vw] md:h-[10vw] w-[20vw] h-[20vw] rounded-full' />
                        <input type="file" name=""  id="Surat"   hidden/>
                    </div>
                    <div className='h-[8px] mt-8 rounded-sm w-full bg-slate-300'></div>

                    <div className='md:flex w-full mt-3'>


                        <div className='md:w-[50%]  '>
                            <div className='mb-3'>
                                <p className='mb-1 md:text-[1.4vw] text-[4vw] text-[#514f4f] font-bold ml-2'>At</p>
                                <input type='text' className='border rounded-md p-2 bg-gray-200 md:w-[90%] w-full' placeholder='Atamyrat' />
                            </div>
                            <div>
                                <p className='text-[#514f4f] font-bold ml-2 mb-1 md:text-[1.4vw] text-[4vw]'>Familiýa</p>
                                <input type='text' className='border rounded-md p-2 bg-gray-200 md:w-[90%] w-full' placeholder='Atamyradow' />
                            </div>
                        </div>


                        <div className='md:w-[50%] mt-3 md:mt-0'>
                            <div className='mb-3'>
                                <p className='mb-1 text-[#514f4f] font-bold ml-2 md:text-[1.4vw] text-[4vw]'>Ulanyjy ady</p>
                                <input type='text' className='border rounded-md p-2 bg-gray-200 w-full md:w-[90%]' placeholder='@Atamyrat' />
                            </div>
                            <div>
                                <p className='text-[#514f4f] font-bold ml-2 mb-1 md:text-[1.4vw] text-[4vw]'>E-poçta</p>
                                <input type='email' className='border rounded-md p-2 bg-gray-200 w-full  md:w-[90%]' placeholder='atamyrat@gmail.com' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <p className='md:text-[1.1vw] text-[4vw] font-bold ml-2 mb-1  text-[#514f4f] '>Men barada</p>
                        <textarea className='w-[100%] border  rounded-md min-h-[30vw] text-[3.8vw]  md:text-[1.2vw] md:min-h-[10vw] p-2' placeholder='TITU talyp. Voleyboll oynamany halayaryn!' />
                    </div>

                    <div className='mt-4'>
                        <button type='submit' className='p-2 border rounded-md mr-4 md:w-[10vw] md:text-[1vw] text-[3.5vw]   hover:bg-slate-300' >Öňki halyna getir</button>
                        <button type='submit' className='md:p-2 px-7 py-2 border rounded-md mr-4 md:w-[10vw] md:text-[1vw] text-[3.5vw] bg-[green] hover:bg-slate-300'>Sakla</button>
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
