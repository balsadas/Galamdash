
import { Profiler, Suspense, forwardRef, lazy, useEffect, useRef, useState } from 'react';
import './App.css';
import Loading from './Loading';
import { BrowserRouter, HashRouter, Route, Routes, } from 'react-router-dom';
import Home from './Page/Home';
import IntoPaper from './Page/IntoPaper';
import Profile from './Page/Profile/Profile';
import Register from './components/Register';
import Socket from './components/Socket.js'




function App() {
  return (
    <div className='bg-[#E8F8F5]'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/IntoPaper/:postID' element={<IntoPaper />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/socket' element={<Socket />} />
          <Route path='*' element={<div>404</div>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
