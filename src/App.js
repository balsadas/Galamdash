
import { forwardRef, useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Page/Home';
import IntoPaper from './Page/IntoPaper';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Profile from './Page/Profile/Profile';
import Register from './components/Register';
import CreatePost from './Page/CreatePost';


const  name = 'Myrat'
const surname= 'Balshyev'
const date = '12/04/2023y'
const title = 'Özüňe ynam.'
const img = './photo/photo1.jpg'


function App() {




  return (
    <div className='bg-[#E8F8F5]'>
      <BrowserRouter>
        <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='/IntoPaper' element={<IntoPaper name={name} surname={surname} date={date} title={title} img={img}/>}/>
            <Route path='/Profile' element={<Profile />}/>
            <Route path='/Register' element={<Register />}/>
            <Route path='/CreatePost' element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
