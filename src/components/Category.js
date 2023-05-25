import React, { useState } from 'react';



function Category({click,data}) {
    const [data,setData]=useState([])

    const fetchCat = async() =>{
        
    }
    return (
        <div >
            <div>
                <ul className=' md:pl-5 md:pr-5 md:pt-3 md:pb-3  md:columns-4  columns-4 '>
                    {data.map((kati, i) => (
                        <li key={i} className='md:p-2 py-2  px-3 font-[500] md:text-[1vw] text-[2.5vw] hover:underline hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
                            {kati.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Category;
