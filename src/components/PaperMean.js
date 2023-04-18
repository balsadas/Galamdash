import React from 'react';
import Adver from './Adver';
import Paper from './Paper';
import Post from './Post';


function PaperMean() {
    return (
        <div className='flex justify-center columns-3'>
            <div className='w-[20%]'>
                <Post/>
            </div>
            <div className='w-[60%] '>
                <Paper />
            </div>
            <div className='w-[20%] flex justify-center'>
                <Adver  />
            </div>
        </div>
    );
}

export default PaperMean;
