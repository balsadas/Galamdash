import React from 'react';
import Adver from './Adver';
import Paper from './Paper';
import Post from './Post';
import Search from './SearchResponse.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function PaperMean({ change, setChange }) {
    return (
        <div className='flex justify-center columns-3 '>
            <div className='w-[20%] md:block hidden'>
                <Post />
            </div>


            <Routes>
                <Route path='/search/:word' element={<div className='md:w-[60%] w-[90%]'>
                    <Search change={change} setChange={setChange} />
                </div>} />
                <Route path='/*' element={<div className='md:w-[60%] w-[90%]'>
                    <Paper change={change} setChange={setChange} />
                </div>} />
            </Routes>



            <div className='w-[20%] justify-center md:flex hidden'>
                <Adver />
            </div>
        </div>
    );
}

export default PaperMean;
