import React, { useState } from 'react';

const kati = [
    { id: 1, text: 'Poeziya' },
    { id: 2, text: 'Proza' },
    { id: 3, text: 'Terjime' },
    { id: 4, text: 'Sonky gosulanlar' },
    { id: 5, text: 'Nukdar we Nazaryyet' },
    { id: 6, text: 'Makala' },
    { id: 7, text: 'Tazelikler' },
    { id: 8, text: 'Sonky gosulanlar' },
    { id: 9, text: 'Poeziya' },
    { id: 10, text: 'Proza' },
    { id: 11, text: 'Terjime' },
    { id: 12, text: 'Omri we doredijiligi' },
    { id: 13, text: 'Nukdar we Nazaryyet' },
    { id: 14, text: 'Makala' },
    { id: 15, text: 'Tazelikler' },
    { id: 16, text: 'Omri we doredijiligi' }
]





function Category({click}) {
    const [data,setData] = useState([])

const fetchCat = async ()=>{
    
}

    return (
        <div >
            <div>
                <ul className=' md:pl-5 md:pr-5 md:pt-3 md:pb-3  md:columns-4  columns-4 '>
                    {kati.map((kati, i) => (
                        <li key={i} className='md:p-2 py-2  px-3 font-[500] md:text-[1vw] text-[2.5vw] hover:underline hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in'>
                            {kati.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Category;
