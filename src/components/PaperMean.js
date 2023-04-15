import React from 'react';
import Adver from './Adver';
import Paper from './Paper';

function PaperMean() {
    return (
        <div className='flex justify-center columns-3'>
            <div className='w-[20%]'>
                
            </div>
            <div className='w-[60%]'>
                <Paper />
            </div>
            <div className='w-[20%]'>
                <Adver />
            </div>
        </div>
    );
}

export default PaperMean;
