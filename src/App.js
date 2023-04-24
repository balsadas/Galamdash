
import { forwardRef, useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Page/Home';
import IntoPaper from './Page/IntoPaper';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';





function App() {




  return (
    <div className='bg-[#E8F8F5]'>
      <BrowserRouter>
        <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='/IntoPaper' element={<IntoPaper/>}/>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
