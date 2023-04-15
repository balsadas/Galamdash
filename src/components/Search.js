import React from 'react';

function Search() {
  return (
    <div className='p-4 flex w-full justify-center items-center'>
      <input type='search' placeholder='Meselem: Poema' className='border  border-slate-400 px-3 py-2 rounded-l-lg w-[70%]'/>
      <button type='submit' className='border border-slate-400 px-3 py-2 rounded-r-lg font-[500] hover:bg-[#E8F8F5] hover:scale-110 transition-all duration-500 ease-in'>Gözleg</button>
    </div>
  );
}

export default Search;
