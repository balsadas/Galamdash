import React from 'react';
import Adver from './Adver';
import Paper from './Paper';
import Post from './Post';
import Search from './SearchResponse.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RationalWords from './RationalWords';
import PageComment from './PageComment'
import Adver1 from './Adver1';


function PaperMean({ change, setChange }) {
    return (
        <div className='flex justify-center columns-3 '>
            <div className='w-[20%] md:block hidden'>
                <Post />
            </div>

            <div className='md:w-[60%] w-[90%]'>
                <div className='md:hidden block'>
                    <Post />
                </div>
                <Routes>
                    <Route path='/search/:word' element={<div >
                        <Search change={change} setChange={setChange} />
                    </div>} />
                    <Route path='/*' element={<div>
                        <Paper change={change} setChange={setChange} />
                    </div>} />
                </Routes>


                <div className='md:mb-[2rem] md:hidden block'>
                    <Adver1 />
                </div>


                <div className='md:mb-[2rem]'>
                    <RationalWords />
                </div>

                <div className='md:mb-[2rem] mb-[1.5rem]'>
                    <PageComment />
                </div>

                <div>
                    <Adver1 />
                </div>


            </div>



            <div className='w-[20%] justify-center md:flex hidden'>
                <Adver />
            </div>
        </div>
    );
}

export default PaperMean;
