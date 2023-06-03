import React, { useEffect, useState } from 'react';




function CreatePost() {

    return (
        <div className='flex justify-center'>
            <div className='md:w-[80%]'>
                <div>
                    <textarea placeholder='Postyn adyny su yere yazyn' className='md:w-[60%] max-h-[15vw] font-bold'/>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
