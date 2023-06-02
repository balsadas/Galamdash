import React from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ change, setChange }) {
  const redirect = useNavigate()

  const Search = (e) => {
    let word = document.getElementById('SearchPlace')
    setChange(change+1)
    redirect(`/search/${word.value}`)
    setChange(change+1)
  }

  return (
    <div className=' flex w-full justify-center items-center'>
      <input type='search' id='SearchPlace' placeholder='Meselem: Poema' className='border  border-slate-400 px-3 md:py-2 md:text-[1vw] py-1  text-[4vw]  rounded-l-lg md:w-[80%] w-[70%] lg:w-[70%]' />
      <button type='submit' onClick={e => Search(e)} className='border border-slate-400 px-3 md:py-2 py-1 rounded-r-lg font-[500] md:text-[1vw] text-[4vw] hover:bg-[#E8F8F5] md:hover:scale-110 transition-all duration-500 ease-in'>Gözleg</button>
    </div>
  );
}

export default Search;
