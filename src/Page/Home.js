import React, { useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import PaperMean from '../components/PaperMean';
import Register from '../components/Register';

function Home() {
const [bg,setBg]= useState(false)
  
  return (
    <div className='relative'>
     <div onClick={() => setBg(!bg)} className={bg ? 'absolute w-full h-full bg-[#d0d0d000] z-[899]' : ''}></div> 
      <Nav bg={bg} setBg={setBg}/>
      <PaperMean />
      <Footer />
    
    </div>
  );
}

export default Home;
