import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';



function Category({ data, change, setChange }) {

    const CategoryChange = (e) => {
        if (e.target.value == 0) {
            setChange(change+1)
            document.location.pathname='/'
        } else {
            setChange(change + 1)
            sessionStorage.setItem('category', e.target.value)
            setChange(change + 1)
        }

    }
    return (
        <div >
            <div>
                <ul className=' md:pl-5 md:pr-5 md:pt-3 md:pb-3  md:columns-4  columns-4 '>
                    {data && data.map((kati, index) => (
                        <li key={index} onClick={e => CategoryChange(e)} value={kati.id} className='md:p-2 py-2  px-3 font-[500] md:text-[1vw] text-[2.5vw] hover:underline hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
                            {kati.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Category;
