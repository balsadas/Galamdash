import React from 'react';
import Adver from './Adver';
import Paper from './Paper';
import Post from './Post';


function PaperMean() {
    return (
        <div className='flex justify-center columns-3'>
            <div className='w-[20%] md:block hidden'>
                <Post/>
            </div>
            <div className='md:w-[60%] w-[90%]'>
                <Paper />
            </div>
            <div className='w-[20%] justify-center md:flex hidden'>
                <Adver  />
            </div>
        </div>
    );
}

export default PaperMean;
