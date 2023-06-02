
import { forwardRef, useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Page/Home';
import IntoPaper from './Page/IntoPaper';
import { BrowserRouter, HashRouter, Route, Routes, } from 'react-router-dom';
import Profile from './Page/Profile/Profile';
import Register from './components/Register';
import Socket from './components/Socket.js'


const name = 'Myrat'
const surname = 'Balshyev'
const date = '12/04/2023y'
const title = 'Özüňe ynam.'
const img = './photo/photo1.jpg'


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
