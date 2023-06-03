import React  from 'react';
import Cookies from 'universal-cookie';



function Category({  data,    change, setChange }) {

    const CategoryChange = (e) => {
        sessionStorage.setItem('category', e.target.value)
        setChange(change + 1)
    }
    return (
        <div >
            <div>
                <ul className=' md:pl-5 md:pr-5 md:pt-3 md:pb-3 pr-6   md:grid-cols-4 grid  grid-cols-3 text-center '>
                    {data && data.map((kati, index) => (
                        <li key={index} onClick={e => CategoryChange(e)} value={kati.id} className='md:p-2 py-2  px-3 font-[500] md:text-[1vw] text-[2.5vw] hover:underline md:hover:-translate-y-1 md:hover:scale-110 transition-all duration-400 ease-in'>
                            {kati.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Category;
